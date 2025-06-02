// Murder Party - Générateur de trame centrale dynamique pour toutes époques
// S'adapte de 4 à 12 joueurs, époques incluses : medieval, renaissance, victorien, western, contemporain, futuriste, historique
// 100% clé en main, tous les templates sont fournis, structure complète
// À utiliser AVANT la génération des objectifs personnels, pour que tout soit cohérent

const TRAMES = {
  medieval: {
    roles: [
      "tavernier", "prévôt", "seigneur", "servante", "forgeron", "moine", "chevalier", "guérisseuse", "ménestrel", "dame", "apothicaire", "écuyer"
    ],
    victimes: [
      "seigneur", "dame", "prévôt", "forgeron", "moine"
    ],
    crimes: [
      "empoisonnement au festin", "meurtre dans la forêt", "disparition mystérieuse", "noyade dans le puits", "assassinat dans la chapelle", "crâne fracassé dans la forge"
    ],
    lieux: [
      "la taverne", "le donjon", "la chapelle", "la forêt", "le puits", "le marché", "la tour de guet", "la cuisine", "la cour"
    ],
    armes: [
      "dague rouillée", "coupe empoisonnée", "masse d'arme", "corde", "pierre de meule", "herbe toxique", "arbalète", "bâton du moine"
    ]
  },
  renaissance: {
    roles: [
      "marchand", "courtisane", "duchesse", "inventeur", "peintre", "médium", "musicien", "banquier", "régisseur", "valet", "sculpteur", "noble"
    ],
    victimes: [
      "duchesse", "peintre", "banquier", "courtisane", "inventeur"
    ],
    crimes: [
      "empoisonnement au bal", "meurtre dans l'atelier", "disparition lors du carnaval", "assassinat dans le jardin", "noyade dans le port", "étranglement dans la salle de bal"
    ],
    lieux: [
      "le bal", "l'atelier", "le port", "le jardin", "le salon de la duchesse", "le marché", "la galerie", "l'orangerie", "la salle de banquet"
    ],
    armes: [
      "flacon de poison", "cordon de soie", "statue brisée", "épée de duel", "coup de chandelier", "pinceau empoisonné", "coup de dague", "mouchoir imbibé"
    ]
  },
  victorien: {
    roles: [
      "majordome", "comte", "lady", "pianiste", "jardinier", "cuisinière", "médecin", "valet", "gouvernante", "prêtre", "chasseur", "bibliothécaire"
    ],
    victimes: [
      "comte", "lady", "majordome", "cuisinière", "gouvernante"
    ],
    crimes: [
      "empoisonnement au thé", "meurtre dans la serre", "assassinat dans la bibliothèque", "chute mortelle dans l'escalier", "étranglement dans la cave", "noie dans la baignoire"
    ],
    lieux: [
      "la serre", "la bibliothèque", "le salon", "la cave", "la cuisine", "le vestibule", "le jardin d'hiver", "la chambre du comte", "la salle de bal"
    ],
    armes: [
      "coupelle de thé empoisonné", "couteau de cuisine", "cordon de rideau", "statue décorative", "pied de biche", "piano à queue (couvercle)", "pince à feu"
    ]
  },
  western: {
    roles: [
      "barman", "shérif", "tenancière", "forgeron", "cowboy", "danseuse", "bandit", "médecin", "prêcheur", "fermier", "banquier", "joueur de poker"
    ],
    victimes: [
      "shérif", "tenancière", "médecin", "barman", "forgeron"
    ],
    crimes: [
      "fusillade au saloon", "empoisonnement au whisky", "lynchage dans la rue", "assassinat dans la grange", "disparition lors du bal du samedi", "attaque de diligence mortelle"
    ],
    lieux: [
      "le saloon", "l’écurie", "la rue principale", "l’église", "la banque", "le ranch", "le train", "le bureau du shérif", "la grange"
    ],
    armes: [
      "revolver", "verre de whisky empoisonné", "corde de pendu", "pelle", "batte de baseball", "bouteille cassée", "couteau de lancer", "laçet de cowboy"
    ]
  },
  contemporain: {
    roles: [
      "barman", "PDG", "banquier", "journaliste", "enseignant", "médecin", "chauffeur", "startupeuse", "avocat", "influenceur", "manager", "agent de sécurité"
    ],
    victimes: [
      "PDG", "banquier", "journaliste", "médecin", "manager"
    ],
    crimes: [
      "empoisonnement lors d’un afterwork", "meurtre au parking", "chute mortelle dans l’ascenseur", "agression fatale dans les toilettes", "disparition lors du séminaire", "étouffement dans la salle de réunion"
    ],
    lieux: [
      "la salle de réunion", "la cafétéria", "le bureau", "le parking", "l’ascenseur", "le rooftop", "la salle de sport", "le hall d’entrée", "la salle informatique"
    ],
    armes: [
      "café empoisonné", "agrafeuse", "câble électrique", "clé à molette", "pied de chaise", "clé USB piégée", "sac plastique", "dossier lourd"
    ]
  },
  futuriste: {
    roles: [
      "barman", "commandant", "roboticienne", "androïde", "technicien", "IA", "biologiste", "directeur", "cyberdétective", "pilote", "médiateur", "archiviste"
    ],
    victimes: [
      "commandant", "roboticienne", "directeur", "biologiste", "pilote"
    ],
    crimes: [
      "court-circuit fatal dans le sas", "sabotage de module vital", "empoisonnement alimentaire synthétique", "expulsion dans l’espace", "meurtre dans le laboratoire", "piratage mortel de l’IA"
    ],
    lieux: [
      "le sas d’air", "le laboratoire", "le poste de pilotage", "la salle de maintenance", "le jardin hydroponique", "le réfectoire", "le dôme de commandement", "la cabine de repos", "la salle de simulation"
    ],
    armes: [
      "clé quantique", "injecteur de toxines", "nano-robots assassins", "puce sabotée", "câble optique", "pistolet plasma", "pilule empoisonnée", "module de dépressurisation"
    ]
  },
  historique: {
    roles: [
      "philosophe", "roi", "cardinal", "inventeur", "espionne", "duc", "écrivain", "général", "ambassadrice", "astronome", "alchimiste", "peintre"
    ],
    victimes: [
      "roi", "duc", "cardinal", "inventeur", "général"
    ],
    crimes: [
      "empoisonnement au banquet", "meurtre dans la bibliothèque", "assassinat dans le jardin royal", "duel truqué", "disparition lors du bal masqué", "noyade dans la fontaine"
    ],
    lieux: [
      "la bibliothèque", "le cabinet du roi", "le jardin royal", "la salle du trône", "la chapelle", "le salon du cardinal", "l’observatoire", "le bal", "le laboratoire"
    ],
    armes: [
      "calice empoisonné", "dague d’apparat", "cordelette", "livre piégé", "pistolet de duel", "statue renversée", "parchemin toxique", "coup de canne"
    ]
  }
};

