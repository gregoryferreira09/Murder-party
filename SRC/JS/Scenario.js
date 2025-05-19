// SRC/JS/Scenario.js

function getArticle(word, articles = { m: 'le', f: 'la' }) {
  if (!word) return '';
  word = word.trim();
  const firstLetter = word[0].toLowerCase();
  if ("aeiouyh".includes(firstLetter)) return "l'";
  const feminine = [
    "bibliothèque","gouvernante","salle","cave","chapelle","forêt","dimension","galerie","voix","technicienne","station","soute","cabine","ombre"
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

const univers = {
  victorien: {
    lieux: [
      { nom: "manoir", genre: "m" },
      { nom: "bibliothèque", genre: "f" },
      { nom: "salon", genre: "m" },
      { nom: "jardin", genre: "m" },
      { nom: "sous-sol", genre: "m" },
      { nom: "salle de bal", genre: "f" },
      { nom: "fumoir", genre: "m" }
    ],
    victimes: [
      { nom: "le comte Ashford", genre: "m" },
      { nom: "la gouvernante Wells", genre: "f" },
      { nom: "le colonel Rutherford", genre: "m" },
      { nom: "lady Emily", genre: "f" },
      { nom: "le majordome Carter", genre: "m" }
    ],
    suspects: [
      "le majordome Carter", "la gouvernante Wells", "lady Emily", "le colonel Rutherford"
    ],
    temoins: [
      { nom: "le jardinier Hopkins", genre: "m" },
      { nom: "la cuisinière Mrs. Doyle", genre: "f" },
      { nom: "la vieille Miss Carter", genre: "f" },
      { nom: "le palefrenier Giles", genre: "m" }
    ],
    indices: [
      "une montre cassée près d’un fauteuil",
      "un mouchoir monogrammé oublié sur le sol",
      "des traces de boue menant vers le sous-sol",
      "un verre de vin à moitié plein à l’odeur suspecte",
      "une lettre déchirée dans la cheminée"
    ],
    traitsVictimes: ["respecté", "craintif", "mystérieux", "détesté", "ambitieux", "très apprécié", "discret"],
    motifs: ["l’héritage", "la jalousie", "une ancienne rancune", "un secret inavoué", "l’ambition politique", "une dette de jeu"],
    armes: ["un chandelier", "une dague", "du poison", "un revolver", "une corde", "un coupe-papier"],
    ambiances: [
      "le tonnerre gronde au loin",
      "les invités masqués se perdent dans la fête",
      "le brouillard étreint le jardin",
      "le petit matin s’annonce trouble",
      "un dîner animé se prépare",
      "des éclats de voix résonnent dans la maison"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les secrets se murmurent, les regards s’évitent.",
      "Le manoir vibre d’une excitation étrange. {suspect1} semble préoccupé·e ce soir.",
      "Dans {la_lieu}, la tension monte. Des rumeurs courent sur {motif}.",
      "Un bal masqué s’organise : la jalousie couve entre {suspect1} et {suspect2}.",
      "[INDICE] La soirée commence dans {la_lieu}. Déjà, {indice}.",
      "[TEMOIN] Selon {temoin}, l’attitude de {suspect1} est étrange ce soir."
    ],
    crimes: {
      classique: [
        "Un cri retentit : {victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés. {indice}",
        "{victime} a été assassiné·e {dans_la_lieu}. {temoin} affirme avoir vu {suspect1} rôder dans le secteur.",
        "La découverte est brutale : {victime} gît {dans_la_lieu}, la scène est figée. Rapidement, tous se tournent vers {suspect1}.",
        "{victime} a succombé à une attaque violente {dans_la_lieu}. {temoin} est bouleversé·e.",
        "Le drame s'est joué {dans_la_lieu} : {victime} a été tué·e. {indice}"
      ],
      poison: [
        "Le repas tourne au drame : {victime} s’effondre, empoisonné·e. {indice}",
        "{victime} n’a pas survécu à une gorgée de trop {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "Le médecin du manoir parle d’empoisonnement. {suspect1} et {suspect2} se défaussent."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}. {temoin} l’a vu quitter la pièce précipitamment.",
        "La famille s’inquiète : {victime} n’a pas reparu depuis la veille. {indice}",
        "{victime} a disparu sans laisser de traces {dans_la_lieu}. {suspect1} reste silencieux."
      ],
      vol: [
        "Un bijou a disparu, et {victime} donne l’alerte. {temoin} dit avoir vu {suspect1} rôder dans les environs.",
        "Dans la confusion, {victime} remarque la disparition d’un objet précieux {dans_la_lieu}. {indice}",
        "Un vol audacieux déstabilise tout le monde. {suspect1} est immédiatement suspecté."
      ]
    }
  },
  medieval: {
    lieux: [
      { nom: "château", genre: "m" },
      { nom: "grande salle", genre: "f" },
      { nom: "forêt", genre: "f" },
      { nom: "cave", genre: "f" },
      { nom: "donjon", genre: "m" },
      { nom: "chapelle", genre: "f" },
      { nom: "remparts", genre: "m" }
    ],
    victimes: [
      { nom: "le seigneur de Montfaucon", genre: "m" },
      { nom: "la servante Ysabeau", genre: "f" },
      { nom: "le chevalier Gaspard", genre: "m" },
      { nom: "la dame Aliénor", genre: "f" },
      { nom: "le bouffon Arthus", genre: "m" }
    ],
    suspects: [
      "la servante Ysabeau", "le chevalier Gaspard", "la dame Aliénor", "le bouffon Arthus"
    ],
    temoins: [
      { nom: "le ménestrel Colin", genre: "m" },
      { nom: "le forgeron Hugues", genre: "m" },
      { nom: "le prévôt Thomas", genre: "m" },
      { nom: "la lavandière Mahaut", genre: "f" }
    ],
    indices: [
      "des traces de sang mènent vers la cave",
      "un médaillon brisé a été retrouvé sous une table",
      "un morceau de parchemin caché dans la paillasse",
      "une botte couverte de boue près de la porte",
      "une plume rare laissée sur la scène"
    ],
    traitsVictimes: ["loyal", "superstitieux", "redouté", "manipulateur", "intrigant", "héroïque"],
    motifs: ["la vengeance", "un héritage contesté", "une histoire d’amour interdite", "un serment brisé", "une prophétie"],
    armes: ["une épée", "une arbalète", "du poison", "une dague rouillée", "un gourdin"],
    ambiances: [
      "le banquet bat son plein",
      "une tempête gronde au-dehors",
      "la lune éclaire faiblement les couloirs",
      "la cloche du village résonne",
      "la garde s’est assoupie",
      "les flammes vacillent dans la cheminée"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les dames murmurent, les seigneurs s’observent.",
      "La tension est à son comble dans la cour. {suspect1} semble éviter {suspect2}.",
      "Dans {la_lieu}, les conversations se font secrètes. Certains évoquent {motif}.",
      "Un festin débute, mais déjà la suspicion plane entre {suspect1} et {suspect2}.",
      "[INDICE] {indice}. L’atmosphère s’alourdit dans {la_lieu}.",
      "[TEMOIN] {temoin} pense avoir surpris {suspect1} à l’écart, l’air troublé."
    ],
    crimes: {
      classique: [
        "Un cri fend la nuit : {victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} plantée dans le dos. {indice}",
        "Le chaos s’empare de la cour : {victime} vient d’être assassiné·e {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "La stupeur est totale : {victime} gît {dans_la_lieu}. Tous se tournent vers {suspect1}.",
        "{victime} a succombé à une attaque brutale {dans_la_lieu}. {temoin} est bouleversé·e.",
        "Le drame s'est joué {dans_la_lieu} : {victime} a été tué·e. {indice}"
      ],
      poison: [
        "Le festin vire au cauchemar : {victime} s’effondre, empoisonné·e. {indice}",
        "{victime} n’a pas survécu à une gorgée fatale {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "Le médecin du château parle d’empoisonnement. {suspect1} et {suspect2} s’accusent mutuellement."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}. {temoin} l’a aperçu quitter la pièce à la hâte.",
        "La cour s’inquiète : {victime} n’a pas reparu depuis la veille. {indice}",
        "{victime} a disparu sans laisser de traces {dans_la_lieu}. {suspect1} se renferme."
      ],
      vol: [
        "Le trésor du château a disparu. {temoin} dit avoir vu {suspect1} rôder dans les couloirs.",
        "Dans la confusion, {victime} remarque la disparition d’un objet précieux {dans_la_lieu}. {indice}",
        "Un vol audacieux choque la noblesse. {suspect1} est immédiatement suspecté."
      ]
    }
  },
  futuriste: {
    lieux: [
      { nom: "station orbitale", genre: "f" },
      { nom: "laboratoire", genre: "m" },
      { nom: "cyber-café", genre: "m" },
      { nom: "dôme botanique", genre: "m" },
      { nom: "soute", genre: "f" },
      { nom: "cabine de pilotage", genre: "f" },
      { nom: "couloir stérile", genre: "m" }
    ],
    victimes: [
      { nom: "le Dr Novak", genre: "m" },
      { nom: "l'androïde JAX", genre: "m" },
      { nom: "la pilote Vega", genre: "f" },
      { nom: "le directeur Kwan", genre: "m" },
      { nom: "la technicienne Mia", genre: "f" }
    ],
    suspects: [
      "la technicienne Mia", "le directeur Kwan", "la pilote Vega", "l'androïde JAX"
    ],
    temoins: [
      { nom: "le robot S-19", genre: "m" },
      { nom: "l’assistante IA EVA", genre: "f" },
      { nom: "le technicien Boris", genre: "m" },
      { nom: "la biologiste Lin", genre: "f" }
    ],
    indices: [
      "un message crypté s'affiche sur l'écran principal",
      "une empreinte digitale non identifiée est relevée sur la console",
      "un composant électronique manque dans le réacteur",
      "une trace d'huile mène à l'issue de secours",
      "une carte d'accès est retrouvée près du sas"
    ],
    traitsVictimes: ["visionnaire", "calculateur", "instable", "secret", "innovant", "méconnu"],
    motifs: ["l’espionnage industriel", "une trahison amoureuse", "un piratage raté", "une quête de pouvoir", "la jalousie professionnelle"],
    armes: ["un laser", "un nano-virus", "un scalpel énergisé", "un module saboté", "un drone d’entretien"],
    ambiances: [
      "l’alerte rouge retentit",
      "les couloirs s'illuminent en bleu",
      "l'énergie fluctue dans la station",
      "le vaisseau tangue sous une micro-météorite",
      "la maintenance s'éternise"
    ],
    intro: [
      "{ambiance} {dans_la_lieu}. Chacun travaille, chacun se méfie.",
      "L’équipage se réunit pour un rapport de mission. {suspect1} évite le regard de {suspect2}.",
      "Des tensions éclatent. Certains parlent de {motif}.",
      "L’IA centrale observe les moindres faits et gestes.",
      "[INDICE] {indice}. L’équipage échange des regards inquiets.",
      "[TEMOIN] Selon {temoin}, {suspect1} a agi de façon étrange près du sas."
    ],
    crimes: {
      classique: [
        "Un cri retentit : {victime} est retrouvé·e sans vie {dans_la_lieu}, frappé·e par {arme}. {indice}",
        "La stupeur gagne l’équipage : {victime} a succombé à une attaque fatale. {temoin} accuse {suspect1}.",
        "Tout le monde se tourne vers {suspect1}, vu·e non loin de la scène.",
        "{victime} a été tué·e. {temoin} a intercepté une transmission suspecte.",
        "Le drame s'est joué {dans_la_lieu} : {victime} a été éliminé·e. {indice}"
      ],
      poison: [
        "Une contamination soudaine frappe : {victime} s’effondre, victime d'un nano-virus. {indice}",
        "{victime} n’a pas survécu à une injection mortelle {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "Un traceur chimique révèle la présence de poison. {suspect1} est interrogé·e."
      ],
      disparition: [
        "L’alarme signale la disparition de {victime}. {temoin} a vu une silhouette s’éloigner {dans_la_lieu}.",
        "Plus de trace de {victime} : {suspect1} soupçonne un acte de sabotage.",
        "{victime} a disparu. {indice}"
      ],
      vol: [
        "Un module clé est dérobé : {temoin} dit avoir vu {suspect1} près de la zone.",
        "L'IA détecte un accès non autorisé. {indice}",
        "Un vol met en péril la mission. {suspect1} est suspecté."
      ]
    }
  },
  autre: {
    lieux: [
      { nom: "salle étrange", genre: "f" },
      { nom: "dimension inconnue", genre: "f" },
      { nom: "galerie distordue", genre: "f" },
      { nom: "laboratoire du temps", genre: "m" }
    ],
    victimes: [
      { nom: "l’énigmatique X", genre: "m" },
      { nom: "le voyageur temporel", genre: "m" },
      { nom: "la voix sans corps", genre: "f" },
      { nom: "le maître du jeu", genre: "m" }
    ],
    suspects: [
      "le voyageur temporel", "la voix sans corps", "l’énigmatique X", "le maître du jeu"
    ],
    temoins: [
      { nom: "le reflet spectral", genre: "m" },
      { nom: "la voix d’outre-espace", genre: "f" },
      { nom: "l’ombre du passé", genre: "f" },
      { nom: "l’observateur Mu", genre: "m" }
    ],
    indices: [
      "une horloge fondue marque minuit treize",
      "un écho temporel trouble la pièce",
      "une faille s’ouvre au centre du sol",
      "un fragment de mémoire flotte dans l’air",
      "une énigme gravée sur les murs pulse faiblement"
    ],
    traitsVictimes: ["insaisissable", "omniscient", "paranoïaque", "double", "hors du temps"],
    motifs: ["une anomalie temporelle", "l’envie de pouvoir", "la folie pure", "l’équilibre de l’univers"],
    armes: ["un artefact", "une onde mentale", "une faille dimensionnelle", "un miroir fractal"],
    ambiances: [
      "alors que la réalité vacille",
      "sous des lumières irréelles",
      "au moment du grand passage",
      "quand le temps s’arrête"
    ],
    intro: [
      "{ambiance} {dans_la_lieu}. Les lois de la causalité semblent altérées.",
      "Une énigme plane sur l’assemblée. {suspect1} observe {suspect2} d’un air méfiant.",
      "Les souvenirs semblent s’effacer. Certains parlent de {motif}.",
      "Chaque instant, la dimension se reconfigure.",
      "[INDICE] {indice} survient soudain, glaçant l’assemblée.",
      "[TEMOIN] Selon {temoin}, la disparition de {suspect1} n’est pas un hasard."
    ],
    crimes: {
      classique: [
        "Un cri déformé retentit : {victime} n’est plus {dans_la_lieu}. {indice}",
        "La réalité vacille : {victime} s’effondre, frappé·e par {arme}. {temoin} prétend avoir vu {suspect1}.",
        "On accuse {suspect1}, mais la vérité vacille.",
        "{victime} disparaît sans explication. {indice}",
        "Un artefact disparu bouleverse {la_lieu}."
      ],
      poison: [
        "Un breuvage inconnu empoisonne {victime} {dans_la_lieu}. {indice}",
        "On soupçonne {arme} d’avoir altéré l’esprit de {victime} {dans_la_lieu}. {temoin} murmure des avertissements.",
        "{suspect1} se tait, mais tout le monde le regarde."
      ],
      disparition: [
        "{victime} s’est volatilisé·e {dans_la_lieu}. {temoin} croit avoir vu une silhouette franchir une faille.",
        "Nul ne sait où ni quand {victime} a disparu. {indice}",
        "Une onde mentale efface les souvenirs de {temoin}."
      ],
      vol: [
        "Un objet d’une importance capitale disparaît {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "Dans {la_lieu}, {arme} a été volé pendant que {victime} menait une expérience.",
        "Un paradoxe menace tout équilibre. {suspect1} est désigné·e, mais tout le monde doute."
      ]
    }
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

    const nbJoueurs = parseInt(scenarioData.nombreJoueurs, 10);

    const lieuObj = randomItem(periodeData.lieux);
    const victimeObj = randomItem(periodeData.victimes);
    const traitVictime = randomItem(periodeData.traitsVictimes);
    const motif = randomItem(periodeData.motifs);
    const arme = randomItem(periodeData.armes);
    const ambiance = randomItem(periodeData.ambiances);

    const artLieu = getArticle(lieuObj.nom, { m: 'le', f: 'la' });
    const artDansLieu = articleDans(lieuObj.nom, artLieu);
    const artVictime = getArticle(victimeObj.nom, { m: 'le', f: 'la' });

    const suspects = [...periodeData.suspects];
    const suspectList = suspects.filter(sus => !victimeObj.nom.toLowerCase().includes(sus.toLowerCase()));
    const suspect1 = randomItem(suspectList);
    const suspect2 = randomItem(suspectList.filter(sus => sus !== suspect1));

    let temoinObj, temoin;
    if (nbJoueurs >= 4 && periodeData.temoins) {
      temoinObj = randomItem(periodeData.temoins);
      temoin = temoinObj.nom;
    }
    let indice = (nbJoueurs >= 3 && periodeData.indices) ? randomItem(periodeData.indices) : undefined;

    let introCandidates = periodeData.intro.filter((tpl) => {
      if (tpl.startsWith("[TEMOIN]")) return temoin;
      if (tpl.startsWith("[INDICE]")) return indice;
      return true;
    });
    const introTpl = randomItem(introCandidates).replace(/^\[(INDICE|TEMOIN)\]\s?/, "");

    let modeCrime = scenarioData.mode;
    if (!periodeData.crimes[modeCrime]) modeCrime = "classique";
    const crimeTemplates = periodeData.crimes[modeCrime].filter(tpl => {
      if (tpl.includes("{temoin}") && !temoin) return false;
      if (tpl.includes("{indice}") && !indice) return false;
      if (tpl.includes("{suspect2}") && !suspect2) return false;
      return true;
    });
    const crimeTpl = randomItem(crimeTemplates);

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

    const regenBtn = document.getElementById("regenScenarioBtn");
    if (regenBtn) {
      regenBtn.onclick = genererScenario;
    }
  } else {
    container.innerHTML = "<p>Aucune donnée de scénario trouvée.</p>";
  }
}

document.addEventListener("DOMContentLoaded", genererScenario);
