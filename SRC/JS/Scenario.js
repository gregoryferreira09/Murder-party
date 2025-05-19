// Scenario.js amélioré pour cohérence et immersion

const univers = {
  victorien: {
    lieux: ["manoir", "bibliothèque", "salon", "jardin", "sous-sol"],
    victimes: ["le comte Ashford", "la gouvernante Wells", "le colonel Rutherford", "lady Emily"],
    traitsVictimes: ["respecté", "craintif", "mystérieux", "détesté"],
    motifs: ["l’héritage", "la jalousie", "une ancienne rancune", "un secret inavoué"],
    crimes: {
      poison: [
        "Une fiole de cyanure a été versée dans le verre de {victime}, scellant son sort en silence dans la {lieu}."
      ],
      classique: [
        "Le corps de {victime} a été retrouvé sans vie dans la {lieu}, une arme encore ensanglantée à ses côtés."
      ],
      disparition: [
        "{victime} a disparu sans laisser de traces dans la {lieu}, un mystère à élucider avant que les pistes ne s’effacent."
      ],
      vol: [
        "Un vol audacieux a eu lieu au cœur de la {lieu}, un objet précieux manque et {victime} est introuvable."
      ]
    },
    intro: ({ lieu, victime, traitVictime, motif }) =>
      `Londres, 1892. Dans la ${lieu}, ${victime}, réputé·e pour être ${traitVictime}, est au centre de toutes les attentions. Motif probable du crime : ${motif}.`
  },
  medieval: {
    lieux: ["château", "grande salle", "forêt", "cave", "donjon"],
    victimes: ["le seigneur de Montfaucon", "la servante Ysabeau", "le chevalier Gaspard", "la dame de la cour"],
    traitsVictimes: ["loyal", "superstitieux", "redouté", "manipulateur"],
    motifs: ["la vengeance", "un héritage contesté", "une histoire d’amour interdite", "un serment brisé"],
    crimes: {
      poison: [
        "Des herbes toxiques ont été versées dans le repas de {victime}, le condamnant dans la {lieu}."
      ],
      classique: [
        "Le corps de {victime} gît dans la {lieu}, marqué par une lutte violente et un poignard médiéval encore planté."
      ],
      disparition: [
        "{victime} s’est volatilisé·e dans la ${lieu}, laissant son épée derrière lui·elle."
      ],
      vol: [
        "Un artefact sacré a disparu mystérieusement de la {lieu} alors que {victime} assurait la garde."
      ]
    },
    intro: ({ lieu, victime, traitVictime, motif }) =>
      `En l'an de grâce 1247, la ${lieu} retentit d'une tragédie : ${victime}, connu·e pour être ${traitVictime}, pourrait avoir été victime de ${motif}.`
  },
  futuriste: {
    lieux: ["station orbitale", "laboratoire", "cyber-café", "dôme botanique", "soute"],
    victimes: ["le Dr Novak", "l'androïde JAX", "la pilote Vega", "le directeur Kwan"],
    traitsVictimes: ["visionnaire", "calculateur", "instable", "secret"],
    motifs: ["l’espionnage industriel", "une trahison amoureuse", "un piratage raté", "une quête de pouvoir"],
    crimes: {
      poison: [
        "Un nano-virus a été injecté dans le système de {victime} dans la {lieu}, provoquant une mort indétectable."
      ],
      classique: [
        "Le corps de {victime} a été retrouvé désintégré dans la {lieu}, les robots de sécurité n’ayant rien vu."
      ],
      disparition: [
        "{victime} s’est volatilisé·e de la {lieu}, laissant derrière lui·elle une énigme cybernétique."
      ],
      vol: [
        "Le cœur d’un réacteur a été dérobé dans la {lieu} sous la garde de {victime}."
      ]
    },
    intro: ({ lieu, victime, traitVictime, motif }) =>
      `An 2150. Dans la ${lieu}, ${victime}, réputé·e pour être ${traitVictime}, suscite les soupçons. Motif évoqué : ${motif}.`
  },
  autre: {
    lieux: ["salle étrange", "dimension inconnue"],
    victimes: ["l’énigmatique X", "le voyageur temporel", "la voix sans corps"],
    traitsVictimes: ["insaisissable", "omniscient", "paranoïaque"],
    motifs: ["une anomalie temporelle", "l’envie de pouvoir", "la folie pure"],
    crimes: {
      poison: [
        "Un breuvage inconnu a été empoisonné dans la {lieu}, affectant {victime}."
      ],
      classique: [
        "Un corps, peut-être celui de {victime}, a été retrouvé dans la {lieu}, la cause de la mort défiant toute logique."
      ],
      disparition: [
        "{victime} s’est volatilisé·e dans la {lieu}, sans la moindre explication."
      ],
      vol: [
        "Un objet d’une importance capitale a disparu dans la {lieu}, bouleversant le destin de {victime}."
      ]
    },
    intro: ({ lieu, victime, traitVictime, motif }) =>
      `Une atmosphère mystérieuse plane sur la ${lieu}, tandis que ${victime}, reconnu·e pour être ${traitVictime}, vient de subir les conséquences de ${motif}.`
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

document.addEventListener("DOMContentLoaded", () => {
  const scenarioData = JSON.parse(localStorage.getItem("parametresPartie"));
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

    let modeCrime = scenarioData.mode;
    if (!periodeData.crimes[modeCrime]) modeCrime = "classique";
    let crimeBrut = randomItem(periodeData.crimes[modeCrime]);
    crimeBrut = crimeBrut.replace(/\{lieu\}/g, lieu).replace(/\{victime\}/g, victime);

    const introduction = periodeData.intro({ lieu, victime, traitVictime, motif });
    const objectif = randomItem(scenarioLibrary.objectifs[scenarioData.criminels] || scenarioLibrary.objectifs[1]);
    const dureeCat = categoriseDuree(scenarioData.duree);
    const detailsDuree = randomItem(scenarioLibrary.durees[dureeCat]);

    container.innerHTML = `
      <h2>Introduction</h2> 
      <p>${introduction}</p> 

      <h2>Le crime</h2> 
      <p>${crimeBrut}</p> 

      <h2>Objectif général</h2> 
      <p>${objectif}</p> 

      <h2>Détails du jeu</h2> 
      <p>Mode de jeu : ${scenarioData.mode}</p> 
      <p>Durée de la partie : ${scenarioData.duree} minutes — ${detailsDuree}</p> 
      <p>Période : ${periodeCle}</p> 
      <p>Nombre de joueurs : ${scenarioData.nombreJoueurs}</p> 
      <p>Nombre de criminels : ${scenarioData.criminels}</p> 
      <p>Mode criminels fantômes : ${scenarioData.criminelFantome ? "Oui" : "Non"}</p> 
      <p>Avatars légendaires activés : ${scenarioData.avatarsLegendaires ? "Oui" : "Non"}</p>
      <div class="boutons-actions">
        <a class="gold-btn" href="salon.html">Lancement</a> 
        <a class="gold-btn" href="creer-partie.html">Retour</a> 
      </div>
    `;
  } else {
    container.innerHTML = "Aucune donnée de scénario trouvée.";
  }
});
