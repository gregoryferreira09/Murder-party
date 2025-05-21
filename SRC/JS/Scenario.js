// SRC/JS/Scenario.js
import { personnagesParEpoque } from './personnages.js';
const ANTI_REPEAT_HISTORY_SIZE = 5;

// === OUTILS FRANÇAIS ===
function getArticle(word, articles = { m: 'le', f: 'la' }) {
  if (!word) return '';
  word = word.trim();
  const firstLetter = word[0].toLowerCase();
  if ("aeiouyh".includes(firstLetter)) return "l'";
  const feminine = [
    "bibliothèque", "gouvernante", "salle", "cave", "chapelle", "forêt", "dimension", "galerie", "voix", "technicienne",
    "station", "soute", "cabine", "ombre", "cuisine", "armurerie", "orphelinat", "tour", "salle d'arme", "chambre forte", "crypte"
  ];
  const wordLC = word.toLowerCase();
  if (feminine.some(x => wordLC.startsWith(x))) return articles.f;
  return articles.m;
}
function articleDans(word, article) {
  if (article === "le") return "dans le";
  if (article === "la") return "dans la";
  if (article === "l'") return "dans l'";
  return "dans";
}
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// === HISTORIQUE localStorage ===
function getScenarioHistory() {
  let history = localStorage.getItem("scenarioHistory");
  return history ? JSON.parse(history) : [];
}
function addScenarioToHistory(scenario) {
  let history = getScenarioHistory();
  history.unshift(scenario);
  if (history.length > ANTI_REPEAT_HISTORY_SIZE) history = history.slice(0, ANTI_REPEAT_HISTORY_SIZE);
  localStorage.setItem("scenarioHistory", JSON.stringify(history));
}

import { personnagesParEpoque } from './personnages.js';

function getPersonnagesByCategorie(epoque, categorie) {
  return personnagesParEpoque[epoque]
    ? personnagesParEpoque[epoque].filter(p => p.categories.includes(categorie))
    : [];
}

