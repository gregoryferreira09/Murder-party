// Tableau des templates par époque
const scenarioTemplates = {
  victorien: {
    introductions: [
      "L'orage gronde sur Londres alors que le crime est commis...",
      "Une soirée brumeuse dans un manoir victorien isolé...",
      "Une mystérieuse invitation mène à un meurtre inattendu..."
    ],
    lieux: [
      "Le grand salon du manoir",
      "La bibliothèque poussiéreuse",
      "Le jardin secret derrière la maison"
    ],
    armes: [
      "Un poignard ancien",
      "Une corde d'escalade",
      "Un chandelier en bronze"
    ],
    crimes: [
      "Un meurtre mystérieux",
      "Un vol audacieux",
      "Un empoisonnement discret"
    ],
    objectifs: [
      "Découvrir l'identité du coupable",
      "Rassembler les preuves cachées",
      "Sauver une victime innocente"
    ],
    durees: {
      court: [
        "Une enquête rapide mais intense qui se joue en quelques heures.",
        "Une chasse au coupable expresse, où chaque indice compte."
      ],
      moyen: [
        "Une enquête approfondie avec plusieurs suspects à interroger.",
        "Un mystère s’épaississant au fil des découvertes."
      ],
      long: [
        "Une investigation complexe s’étendant sur plusieurs jours.",
        "Une histoire riche en rebondissements et faux-semblants."
      ]
    }
  },
  medieval: {
    introductions: [
      "Au cœur du château fort, une nuit sanglante s'annonce...",
      "Le seigneur du domaine est retrouvé mort dans sa chambre...",
      "Un complot se trame dans la salle du trône."
    ],
    lieux: [
      "La grande salle du château",
      "Le donjon sombre",
      "Les écuries"
    ],
    armes: [
      "Une épée rouillée",
      "Un arc long",
      "Une dague empoisonnée"
    ],
    crimes: [
      "Un assassinat politique",
      "Un vol de reliques sacrées",
      "Une trahison au sein du conseil"
    ],
    objectifs: [
      "Démasquer le traître",
      "Retrouver l’objet volé",
      "Empêcher une guerre civile"
    ],
    durees: {
      court: [
        "Un mystère court avec peu de témoins.",
        "Un secret bien gardé à révéler rapidement."
      ],
      moyen: [
        "Une enquête où chaque suspect a une histoire.",
        "Une intrigue mêlant loyauté et trahison."
      ],
      long: [
        "Une épopée mêlant bataille et enquête.",
        "Un mystère épique qui bouleverse le royaume."
      ]
    }
  },
  futuriste: {
    introductions: [
      "Dans une mégapole de néons et d'ombres digitales...",
      "Un androïde est retrouvé défaillant dans un laboratoire secret...",
      "Une cyberattaque mène à un meurtre dans les hautes sphères."
    ],
    lieux: [
      "Le toit d’un gratte-ciel ultramoderne",
      "Le laboratoire de cybernétique",
      "La ruelle sombre du quartier industriel"
    ],
    armes: [
      "Une arme laser",
      "Un virus informatique mortel",
      "Un poison cybernétique"
    ],
    crimes: [
      "Un meurtre high-tech",
      "Un sabotage industriel",
      "Un vol de données sensibles"
    ],
    objectifs: [
      "Identifier le hacker responsable",
      "Déjouer un complot corporatiste",
      "Protéger une intelligence artificielle"
    ],
    durees: {
      court: [
        "Une mission rapide sous pression maximale.",
        "Un piratage éclair à stopper avant qu'il ne soit trop tard."
      ],
      moyen: [
        "Une enquête mêlant technologies et espionnage.",
        "Un thriller high-tech avec plusieurs pistes."
      ],
      long: [
        "Une saga futuriste aux enjeux planétaires.",
        "Une quête pour sauver l’humanité de l’ombre digitale."
      ]
    }
  }
};

// Fonction utilitaire pour choix aléatoire
function choixAleatoire(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Fonction principale pour générer un scénario cohérent
function genererScenario(epoque, dureeChoisie) {
  const template = scenarioTemplates[epoque];
  if (!template) {
    alert("Époque inconnue. Veuillez choisir une époque valide.");
    return null;
  }

  // Choix aléatoire d'éléments liés à l'époque
  const introduction = choixAleatoire(template.introductions);
  const lieu = choixAleatoire(template.lieux);
  const arme = choixAleatoire(template.armes);
  const crime = choixAleatoire(template.crimes);
  const objectif = choixAleatoire(template.objectifs);

  // Durée + description associée (court, moyen, long)
  let dureeTexteOptions = template.durees[dureeChoisie];
  if (!dureeTexteOptions) dureeTexteOptions = template.durees.moyen; // fallback
  const dureeDescription = choixAleatoire(dureeTexteOptions);

  return {
    introduction,
    lieu,
    arme,
    crime,
    objectif,
    dureeDescription
  };
}

// Fonction pour afficher le scénario dans la page
function afficherScenario() {
  const epoque = document.getElementById("epoque-select").value;
  const duree = document.getElementById("duree-select").value;

  const scenario = genererScenario(epoque, duree);
  if (!scenario) return;

  document.getElementById("introduction").innerText = scenario.introduction;
  document.getElementById("lieu").innerText = scenario.lieu;
  document.getElementById("arme").innerText = scenario.arme;
  document.getElementById("crime").innerText = scenario.crime;
  document.getElementById("objectif").innerText = scenario.objectif;
  document.getElementById("duree-description").innerText = scenario.dureeDescription;
}

// Ajout d’un écouteur sur le bouton de génération
document.getElementById("generer-btn").addEventListener("click", afficherScenario);

};

// Fonction utilitaire : choisir un élément aléatoire dans
