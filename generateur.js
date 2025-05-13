// ----------------------
// GENERATEUR COMPLET
// ----------------------

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Base de données fictives simplifiées
const epoques = {
  "victorien": {
    intro: "L'ambiance est feutrée, les chandeliers éclairent un vieux manoir anglais...",
    noms: ["Edgar", "Beatrice", "Harold", "Lydia", "Gerald", "Vivienne"],
    professions: ["majordome", "baronne", "détective", "cuisinière", "banquier", "exploratrice"]
  },
  "futuriste": {
    intro: "Dans une station orbitale à la dérive, un crime a été commis...",
    noms: ["Zara", "Xenon", "Kyra", "Orion", "Nexus", "Luma"],
    professions: ["technologue", "pilote", "espion", "médecin androïde", "cyber-enquêteur"]
  }
};

// Traits de caractère
const traits = ["menteur", "loyal", "instable", "calculateur", "timide", "rancunier"];

// Objectifs spéciaux aléatoires
const objectifsGeneraux = [
  "Innocenter un allié.",
  "Découvrir un indice majeur.",
  "Accuser un coupable sans preuve.",
  "Protéger une autre personne en secret.",
  "Faire diversion pendant une enquête."
];

// GÉNÉRATION DU SCÉNARIO PRINCIPAL
function genererScenarioComplet(config) {
  const epoqueData = epoques[config.epoque] || epoques["victorien"];

  const joueurs = {};
  const nomsDisponibles = [...epoqueData.noms];
  const professions = [...epoqueData.professions];

  // Attribution des rôles
  for (let i = 1; i <= config.nombreJoueurs; i++) {
    const nom = getRandomElement(nomsDisponibles);
    nomsDisponibles.splice(nomsDisponibles.indexOf(nom), 1);
    const role = getRandomElement(professions);
    const caractere = getRandomElement(traits);
    const objectif = getRandomElement(objectifsGeneraux);

    joueurs[`joueur${i}`] = {
      nom: nom,
      role: role,
      trait: caractere,
      objectifSecret: objectif,
      estCriminel: i <= config.nombreCriminels
    };
  }

  const histoire = {
    introduction: epoqueData.intro,
    crime: "Un meurtre mystérieux a eu lieu durant un événement social.",
    objectifsGlobal: "Résoudre le crime sans se faire manipuler.",
    joueurs: joueurs
  };

  return histoire;
}
