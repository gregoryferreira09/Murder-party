// SRC/JS/Scenario.js

// Univers étendu et immersif avec de nombreux templates
const univers = {
  victorien: {
    lieux: ["manoir", "bibliothèque", "salon", "jardin", "sous-sol", "salle de bal", "fumoir"],
    victimes: ["le comte Ashford", "la gouvernante Wells", "le colonel Rutherford", "lady Emily", "le majordome Carter"],
    traitsVictimes: ["respecté", "craintif", "mystérieux", "détesté", "ambitieux", "très apprécié", "discret"],
    motifs: ["l’héritage", "la jalousie", "une ancienne rancune", "un secret inavoué", "l’ambition politique", "une dette de jeu"],
    armes: ["un chandelier", "une dague", "du poison", "un revolver", "une corde", "un coupe-papier"],
    ambiances: [
      "une nuit d’orage",
      "pendant le bal masqué",
      "alors que le brouillard envahit la propriété",
      "au petit matin",
      "lors du dîner",
      "durant une dispute animée"
    ],
    crimes: {
      classique: [
        "Dans la {lieu}, {victime} a été retrouvé·e mort·e, frappé·e avec {arme} alors que {ambiance}. Motif suspecté : {motif}.",
        "Le manoir est en émoi : {victime} a été tué·e par {arme} dans la {lieu}, probablement à cause de {motif}.",
        "{victime} gît sans vie dans la {lieu}, {arme} à la main, sous le regard choqué des invités.",
        "Un cri a retenti : dans la {lieu}, {victime} repose, victime d'un crime motivé par {motif}.",
        "On dit que {victime} a été vu·e vivant·e pour la dernière fois dans la {lieu}, peu avant le drame."
      ],
      poison: [
        "Du poison a été discrètement versé dans la boisson de {victime} lors de {ambiance} dans la {lieu}.",
        "Le médecin du manoir soupçonne un empoisonnement : {victime} s’est effondré·e dans la {lieu} après avoir bu un verre suspect.",
        "Un parfum amer flottait dans la {lieu} : {victime} n’a pas survécu à ce qui semblait être {motif}."
      ],
      disparition: [
        "{victime} a disparu sans laisser de traces dans la {lieu}. {ambiance}.",
        "Personne ne sait où est passé·e {victime}, vu·e pour la dernière fois dans la {lieu} alors que {ambiance}.",
        "La famille s’inquiète : {victime} reste introuvable, et la {lieu} semble cacher un sombre secret."
      ],
      vol: [
        "Un vol audacieux a eu lieu au cœur de la {lieu}, un bijou manque et {victime} a donné l’alerte.",
        "Dans la {lieu}, un objet précieux a disparu sous les yeux de {victime}, qui paraît bouleversé·e.",
        "On suspecte {victime} d’avoir assisté à un vol dans la {lieu}, mais tout le monde nie avoir vu quoi que ce soit."
      ]
    },
    intro: [
      "Londres, 1892. {ambiance} dans la {lieu}, {victime}, réputé·e pour être {traitVictime}, attire tous les regards.",
      "Une soirée mondaine bat son plein dans la {lieu} : {victime} semble préoccupé·e par {motif}.",
      "{ambiance} enveloppe la {lieu}, où {victime}, célèbre pour son histoire de {motif}, est présent·e.",
      "Le manoir s'anime : {victime}, {traitVictime}, déambule dans la {lieu} sans se douter du danger.",
      "Dans la {lieu}, les convives chuchotent sur {victime}, soupçonné·e d’être impliqué·e dans {motif}."
    ]
  },
  medieval: {
    lieux: ["château", "grande salle", "forêt", "cave", "donjon", "chapelle", "remparts"],
    victimes: ["le seigneur de Montfaucon", "la servante Ysabeau", "le chevalier Gaspard", "la dame Aliénor", "le bouffon Arthus"],
    traitsVictimes: ["loyal", "superstitieux", "redouté", "manipulateur", "intrigant", "héroïque"],
    motifs: ["la vengeance", "un héritage contesté", "une histoire d’amour interdite", "un serment brisé", "une prophétie"],
    armes: ["une épée", "une arbalète", "du poison", "une dague rouillée", "un gourdin"],
    ambiances: [
      "un banquet agité",
      "une tempête gronde au-dehors",
      "la lune éclaire faiblement les couloirs",
      "la cloche du village résonne",
      "lorsque la garde dormait"
    ],
    crimes: {
      classique: [
        "Le corps de {victime} gît dans la {lieu}, marqué par une lutte violente et {arme} encore plantée.",
        "Dans la {lieu}, un cri déchire la nuit : {victime} a été frappé·e alors que {ambiance}.",
        "La {lieu} est en émoi après la découverte du cadavre de {victime}, probablement à cause de {motif}.",
        "Un duel a mal tourné : {victime} a péri dans la {lieu}, {arme} à la main."
      ],
      poison: [
        "Des herbes toxiques ont été versées dans le repas de {victime} lors de {ambiance} dans la {lieu}.",
        "Un breuvage suspect a eu raison de {victime} dans la {lieu}, personne n’a rien vu.",
        "Un empoisonnement : {victime} s’est effondré·e dans la {lieu} après un repas partagé."
      ],
      disparition: [
        "{victime} s’est volatilisé·e dans la {lieu}, laissant son épée derrière lui·elle.",
        "On murmure que {victime} a été vu·e pour la dernière fois dans la {lieu}, alors que {ambiance}.",
        "La {lieu} cache un mystère : {victime} n’a pas reparu depuis la veille."
      ],
      vol: [
        "Un artefact sacré a disparu mystérieusement de la {lieu} alors que {victime} assurait la garde.",
        "Le coffre du château a été dérobé dans la {lieu}, sous les yeux de {victime}.",
        "Un vol a été signalé dans la {lieu} : {victime} a donné l’alerte."
      ]
    },
    intro: [
      "En l'an de grâce 1247, la {lieu} retentit d'une tragédie. {ambiance}. {victime}, connu·e pour être {traitVictime}, semble lié·e à une histoire de {motif}.",
      "Un banquet débute dans la {lieu}, où {victime} attire l’attention de la cour.",
      "Les remparts bruissent de rumeurs : {victime}, {traitVictime}, rôde dans la {lieu}.",
      "La {lieu} s’agite alors que {ambiance}. {victime} semble inquiet·ète."
    ]
  },
  futuriste: {
    lieux: ["station orbitale", "laboratoire", "cyber-café", "dôme botanique", "soute", "cabine de pilotage", "couloir stérile"],
    victimes: ["le Dr Novak", "l'androïde JAX", "la pilote Vega", "le directeur Kwan", "la technicienne Mia"],
    traitsVictimes: ["visionnaire", "calculateur", "instable", "secret", "innovant", "méconnu"],
    motifs: ["l’espionnage industriel", "une trahison amoureuse", "un piratage raté", "une quête de pouvoir", "la jalousie professionnelle"],
    armes: ["un laser", "un nano-virus", "un scalpel énergisé", "un module saboté", "un drone d’entretien"],
    ambiances: [
      "alors que l’alerte rouge retentit",
      "dans la pénombre du sas",
      "en plein transfert d'énergie",
      "pendant la maintenance",
      "lors d'une coupure de courant"
    ],
    crimes: {
      classique: [
        "{victime} a été retrouvé·e désintégré·e dans la {lieu}, probablement à cause de {arme}.",
        "Une lutte silencieuse s’est déroulée dans la {lieu} : {victime} n’a pas survécu à {arme}.",
        "La sécurité enquête : {victime} gît dans la {lieu}, {arme} à proximité.",
        "Un acte de sabotage : {victime} a péri dans la {lieu} alors que {ambiance}."
      ],
      poison: [
        "Un nano-virus a été injecté dans le système de {victime} dans la {lieu}, provoquant une mort indétectable.",
        "Le laboratoire a été contaminé : {victime} s’est effondré·e lors de {ambiance}.",
        "Un empoisonnement cybernétique a frappé {victime} dans la {lieu}."
      ],
      disparition: [
        "{victime} s’est volatilisé·e de la {lieu}, laissant derrière lui·elle une énigme cybernétique.",
        "Un signal de détresse a été capté depuis la {lieu} : impossible de retrouver {victime}.",
        "La station cherche {victime}, disparu·e alors que {ambiance}."
      ],
      vol: [
        "Le cœur du réacteur a été dérobé dans la {lieu} sous la garde de {victime}.",
        "Un module essentiel a disparu dans la {lieu}, {victime} est suspecté·e.",
        "Alarme : un vol a été signalé dans la {lieu}, {victime} était de faction."
      ]
    },
    intro: [
      "An 2150. {ambiance} dans la {lieu}, {victime}, réputé·e pour être {traitVictime}, suscite les soupçons.",
      "La station orbitale s’agite : {victime}, {traitVictime}, a été vu·e dans la {lieu} avant l’incident.",
      "Un silence étrange règne dans la {lieu}, où {victime} travaille sur un projet lié à {motif}.",
      "Le capitaine convoque l'équipage : {victime}, {traitVictime}, n'est pas à son poste dans la {lieu}."
    ]
  },
  autre: {
    lieux: ["salle étrange", "dimension inconnue", "galerie distordue", "laboratoire du temps"],
    victimes: ["l’énigmatique X", "le voyageur temporel", "la voix sans corps", "le maître du jeu"],
    traitsVictimes: ["insaisissable", "omniscient", "paranoïaque", "double", "hors du temps"],
    motifs: ["une anomalie temporelle", "l’envie de pouvoir", "la folie pure", "l’équilibre de l’univers"],
    armes: ["un artefact", "une onde mentale", "une faille dimensionnelle", "un miroir fractal"],
    ambiances: [
      "alors que la réalité vacille",
      "sous des lumières irréelles",
      "au moment du grand passage",
      "quand le temps s’arrête"
    ],
    crimes: {
      classique: [
        "Un corps, peut-être celui de {victime}, a été retrouvé dans la {lieu}, la cause de la mort défiant toute logique.",
        "Dans la {lieu}, {arme} a frappé sans témoin, {ambiance}.",
        "Un cri déformé retentit : {victime} n’est plus dans la {lieu}."
      ],
      poison: [
        "Un breuvage inconnu a été empoisonné dans la {lieu}, affectant {victime}.",
        "On soupçonne {arme} d’avoir altéré l’esprit de {victime} dans la {lieu}."
      ],
      disparition: [
        "{victime} s’est volatilisé·e dans la {lieu}, sans la moindre explication.",
        "Nul ne sait où ni quand {victime} a disparu : la {lieu} semble en être la clé."
      ],
      vol: [
        "Un objet d’une importance capitale a disparu dans la {lieu}, bouleversant le destin de {victime}.",
        "Dans la {lieu}, {arme} a été volé pendant que {victime} menait une expérience."
      ]
    },
    intro: [
      "Une atmosphère mystérieuse plane sur la {lieu}, tandis que {victime}, reconnu·e pour être {traitVictime}, vient de subir les conséquences de {motif}.",
      "Rien n'est réel ici : {ambiance} dans la {lieu}, {victime} s’interroge sur la nature de l’univers.",
      "Des lois inconnues régissent la {lieu}, où {victime} poursuit une quête liée à {motif}."
    ]
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

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function categoriseDuree(minutes) {
  if (minutes <= 30) return "court";
  if (minutes <= 90) return "moyen";
  return "long";
}

// Sécurité XSS sur le texte injecté
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Remplacement des variables dans un template, avec échappement
function replaceVars(tpl, variables) {
  return Object.entries(variables).reduce(
    (txt, [key, val]) => txt.replaceAll(key, escapeHtml(val)),
    tpl
  );
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
    if (periodeCle === "autre" && scenarioData.periodeAutre) {
      periodeCle = "autre";
    }
    if (!univers[periodeCle]) periodeCle = "autre";
    const periodeData = univers[periodeCle];

    // Tirage cohérent de tous les éléments
    const lieu = randomItem(periodeData.lieux);
    const victime = randomItem(periodeData.victimes);
    const traitVictime = randomItem(periodeData.traitsVictimes);
    const motif = randomItem(periodeData.motifs);
    const arme = randomItem(periodeData.armes);
    const ambiance = randomItem(periodeData.ambiances);

    let modeCrime = scenarioData.mode;
    if (!periodeData.crimes[modeCrime]) modeCrime = "classique";
    const crimeTpl = randomItem(periodeData.crimes[modeCrime]);
    const introTpl = randomItem(periodeData.intro);

    // Remplacement de toutes les variables dynamiques
    const variables = {
      "{lieu}": lieu,
      "{victime}": victime,
      "{traitVictime}": traitVictime,
      "{motif}": motif,
      "{arme}": arme,
      "{ambiance}": ambiance
    };

    const introduction = replaceVars(introTpl, variables);
    const crime = replaceVars(crimeTpl, variables);
    const objectif = randomItem(scenarioLibrary.objectifs[scenarioData.criminels] || scenarioLibrary.objectifs[1]);
    const dureeCat = categoriseDuree(scenarioData.duree);
    const detailsDuree = randomItem(scenarioLibrary.durees[dureeCat]);

  container.innerHTML = `
  <span id="regenScenarioBtn" style="cursor:pointer; float:right; font-size:1.8em;" title="Générer un autre scénario">📜</span>

  <h2>Introduction</h2>
  <p>${introduction}</p>

  <h2>Le crime</h2> 
  <p>${crime}</p> 

  <h2>Objectif général</h2> 
  <p>${objectif}</p> 

  <h2>Détails du jeu</h2> 
  <p>Mode de jeu : ${escapeHtml(scenarioData.mode)}</p> 
  <p>Durée de la partie : ${escapeHtml(String(scenarioData.duree))} minutes — ${detailsDuree}</p> 
  <p>Période : ${escapeHtml(periodeCle)}</p> 
  <p>Nombre de joueurs : ${escapeHtml(String(scenarioData.nombreJoueurs))}</p> 
  <p>Nombre de criminels : ${escapeHtml(String(scenarioData.criminels))}</p> 
  <p>Mode criminels fantômes : ${scenarioData.criminelFantome ? "Oui" : "Non"}</p> 
  <p>Avatars légendaires activés : ${scenarioData.avatarsLegendaires ? "Oui" : "Non"}</p>
  <div class="boutons-actions">
    <a class="gold-btn" href="salon.html">Lancement</a> 
    <a class="gold-btn" href="creer-partie.html">Retour</a> 
  </div>
`;

    // Action bouton molette
    const regenBtn = document.getElementById("regenScenarioBtn");
    if (regenBtn) {
      regenBtn.onclick = genererScenario;
    }
  } else {
    container.innerHTML = "<p>Aucune donnée de scénario trouvée.</p>";
  }
}

// Un seul DOMContentLoaded !
document.addEventListener("DOMContentLoaded", genererScenario);
// Un seul DOMContentLoaded !
document.addEventListener("DOMContentLoaded", genererScenario);
