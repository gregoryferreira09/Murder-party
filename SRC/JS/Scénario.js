// Public/scripts/scenario.js

document.addEventListener("DOMContentLoaded", () => {
  const scenarioData = JSON.parse(localStorage.getItem("parametresPartie"));

  const container = document.getElementById("scenarioContainer");

  if (scenarioData) {
    const periode = scenarioData.periode === "autre" && scenarioData.periodeAutre ? scenarioData.periodeAutre : scenarioData.periode;

    container.innerHTML = `
      <h2>Introduction</h2> 
      <p>${scenarioData.introduction || "Bienvenue dans votre Murder Party !"}</p> 

      <h2>Le crime</h2> 
      <p>${scenarioData.crime || "Un crime mystérieux s’est produit..."}</p> 

      <h2>Objectif général</h2> 
      <p>${scenarioData.objectif || "Résoudre le mystère avant la fin du temps imparti."}</p> 

      <h2>Détails du jeu</h2> 
      <p>Mode de jeu : ${scenarioData.mode}</p> 
      <p>Durée de la partie : ${scenarioData.duree} minutes</p> 
      <p>Période : ${periode}</p> 
      <p>Nombre de joueurs : ${scenarioData.nombreJoueurs}</p> 
      <p>Nombre de criminels : ${scenarioData.criminels}</p> 
      <p>Mode criminels fantômes : ${scenarioData.criminelFantome ? "Oui" : "Non"}</p> 
      <p>Avatars légendaires activés : ${scenarioData.avatarsLegendaires ? "Oui" : "Non"}</p>

      <div class="boutons-actions">
        <a class="gold-btn" href="salon.html">Lancement</a> 
        <a class="gold-btn" href="creer-partie.html">Retour</a> 
      </div>
    `;
  } else {
    container.innerHTML = "Aucune donnée de scénario trouvée.";
  }
});
