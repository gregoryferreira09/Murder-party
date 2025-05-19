document.getElementById("genererBtn").addEventListener("click", function(e) {
  e.preventDefault();

  // Récupération des valeurs du formulaire
  const mode = document.getElementById("mode").value;
  const duree = parseInt(document.getElementById("duree").value, 10);
  const periode = document.getElementById("periode").value;
  const periodeAutre = (periode === "autre") ? document.getElementById("periode_autre").value : "";
  const nombreJoueurs = parseInt(document.getElementById("nombreJoueurs").value, 10);
  const criminels = parseInt(document.getElementById("criminels").value, 10);
  const criminelFantome = document.getElementById("criminel_fantome").checked;
  const avatarsLegendaires = document.getElementById("avatars_legendaires").checked;

  // Stockage dans le localStorage
  const parametresPartie = {
    mode,
    duree,
    periode,
    periodeAutre,
    nombreJoueurs,
    criminels,
    criminelFantome,
    avatarsLegendaires
  };
  localStorage.setItem("parametresPartie", JSON.stringify(parametresPartie));

  window.location.href = "salon.html";
});
