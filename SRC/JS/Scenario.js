// Public/scripts/scenario.js .. Lancement partie.html

document.addEventListener("DOMContentLoaded", () => {
  const scenarioData = JSON.parse(localStorage.getItem("parametresPartie"));
  const container = document.getElementById("scenarioContainer");

  // Bibliothèque modulaire de textes pour générer les scénarios
  const scenarioLibrary = {
    introductions: {
      victorien: [
        "Londres, 1892. Une ombre plane sur le manoir des Ashford...",
        "Dans les ruelles brumeuses de Londres victorienne, un secret mortel vous attend.",
        "Un bal masqué à Londres cache une menace invisible..."
      ],
      medieval: [
        "L'an de grâce 1247. Le château retentit d'une tragédie sourde.",
        "Au cœur du duché, un mystère sanglant ébranle la cour.",
        "Les torches vacillent alors qu'un meurtre vient d'être commis dans la grande salle."
      ],
      futuriste: [
        "Dans la mégalopole de Neo-City, un crime high-tech secoue les élites.",
        "L'an 2150, où la technologie et la trahison s’entrelacent dans l’ombre.",
        "Un virus mortel a frappé... mais qui est derrière cette cyberattaque ?"
      ],
      autre: [
        "Une atmosphère mystérieuse plane sur cette époque atypique.",
        "Les temps changent, et avec eux, un crime aux multiples facettes.",
        "Un événement hors du temps bouleverse le destin de tous."
      ]
    },

    crimes: {
      poison: [
        "Une fiole de cyanure a été versée dans le verre du comte.",
        "Le poison s’est glissé dans le repas, invisible mais mortel.",
        "Les symptômes indiquent clairement un empoisonnement lent et cruel."
      ],
      classique: [
        "Le corps a été retrouvé sans vie dans la bibliothèque, une balle dans la tête.",
        "Un poignard planté dans le dos, la victime n’a rien vu venir.",
        "La scène de crime est maculée de sang, témoignage d'une lutte acharnée."
      ],
      disparition: [
        "La victime a disparu sans laisser de traces, un mystère à élucider.",
        "Un kidnapping audacieux secoue la ville endormie.",
        "Personne ne sait où est passé le disparu, mais le temps presse."
      ],
      vol: [
        "Un vol audacieux a eu lieu au cœur de la demeure, un objet précieux manque.",
        "Le cambriolage laisse derrière lui une énigme complexe.",
        "La disparition d’un bijou de famille fait planer le doute sur tous."
      ]
    },

    objectifs: {
      1: [
        "Dénichez le meurtrier avant qu’il ne frappe à nouveau.",
        "Trouvez l'assassin avant que la vérité ne soit effacée à jamais.",
        "Résolvez cette énigme en un temps limité pour sauver l’innocent."
      ],
      2: [
        "Deux coupables se cachent... à vous de les démasquer avant la fin.",
        "Découvrez l’identité des deux criminels avant qu’ils ne s’enfuient.",
        "La complexité augmente : deux meurtriers, un seul mystère."
      ],
      3: [
        "Trois assassins, un plan complexe. Trouvez-les tous avant que la vérité ne soit enterrée.",
        "Une trahison multiple : démasquez les trois coupables cachés parmi vous.",
        "Un trio dangereux, et un seul moyen d’arrêter leur machination."
      ]
    },

    durees: {
      court: [
        "Le temps presse, chaque minute compte dans cette course contre la montre.",
        "Une enquête rapide mais intense vous attend.",
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

  if (scenarioData) {
    // Gestion de la période (cas "autre")
    const periode = scenarioData.periode === "autre" && scenarioData.periodeAutre
      ? scenarioData.periodeAutre
      : scenarioData.periode;

    // Génération dynamique du scénario
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
