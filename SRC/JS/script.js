// --- CONSTANTES --- //
const IMAGE_PATH = 
  window.location.hostname === "localhost" ? "../../Public/images/" : "/Public/images/";

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

// --- PROFIL UTILISATEUR --- //

const initialiserProfil = () => {
  const avatarImg = document.getElementById("avatar");
  const modal = document.getElementById("modal");
  const avatarList = document.getElementById("avatar-list");
  const pseudoInput = document.getElementById("pseudo-input");
  const pseudoValiderBtn = document.getElementById("btn-save-pseudo");
  const validerAvatarBtn = document.getElementById("btn-valider-avatar");
  const gradeElem = document.getElementById("grade");
  const statElems = document.querySelectorAll(".statistiques p strong");
  const avatarFeedback = document.getElementById("avatar-feedback");

  // Liste des avatars disponibles
  const avatars = ["avatar-1.png", "avatar-2.png", "avatar-3.png", "avatar-4.png"];
  let selectedAvatar = localStorage.getItem("avatar") || avatars[0];
  avatarImg.src = `${IMAGE_PATH}${selectedAvatar}`;

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

  const afficherListeAvatars = (avatars, selected, container, onSelect) => {
    container.innerHTML = "";
    avatars.forEach(file => {
      const img = document.createElement("img");
      img.src = `${IMAGE_PATH}${file}`;
      img.alt = `Avatar ${file.split('-')[1].split('.')[0]}`;
      img.className = "avatar-option";
      if (selected === file) img.classList.add("selected");
      img.tabIndex = 0;
      img.addEventListener("click", () => {
        container.querySelectorAll(".avatar-option").forEach(a => a.classList.remove("selected"));
        img.classList.add("selected");
        selectedAvatar = file;
        validerAvatarBtn.disabled = false;
        avatarFeedback.textContent = "";
      });
      img.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          img.click();
        }
      });
      container.appendChild(img);
    });
  };

  const ouvrirModal = () => {
    afficherListeAvatars(avatars, selectedAvatar, avatarList, (file) => {
      selectedAvatar = file;
      validerAvatarBtn.disabled = false;
      avatarFeedback.textContent = "";
    });
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    modal.focus();
  };

  const fermerModal = (event) => {
    if (!event || event.target === modal) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      validerAvatarBtn.disabled = true;
      avatarFeedback.textContent = "";
      selectedAvatar = localStorage.getItem("avatar") || avatars[0];
    }
  };

  // Ouverture modal au clic sur avatar
  avatarImg.addEventListener("click", ouvrirModal);

  // Fermeture modal au clic sur fond
  modal.addEventListener("click", fermerModal);

  // Fermeture modal au clavier (Escape)
  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fermerModal();
  });

  // Validation avatar
  validerAvatarBtn.disabled = true;
  validerAvatarBtn.addEventListener("click", () => {
    if (!selectedAvatar) {
      avatarFeedback.textContent = "Veuillez sélectionner un avatar.";
      return;
    }
    avatarImg.src = `${IMAGE_PATH}${selectedAvatar}`;
    localStorage.setItem("avatar", selectedAvatar);
    fermerModal();
    afficherMessage("Avatar enregistré avec succès.", "succes", "avatar-feedback");
  });

  // Initialisation pseudo
  const savedPseudo = localStorage.getItem("pseudo");
  if (savedPseudo) pseudoInput.value = savedPseudo;

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

  // Affichage statistiques
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
  }

  const statsSection = document.querySelector(".statistiques");
  if (statsSection) {
    const pourcentage = stats.partiesJouees > 0
      ? Math.round((stats.victoires / stats.partiesJouees) * 100)
      : 0;
    const pPourcentage = document.createElement("p");
    pPourcentage.innerHTML = `Taux de victoire : <strong>${pourcentage}%</strong>`;
    statsSection.appendChild(pPourcentage);

    if (stats.victoires >= 15) {
      const badge = document.createElement("p");
      badge.className = "badge-expert";
      badge.innerHTML = `🏅 <strong>Badge Expert</strong> : Décerné pour 15 victoires !`;
      statsSection.appendChild(badge);
    }
  }

  // <-- Ajoute ceci pour exposer les fonctions globalement
  window.ouvrirModal = ouvrirModal;
  window.fermerModal = fermerModal;
};

window.addEventListener('DOMContentLoaded', initialiserProfil);

// --- HELPER FORMATTEUR DUREE --- //
function formatDuree(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min} min ${sec}s`;
}

function genererScenario() {
  window.location.href = "./lancement-partie.html";
}