// Mobiles génériques, à adapter/croiser pour chaque joueur selon la victime
const MOBILES = [
  "vengeance pour une vieille humiliation",
  "jalousie sentimentale",
  "rivalité professionnelle",
  "héritage convoité",
  "chantage",
  "cacher un secret personnel",
  "dette non remboursée",
  "ambition de prendre sa place",
  "querelle de famille",
  "amour non partagé",
  "vol d’un objet précieux",
  "trahison politique",
  "complicité dans un autre crime"
];

// Circconstances spéciales, pour pimenter et contextualiser chaque partie
const CIRC_CONSTANCES = [
  "lors d’un événement public",
  "pendant la nuit",
  "à la fin d’une fête",
  "dans une atmosphère tendue",
  "peu après une dispute",
  "à la suite d’un vol",
  "suite à une annonce importante",
  "pendant que tout le monde avait un alibi sauf un",
  "lors d’une coupure de courant",
  "alors qu’un orage faisait rage",
  "pendant que la majorité des personnes étaient réunies au même endroit"
];

// Génère la composition de la partie selon le nombre de joueurs et l'époque
function composerPartie(epoque, nbJoueurs) {
  const data = TRAMES[epoque];
  if (!data) throw new Error("Époque inconnue");
  // Shuffle et slice pour la sélection
  const roles = shuffleArray([...data.roles]).slice(0, nbJoueurs);
  return roles;
}

// Mélange Fisher-Yates
function shuffleArray(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m]; array[m] = array[i]; array[i] = t;
  }
  return array;
}

