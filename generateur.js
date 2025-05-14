// Base de données des éléments modifiables par époque
const baseDeDonnees = {
  "victorien": {
    "scenarios": [
      {
        "intro": [
          "Un drame mystérieux se joue dans un manoir isolé, où les invités ont tous un secret.",
          "Dans un manoir à l'atmosphère lugubre, une sombre affaire de meurtre commence à se dévoiler."
        ],
        "objectif": [
          "Démasquez le meurtrier avant qu'il ne frappe à nouveau.",
          "Trouvez l'assassin et découvrez pourquoi il a tué la victime."
        ],
        "lieu": [
          "Manoir isolé",
          "Salle de bal du manoir",
          "Bibliothèque du manoir",
          "Jardins secrets du manoir"
        ],
        "avatars": [
          "Maître des Ombres", "Fantôme", "Comédien", "Muet"
        ],
        "mode": [
          "Normal", "Criminels fantômes", "Chasse au juste coupable"
        ],
        "nombreCriminels": [
          1, 2, 3
        ]
      },
      {
        "intro": [
          "Une soirée tranquille entre amis tourne au cauchemar lorsqu'un invité est retrouvé mort.",
          "Un mystérieux assassin a infiltré la haute société et cherche à éliminer ses ennemis."
        ],
        "objectif": [
          "Réunissez des indices pour découvrir qui est le coupable.",
          "Empêchez le criminel de s'enfuir avant qu'il ne tue à nouveau."
        ],
        "lieu": [
          "Salle à manger",
          "Salon de thé",
          "Bureau du maître du manoir"
        ],
        "avatars": [
          "Fantôme", "Maître des Ombres", "Comédien"
        ],
        "mode": [
          "Normal", "Criminels fantômes"
        ],
        "nombreCriminels": [
          1, 2
        ]
      }
    ]
  },
  // Ajouter ici d'autres époques et scénarios
};

// Fonction pour générer un scénario unique basé sur les paramètres de la partie
function genererScenario(periode, nombreJoueurs, modeDeJeu) {
  const scenariosDisponibles = baseDeDonnees[periode].scenarios;

  // Filtrer les scénarios en fonction du nombre de criminels et du mode de jeu
  const filtres = scenariosDisponibles.filter(scenario => {
    return (
      scenario.nombreCriminels.includes(nombreJoueurs) &&
      scenario.mode.includes(modeDeJeu)
    );
  });

  // Si aucun scénario ne correspond, renvoyer un message d'erreur
  if (filtres.length === 0) {
    return "Aucun scénario disponible pour les paramètres choisis.";
  }

  // Sélectionner un scénario aléatoirement parmi les filtrés
  const scenarioChoisi = filtres[Math.floor(Math.random() * filtres.length)];

  // Retourner le scénario complet
  return {
    introduction: scenarioChoisi.intro[Math.floor(Math.random() * scenarioChoisi.intro.length)],
    objectif: scenarioChoisi.objectif[Math.floor(Math.random() * scenarioChoisi.objectif.length)],
    lieu: scenarioChoisi.lieu[Math.floor(Math.random() * scenarioChoisi.lieu.length)],
    avatars: scenarioChoisi.avatars[Math.floor(Math.random() * scenarioChoisi.avatars.length)],
    mode: modeDeJeu,
    criminels: scenarioChoisi.nombreCriminels[Math.floor(Math.random() * scenarioChoisi.nombreCriminels.length)],
  };
}

// Fonction pour afficher le scénario généré dans la page HTML
function afficherScenario() {
  // Récupérer les paramètres de la partie (ils peuvent être stockés dans des variables ou être passés par l'URL)
  const periodeSelectionnee = "victorien"; // Exemple, tu peux récupérer cette donnée d'une autre manière
  const nombreJoueursSelectionne = 4; // À adapter selon la sélection de l'utilisateur
  const modeSelectionne = "Normal"; // Choisi par l'utilisateur (ou défini par défaut)

  // Générer un scénario
  const scenario = genererScenario(periodeSelectionnee, nombreJoueursSelectionne, modeSelectionne);

  // Si un scénario a été généré avec succès, afficher les informations
  if (typeof scenario === "string") {
    // Si un message d'erreur est retourné, l'afficher
    document.getElementById('scenarioContainer').innerHTML = `<p>${scenario}</p>`;
  } else {
    // Afficher les informations du scénario généré
    document.getElementById('scenarioContainer').innerHTML = `
      <h2>Introduction</h2>
      <p>${scenario.introduction}</p>

      <h2>Objectif du jeu</h2>
      <p>${scenario.objectif}</p>

      <h2>Lieu</h2>
      <p>${scenario.lieu}</p>

      <h2>Mode de jeu</h2>
      <p>${scenario.mode}</p>

      <h2>Nombre de criminels</h2>
      <p>${scenario.criminels}</p>

      <h2>Avatars légendaires</h2>
      <ul>
        <li>${scenario.avatars}</li>
      </ul>
    `;
  }
}

// Appel de la fonction pour afficher le scénario à l'initialisation de la page
window.onload = afficherScenario;
