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

// GÉNÉRATION DYNAMIQUE DE L'INTRODUCTION ET DE L'OBJECTIF DES ENQUÊTEURS
function genererIntroductionEtAccroche(config) {
  const epoqueData = epoques[config.epoque] || epoques["victorien"];
  
  const lieux = ["manoir victorien", "train de luxe", "musée abandonné", "île déserte", "hôtel de luxe"];
  const victimes = ["comtesse Montgomery", "Henry Dupont", "le conservateur Gervais", "le capitaine du navire", "l'homme d'affaires"];
  const meurtres = ["poignardée en plein cœur", "poignardé dans le dos", "retrouvé inconscient au pied du tableau volé", "pendu à une corde", "retrouvé mort dans sa suite"];
  const phrasesAccroche = [
    "Le meurtrier est toujours parmi vous, tapi dans l’ombre.",
    "Un assassin rôde, et la vérité est à votre portée.",
    "Le temps presse, et l'assassin n'attend pas.",
    "L'île vous cache un secret bien plus sombre que vous ne le pensiez."
  ];

  // Choisir aléatoirement un lieu, une victime, un meurtre et une phrase d'accroche
  const lieu = getRandomElement(lieux);
  const victime = getRandomElement(victimes);
  const meurtre = getRandomElement(meurtres);
  const accroche = getRandomElement(phrasesAccroche);

  const introduction = `DANS LE CADRE MAJESTUEUX D’UN ${lieu.toUpperCase()}, UNE SOIRÉE ÉLÉGANTE VIRE AU CAUCHEMAR. ${victime.toUpperCase()}, FIGURE DE LA HAUTE SOCIÉTÉ, A ÉTÉ RETROUVÉE ${meurte.toUpperCase()}. MAIS LES SECRETS SONT-ILS VRAIMENT SI BIEN CACHÉS ? LA VÉRITÉ RESTE ENFOUIE… POUR L’INSTANT.`;
  const objectif = `${accroche} QUI SAURA PERCER CE SECRET AVANT QU’IL NE SOIT TROP TARD ?`;

  return { introduction, objectif };
}

// Fonction pour afficher l'introduction et l'objectif
function afficherScenario() {
  // Générez un scénario aléatoire
  const config = { epoque: "victorien", nombreJoueurs: 6, nombreCriminels: 2 }; // à ajuster selon l'interface de ton application
  const scenario = genererIntroductionEtAccroche(config);

  // Affichage dans le DOM
  document.getElementById("intro").textContent = scenario.introduction;
  document.getElementById("objectif").textContent = scenario.objectif;
}

// Écouteur pour le bouton "Retour" afin de régénérer un scénario
document.getElementById("btnRetour").addEventListener("click", function() {
  afficherScenario();
});
