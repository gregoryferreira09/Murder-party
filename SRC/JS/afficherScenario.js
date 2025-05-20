import { genererScenario } from './generateurScenario.js';

function afficherScenario() {
  // Tu peux ici choisir la période, ou la rendre dynamique selon un formulaire, etc.
  const scenario = genererScenario('victorien'); // ou 'medieval', 'futuriste', etc.

  const container = document.getElementById('scenarioContainer');
  container.innerHTML = `
    <h2>Introduction</h2>
    <p>${scenario.introduction}</p>
    <h2>Le crime</h2>
    <p>${scenario.crime}</p>
    <h2>Objectif général</h2>
    <p>${scenario.objectif}</p>
    <button id="regen">Nouveau scénario</button>
  `;

  document.getElementById('regen').onclick = afficherScenario;
}

// Affiche un scénario au chargement de la page
document.addEventListener('DOMContentLoaded', afficherScenario);
