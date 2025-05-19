// SRC/JS/Scénario.js
import { scenarioLibrary } from './scenarioData.js';

// Utilitaire pour choisir un élément au hasard
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Classement des durées
function categoriseDuree(minutes) {
  if (minutes <= 30) return "court";
  if (minutes <= 90) return "moyen";
  return "long";
}

// Injecte toutes les variables du context dans le texte ({{lieu}}, {{arme}}, {{suspect}})
function injectVariables(str, context) {
  return str.replace(/{{(\w+)}}/g, (_, key) => context[key] || '');
}

function genererScenario() {
  const scenarioData = JSON.parse(localStorage.getItem("parametresPartie"));
  const container = document.getElementById("scenarioContainer");

  if (scenarioData) {
    // Gestion de la période
    let periodeKey = scenarioData.periode;
    if (periodeKey === "autre" && scenarioData.periodeAutre) {
      // Tentative de correspondance
      const custom = scenarioData.periodeAutre.toLowerCase();
      periodeKey = Object.keys(scenarioLibrary.periodes).includes(custom) ? custom : "autre";
    }
    if (!scenarioLibrary.periodes[periodeKey]) periodeKey = "victorien";

    const periodeObj = scenarioLibrary.periodes[periodeKey];
    const lieu = randomItem(periodeObj.lieux);
    const arme = randomItem(periodeObj.armes);
    const suspect = randomItem(periodeObj.suspects);

    // Introduction et crime selon le mode
    const introductionTemplate = randomItem(periodeObj.introductions);
    const introduction = injectVariables(introductionTemplate, { lieu, arme, suspect });

    // Crime cohérent selon le mode
    const crimeTemplates = periodeObj.crimes[scenarioData.mode] || periodeObj.crimes["classique"];
    const crime = injectVariables(randomItem(crimeTemplates), { lieu, arme, suspect });

    // Objectif selon le nombre de criminels
    const objectifList = scenarioLibrary.objectifs[scenarioData.criminels] || scenarioLibrary.objectifs[1];
    const objectif = randomItem(objectifList);

    // Durée
    const dureeCat = categoriseDuree(scenarioData.duree);
    const detailsDuree = randomItem(scenarioLibrary.durees[dureeCat]);

    // Affichage HTML
    container.innerHTML = `
      <h2>Introduction</h2>
      <p>${introduction}</p> 

      <h2>Le crime</h2>
      <p>${crime}</p> 

      <h2>Suspect principal</h2>
      <p>${suspect}</p>

      <h2>Arme du crime</h2>
      <p>${arme}</p>

      <h2>Objectif général</h2>
      <p>${objectif}</p> 

      <h2>Détails du jeu</h2>
      <p>Mode de jeu : ${scenarioData.mode.charAt(0).toUpperCase() + scenarioData.mode.slice(1)}</p> 
      <p>Durée de la partie : ${scenarioData.duree} minutes — ${detailsDuree}</p> 
      <p>Période : ${periodeObj.nomAffiche}</p>
      <p>Lieu principal : ${lieu}</p>
      <p>Nombre de joueurs : ${scenarioData.nombreJoueurs}</p> 
      <p>Nombre de criminels : ${scenarioData.criminels}</p> 
      <p>Mode criminels fantômes : ${scenarioData.criminelFantome ? "Oui" : "Non"}</p> 
      <p>Avatars légendaires activés : ${scenarioData.avatarsLegendaires ? "Oui" : "Non"}</p>

      <div class="boutons-actions">
        <a class="gold-btn" href="salon.html">Lancement</a>
        <a class="gold-btn" href="creer-partie.html">Retour</a>
        <button id="regenScenario" class="gold-btn">Voir un autre scénario</button>
      </div>
    `;

    // Régénération dynamique
    document.getElementById("regenScenario").onclick = genererScenario;
  } else {
    container.innerHTML = "Aucune donnée de scénario trouvée.";
  }
}

document.addEventListener("DOMContentLoaded", genererScenario);
}