// Génère la trame centrale d'une partie
function genererTrameCentrale(epoque, joueurs) {
  const data = TRAMES[epoque];
  if (!data) throw new Error("Époque inconnue");

  // Sélection de la victime
  const victimeRole = randomItem(data.victimes);

  // Sélection du coupable (random parmi les joueurs, sauf la victime)
  const suspects = joueurs.filter(j => j.role !== victimeRole);
  const coupable = randomItem(suspects);

  // Sélection du crime, lieu, arme, circonstance
  const crime = randomItem(data.crimes);
  const lieu = randomItem(data.lieux);
  const arme = randomItem(data.armes);
  const circonstance = randomItem(CIRC_CONSTANCES);

  // Attribution des mobiles (le vrai mobile pour le coupable, un mobile crédible pour chaque autre joueur)
  let mobilesParJoueur = {};
  for (const joueur of joueurs) {
    if (joueur.uuid === coupable.uuid) {
      mobilesParJoueur[joueur.uuid] = randomItem([
        ...MOBILES,
        "haine profonde envers la victime",
        "vengeance pour un affront personnel"
      ]);
    } else {
      // Les innocents reçoivent aussi un mobile crédible pour brouiller les pistes
      mobilesParJoueur[joueur.uuid] = randomItem(MOBILES);
    }
  }

  // Attribution des indices : chaque joueur reçoit un indice, certains vrais, d'autres fausses pistes
  let indicesParJoueur = {};
  const indicesTemplates = [
    // Ces templates sont adaptés par époque juste après
    "Tu as vu {cible} près de {lieu} peu avant le crime.",
    "Tu sais que {cible} avait une raison d’en vouloir à la victime.",
    "Tu as trouvé {objet} abandonné près du lieu du crime.",
    "Tu as surpris une dispute entre {cible} et la victime avant le drame.",
    "Tu as entendu parler d'un chantage impliquant {cible}.",
    "Tu as vu quelqu’un qui ressemble à {cible} fuir {lieu}.",
    "Tu sais que {cible} n’a pas d’alibi pour le moment du crime.",
    "Tu as trouvé une trace de {objet} dans {lieu}.",
    "Tu as perçu un comportement étrange de la part de {cible} lors de {evenement}."
  ];

  for (const joueur of joueurs) {
    // Pour la moitié des joueurs, l'indice pointe vers le vrai coupable, pour l'autre vers un innocent
    let cibleIndice;
    if (Math.random() < 0.6) {
      cibleIndice = coupable; // majorité = coupable désigné
    } else {
      let innocents = joueurs.filter(j => j.uuid !== coupable.uuid && j.uuid !== joueur.uuid);
      cibleIndice = randomItem(innocents.length ? innocents : joueurs);
    }
    // Variables pour l'indice
    const objet = randomItem(data.armes.concat(data.roles));
    const event = randomItem(data.crimes.concat(data.lieux));
    const indiceTemplate = randomItem(indicesTemplates);
    let indice = indiceTemplate
      .replace(/{cible}/g, cibleIndice.nom || cibleIndice.role)
      .replace(/{lieu}/g, randomItem(data.lieux))
      .replace(/{objet}/g, objet)
      .replace(/{evenement}/g, event);
    indicesParJoueur[joueur.uuid] = indice;
  }

  // Génération finale de la trame
  return {
    epoque,
    roles: joueurs.map(j => ({ uuid: j.uuid, nom: j.nom, role: j.role })),
    victime: victimeRole,
    crime,
    lieu,
    arme,
    circonstance,
    coupable: { uuid: coupable.uuid, nom: coupable.nom, role: coupable.role },
    mobiles: mobilesParJoueur,
    indices: indicesParJoueur
  };
}

// Utilitaire pour choisir un élément aléatoire
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Exemple d'utilisation
/*
const joueursPartie = [
  { uuid: "1", nom: "Billy Boy", role: "barman" },
  { uuid: "2", nom: "Carter", role: "shérif" },
  { uuid: "3", nom: "Molly", role: "tenancière" },
  { uuid: "4", nom: "Sam", role: "forgeron" }
];
const trame = genererTrameCentrale("western", joueursPartie);
console.log(trame);
*/

if (typeof module !== 'undefined') module.exports = { TRAMES, MOBILES, CIRC_CONSTANCES, composerPartie, genererTrameCentrale };
else window.TRAMES = TRAMES, window.MOBILES = MOBILES, window.CIRC_CONSTANCES = CIRC_CONSTANCES, window.composerPartie = composerPartie, window.genererTrameCentrale = genererTrameCentrale;
