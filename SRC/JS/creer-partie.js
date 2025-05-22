document.getElementById("periode").addEventListener("change", function () {
  document.getElementById("autrePeriode").style.display = (this.value === "autre") ? "block" : "none";
});

function getUniquePseudo(monPseudo, pseudosExistants) {
  let uniquePseudo = monPseudo;
  let suffix = 0;
  while (pseudosExistants.includes(uniquePseudo)) {
    suffix++;
    uniquePseudo = monPseudo + suffix;
  }
  return uniquePseudo;
}

document.getElementById("genererBtn").addEventListener("click", function(e) {
  e.preventDefault();

  // Récupération des valeurs du formulaire
  const mode = document.getElementById("mode").value;
  const duree = document.getElementById("duree").value;
  const periode = document.getElementById("periode").value.trim().toLowerCase();
  const periodeAutre = (periode === "autre") ? document.getElementById("periode_autre").value : "";
  const nombreJoueurs = document.getElementById("nombreJoueurs").value;
  const criminels = document.getElementById("criminels").value;
  const criminelFantome = document.getElementById("criminel_fantome").checked;
  const avatarsLegendaires = document.getElementById("avatars_legendaires").checked;
  const inactifs = document.getElementById("inactifs").checked;

  // Stockage dans le localStorage
  const parametresPartie = {
    mode,
    duree,
    periode,
    periodeAutre,
    nombreJoueurs,
    criminels,
    criminelFantome,
    avatarsLegendaires,
    inactifs
  };
  localStorage.setItem("parametresPartie", JSON.stringify(parametresPartie));

  // --- Créateur ajouté à la partie avec pseudo unique ---
  let pseudosExistants = []; // Pour l’instant vide en création de partie
  let monPseudo = localStorage.getItem("pseudo") || "Anonyme";
  let pseudoFinal = getUniquePseudo(monPseudo, pseudosExistants);
  localStorage.setItem("joueurPseudo_createur", pseudoFinal);

  // Redirection vers la page salon
  window.location.href = "salon.html";
});
