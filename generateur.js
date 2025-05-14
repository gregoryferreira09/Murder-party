// Base de données simplifiée avec un seul scénario adaptable
const baseDeDonnees = {
  "victorien": {
    "intro": "Un drame mystérieux se joue dans un manoir isolé, où les invités ont tous un secret.",
    "objectif": "Démasquez le ou les meurtriers avant qu'ils ne frappent à nouveau.",
    "lieux": [
      "Salle de bal du manoir",
      "Bibliothèque poussiéreuse",
      "Jardins brumeux",
      "Bureau du maître"
    ],
    "avatars": [
      "Maître des Ombres", "Fantôme", "Comédien", "Muet"
    ],
    "modes": [
      "Normal", "Criminels fantômes", "Chasse au juste coupable"
    ],
    "criminelsPossibles": [1, 2, 3]
  }
};

// Fonction pour générer un scénario basé sur les paramètres choisis
function genererScenario(periode, nombreJoueurs, modeDeJeu, nbCriminels) {
  const data = baseDeDonnees[periode];

  // Validation
  if (!data.modes.includes(modeDeJeu)) {
    return "Ce mode de jeu n'est pas disponible pour cette époque.";
  }
  if (!data.criminelsPossibles.includes(nbCriminels)) {
    return "Nombre de criminels non autorisé pour cette époque.";
  }

  // Génération aléatoire mais basée sur la structure
  const lieuChoisi = data.lieux[Math.floor(Math.random() * data.lieux.length)];
  const avatarsChoisis = data.avatars.slice(0, Math.min(nombreJoueurs, data.avatars.length));

  return {
    introduction: data.intro,
    objectif: data.objectif,
    lieu: lieuChoisi,
    mode: modeDeJeu,
    criminels: nbCriminels,
    avatars: avatarsChoisis
  };
}

// Fonction d’affichage dans l’interface HTML
function afficherScenario() {
  // Exemple de paramètres récupérés depuis les sélections (à lier plus tard à ton UI)
  const periodeSelectionnee = "victorien";
  const nombreJoueursSelectionne = 5;
  const modeSelectionne = "Criminels fantômes";
  const nbCriminels = 2;

  const scenario = genererScenario(periodeSelectionnee, nombreJoueursSelectionne, modeSelectionne, nbCriminels);

  if (typeof scenario === "string") {
    document.getElementById('scenarioContainer').innerHTML = `<p>${scenario}</p>`;
  } else {
    document.getElementById('scenarioContainer').innerHTML = `
      <h2>Introduction</h2>
      <p>${scenario.introduction}</p>

      <h2>Objectif</h2>
      <p>${scenario.objectif}</p>

      <h2>Lieu</h2>
      <p>${scenario.lieu}</p>

      <h2>Mode de jeu</h2>
      <p>${scenario.mode}</p>

      <h2>Nombre de criminels</h2>
      <p>${scenario.criminels}</p>

      <h2>Avatars légendaires disponibles</h2>
      <ul>
        ${scenario.avatars.map(a => `<li>${a}</li>`).join("")}
      </ul>
    `;
  }
}

window.onload = afficherScenario;
