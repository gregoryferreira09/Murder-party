// Public/scripts/scenario.js .. Lancement partie.html

// Bibliothèque de données cohérentes selon la période et le mode de crime
const scenarioCohesif = {
  victorien: {
    lieux: ["manoir", "bibliothèque", "salon", "jardin", "sous-sol"],
    crimes: {
      poison: [
        "Une fiole de cyanure a été versée dans le verre du comte, scellant son sort en silence.",
        "Le poison s’est glissé dans le repas, invisible mais mortel, révélant la main d’un expert en discrétion."
      ],
      classique: [
        "Le corps a été retrouvé sans vie dans la {lieu}, une balle dans la tête et un regard figé de stupeur.",
        "Un poignard planté dans le dos, la victime n’a rien vu venir. Le silence de la {lieu} en dit long."
      ],
      disparition: [
        "La victime a disparu sans laisser de traces dans la {lieu}, un mystère à élucider avant que les pistes ne s’effacent."
      ],
      vol: [
        "Un vol audacieux a eu lieu au cœur de la {lieu}, un objet précieux manque et les soupçons s’envolent."
      ]
    },
    intro: (lieu) =>
      `Londres, 1892. Une ombre plane sur le manoir des Ashford, alors qu'un meurtre macabre trouble la haute société, dans la ${lieu}.`
  },
  medieval: {
    lieux: ["château", "grande salle", "forêt", "cave", "donjon"],
    crimes: {
      poison: [
        "Des herbes toxiques ont été versées dans le repas du seigneur, le condamnant dans la ${lieu}."
      ],
      classique: [
        "Le corps gît dans la ${lieu}, marqué par une lutte violente et un poignard médiéval encore planté.",
        "La scène de crime dans la ${lieu} est maculée de sang, témoignage d'une mise en scène morbide."
      ],
      disparition: [
        "Un chevalier s’est volatilisé dans la ${lieu}, laissant son épée derrière lui."
      ],
      vol: [
        "Un artefact sacré a disparu mystérieusement de la ${lieu}, semant le trouble dans le château."
      ]
    },
    intro: (lieu) =>
      `Au cœur du Moyen-Âge, la ${lieu} retentit d'une tragédie sourde, et les murmures courent dans les couloirs de pierre.`
  },
  futuriste: {
    lieux: ["station orbitale", "laboratoire", "cyber-café", "dôme botanique", "soute"],
    crimes: {
      poison: [
        "Un nano-virus a été injecté dans l’air de la ${lieu}, provoquant une mort rapide et indétectable."
      ],
      classique: [
        "Le corps a été retrouvé désintégré dans la ${lieu}, les robots de sécurité n’ayant rien vu."
      ],
      disparition: [
        "Un scientifique s’est volatilisé de la ${lieu}, laissant derrière lui une énigme cybernétique."
      ],
      vol: [
        "Le cœur d’un réacteur a été dérobé dans la ${lieu} ; la station entière est en danger !"
      ]
    },
    intro: (lieu) =>
      `An 2150. Dans la ${lieu}, un crime high-tech secoue les élites, dissimulé dans les méandres du cyberespace.`
  },
  autre: {
    lieux: ["salle étrange", "dimension inconnue"],
    crimes: {
      poison: [
        "Un breuvage inconnu a été empoisonné dans la ${lieu}."
      ],
      classique: [
        "Un corps a été retrouvé dans la ${lieu}, la cause de la mort défiant toute logique."
      ],
      disparition: [
        "Quelqu’un s’est volatilisé dans la ${lieu}, sans la moindre explication."
      ],
      vol: [
        "Un objet d’une importance capitale a disparu dans la ${lieu}, bouleversant les lois de la réalité."
      ]
    },
    intro: (lieu) =>
      `Une atmosphère mystérieuse plane dans la ${lieu}, entre réalité déformée et vérités multiples.`
  }
};

const scenarioLibrary = {
  objectifs: {
    1: [
      "Dénichez le meurtrier avant qu’il ne frappe à nouveau. Chaque minute compte, chaque regard peut trahir.",
      "Trouvez l'assassin avant que la vérité ne soit effacée à jamais. Il ou elle se cache peut-être juste sous vos yeux.",
      "Résolvez cette énigme en un temps limité pour sauver l’innocent, car le vrai coupable vous observe déjà."
    ],
    2: [
      "Deux coupables se cachent... à vous de les démasquer avant qu’ils ne s’enfuient. Ils pourraient même se couvrir mutuellement.",
      "Découvrez l’identité des deux criminels avant qu’ils n’aient le temps de manipuler toute l’enquête.",
      "La complexité augmente : deux meurtriers, un seul mystère. Faites attention à ce que chacun dit… ou tait."
    ],
    3: [
      "Trois assassins, liés par un pacte secret, ont dissimulé leur crime derrière une toile de mensonges. Saurez-vous démêler le vrai du faux avant qu’un innocent ne tombe ?",
      "Une trahison orchestrée par trois esprits machiavéliques secoue le domaine. Chaque indice pourrait être un leurre. La vérité n’est qu’un masque de plus…",
      "Ils sont trois. Trois silhouettes dans l’ombre, unies par un mobile insondable. Certains indices mènent à eux, d’autres vous éloignent à dessein. Trouverez-vous le fil rouge ?"
    ]
  },
  durees: {
    court: [
      "Le temps presse, chaque minute compte dans cette course contre la montre. Les erreurs seront fatales.",
      "Une enquête rapide mais intense vous attend. Vos instincts devront primer sur vos doutes.",
      "La résolution doit être rapide pour empêcher un nouveau drame. Gardez vos sens en alerte constante."
    ],
    moyen: [
      "Un temps équilibré pour réfléchir et agir. La prudence pourrait faire la différence.",
      "Une enquête qui mêle tension et réflexion. L’intuition, la logique, et l’observation sont vos alliés.",
      "Le temps vous donne une marge, mais attention aux erreurs. Les coupables gagnent à chaque hésitation."
    ],
    long: [
      "Une longue enquête où chaque détail peut faire basculer l’affaire. Rien ne doit vous échapper.",
      "Vous avez le temps d'explorer chaque piste en profondeur. Mais les criminels savent aussi jouer avec le temps.",
      "Une énigme complexe qui nécessite patience et perspicacité. Ne vous laissez pas berner par les apparences."
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
    // Détermination de la période cohérente
    let periodeCle = scenarioData.periode;
    if (periodeCle === "autre" && scenarioData.periodeAutre) {
      periodeCle = "autre";
    }
    if (!scenarioCohesif[periodeCle]) periodeCle = "autre";
    const periodeData = scenarioCohesif[periodeCle];

    // Lieu cohérent pour cette période
    const lieu = randomItem(periodeData.lieux);

    // Crime cohérent pour cette période et mode de jeu
    let modeCrime = scenarioData.mode;
    if (!periodeData.crimes[modeCrime]) modeCrime = "classique";
    let crimeBrut = randomItem(periodeData.crimes[modeCrime]);

    // Remplacer le placeholder {lieu} ou ${lieu} pour rendre le texte cohérent
    crimeBrut = crimeBrut.replace(/\{lieu\}/g, lieu).replace(/\$\{lieu\}/g, lieu);

    // Introduction cohérente avec le lieu
    const introduction = periodeData.intro(lieu);

    // Objectif & durée inchangés
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
