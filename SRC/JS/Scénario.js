// Public/scripts/scenario.js .. Lancement partie.html

// Bibliothèque modulaire de textes pour générer les scénarios
const scenarioLibrary = {
  introductions: {
    victorien: [
      "Londres, 1892. Une ombre plane sur le manoir des Ashford, alors qu'un meurtre macabre trouble la haute société.",
      "Dans les ruelles brumeuses de Londres victorienne, un secret mortel vous attend derrière chaque porte close.",
      "Un bal masqué à Londres cache une menace invisible, et les masques pourraient bien cacher des intentions sanglantes."
    ],
    medieval: [
      "L'an de grâce 1247. Le château retentit d'une tragédie sourde, et les murmures courent dans les couloirs de pierre.",
      "Au cœur du duché, un mystère sanglant ébranle la cour, alors que les alliances vacillent et que la peur s’installe.",
      "Les torches vacillent alors qu'un meurtre vient d'être commis dans la grande salle. Qui parmi les convives ourdit un sombre complot ?"
    ],
    futuriste: [
      "Dans la mégalopole de Neo-City, un crime high-tech secoue les élites, dissimulé dans les méandres du cyberespace.",
      "L'an 2150, où la technologie et la trahison s’entrelacent dans l’ombre d’une conspiration interplanétaire.",
      "Un virus mortel a frappé... mais qui est derrière cette cyberattaque ? Et s’il ne s’agissait que d’un leurre ?"
    ],
    autre: [
      "Une atmosphère mystérieuse plane sur cette époque atypique, entre réalité déformée et vérités multiples.",
      "Les temps changent, et avec eux, un crime aux multiples facettes trouble l’ordre établi.",
      "Un événement hors du temps bouleverse le destin de tous, et chacun devra choisir son camp."
    ]
  },

  crimes: {
    poison: [
      "Une fiole de cyanure a été versée dans le verre du comte, scellant son sort en silence.",
      "Le poison s’est glissé dans le repas, invisible mais mortel, révélant la main d’un expert en discrétion.",
      "Les symptômes indiquent clairement un empoisonnement lent et cruel, signe d’une vengeance patiente."
    ],
    classique: [
      "Le corps a été retrouvé sans vie dans la bibliothèque, une balle dans la tête et un regard figé de stupeur.",
      "Un poignard planté dans le dos, la victime n’a rien vu venir. Le silence de la pièce en dit long.",
      "La scène de crime est maculée de sang, témoignage d'une lutte acharnée ou d’une mise en scène morbide."
    ],
    disparition: [
      "La victime a disparu sans laisser de traces, un mystère à élucider avant que les pistes ne s’effacent.",
      "Un kidnapping audacieux secoue la ville endormie. Le ravisseur a laissé un indice, ou peut-être un piège.",
      "Personne ne sait où est passé le disparu, mais le temps presse et la peur s’installe."
    ],
    vol: [
      "Un vol audacieux a eu lieu au cœur de la demeure, un objet précieux manque et les soupçons s’envolent.",
      "Le cambriolage laisse derrière lui une énigme complexe, des traces contradictoires et des mobiles multiples.",
      "La disparition d’un bijou de famille fait planer le doute sur tous. Mais s’agissait-il vraiment d’un vol ?"
    ]
  },

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
      "Ils sont trois. Trois silhouettes dans l’ombre, unies par un mobile insondable. Certains indices mènent à eux, d’autres vous éloignent à dessein. Trouverez-vous le fil rouge ?",
      "Le plan a été pensé depuis des semaines. Trois complices ont frappé sans laisser de traces, et maintenant ils vous observent… Oserez-vous affronter le piège qu’ils vous ont tendu ?",
      "Un trio meurtrier s’est infiltré parmi vous. Ils se couvrent, mentent habilement, et manipulent chaque discussion. L’un d’entre vous les soupçonne déjà… mais est-il digne de confiance ?",
      "Dans le calme apparent de la soirée, trois traîtres ont déjà commencé leur jeu. Leurs rôles sont dissimulés, leurs vérités inversées. Chaque alliance pourrait être une erreur fatale."
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

// Fonction utilitaire : choisir un élément aléatoire dans un tableau
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Fonction pour classer la durée en catégorie simple
function categoriseDuree(minutes) {
  if (minutes <= 30) return "court";
  if (minutes <= 90) return "moyen";
  return "long";
}

document.addEventListener("DOMContentLoaded", () => {
  const scenarioData = JSON.parse(localStorage.getItem("parametresPartie"));
  const container = document.getElementById("scenarioContainer");

  if (scenarioData) {
    const periode = scenarioData.periode === "autre" && scenarioData.periodeAutre
      ? scenarioData.periodeAutre
      : scenarioData.periode;

    const introduction = randomItem(scenarioLibrary.introductions[periode] || scenarioLibrary.introductions["autre"]);
    const crime = randomItem(scenarioLibrary.crimes[scenarioData.mode] || scenarioLibrary.crimes["classique"]);
    const objectif = randomItem(scenarioLibrary.objectifs[scenarioData.criminels] || scenarioLibrary.objectifs[1]);
    const dureeCat = categoriseDuree(scenarioData.duree);
    const detailsDuree = randomItem(scenarioLibrary.durees[dureeCat]);

    container.innerHTML = `
      <h2>Introduction</h2> 
      <p>${introduction}</p> 

      <h2>Le crime</h2> 
      <p>${crime}</p> 

      <h2>Objectif général</h2> 
      <p>${objectif}</p> 

      <h2>Détails du jeu</h2> 
      <p>Mode de jeu : ${scenarioData.mode}</p> 
      <p>Durée de la partie : ${scenarioData.duree} minutes — ${detailsDuree}</p> 
      <p>Période : ${periode}</p> 
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

    container.innerHTML = "Aucune donnée de scénario trouvée.";
  }
});
