// Fonction pour créer un salon (démo)
function creerSalon() {
  const nomSalon = prompt("Nom du salon :");
  if (nomSalon) {
    alert("Salon '" + nomSalon + "' créé !");
    // Rediriger vers la salle (plus tard)
    window.location.href = "salle.html?nom=" + encodeURIComponent(nomSalon);
  }
}

// Fonction d'initialisation de la page d'accueil
function initialiserAccueil() {
  const boutonCreer = document.getElementById("creerSalon");
  if (boutonCreer) {
    boutonCreer.addEventListener("click", creerSalon);
  }
}

// À appeler sur chaque page
document.addEventListener("DOMContentLoaded", function () {
  initialiserAccueil();
});
