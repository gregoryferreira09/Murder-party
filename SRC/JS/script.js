// Fonction pour créer un salon
function creerSalon() {
  const nomSalon = prompt("Nom du salon :");
  if (nomSalon) {
    alert("Salon '" + nomSalon + "' créé !");
    // Rediriger vers la salle (plus tard)
    window.location.href = "salle.html?nom=" + encodeURIComponent(nomSalon);
  }
}

// Initialisation de la page d'accueil
function initialiserAccueil() {
  const boutonCreer = document.getElementById("creerSalon");
  if (boutonCreer) {
    boutonCreer.addEventListener("click", creerSalon);
  }
}

// Initialisation du profil
function initialiserProfil() {
  const avatar = document.getElementById("avatar");
  const modal = document.getElementById("modal");
  const avatarList = document.getElementById("avatar-list");
  const pseudoInput = document.getElementById("pseudoInput");
  const pseudoValiderBtn = document.getElementById("validerPseudo");

  const avatars = ["avatar-1.png", "avatar-2.png", "avatar-3.png"];
  let selectedAvatar = localStorage.getItem("avatar") || avatars[0];

  // Affichage de l'avatar sauvegardé
  if (avatar) avatar.src = "images/" + selectedAvatar;

  // Ouverture de la modale d’avatars
  window.ouvrirModal = function () {
    avatarList.innerHTML = "";
    avatars.forEach(file => {
      const img = document.createElement("img");
      img.src = "images/" + file;
      img.alt = "Avatar";
      img.className = "avatar-option";
      if (selectedAvatar.includes(file)) img.classList.add("selected");
      img.onclick = () => {
        document.querySelectorAll(".avatar-option").forEach(a => a.classList.remove("selected"));
        img.classList.add("selected");
        selectedAvatar = file;
      };
      avatarList.appendChild(img);
    });
    modal.style.display = "flex";
  };

  // Fermeture modale
  window.fermerModal = function (event) {
    if (!event || event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Validation de l’avatar sélectionné
  const validerAvatarBtn = document.getElementById("validerAvatar");
  if (validerAvatarBtn) {
    validerAvatarBtn.addEventListener("click", () => {
      if (avatar) avatar.src = "images/" + selectedAvatar;
      localStorage.setItem("avatar", selectedAvatar);
      modal.style.display = "none";
    });
  }

  // Sauvegarde du pseudo
  if (pseudoInput && pseudoValiderBtn) {
    // Remplir le champ si déjà sauvegardé
    const savedPseudo = localStorage.getItem("pseudo");
    if (savedPseudo) pseudoInput.value = savedPseudo;

    pseudoValiderBtn.addEventListener("click", () => {
      const pseudo = pseudoInput.value.trim();
      if (pseudo.length > 0) {
        localStorage.setItem("pseudo", pseudo);
        alert("Pseudo enregistré !");
      }
    });
  }

  // Mise à jour dynamique du grade
  const victoires = 7;
  const grade = document.getElementById("grade");
  if (grade) {
    if (victoires <= 5) grade.textContent = "Novice";
    else if (victoires <= 10) grade.textContent = "Aventurier";
    else if (victoires <= 20) grade.textContent = "Champion";
    else grade.textContent = "Légende";
  }
}

// Appel global à DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  initialiserAccueil();
  initialiserProfil();
});
