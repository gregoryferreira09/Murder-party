// --- GESTION DES STATS UTILISATEUR --- //

const getStats = () => {
  const statsJson = localStorage.getItem("stats");
  if (!statsJson) {
    return { victoires: 0, defaites: 0, partiesJouees: 0 };
  }
  try {
    return JSON.parse(statsJson);
  } catch {
    return { victoires: 0, defaites: 0, partiesJouees: 0 };
  }
};

const saveStats = (stats) => {
  localStorage.setItem("stats", JSON.stringify(stats));
};

const ajouterVictoire = () => {
  const stats = getStats();
  stats.victoires++;
  stats.partiesJouees++;
  saveStats(stats);
};

const ajouterDefaite = () => {
  const stats = getStats();
  stats.defaites++;
  stats.partiesJouees++;
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
    img.src = `images/${file}`;
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
  const pseudoInput = document.getElementById("pseudoInput");
  const pseudoValiderBtn = document.getElementById("validerPseudo");
  const validerAvatarBtn = document.getElementById("validerAvatar");

  const grade = document.getElementById("grade");
  const victoiresElem = document.getElementById("victoires");
  const defaitesElem = document.getElementById("defaites");
  const partiesElem = document.getElementById("partiesJouees");

  const avatars = ["avatar-1.png", "avatar-2.png", "avatar-3.png"];
  let selectedAvatar = localStorage.getItem("avatar") || avatars[0];

  // Affichage avatar sauvegardé
  if (avatar) avatar.src = `images/${selectedAvatar}`;

  // Ouvrir modale avatars
  const ouvrirModal = () => {
    if (!avatarList || !modal) return;
    afficherListeAvatars(avatars, selectedAvatar, avatarList, (file) => {
      selectedAvatar = file;
    });
    modal.style.display = "flex";
  };

  // Fermer modale avatars
  const fermerModal = (event) => {
    if (!event || event.target === modal) {
      modal.style.display = "none";
    }
  };

  if (validerAvatarBtn) {
    validerAvatarBtn.addEventListener("click", () => {
      if (avatar) avatar.src = `images/${selectedAvatar}`;
      localStorage.setItem("avatar", selectedAvatar);
      if (modal) modal.style.display = "none";
    });
  }

  if (avatar) {
    avatar.addEventListener("click", ouvrirModal);
  }

  if (modal) {
    modal.addEventListener("click", fermerModal);
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
  if (victoiresElem) victoiresElem.textContent = stats.victoires;
  if (defaitesElem) defaitesElem.textContent = stats.defaites;
  if (partiesElem) partiesElem.textContent = stats.partiesJouees;

  // Grade selon victoires
  if (grade) {
    const grades = [
      { seuil: 20, label: "Légende" },
      { seuil: 10, label: "Champion" },
      { seuil: 5, label: "Aventurier" },
      { seuil: 0, label: "Novice" }
    ];
    const gradeTrouve = grades.find(g => stats.victoires > g.seuil) || grades[grades.length -1];
    grade.textContent = gradeTrouve.label;
  }
};

// --- INIT GLOBALE --- //

document.addEventListener("DOMContentLoaded", () => {
  initialiserAccueil();
  initialiserProfil();
});