const univers = {
  medieval: {
    lieux: [
      { nom: "château", genre: "m" }, { nom: "grande salle", genre: "f" }, { nom: "forêt", genre: "f" }, { nom: "cave", genre: "f" },
      { nom: "donjon", genre: "m" }, { nom: "chapelle", genre: "f" }, { nom: "remparts", genre: "m" }, { nom: "écuries", genre: "f" },
      { nom: "salle d'arme", genre: "f" }, { nom: "jardin potager", genre: "m" }, { nom: "crypte", genre: "f" }, { nom: "tour de guet", genre: "f" }
    ],
    victimes: getPersonnagesByCategorie('medieval', 'victime').map(p => ({ nom: p.nom })),
    suspects: getPersonnagesByCategorie('medieval', 'suspect').map(p => p.nom),
    temoins: getPersonnagesByCategorie('medieval', 'temoin').map(p => ({ nom: p.nom })),
    indices: [
      "des traces de sang mènent vers la cave", "un médaillon brisé a été retrouvé sous une table", "un morceau de parchemin caché dans la paillasse",
      "une botte couverte de boue près de la porte", "une plume rare laissée sur la scène", "une fiole vide sous le banc", "une cape déchirée dans la cour"
    ],
    traitsVictimes: [
      "loyal", "superstitieux", "redouté", "manipulateur", "intrigant", "héroïque", "taciturne", "charismatique", "peureux", "cupide"
    ],
    motifs: [
      "la vengeance", "un héritage contesté", "une histoire d’amour interdite", "un serment brisé", "une prophétie", "une rivalité chevaleresque",
      "une jalousie de pouvoir", "la peur d’une malédiction"
    ],
    armes: [
      "une épée", "une arbalète", "du poison", "une dague rouillée", "un gourdin", "une masse d'arme", "une lance", "une cordelette",
      "une pierre", "un pichet de vin empoisonné"
    ],
    ambiances: [
      "le banquet bat son plein", "une tempête gronde au-dehors", "la lune éclaire faiblement les couloirs", "la cloche du village résonne",
      "la garde s’est assoupie", "les flammes vacillent dans la cheminée", "le vent siffle entre les tours", "une chouette hulule dans la nuit"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les dames murmurent, les seigneurs s’observent.",
      "La tension est à son comble dans la cour. {suspect1} semble éviter {suspect2}.",
      "Dans {la_lieu}, les conversations se font secrètes. Certains évoquent {motif}.",
      "Un festin débute, mais déjà la suspicion plane entre {suspect1} et {suspect2}.",
      "[INDICE] {indice}. L’atmosphère s’alourdit dans {la_lieu}.",
      "[TEMOIN] {temoin} pense avoir surpris {suspect1} à l’écart, l’air troublé.",
      "Des regards inquiets se croisent lors du banquet.",
      "La pluie martèle les tuiles, rendant l’air électrique."
    ],
    crimes: {
      classique: [
        "Un cri fend la nuit : {victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} plantée dans le dos. {indice}",
        "Le chaos s’empare de la cour : {victime} vient d’être assassiné·e {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "La stupeur est totale : {victime} gît {dans_la_lieu}. Tous se tournent vers {suspect1}.",
        "{victime} a succombé à une attaque brutale {dans_la_lieu}. {temoin} est bouleversé·e.",
        "Le drame s'est joué {dans_la_lieu} : {victime} a été tué·e. {indice}",
        "{victime} est retrouvé·e dans la cour, la foule s’attroupe."
      ],
      poison: [
        "Le festin vire au cauchemar : {victime} s’effondre, empoisonné·e. {indice}",
        "{victime} n’a pas survécu à une gorgée fatale {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "Le médecin du château parle d’empoisonnement. {suspect1} et {suspect2} s’accusent mutuellement.",
        "Un vin suspect circule à table. {victime} s’écroule."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}. {temoin} l’a aperçu quitter la pièce à la hâte.",
        "La cour s’inquiète : {victime} n’a pas reparu depuis la veille. {indice}",
        "{victime} a disparu sans laisser de traces {dans_la_lieu}. {suspect1} se renferme.",
        "{victime} a été aperçu·e pour la dernière fois près de la chapelle."
      ],
      vol: [
        "Le trésor du château a disparu. {temoin} dit avoir vu {suspect1} rôder dans les couloirs.",
        "Dans la confusion, {victime} remarque la disparition d’un objet précieux {dans_la_lieu}. {indice}",
        "Un vol audacieux choque la noblesse. {suspect1} est immédiatement suspecté.",
        "Un coffre éventré a été trouvé dans la salle d'arme."
      ]
    }
  },

  renaissance: {
    lieux: [
      { nom: "palais", genre: "m" }, { nom: "salon d'apparat", genre: "m" }, { nom: "jardin", genre: "m" },
      { nom: "atelier d’artiste", genre: "m" }, { nom: "salle de bal", genre: "f" }, { nom: "chapelle", genre: "f" }, { nom: "bibliothèque", genre: "f" }
    ],
    victimes: getPersonnagesByCategorie('renaissance', 'victime').map(p => ({ nom: p.nom })),
    suspects: getPersonnagesByCategorie('renaissance', 'suspect').map(p => p.nom),
    temoins: getPersonnagesByCategorie('renaissance', 'temoin').map(p => ({ nom: p.nom })),
    indices: [
      "un pinceau taché de sang", "une bourse oubliée sous la table", "un masque fendu retrouvé dans le jardin"
    ],
    traitsVictimes: [
      "influente", "mystérieuse", "jalousée", "brillante", "détestée"
    ],
    motifs: [
      "la jalousie artistique", "une dette colossale", "un secret inavoué", "une rivalité amoureuse"
    ],
    armes: [
      "un stylet", "du poison", "un chandelier", "un foulard de soie"
    ],
    ambiances: [
      "Les lanternes illuminent la cour du palais", "Un bal masqué agite la noblesse", "Les artistes rivalisent de talent devant la duchesse"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les artistes et les courtisans se surveillent du coin de l’œil.",
      "La fête bat son plein dans {la_lieu}, mais {suspect1} semble préoccupé.",
      "On parle beaucoup de {motif} ce soir, notamment entre {suspect1} et {suspect2}.",
      "Un bal masqué commence, mais les intrigues sont déjà en marche.",
      "[INDICE] {indice} retrouvé dans {la_lieu} rend tout le monde nerveux.",
      "[TEMOIN] Selon {temoin}, {suspect1} s’est absenté à un moment crucial.",
      "Un orage menace la ville, ajoutant à la nervosité ambiante.",
      "Des rires résonnent, mais la méfiance s’installe dans {la_lieu}."
    ],
    crimes: { /* ... inchangé ... */ }
  },

  victorien: {
    lieux: [
      { nom: "manoir", genre: "m" }, { nom: "bibliothèque", genre: "f" }, { nom: "salon", genre: "m" }, { nom: "jardin", genre: "m" },
      { nom: "sous-sol", genre: "m" }, { nom: "salle de bal", genre: "f" }, { nom: "fumoir", genre: "m" }, { nom: "cuisine", genre: "f" },
      { nom: "orangerie", genre: "f" }, { nom: "chambre forte", genre: "f" }, { nom: "serre", genre: "f" }, { nom: "grenier", genre: "m" },
      { nom: "cabinet d'étude", genre: "m" }, { nom: "galerie de portraits", genre: "f" }, { nom: "salle de musique", genre: "f" }
    ],
    victimes: getPersonnagesByCategorie('victorien', 'victime').map(p => ({ nom: p.nom })),
    suspects: getPersonnagesByCategorie('victorien', 'suspect').map(p => p.nom),
    temoins: getPersonnagesByCategorie('victorien', 'temoin').map(p => ({ nom: p.nom })),
    indices: [
      "une montre cassée près d’un fauteuil", "un mouchoir monogrammé oublié sur le sol", "des traces de boue menant vers le sous-sol",
      "un verre de vin à moitié plein à l’odeur suspecte", "une lettre déchirée dans la cheminée", "une perle arrachée trouvée dans l'escalier",
      "des cendres de cigarette dans la serre", "un carnet griffonné tombé sous un canapé"
    ],
    traitsVictimes: [
      "respecté", "craintif", "mystérieux", "détesté", "ambitieux", "très apprécié", "discret", "rancunier", "hypocrite", "brillant", "timide"
    ],
    motifs: [
      "l’héritage", "la jalousie", "une ancienne rancune", "un secret inavoué", "l’ambition politique", "une dette de jeu",
      "un amour contrarié", "une humiliation publique", "la peur d’un scandale", "une rivalité professionnelle"
    ],
    armes: [
      "un chandelier", "une dague", "du poison", "un revolver", "une corde", "un coupe-papier", "un tisonnier", "une canne-épée",
      "un coussin", "une fiole d'acide", "un couteau de cuisine"
    ],
    ambiances: [
      "le tonnerre gronde au loin", "les invités masqués se perdent dans la fête", "le brouillard étreint le jardin",
      "le petit matin s’annonce trouble", "un dîner animé se prépare", "des éclats de voix résonnent dans la maison",
      "une horloge sonne sinistrement", "l’orage menace de couper l’électricité"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les secrets se murmurent, les regards s’évitent.",
      "Le manoir vibre d’une excitation étrange. {suspect1} semble préoccupé·e ce soir.",
      "Dans {la_lieu}, la tension monte. Des rumeurs courent sur {motif}.",
      "Un bal masqué s’organise : la jalousie couve entre {suspect1} et {suspect2}.",
      "[INDICE] La soirée commence dans {la_lieu}. Déjà, {indice}.",
      "[TEMOIN] Selon {temoin}, l’attitude de {suspect1} est étrange ce soir.",
      "Une dispute éclate dans {la_lieu}. Tous semblent nerveux.",
      "La pluie frappe les vitres, l’ambiance est lourde. {suspect2} évite les regards."
    ],
    crimes: { /* ... inchangé ... */ }
  },

  western: {
    lieux: [
      { nom: "saloon", genre: "m" }, { nom: "ranch", genre: "m" }, { nom: "prison", genre: "f" }, { nom: "rue principale", genre: "f" },
      { nom: "diligence", genre: "f" }, { nom: "banco", genre: "m" }, { nom: "cabane du shérif", genre: "f" }
    ],
    victimes: getPersonnagesByCategorie('western', 'victime').map(p => ({ nom: p.nom })),
    suspects: getPersonnagesByCategorie('western', 'suspect').map(p => p.nom),
    temoins: getPersonnagesByCategorie('western', 'temoin').map(p => ({ nom: p.nom })),
    indices: [
      "une douille retrouvée sous la table", "une botte boueuse près du comptoir", "un foulard ensanglanté dans l’écurie"
    ],
    traitsVictimes: [
      "redouté", "charmeur", "mystérieux", "détesté"
    ],
    motifs: [
      "un vol de bétail", "une triche au poker", "une vengeance ancienne", "une histoire d’amour contrariée"
    ],
    armes: [
      "un colt", "une corde", "du poison", "un couteau", "un lasso"
    ],
    ambiances: [
      "Le vent soulève la poussière sur la rue principale", "Le saloon résonne de rires et de verres", "La chaleur écrase la ville"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les cowboys gardent la main sur leur colt.",
      "Le saloon est agité, {suspect1} regarde autour de lui avec méfiance.",
      "On parle de {motif} dans tous les recoins de {la_lieu}.",
      "Un duel se prépare peut-être entre {suspect1} et {suspect2}.",
      "[INDICE] {indice} découvert près du saloon attise la curiosité.",
      "[TEMOIN] {temoin} dit avoir vu {suspect1} rôder dans {la_lieu}.",
      "Le vent soulève la poussière, l’ambiance est électrique.",
      "Tout le monde surveille tout le monde dans {la_lieu} ce soir."
    ],
    crimes: { /* ... inchangé ... */ }
  },

  contemporain: {
    lieux: [
      { nom: "open space", genre: "m" }, { nom: "rooftop", genre: "m" }, { nom: "cuisine du bureau", genre: "f" }, { nom: "salle de réunion", genre: "f" },
      { nom: "parking", genre: "m" }, { nom: "café du coin", genre: "m" }, { nom: "ascenseur", genre: "m" }
    ],
    victimes: getPersonnagesByCategorie('contemporain', 'victime').map(p => ({ nom: p.nom })),
    suspects: getPersonnagesByCategorie('contemporain', 'suspect').map(p => p.nom),
    temoins: getPersonnagesByCategorie('contemporain', 'temoin').map(p => ({ nom: p.nom })),
    indices: [
      "un smartphone brisé retrouvé sous un bureau", "une clé USB anonyme sur la table", "un badge d’accès oublié dans l’ascenseur"
    ],
    traitsVictimes: [
      "ambitieux", "secret", "populaire", "redouté"
    ],
    motifs: [
      "une promotion attendue", "un scoop gênant", "une histoire d'amour cachée", "un vol de données"
    ],
    armes: [
      "un couteau de cuisine", "du poison", "un câble électrique", "un mug cassé"
    ],
    ambiances: [
      "La musique s’élève depuis le rooftop", "La pluie tambourine sur les vitres du bureau", "Le bruit des klaxons résonne dans la rue"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les collègues se jaugent d’un œil inquiet.",
      "La fête au bureau commence, mais {suspect1} reste à l’écart.",
      "On évoque {motif} autour de la machine à café de {la_lieu}.",
      "Une réunion tendue vient de se terminer, chacun regagne sa place.",
      "[INDICE] {indice} vient d’être retrouvé dans {la_lieu}.",
      "[TEMOIN] {temoin} pense que {suspect1} cache quelque chose.",
      "Une panne d’électricité plonge {la_lieu} dans l’obscurité.",
      "Un bruit étrange retentit, tout le monde se fige."
    ],
    crimes: { /* ... inchangé ... */ }
  },

  futuriste: {
    lieux: [
      { nom: "station orbitale", genre: "f" }, { nom: "laboratoire", genre: "m" }, { nom: "cyber-café", genre: "m" },
      { nom: "dôme botanique", genre: "m" }, { nom: "soute", genre: "f" }, { nom: "cabine de pilotage", genre: "f" },
      { nom: "couloir stérile", genre: "m" }, { nom: "hangar à drones", genre: "m" }, { nom: "salle des machines", genre: "f" },
      { nom: "observatoire", genre: "m" }
    ],
    victimes: getPersonnagesByCategorie('futuriste', 'victime').map(p => ({ nom: p.nom })),
    suspects: getPersonnagesByCategorie('futuriste', 'suspect').map(p => p.nom),
    temoins: getPersonnagesByCategorie('futuriste', 'temoin').map(p => ({ nom: p.nom })),
    indices: [
      "un message crypté s'affiche sur l'écran principal", "une empreinte digitale non identifiée est relevée sur la console",
      "un composant électronique manque dans le réacteur", "une trace d'huile mène à l'issue de secours",
      "une carte d'accès est retrouvée près du sas", "un drone inactif dans un couloir", "un badge d'identification oublié sur la table"
    ],
    traitsVictimes: [
      "visionnaire", "calculateur", "instable", "secret", "innovant", "méconnu", "impatient", "arrogant", "solitaire", "charismatique"
    ],
    motifs: [
      "l’espionnage industriel", "une trahison amoureuse", "un piratage raté", "une quête de pouvoir", "la jalousie professionnelle",
      "un différend scientifique", "la peur d’un sabotage", "un conflit d’éthique"
    ],
    armes: [
      "un laser", "un nano-virus", "un scalpel énergisé", "un module saboté", "un drone d’entretien",
      "un câble à haute tension", "une seringue de protoxyde", "une capsule toxique", "un sabre plasma"
    ],
    ambiances: [
      "l’alerte rouge retentit", "les couloirs s'illuminent en bleu", "l'énergie fluctue dans la station",
      "le vaisseau tangue sous une micro-météorite", "la maintenance s'éternise", "le sas grince", "une panne d’IA inquiète l’équipage",
      "l’observatoire détecte une anomalie spatiale"
    ],
    intro: [
      "{ambiance} {dans_la_lieu}. Chacun travaille, chacun se méfie.",
      "L’équipage se réunit pour un rapport de mission. {suspect1} évite le regard de {suspect2}.",
      "Des tensions éclatent. Certains parlent de {motif}.",
      "L’IA centrale observe les moindres faits et gestes.",
      "[INDICE] {indice}. L’équipage échange des regards inquiets.",
      "[TEMOIN] Selon {temoin}, {suspect1} a agi de façon étrange près du sas.",
      "Une alerte de sécurité retentit. L’ambiance se tend.",
      "Une coupure d’électricité plonge la station dans la panique."
    ],
    crimes: { /* ... inchangé ... */ }
  },

  historique: {
    lieux: [
      { nom: "palais royal", genre: "m" }, { nom: "jardin", genre: "m" }, { nom: "salle du trône", genre: "f" }, { nom: "bibliothèque", genre: "f" },
      { nom: "chambre royale", genre: "f" }, { nom: "salon d’apparat", genre: "m" }, { nom: "cuisine des nobles", genre: "f" }
    ],
    victimes: getPersonnagesByCategorie('historique', 'victime').map(p => ({ nom: p.nom })),
    suspects: getPersonnagesByCategorie('historique', 'suspect').map(p => p.nom),
    temoins: getPersonnagesByCategorie('historique', 'temoin').map(p => ({ nom: p.nom })),
    indices: [
      "un sceptre brisé retrouvé dans la salle du trône", "une lettre secrète cachée dans la bibliothèque", "un bijou volé dans la chambre royale"
    ],
    traitsVictimes: [
      "historique", "puissant", "inspirant", "mystérieux"
    ],
    motifs: [
      "un complot politique", "une trahison amoureuse", "une rivalité de pouvoir", "un vol de secret"
    ],
    armes: [
      "un poignard", "du poison", "un chandelier", "une couronne piégée"
    ],
    ambiances: [
      "Les tambours de guerre résonnent loin", "La foule envahit la place principale", "Les chandelles vacillent dans la salle du trône"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les puissants s’observent et se méfient.",
      "Un grand bal débute, mais déjà {suspect1} semble contrarié.",
      "On murmure à propos de {motif} dans les couloirs de {la_lieu}.",
      "Une cérémonie officielle se prépare, la tension est palpable.",
      "[INDICE] {indice} vient d’être retrouvé, jetant le trouble.",
      "[TEMOIN] Selon {temoin}, {suspect1} a quitté {la_lieu} précipitamment.",
      "Un orage approche, chacun se demande ce qu’il va se passer.",
      "Les chroniqueurs prennent des notes, il y aura matière à scandale."
    ],
    crimes: { /* ... inchangé ... */ }
  }
};

