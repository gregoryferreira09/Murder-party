// SRC/JS/Scenario.js

// Utilitaires pour articles en français (pour éviter "de le", "dans la le", etc.)
function getArticle(word, articles = { m: 'le', f: 'la' }) {
  if (!word) return '';
  word = word.trim();
  // Exceptions manuelles (optionnel)
  if (word.toLowerCase().startsWith("église") || word.toLowerCase().startsWith("arène")) return "l'";
  const firstLetter = word[0].toLowerCase();
  if ("aeiouyh".includes(firstLetter)) return "l'";
  // Masculin/féminin simple
  // On pourra affiner avec une base plus complète si besoin
  // Quelques mots connus :
  const feminine = [
    "bibliothèque","gouvernante","salle","cave","chapelle","forêt","remparts","dimension","galerie","voix","technicienne","station","soute","cabine"
  ];
  const wordLC = word.toLowerCase();
  if (feminine.some(x => wordLC.startsWith(x))) return articles.f;
  return articles.m;
}
function articleDe(word, article) {
  if (article === "le") return "du";
  if (article === "la") return "de la";
  if (article === "l'") return "de l'";
  return "de";
}
function articleDans(word, article) {
  if (article === "le") return "dans le";
  if (article === "la") return "dans la";
  if (article === "l'") return "dans l'";
  return "dans";
}

