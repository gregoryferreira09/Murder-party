// --- GESTION DES STATS UTILISATEUR --- //

const getStats = () => {
  const statsJson = localStorage.getItem("stats");
  if (!statsJson) {
    return {
      victoires: 0,
      defaites: 0,
      partiesJouees: 0,
      enquetreur: 0,
      criminel: 0,
      recordDuree: 0 // en secondes
    };
  }
  try {
    return JSON.parse(statsJson);
  } catch {
    return {
      victoires: 0,
      defaites: 0,
      partiesJouees: 0,
      enquetreur: 0,
      criminel: 0,
      recordDuree: 0
    };
  }
};

const saveStats = (stats) => {
  localStorage.setItem("stats", JSON.stringify(stats));
};

const ajouterVictoire = (role, dureeSec = 0) => {
  const stats = getStats();
  stats.victoires++;
  stats.partiesJouees++;
  if (role === "enqueteur") stats.enquetreur++;
  else if (role === "criminel") stats.criminel++;
  if (dureeSec > stats.recordDuree) stats.recordDuree = dureeSec;
  saveStats(stats);
};

const ajouterDefaite = (role, dureeSec = 0) => {
  const stats = getStats();
  stats.defaites++;
  stats.partiesJouees++;
  if (role === "enqueteur") stats.enquetreur++;
  else if (role === "criminel") stats.criminel++;
  if (dureeSec > stats.recordDuree) stats.recordDuree = dureeSec;
  saveStats(stats);
};

// --- CRÉATION DE SALON --- //

const creerSalon = () => {
  const nomSalon = prompt("Nom du salon :");
  if (nomSalon && nomSalon.trim().length > 0) {
    const nomTrim = nomSalon.trim();
    alert(`Salon '${nomTrim}' créé !`);
    window.location.href = `salle.html?nom=${encodeURIComponent(nomTrim)}`;
  }
};

const initialiserAccueil = () => {
  const boutonCreer = document.getElementById("creerSalon");
  if (boutonCreer) {
    boutonCreer.addEventListener("click", creerSalon);
  }
};

// --- AVATARS --- //

const afficherListeAvatars = (avatars, selectedAvatar, avatarList, onSelect) => {
  avatarList.innerHTML = "";
  avatars.forEach(file => {
    const img = document.createElement("img");
    img.src = `/Public/images/${file}`;
    img.alt = `Avatar ${file.split('-')[1].split('.')[0]}`;
    img.className = "avatar-option";
    if (selectedAvatar === file) img.classList.add("selected");
    img.addEventListener("click", () => {
      avatarList.querySelectorAll(".avatar-option").forEach(a => a.classList.remove("selected"));
      img.classList.add("selected");
      onSelect(file);
    });
    avatarList.appendChild(img);
  });
};

// --- PROFIL UTILISATEUR --- //

const initialiserProfil = () => {
  const avatar = document.getElementById("avatar");
  const modal = document.getElementById("modal");
  const avatarList = document.getElementById("avatar-list");
  const pseudoInput = document.getElementById("pseudo-input"); // correction id ici
  const pseudoValiderBtn = document.getElementById("btn-save-pseudo"); // correction id ici
  const validerAvatarBtn = document.getElementById("btn-valider-avatar");

  const gradeElem = document.getElementById("grade");

  // Elements stats
  // Met à jour les <strong> dans la section statistiques dans l’ordre :
  // Parties jouées, Parties gagnées, Enquêteur, Criminel, Record durée
  const statElems = document.querySelectorAll(".statistiques p strong");

  const avatars = ["avatar-1.png", "avatar-2.png", "avatar-3.png", "avatar-4.png"];
  let selectedAvatar = localStorage.getItem("avatar") || avatars[0];

  if (avatar) avatar.src = `/Public/images/${selectedAvatar}`;

  // Ouvrir modale avatars
  const ouvrirModal = () => {
    if (!avatarList || !modal) return;
    afficherListeAvatars(avatars, selectedAvatar, avatarList, (file) => {
      selectedAvatar = file;
      validerAvatarBtn.disabled = false;
    });
    modal.style.display = "flex";
    modal.focus();
  };

  // Fermer modale avatars
  const fermerModal = (event) => {
    if (!event || event.target === modal) {
      modal.style.display = "none";
    }
  };

  if (validerAvatarBtn) {
    validerAvatarBtn.disabled = true;
    validerAvatarBtn.addEventListener("click", () => {
      if (avatar) avatar.src = `/Public/images/${selectedAvatar}`;
      localStorage.setItem("avatar", selectedAvatar);
      modal.style.display = "none";
    });
  }

  if (avatar) {
    avatar.addEventListener("click", ouvrirModal);
  }

  if (modal) {
    modal.addEventListener("click", fermerModal);
    modal.addEventListener("keydown", (e) => {
      if (e.key === "Escape") fermerModal();
    });
  }

  // Chargement pseudo
  if (pseudoInput) {
    const savedPseudo = localStorage.getItem("pseudo");
    if (savedPseudo) pseudoInput.value = savedPseudo;
  }

  if (pseudoInput && pseudoValiderBtn) {
    pseudoValiderBtn.addEventListener("click", () => {
      const pseudo = pseudoInput.value.trim();
      if (!pseudo) {
        alert("Le pseudo ne peut pas être vide.");
        return;
      }
      localStorage.setItem("pseudo", pseudo);
      alert("Pseudo enregistré !");
    });
  }

  // Chargement des stats dynamiques
  const stats = getStats();

  // Update DOM stats dans l’ordre
  if (statElems.length >= 5) {
    statElems[0].textContent = stats.partiesJouees;
    statElems[1].textContent = stats.victoires;
    statElems[2].textContent = stats.enquetreur;
    statElems[3].textContent = stats.criminel;
    // Convertir record durée en min sec
    const min = Math.floor(stats.recordDuree / 60);
    const sec = stats.recordDuree % 60;
    statElems[4].textContent = `${min} min ${sec}s`;
  }

  // Calcul du grade selon victoires
  if (gradeElem) {
    const grades = [
      { seuil: 20, label: "Légende" },
      { seuil: 10, label: "Champion" },
      { seuil: 5, label: "Aventurier" },
      { seuil: 0, label: "Novice" }
    ];
    // Trouver le grade avec le seuil <= victoires
    let gradeTrouve = "Novice";
    for (const g of grades) {
      if (stats.victoires >= g.seuil) {
        gradeTrouve = g.label;
        break;
      }
    }
    gradeElem.textContent = gradeTrouve;
  }
};

// --- INIT GLOBALE --- //

document.addEventListener("DOMContentLoaded", () => {
  initialiserAccueil();
  initialiserProfil();
});
