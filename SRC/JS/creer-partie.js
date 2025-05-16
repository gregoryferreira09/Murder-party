// Redirige vers la page de lancement de partie
function genererScenario() {
  window.location.href = "Lancement-partie.html";
}

// Affiche ou masque le champ "autre période"
document.getElementById("periode").addEventListener("change", function () {
  document.getElementById("autrePeriode").style.display = (this.value === "autre") ? "block" : "none";
});
