const scenarioTemplates = {
  victorien: {
    lieux: [
      {
        nom: "La bibliothèque poussiéreuse",
        armesPossibles: ["Un chandelier en bronze", "Un poignard ancien"],
        crimesPossibles: ["Un meurtre mystérieux", "Un vol audacieux"],
        introductions: [
          "Une soirée brumeuse dans une bibliothèque poussiéreuse où un crime vient d'être commis...",
          "Dans le silence de la bibliothèque, un vol audacieux vient d'avoir lieu..."
        ]
      },
      {
        nom: "Le grand salon du manoir",
        armesPossibles: ["Une corde d'escalade", "Un poignard ancien"],
        crimesPossibles: ["Un meurtre mystérieux", "Un empoisonnement discret"],
        introductions: [
          "L'orage gronde sur Londres alors que le crime est commis dans le grand salon...",
          "Une mystérieuse invitation mène à un meurtre inattendu dans le salon du manoir..."
        ]
      },
      {
        nom: "Le jardin secret derrière la maison",
        armesPossibles: ["Un poignard ancien", "Une corde d'escalade"],
        crimesPossibles: ["Un meurtre mystérieux", "Un empoisonnement discret"],
        introductions: [
          "Dans le jardin secret, l'ombre d'un meurtre plane sous la lumière blafarde...",
          "Une rencontre nocturne tourne au drame dans le jardin secret du manoir..."
        ]
      }
    ],
    objectifs: {
      "Un meurtre mystérieux": [
        "Découvrir l'identité du coupable",
        "Rassembler les preuves cachées"
      ],
      "Un vol audacieux": [
        "Retrouver l’objet volé",
        "Identifier le complice"
      ],
      "Un empoisonnement discret": [
        "Identifier le poison utilisé",
        "Sauver une victime innocente"
      ]
    },
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
    lieux: [
      {
        nom: "La grande salle du château",
        armesPossibles: ["Une épée rouillée", "Une dague empoisonnée"],
        crimesPossibles: ["Un assassinat politique", "Une trahison au sein du conseil"],
        introductions: [
          "Au cœur du château fort, une nuit sanglante s'annonce dans la grande salle...",
          "Un complot se trame dans la grande salle du château."
        ]
      },
      {
        nom: "Le donjon sombre",
        armesPossibles: ["Une dague empoisonnée", "Un arc long"],
        crimesPossibles: ["Un assassinat politique", "Un vol de reliques sacrées"],
        introductions: [
          "Le seigneur du domaine est retrouvé mort dans le donjon sombre...",
          "Une mystérieuse disparition survient dans le donjon du château."
        ]
      },
      {
        nom: "Les écuries",
        armesPossibles: ["Un arc long", "Une épée rouillée"],
        crimesPossibles: ["Un vol de reliques sacrées", "Une trahison au sein du conseil"],
        introductions: [
          "Dans les écuries, un vol sacré a bouleversé le domaine...",
          "Une trahison se prépare dans l'ombre des écuries."
        ]
      }
    ],
    objectifs: {
      "Un assassinat politique": [
        "Démasquer le traître",
        "Empêcher une guerre civile"
      ],
      "Un vol de reliques sacrées": [
        "Retrouver l’objet volé",
        "Révéler le coupable"
      ],
      "Une trahison au sein du conseil": [
        "Identifier le conspirateur",
        "Sauver le royaume"
      ]
    },
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
    lieux: [
      {
        nom: "Le toit d’un gratte-ciel ultramoderne",
        armesPossibles: ["Une arme laser", "Un poison cybernétique"],
        crimesPossibles: ["Un meurtre high-tech", "Un sabotage industriel"],
        introductions: [
          "Dans une mégapole de néons, un meurtre high-tech est commis sur un toit ultramoderne...",
          "Une cyberattaque se déclenche depuis le toit d’un gratte-ciel..."
        ]
      },
      {
        nom: "Le laboratoire de cybernétique",
        armesPossibles: ["Un virus informatique mortel", "Une arme laser"],
        crimesPossibles: ["Un sabotage industriel", "Un vol de données sensibles"],
        introductions: [
          "Un androïde est retrouvé défaillant dans un laboratoire de cybernétique...",
          "Des données sensibles ont été volées dans le laboratoire secret."
        ]
      },
      {
        nom: "La ruelle sombre du quartier industriel",
        armesPossibles: ["Un poison cybernétique", "Un virus informatique mortel"],
        crimesPossibles: ["Un meurtre high-tech", "Un vol de données sensibles"],
        introductions: [
          "Une ruelle sombre cache un meurtre high-tech mystérieux...",
          "Le vol de données dans le quartier industriel fait trembler les corporations."
        ]
      }
    ],
    objectifs: {
      "Un meurtre high-tech": [
        "Identifier le hacker responsable",
        "Protéger une intelligence artificielle"
      ],
      "Un sabotage industriel": [
        "Déjouer un complot corporatiste",
        "Sauver l’entreprise ciblée"
      ],
      "Un vol de données sensibles": [
        "Récupérer les données volées",
        "Trouver le coupable avant qu’il ne s’échappe"
      ]
    },
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

// Fonction utilitaire
function choixAleatoire(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Génération du scénario cohérent
function genererScenario(epoque, dureeChoisie) {
  const template = scenarioTemplates[epoque];
  if (!template) {
    alert("Époque inconnue. Veuillez choisir une époque valide.");
    return null;
  }

  // 1. Choix du lieu (objet complet)
  const lieu = choixAleatoire(template.lieux);

  // 2. Choix du crime compatible avec ce lieu
  const crime = choixAleatoire(lieu.crimesPossibles);

  // 3. Choix de l'arme compatible avec lieu + crime (on ne relie pas directement arme-crime ici mais on peut étendre si besoin)
  const arme = choixAleatoire(lieu.armesPossibles);

  // 4. Choix de l'objectif compatible avec le crime
  const objectifsPossibles = template.objectifs[crime] || [];
  const objectif = objectifsPossibles.length > 0 ? choixAleatoire(objectifsPossibles) : "Résoudre le mystère";

  // 5. Choix de l'introduction liée au lieu et au crime
  // Ici on simplifie : on choisit une intro au hasard parmi celles du lieu (on peut aussi affiner plus tard)
  const introduction = choixAleatoire(lieu.introductions);

  // 6. Durée et description
  let dureeTexteOptions = template.durees[dureeChoisie];
  if (!dureeTexteOptions) dureeTexteOptions = template.durees.moyen; // fallback
  const dureeDescription = choixAleatoire(dureeTexteOptions);

  return {
    introduction,
    lieu: lieu.nom,
    arme,
    crime,
    objectif,
    dureeDescription
  };
}

// Fonction d'affichage inchangée
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

// Assure-toi que ton bouton appelle bien cette fonction
document.getElementById("generer-btn").addEventListener("click", afficherScenario);