// Data univers + témoins/indices adaptés
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
    traitsVictimes: ["respecté", "craintif", "mystérieux", "détesté", "ambitieux", "très apprécié", "discret"],
    motifs: ["l’héritage", "la jalousie", "une ancienne rancune", "un secret inavoué", "l’ambition politique", "une dette de jeu"],
    armes: ["un chandelier", "une dague", "du poison", "un revolver", "une corde", "un coupe-papier"],
    ambiances: [
      "une nuit d’orage",
      "le bal masqué bat son plein",
      "le brouillard envahit la propriété",
      "au petit matin",
      "durant le dîner",
      "une dispute animée éclate"
    ],
    temoins: [
      { nom: "le jardinier Hopkins", genre: "m" },
      { nom: "la cuisinière Mrs. Doyle", genre: "f" },
      { nom: "la vieille Miss Carter", genre: "f" },
      { nom: "le palefrenier Giles", genre: "m" }
    ],
    indices: [
      "une montre cassée a été retrouvée près du corps",
      "un mouchoir monogrammé gisait dans la pièce",
      "des traces de boue menaient vers le sous-sol",
      "un verre de vin à moitié plein portait une étrange odeur",
      "une lettre déchirée était cachée dans la cheminée"
    ],
    intro: [
      "Londres, 1892. {ambiance} dans {la_lieu}, {victime}, réputé·e pour être {traitVictime}, attire tous les regards.",
      "Une soirée mondaine bat son plein dans {la_lieu} : {victime} semble préoccupé·e par {motif}.",
      "{ambiance} enveloppe {la_lieu}, où {victime}, célèbre pour son histoire de {motif}, est présent·e.",
      "Le manoir s'anime : {victime}, {traitVictime}, déambule dans {la_lieu} sans se douter du danger.",
      "Dans {la_lieu}, les convives chuchotent au sujet de {victime}, soupçonné·e d’être impliqué·e dans {motif}.",
      // Indice (min 3 joueurs)
      "[INDICE] Le brouillard s'épaissit : {victime} est retrouvé·e dans {la_lieu} ; {indice}.",
      // Temoin (min 4 joueurs)
      "[TEMOIN] Soudain, un cri. Silence. {victime} n’est plus. Selon {temoin}, une silhouette fuyait {la_lieu}."
    ],
    crimes: {
      classique: [
        "Dans {la_lieu}, {victime} a été retrouvé·e mort·e, frappé·e avec {arme} alors que {ambiance}. Motif suspecté : {motif}.",
        "Le manoir est en émoi : {victime} a été tué·e par {arme} {dans_la_lieu}, probablement à cause de {motif}.",
        "{victime} gît sans vie {dans_la_lieu}, {arme} à la main, sous le regard choqué des invités.",
        "Un cri a retenti : {dans_la_lieu}, {victime} repose, victime d'un crime motivé par {motif}.",
        "On dit que {victime} a été vu·e vivant·e pour la dernière fois {dans_la_lieu}, peu avant le drame."
      ],
      poison: [
        "Du poison a été discrètement versé dans le verre de {victime} durant {ambiance} {dans_la_lieu}.",
        "Le médecin du manoir soupçonne un empoisonnement : {victime} s’est effondré·e {dans_la_lieu} après avoir bu un verre suspect.",
        "Une odeur amère flottait {dans_la_lieu} : {victime} n’a pas survécu à ce qui semblait être {motif}."
      ],
      disparition: [
        "{victime} a disparu sans laisser de traces {dans_la_lieu}. {ambiance}.",
        "Plus personne ne sait où est passé·e {victime}, vu·e pour la dernière fois {dans_la_lieu} alors que {ambiance}.",
        "La famille s’inquiète : {victime} reste introuvable, et {la_lieu} semble cacher un sombre secret."
      ],
      vol: [
        "Un vol audacieux a eu lieu au cœur de {la_lieu} : un bijou manque et {victime} a donné l’alerte.",
        "Dans {la_lieu}, un objet précieux a disparu sous les yeux de {victime}, qui paraît bouleversé·e.",
        "On suspecte {victime} d’avoir assisté à un vol {dans_la_lieu}, mais tout le monde nie avoir vu quoi que ce soit."
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
    traitsVictimes: ["loyal", "superstitieux", "redouté", "manipulateur", "intrigant", "héroïque"],
    motifs: ["la vengeance", "un héritage contesté", "une histoire d’amour interdite", "un serment brisé", "une prophétie"],
    armes: ["une épée", "une arbalète", "du poison", "une dague rouillée", "un gourdin"],
    ambiances: [
      "un banquet agité",
      "une tempête gronde au-dehors",
      "la lune éclaire faiblement les couloirs",
      "la cloche du village résonne",
      "alors que la garde dormait"
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
      "un morceau de parchemin était caché dans la paillasse",
      "une botte couverte de boue gisait près de la porte",
      "une plume rare a été laissée sur la scène"
    ],
    intro: [
      "En l'an de grâce 1247, {la_lieu} retentit d'une tragédie. {ambiance}. {victime}, connu·e pour être {traitVictime}, semble lié·e à {motif}.",
      "Un banquet débute dans {la_lieu}, où {victime} attire l’attention de la cour.",
      "Les remparts bruissent de rumeurs : {victime}, {traitVictime}, rôde dans {la_lieu}.",
      "{la_lieu} s’agite alors que {ambiance}. {victime} semble inquiet·ète.",
      // Indice (min 3 joueurs)
      "[INDICE] La nuit est lourde : {victime} gît {dans_la_lieu}, {indice}.",
      // Temoin (min 4 joueurs)
      "[TEMOIN] Un cri, puis le silence. {temoin} dit avoir vu la dame Aliénor fuir {la_lieu} où gisait {victime}.",
      "[TEMOIN] La cloche du village résonne : selon {temoin}, le chevalier Gaspard rôdait près de {la_lieu} peu avant le drame."
    ],
    crimes: {
      classique: [
        "{la_lieu} est en émoi après la découverte du corps de {victime}, marqué par une lutte violente et {arme} encore plantée.",
        "Dans {la_lieu}, un cri déchire la nuit : {victime} a été frappé·e alors que {ambiance}.",
        "{la_lieu} est le théâtre d’un drame : {victime} a été tué·e, probablement à cause de {motif}.",
        "Un duel a mal tourné : {victime} a péri {dans_la_lieu}, {arme} à la main."
      ],
      poison: [
        "Des herbes toxiques ont été versées dans le repas de {victime} au cours de {ambiance} {dans_la_lieu}.",
        "Un breuvage suspect a eu raison de {victime} {dans_la_lieu}, personne n’a rien vu.",
        "Un empoisonnement : {victime} s’est effondré·e {dans_la_lieu} après un repas partagé."
      ],
      disparition: [
        "{victime} s’est volatilisé·e {dans_la_lieu}, laissant son épée derrière lui·elle.",
        "On murmure que {victime} a été vu·e pour la dernière fois {dans_la_lieu}, alors que {ambiance}.",
        "{la_lieu} cache un mystère : {victime} n’a pas reparu depuis la veille."
      ],
      vol: [
        "Un artefact sacré a disparu mystérieusement de {la_lieu} alors que {victime} assurait la garde.",
        "Le coffre du château a été dérobé {dans_la_lieu}, sous les yeux de {victime}.",
        "Un vol a été signalé {dans_la_lieu} : {victime} a donné l’alerte."
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
    temoins: [
      { nom: "le robot de sécurité S-19", genre: "m" },
      { nom: "l'assistante IA EVA", genre: "f" },
      { nom: "le technicien Boris", genre: "m" },
      { nom: "la biologiste Lin", genre: "f" }
    ],
    indices: [
      "un message crypté s'affiche sur les écrans",
      "une empreinte digitale non identifiée a été trouvée",
      "un composant électronique est manquant",
      "une trace d'huile mène à l'issue de secours",
      "une carte d'accès a été oubliée près du sas"
    ],
    intro: [
      "An 2150. {ambiance} {dans_la_lieu}, {victime}, réputé·e pour être {traitVictime}, suscite les soupçons.",
      "La station orbitale s’agite : {victime}, {traitVictime}, a été vu·e {dans_la_lieu} avant l’incident.",
      "Un silence étrange règne {dans_la_lieu}, où {victime} travaille sur un projet lié à {motif}.",
      "Le capitaine convoque l'équipage : {victime}, {traitVictime}, n'est pas à son poste {dans_la_lieu}.",
      // Indice (min 3 joueurs)
      "[INDICE] La sécurité enquête : {victime} a disparu {dans_la_lieu}. {indice}.",
      // Temoin (min 4 joueurs)
      "[TEMOIN] Alerte rouge : selon {temoin}, la technicienne Mia a été vue quitter précipitamment {la_lieu} juste après la disparition de {victime}.",
      "[TEMOIN] Un sabotage a été signalé : {temoin} affirme avoir intercepté une transmission suspecte peu avant l’incident."
    ],
    crimes: {
      classique: [
        "{victime} a été retrouvé·e désintégré·e {dans_la_lieu}, probablement à cause de {arme}.",
        "Une lutte silencieuse s’est déroulée {dans_la_lieu} : {victime} n’a pas survécu à {arme}.",
        "La sécurité enquête : {victime} gît {dans_la_lieu}, {arme} à proximité.",
        "Un acte de sabotage : {victime} a péri {dans_la_lieu} alors que {ambiance}."
      ],
      poison: [
        "Un nano-virus a été injecté dans le système de {victime} {dans_la_lieu}, provoquant une mort indétectable.",
        "Le laboratoire a été contaminé : {victime} s’est effondré·e lors de {ambiance}.",
        "Un empoisonnement cybernétique a frappé {victime} {dans_la_lieu}."
      ],
      disparition: [
        "{victime} s’est volatilisé·e {dans_la_lieu}, laissant derrière lui·elle une énigme cybernétique.",
        "Un signal de détresse a été capté depuis {la_lieu} : impossible de retrouver {victime}.",
        "La station cherche {victime}, disparu·e alors que {ambiance}."
      ],
      vol: [
        "Le cœur du réacteur a été dérobé {dans_la_lieu} sous la garde de {victime}.",
        "Un module essentiel a disparu {dans_la_lieu}, {victime} est suspecté·e.",
        "Alarme : un vol a été signalé {dans_la_lieu}, {victime} était de faction."
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
    traitsVictimes: ["insaisissable", "omniscient", "paranoïaque", "double", "hors du temps"],
    motifs: ["une anomalie temporelle", "l’envie de pouvoir", "la folie pure", "l’équilibre de l’univers"],
    armes: ["un artefact", "une onde mentale", "une faille dimensionnelle", "un miroir fractal"],
    ambiances: [
      "alors que la réalité vacille", "sous des lumières irréelles",
      "au moment du grand passage", "quand le temps s’arrête"
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
    intro: [
      "Une atmosphère mystérieuse plane sur {la_lieu}, tandis que {victime}, reconnu·e pour être {traitVictime}, vient de subir les conséquences de {motif}.",
      "Rien n'est réel ici : {ambiance} {dans_la_lieu}, {victime} s’interroge sur la nature de l’univers.",
      "Des lois inconnues régissent {la_lieu}, où {victime} poursuit une quête liée à {motif}.",
      // Indice (min 3 joueurs)
      "[INDICE] Quand le temps s’arrête, {indice} et {victime} disparaît de {la_lieu}.",
      // Temoin (min 4 joueurs)
      "[TEMOIN] Un cri déformé retentit. {temoin} prétend avoir vu la silhouette de {victime} franchir une faille dimensionnelle."
    ],
    crimes: {
      classique: [
        "Un corps, peut-être celui de {victime}, a été retrouvé {dans_la_lieu}, la cause de la mort défiant toute logique.",
        "Dans {la_lieu}, {arme} a frappé sans témoin, {ambiance}.",
        "Un cri déformé retentit : {victime} n’est plus {dans_la_lieu}."
      ],
      poison: [
        "Un breuvage inconnu a été empoisonné {dans_la_lieu}, affectant {victime}.",
        "On soupçonne {arme} d’avoir altéré l’esprit de {victime} {dans_la_lieu}."
      ],
      disparition: [
        "{victime} s’est volatilisé·e {dans_la_lieu}, sans la moindre explication.",
        "Nul ne sait où ni quand {victime} a disparu : {la_lieu} semble en être la clé."
      ],
      vol: [
        "Un objet d’une importance capitale a disparu {dans_la_lieu}, bouleversant le destin de {victime}.",
        "Dans {la_lieu}, {arme} a été volé pendant que {victime} menait une expérience."
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

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function categoriseDuree(minutes) {
  if (minutes <= 30) return "court";
  if (minutes <= 90) return "moyen";
  return "long";
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

    // Nombre de joueurs
    const nbJoueurs = parseInt(scenarioData.nombreJoueurs, 10);

    // Tirage cohérent des éléments
    const lieuObj = randomItem(periodeData.lieux);
    const victimeObj = randomItem(periodeData.victimes);
    const traitVictime = randomItem(periodeData.traitsVictimes);
    const motif = randomItem(periodeData.motifs);
    const arme = randomItem(periodeData.armes);
    const ambiance = randomItem(periodeData.ambiances);

    // Articles adaptés
    const artLieu = getArticle(lieuObj.nom, { m: 'le', f: 'la' });
    const artDansLieu = articleDans(lieuObj.nom, artLieu);
    const artDeLieu = articleDe(lieuObj.nom, artLieu);

    const artVictime = getArticle(victimeObj.nom, { m: 'le', f: 'la' });

    // Témoins et indices uniquement si disponibles ET pertinents
    let temoinObj, temoin, artTemoin;
    if (nbJoueurs >= 4 && periodeData.temoins) {
      temoinObj = randomItem(periodeData.temoins);
      temoin = temoinObj.nom;
      artTemoin = getArticle(temoin, { m: 'le', f: 'la' });
    }
    let indice = (nbJoueurs >= 3 && periodeData.indices) ? randomItem(periodeData.indices) : undefined;

    // Choix du template d'intro selon contexte
    let introCandidates = periodeData.intro.filter((tpl) => {
      if (tpl.startsWith("[TEMOIN]")) return temoin;
      if (tpl.startsWith("[INDICE]")) return indice;
      return true;
    });
    // Retire les balises d'indication
    const introTpl = randomItem(introCandidates).replace(/^\[(INDICE|TEMOIN)\]\s?/, "");

    let modeCrime = scenarioData.mode;
    if (!periodeData.crimes[modeCrime]) modeCrime = "classique";
    const crimeTpl = randomItem(periodeData.crimes[modeCrime]);

    // Remplacement de toutes les variables dynamiques
    const variables = {
      "{lieu}": lieuObj.nom,
      "{la_lieu}": artLieu + (artLieu.endsWith("'") ? "" : " ") + lieuObj.nom,
      "{dans_la_lieu}": artDansLieu + " " + lieuObj.nom,
      "{victime}": victimeObj.nom,
      "{le_victime}": artVictime + (artVictime.endsWith("'") ? "" : " ") + victimeObj.nom,
      "{traitVictime}": traitVictime,
      "{motif}": motif,
      "{arme}": arme,
      "{ambiance}": ambiance
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
