// Fonction pour créer un salon
const creerSalon = () => {
  const nomSalon = prompt("Nom du salon :");
  if (nomSalon && nomSalon.trim().length > 0) {
    const nomTrim = nomSalon.trim();
    alert(`Salon '${nomTrim}' créé !`);
    window.location.href = `salle.html?nom=${encodeURIComponent(nomTrim)}`;
  }
};

// Initialisation de la page d'accueil
const initialiserAccueil = () => {
  const boutonCreer = document.getElementById("creerSalon");
  if (boutonCreer) {
    boutonCreer.addEventListener("click", creerSalon);
  }
};

// Création de la liste d'avatars dans la modale
const afficherListeAvatars = (avatars, selectedAvatar, avatarList, onSelect) => {
  avatarList.innerHTML = "";
  avatars.forEach(file => {
    const img = document.createElement("img");
    img.src = `images/${file}`;
    img.alt = `Avatar ${file.split('-')[1].split('.')[0]}`; // Description plus précise
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

// Initialisation du profil utilisateur
const initialiserProfil = () => {
  const avatar = document.getElementById("avatar");
  const modal = document.getElementById("modal");
  const avatarList = document.getElementById("avatar-list");
  const pseudoInput = document.getElementById("pseudoInput");
  const pseudoValiderBtn = document.getElementById("validerPseudo");
  const validerAvatarBtn = document.getElementById("validerAvatar");
  const grade = document.getElementById("grade");

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

  // Fermer modale avatars au clic en dehors du contenu
  const fermerModal = (event) => {
    if (!event || event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Valider avatar sélectionné
  if (validerAvatarBtn) {
    validerAvatarBtn.addEventListener("click", () => {
      if (avatar) avatar.src = `images/${selectedAvatar}`;
      localStorage.setItem("avatar", selectedAvatar);
      if (modal) modal.style.display = "none";
    });
  }

  // Lier ouverture modale à clic avatar (si avatar existe)
  if (avatar) {
    avatar.addEventListener("click", ouvrirModal);
  }

  // Fermer modale au clic sur fond
  if (modal) {
    modal.addEventListener("click", fermerModal);
  }

  // Chargement pseudo sauvegardé
  if (pseudoInput) {
    const savedPseudo = localStorage.getItem("pseudo");
    if (savedPseudo) pseudoInput.value = savedPseudo;
  }

  // Valider pseudo avec contrôle simple
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

  // Mise à jour dynamique du grade selon victoires
  const victoires = 7; // À remplacer par une vraie valeur dynamique
  if (grade) {
    const grades = [
      { seuil: 20, label: "Légende" },
      { seuil: 10, label: "Champion" },
      { seuil: 5, label: "Aventurier" },
      { seuil: 0, label: "Novice" }
    ];

    const gradeTrouve = grades.find(g => victoires > g.seuil) || grades[grades.length -1];
    grade.textContent = gradeTrouve.label;
  }
};

// Initialisation globale
document.addEventListener("DOMContentLoaded", () => {
  initialiserAccueil();
  initialiserProfil();
});