const scenarioLibrary = {
  objectifs: {
    1: [
      "Dénichez le meurtrier avant qu’il ne frappe à nouveau.",
      "Trouvez l'assassin avant que la vérité ne soit effacée à jamais.",
      "Résolvez cette énigme en un temps limité pour sauver l’innocent."
    ],
    2: [
      "Deux coupables se cachent... à vous de les démasquer avant qu’ils ne s’enfuient.",
      "Découvrez l’identité des deux criminels avant qu’ils n’aient le temps de manipuler toute l’enquête.",
      "La complexité augmente : deux meurtriers, un seul mystère."
    ],
    3: [
      "Trois assassins, liés par un pacte secret, ont dissimulé leur crime derrière une toile de mensonges.",
      "Une trahison orchestrée par trois esprits machiavéliques secoue le domaine.",
      "Ils sont trois. Trois silhouettes dans l’ombre, unies par un mobile insondable."
    ]
  },
  durees: {
    court: [
      "Le temps presse, chaque minute compte dans cette course contre la montre.",
      "Une enquête rapide mais intense vous attend. Vos instincts devront primer sur vos doutes.",
      "La résolution doit être rapide pour empêcher un nouveau drame."
    ],
    moyen: [
      "Un temps équilibré pour réfléchir et agir.",
      "Une enquête qui mêle tension et réflexion.",
      "Le temps vous donne une marge, mais attention aux erreurs."
    ],
    long: [
      "Une longue enquête où chaque détail peut faire basculer l’affaire.",
      "Vous avez le temps d'explorer chaque piste en profondeur.",
      "Une énigme complexe qui nécessite patience et perspicacité."
    ]
  }
};

