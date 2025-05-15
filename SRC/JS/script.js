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
    img.tabIndex = 0; // rendre clavier accessible
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

  if (avatar) {
    avatar.src = `${IMAGE_PATH}${selectedAvatar}`;
  }

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

  // Ouvrir modale avatars
  const ouvrirModal = () => {
    console.log("[ouvrirModal] Ouverture modale avatars.");
    if (!avatarList || !modal) {
      console.warn("[ouvrirModal] avatarList ou modal non trouvé.");
      return;
    }
    afficherListeAvatars(avatars, selectedAvatar, avatarList, (file) => {
      selectedAvatar = file;
      if (validerAvatarBtn) {
        validerAvatarBtn.disabled = false;
        console.log("[ouvrirModal] Bouton valider avatar activé.");
      }
    });
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    modal.focus();
  };

  // Fermer modale avatars
  const fermerModal = (event) => {
    if (!modal) {
      console.warn("[fermerModal] Élément modal non trouvé.");
      return;
    }
    if (!event || event.target === modal) {
      console.log("[fermerModal] Fermeture modale avatars.");
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    } else {
      console.log("[fermerModal] Click ignoré, cible :", event.target);
    }
  };

  if (validerAvatarBtn) {
    validerAvatarBtn.disabled = true;
    validerAvatarBtn.addEventListener("click", () => {
      if (avatar) avatar.src = `${IMAGE_PATH}${selectedAvatar}`;
      localStorage.setItem("avatar", selectedAvatar);
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      console.log("[validerAvatarBtn] Avatar validé :", selectedAvatar);
      afficherMessage("Avatar enregistré avec succès.", "succes", "avatar-feedback");
    });
  }

  if (avatar) {
    avatar.addEventListener("click", ouvrirModal);
  }

  if (modal) {
    modal.addEventListener("click", fermerModal);
    modal.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        console.log("[modal] Touche Escape détectée, fermeture modale.");
        fermerModal();
      }
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
        afficherMessage("Le pseudo ne peut pas être vide.", "erreur");
        pseudoInput.focus();
        return;
      }
      localStorage.setItem("pseudo", pseudo);
      console.log("[pseudoValiderBtn] Pseudo enregistré :", pseudo);
      afficherMessage("Pseudo enregistré !", "succes");
    });
  }

  // Chargement des stats dynamiques
  const stats = getStats();

  if (statElems.length >= 5) {
    statElems[0].textContent = stats.partiesJouees || 0;
    statElems[1].textContent = stats.victoires || 0;
    statElems[2].textContent = stats.enquetreur || 0;
    statElems[3].textContent = stats.criminel || 0;
    statElems[4].textContent = formatDuree(stats.recordDuree || 0);
  }

  // Calcul du grade selon victoires (choisir le plus haut seuil atteint)
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

  // --- AJOUT : Affichage du pourcentage de victoires ---
  const statsSection = document.querySelector(".statistiques");
  if (statsSection) {
    const pourcentage = stats.partiesJouees > 0
      ? Math.round((stats.victoires / stats.partiesJouees) * 100)
      : 0;
    const pPourcentage = document.createElement("p");
    pPourcentage.innerHTML = `Taux de victoire : <strong>${pourcentage}%</strong>`;
    statsSection.appendChild(pPourcentage);
    console.log("[initialiserProfil] Taux de victoire affiché :", pourcentage);
  }

  // --- AJOUT : Badge Expert si 15 victoires ou plus ---
  const badgesUl = document.querySelector(".badges-section ul");
  if (badgesUl && stats.victoires >= 15) {
    const newBadge = document.createElement("li");
    const img = document.createElement("img");
    img.src = "/Public/images/badges/expert.png";
    img.alt = "Badge Expert";
    newBadge.appendChild(img);
    badgesUl.appendChild(newBadge);
    console.log("[initialiserProfil] Badge Expert ajouté.");
  }

  // --- AJOUT : Boutons réinitialisation ---
  // Crée les boutons et insère-les dans la section statistiques
  if (statsSection) {
    const resetStatsBtn = document.createElement("button");
    resetStatsBtn.id = "reset-stats-btn";
    resetStatsBtn.textContent = "Réinitialiser les statistiques";
    resetStatsBtn.style.marginRight = "10px";

    const resetProfilBtn = document.createElement("button");
    resetProfilBtn.id = "reset-profil-btn";
    resetProfilBtn.textContent = "Réinitialiser tout le profil";

    statsSection.appendChild(resetStatsBtn);
    statsSection.appendChild(resetProfilBtn);

    // Gestion événements
    resetStatsBtn.addEventListener("click", () => {
      if (confirm("Êtes-vous sûr de vouloir réinitialiser les statistiques ?")) {
        localStorage.removeItem("stats");
        console.log("[resetStatsBtn] Statistiques réinitialisées.");
        location.reload();
      }
    });

    resetProfilBtn.addEventListener("click", () => {
      if (confirm("Cette action réinitialisera le pseudo, l’avatar et les statistiques. Continuer ?")) {
        localStorage.removeItem("stats");
        localStorage.removeItem("pseudo");
        localStorage.removeItem("avatar");
        console.log("[resetProfilBtn] Profil complet réinitialisé.");
        location.reload();
      }
    });
  }
};

// --- INIT GLOBALE --- //

document.addEventListener("DOMContentLoaded", () => {
  console.log("[DOMContentLoaded] Initialisation de la page.");
  initialiserAccueil();
  initialiserProfil();
});
