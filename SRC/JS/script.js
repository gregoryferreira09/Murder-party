// --- CONSTANTES --- //
const IMAGE_PATH = "/Public/images/";

// --- GESTION DES STATS UTILISATEUR --- //

const getStats = () => {
  const statsJson = localStorage.getItem("stats");
  if (!statsJson) {
    console.log("[getStats] Pas de stats trouvées, retour valeurs par défaut.");
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
    const stats = JSON.parse(statsJson);
    console.log("[getStats] Stats chargées :", stats);
    return stats;
  } catch (e) {
    console.warn("[getStats] JSON invalide, retour valeurs par défaut.", e);
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
  console.log("[saveStats] Sauvegarde stats :", stats);
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
    console.log("[initialiserAccueil] Écouteur ajouté sur bouton créer salon.");
  } else {
    console.warn("[initialiserAccueil] Bouton créer salon non trouvé.");
  }
};

// --- AVATARS --- //

const afficherListeAvatars = (avatars, selectedAvatar, avatarList, onSelect) => {
  avatarList.innerHTML = "";
  avatars.forEach(file => {
    const img = document.createElement("img");
    img.src = `${IMAGE_PATH}${file}`;
    img.alt = `Avatar ${file.split('-')[1].split('.')[0]}`;
    img.className = "avatar-option";
    if (selectedAvatar === file) img.classList.add("selected");
    img.tabIndex = 0;
    img.addEventListener("click", () => {
      avatarList.querySelectorAll(".avatar-option").forEach(a => a.classList.remove("selected"));
      img.classList.add("selected");
      console.log(`[afficherListeAvatars] Avatar sélectionné : ${file}`);
      onSelect(file);
    });
    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        img.click();
      }
    });
    avatarList.appendChild(img);
  });
};

// --- HELPER FORMATTEUR DUREE --- //
const formatDuree = (seconds) => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min} min ${sec}s`;
}

// --- PROFIL UTILISATEUR --- //

const initialiserProfil = () => {
  const avatar = document.getElementById("avatar");
  const modal = document.getElementById("modal");
  const avatarList = document.getElementById("avatar-list");
  const pseudoInput = document.getElementById("pseudo-input");
  const pseudoValiderBtn = document.getElementById("btn-save-pseudo");
  const validerAvatarBtn = document.getElementById("btn-valider-avatar");
  const gradeElem = document.getElementById("grade");
  const statElems = document.querySelectorAll(".statistiques p strong");

  if (!avatar) console.warn("[initialiserProfil] Élément #avatar non trouvé.");
  if (!modal) console.warn("[initialiserProfil] Élément #modal non trouvé.");
  if (!avatarList) console.warn("[initialiserProfil] Élément #avatar-list non trouvé.");
  if (!pseudoInput) console.warn("[initialiserProfil] Élément #pseudo-input non trouvé.");
  if (!pseudoValiderBtn) console.warn("[initialiserProfil] Élément #btn-save-pseudo non trouvé.");
  if (!validerAvatarBtn) console.warn("[initialiserProfil] Élément #btn-valider-avatar non trouvé.");
  if (!gradeElem) console.warn("[initialiserProfil] Élément #grade non trouvé.");

  const avatars = ["avatar-1.png", "avatar-2.png", "avatar-3.png", "avatar-4.png"];
  let selectedAvatar = localStorage.getItem("avatar") || avatars[0];
  if (avatar) avatar.src = `${IMAGE_PATH}${selectedAvatar}`;

  const afficherMessage = (message, type = "info", cibleId = "pseudo-feedback") => {
    const cible = document.getElementById(cibleId);
    if (!cible) {
      console.warn(`[afficherMessage] Élément cible '${cibleId}' non trouvé.`);
      return;
    }
    cible.textContent = message;
    cible.className = `feedback-message ${type}`;
    setTimeout(() => {
      cible.textContent = "";
      cible.className = "";
    }, 5000);
  };

  const ouvrirModal = () => {
    console.log("[ouvrirModal] Ouverture modale avatars.");
    if (!avatarList || !modal) return;
    afficherListeAvatars(avatars, selectedAvatar, avatarList, (file) => {
      selectedAvatar = file;
      if (validerAvatarBtn) validerAvatarBtn.disabled = false;
    });
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    modal.focus();
  };

  const fermerModal = (event) => {
    if (!modal) return;
    if (!event || event.target === modal) {
      console.log("[fermerModal] Fermeture modale avatars.");
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    }
  };

  if (validerAvatarBtn) {
    validerAvatarBtn.disabled = true;
    validerAvatarBtn.addEventListener("click", () => {
      if (avatar) avatar.src = `${IMAGE_PATH}${selectedAvatar}`;
      localStorage.setItem("avatar", selectedAvatar);
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      afficherMessage("Avatar enregistré avec succès.", "succes", "avatar-feedback");
    });
  }

  if (avatar) avatar.addEventListener("click", ouvrirModal);
  if (modal) {
    modal.addEventListener("click", fermerModal);
    modal.addEventListener("keydown", (e) => {
      if (e.key === "Escape") fermerModal();
    });
  }

  if (pseudoInput) {
    const savedPseudo = localStorage.getItem("pseudo");
    if (savedPseudo) pseudoInput.value = savedPseudo;
  }

  if (pseudoInput && pseudoValiderBtn) {
    pseudoValiderBtn.addEventListener("click", () => {
      const pseudo = pseudoInput.value.trim();
      if (!pseudo) {
        afficherMessage("Le pseudo ne peut pas être vide.", "erreur");
        pseudoInput.focus();
        return;
      }
      localStorage.setItem("pseudo", pseudo);
      afficherMessage("Pseudo enregistré !", "succes");
    });
  }

  const stats = getStats();
  if (statElems.length >= 5) {
    statElems[0].textContent = stats.partiesJouees || 0;
    statElems[1].textContent = stats.victoires || 0;
    statElems[2].textContent = stats.enquetreur || 0;
    statElems[3].textContent = stats.criminel || 0;
    statElems[4].textContent = formatDuree(stats.recordDuree || 0);
  }

  if (gradeElem) {
    const grades = [
      { seuil: 20, label: "Légende" },
      { seuil: 10, label: "Champion" },
      { seuil: 5, label: "Aventurier" },
      { seuil: 0, label: "Novice" }
    ];
    let gradeTrouve = "Novice";
    for (const g of grades) {
      if (stats.victoires >= g.seuil && g.seuil >= (grades.find(gr => gr.label === gradeTrouve)?.seuil || 0)) {
        gradeTrouve = g.label;
      }
    }
    gradeElem.textContent = gradeTrouve;
    console.log("[initialiserProfil] Grade calculé :", gradeTrouve);
  }

  const statsSection = document.querySelector(".statistiques");
  if (statsSection) {
    const pourcentage = stats.partiesJouees > 0
      ? Math.round((stats.victoires / stats.partiesJouees) * 100)
      : 0;
    const pPourcentage = document.createElement("p");
    pPourcentage.innerHTML = `Taux de victoire : <strong>${pourcentage}%</strong>`;
    statsSection.appendChild(pPourcentage);
    console.log("[initialiserProfil] Taux de victoire affiché :", pourcentage);

    // --- BADGE EXPERT SI 15 VICTOIRES --- //
    if (stats.victoires >= 15) {
      const badge = document.createElement("p");
      badge.className = "badge-expert";
      badge.innerHTML = `🏅 <strong>Badge Expert</strong> : Décerné pour 15 victoires !`;
      statsSection.appendChild(badge);
      console.log("[initialiserProfil] Badge Expert affiché.");
    }
  }
};