function categoriseDuree(minutes) {
  if (minutes <= 30) return "court";
  if (minutes <= 90) return "moyen";
  return "long";
}
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function replaceVars(tpl, variables) {
  return Object.entries(variables).reduce(
    (txt, [key, val]) => txt.replaceAll(key, escapeHtml(val)),
    tpl
  );
}

// --- Antirépétition stricte sur tous les éléments principaux ---
function tirageUnique(array, key, history, fieldName) {
  // Exclut tout élément qui a été utilisé dans l’un des derniers scénarios
  const used = new Set(history.map(s => s[fieldName]));
  const filtered = array.filter(el => {
    const val = typeof key === "function" ? key(el) : (el[key] ?? el);
    return !used.has(val);
  });
  return filtered.length ? randomItem(filtered) : randomItem(array);
}
function tirageTemplateUnique(array, history, fieldName) {
  // Exclut tout template déjà utilisé récemment
  const used = new Set(history.map(s => s[fieldName]));
  const filtered = array.filter(el => !used.has(el));
  return filtered.length ? randomItem(filtered) : randomItem(array);
}

function genererScenario() {
  let scenarioData;
  try {
    scenarioData = JSON.parse(localStorage.getItem("parametresPartie"));
  } catch {
    scenarioData = null;
  }
  const container = document.getElementById("scenarioContainer");

  if (scenarioData) {
    let periodeCle = scenarioData.periode;
    if (!univers[periodeCle]) {
      document.getElementById("scenarioContainer").innerHTML = "<p>Période inconnue. Impossible de générer un scénario pour cette époque.</p>";
      return;
    }
    const periodeData = univers[periodeCle];
    const nbJoueurs = parseInt(scenarioData.nombreJoueurs, 10);

    // Historique long pour antirépétition stricte
    let history = getScenarioHistory();
    let maxTry = 15, tryCount = 0, scenarioOk = false, scenarioObj;

    while (!scenarioOk && tryCount < maxTry) {
      tryCount++;

      // Tirages uniques sur chaque champ
      const lieuObj = tirageUnique(periodeData.lieux, "nom", history, "lieu");
      const victimeObj = tirageUnique(periodeData.victimes, "nom", history, "victime");
      const arme = tirageUnique(periodeData.armes, null, history, "arme");
      const ambiance = tirageUnique(periodeData.ambiances, null, history, "ambiance");
      const traitVictime = tirageUnique(periodeData.traitsVictimes, null, history, "traitVictime");
      const motif = tirageUnique(periodeData.motifs, null, history, "motif");

      // Suspects, témoins, indices
      const suspects = shuffleArray(periodeData.suspects.filter(sus => !victimeObj.nom.toLowerCase().includes(sus.toLowerCase())));
      const suspect1 = tirageUnique(suspects, null, history, "suspect1");
      const suspect2 = tirageUnique(suspects.filter(sus => sus !== suspect1), null, history, "suspect2");

      let temoinObj, temoin;
      if (nbJoueurs >= 4 && periodeData.temoins) {
        temoinObj = tirageUnique(periodeData.temoins, "nom", history, "temoin");
        temoin = temoinObj ? temoinObj.nom : undefined;
      }
      let indice = (nbJoueurs >= 3 && periodeData.indices) ? tirageUnique(periodeData.indices, null, history, "indice") : undefined;

      // Templates intro/crime uniques
      let introCandidates = periodeData.intro.filter((tpl) => {
        if (tpl.startsWith("[TEMOIN]")) return temoin;
        if (tpl.startsWith("[INDICE]")) return indice;
        return true;
      });
      const introTpl = tirageTemplateUnique(introCandidates, history, "introTpl").replace(/^\[(INDICE|TEMOIN)\]\s?/, "");

      let modeCrime = scenarioData.mode;
      if (!periodeData.crimes[modeCrime]) modeCrime = "classique";
      const crimeTemplates = periodeData.crimes[modeCrime].filter(tpl => {
        if (tpl.includes("{temoin}") && !temoin) return false;
        if (tpl.includes("{indice}") && !indice) return false;
        if (tpl.includes("{suspect2}") && !suspect2) return false;
        return true;
      });
      const crimeTpl = tirageTemplateUnique(crimeTemplates, history, "crimeTpl");

      const artLieu = getArticle(lieuObj.nom, { m: 'le', f: 'la' });
      const artDansLieu = articleDans(lieuObj.nom, artLieu);
      const artVictime = getArticle(victimeObj.nom, { m: 'le', f: 'la' });

      const variables = {
        "{lieu}": lieuObj.nom,
        "{la_lieu}": artLieu + (artLieu.endsWith("'") ? "" : " ") + lieuObj.nom,
        "{dans_la_lieu}": artDansLieu + " " + lieuObj.nom,
        "{victime}": victimeObj.nom,
        "{le_victime}": artVictime + (artVictime.endsWith("'") ? "" : " ") + victimeObj.nom,
        "{traitVictime}": traitVictime,
        "{motif}": motif,
        "{arme}": arme,
        "{ambiance}": ambiance,
        "{suspect1}": suspect1,
        "{suspect2}": suspect2
      };
      if (temoin) variables["{temoin}"] = temoin;
      if (indice) variables["{indice}"] = indice;

      const introduction = replaceVars(introTpl, variables);
      const crime = replaceVars(crimeTpl, variables);

      // Objectif/temps
      const objectif = tirageUnique(scenarioLibrary.objectifs[scenarioData.criminels] || scenarioLibrary.objectifs[1], null, history, "objectif");
      const dureeCat = categoriseDuree(scenarioData.duree);
      const detailsDuree = tirageUnique(scenarioLibrary.durees[dureeCat], null, history, "detailsDuree");

      // Vérification stricte : tout doit être différent
      scenarioObj = {
        lieu: lieuObj.nom,
        victime: victimeObj.nom,
        arme,
        ambiance,
        traitVictime,
        motif,
        suspect1,
        suspect2,
        temoin: temoin || "",
        indice: indice || "",
        introTpl,
        crimeTpl,
        introduction,
        crime,
        objectif,
        detailsDuree
      };

      scenarioOk = !history.some(h =>
        h.lieu === scenarioObj.lieu ||
        h.victime === scenarioObj.victime ||
        h.arme === scenarioObj.arme ||
        h.ambiance === scenarioObj.ambiance ||
        h.traitVictime === scenarioObj.traitVictime ||
        h.motif === scenarioObj.motif ||
        h.suspect1 === scenarioObj.suspect1 ||
        h.suspect2 === scenarioObj.suspect2 ||
        h.temoin === scenarioObj.temoin ||
        h.indice === scenarioObj.indice ||
        h.introTpl === scenarioObj.introTpl ||
        h.crimeTpl === scenarioObj.crimeTpl ||
        h.objectif === scenarioObj.objectif ||
        h.detailsDuree === scenarioObj.detailsDuree
      );

      if (!scenarioOk && tryCount === maxTry) {
        // On purge l'historique pour retrouver de la diversité
        history = [];
        tryCount = 0;
      }
    }

    // Ajout à l'historique
    addScenarioToHistory(scenarioObj);

    container.innerHTML = `
      <span id="regenScenarioBtn" style="cursor:pointer; float:right; font-size:1.8em;" title="Générer un autre scénario">📜</span>
      <h2>Introduction</h2>
      <p>${scenarioObj.introduction}</p>
      <h2>Le crime</h2>
      <p>${scenarioObj.crime}</p>
      <h2>Objectif général</h2>
      <p>${scenarioObj.objectif}</p>
      <h2>Détails du jeu</h2>
      <p>Mode de jeu : ${escapeHtml(scenarioData.mode)}</p>
      <p>Durée de la partie : ${escapeHtml(String(scenarioData.duree))} minutes — ${scenarioObj.detailsDuree}</p>
      <p>Période : ${escapeHtml(scenarioData.periode)}</p>
      <p>Nombre de joueurs : ${escapeHtml(String(scenarioData.nombreJoueurs))}</p>
      <p>Nombre de criminels : ${escapeHtml(String(scenarioData.criminels))}</p>
      <p>Mode criminels fantômes : ${scenarioData.criminelFantome ? "Oui" : "Non"}</p>
      <p>Avatars légendaires activés : ${scenarioData.avatarsLegendaires ? "Oui" : "Non"}</p>
      <div class="boutons-actions">
        <a class="gold-btn" href="salon.html">Lancement</a>
        <a class="gold-btn" href="creer-partie.html">Retour</a>
      </div>
      `;
    const regenBtn = document.getElementById("regenScenarioBtn");
    if (regenBtn) regenBtn.onclick = genererScenario;
  } else {
    document.getElementById("scenarioContainer").innerHTML = "<p>Aucune donnée de scénario trouvée.</p>";
  }
}

document.addEventListener("DOMContentLoaded", genererScenario);
