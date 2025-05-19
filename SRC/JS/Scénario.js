// Public/scripts/scenario.js .. Lancement partie.html

const scenarioTemplates = {
  victorien: {
    introductions: [
      "Londres, 1892. Une ombre plane sur le manoir des Ashford, alors qu'un meurtre macabre trouble la haute société.",
      "Dans les ruelles brumeuses de Londres victorienne, un secret mortel vous attend derrière chaque porte close.",
      "Un bal masqué à Londres cache une menace invisible, et les masques pourraient bien cacher des intentions sanglantes."
    ],
    lieux: [
      "la bibliothèque du manoir Ashford",
      "le salon de thé au rez-de-chaussée",
      "le bureau du lord Ashford",
      "la serre tropicale",
      "la salle à manger aux boiseries sombres"
    ],
    armes: [
      "un poignard finement décoré",
      "une fiole de poison à base d'aconit",
      "un pistolet à un coup",
      "un chandelier lourd en bronze",
      "une corde de piano"
    ],
    crimes: [
      "un meurtre classique avec violence apparente",
      "un empoisonnement discret et mortel",
      "une disparition suspecte",
      "un vol d’objet précieux lié à une vengeance"
    ],
    objectifs: [
      "Dénichez le meurtrier avant qu’il ne frappe à nouveau dans cette demeure victorienne.",
      "Trouvez l'assassin parmi les invités du bal masqué avant que la vérité ne soit effacée à jamais.",
      "Résolvez cette énigme en un temps limité pour sauver l’innocent, car le vrai coupable rôde dans l’ombre."
    ],
    durees: {
      court: [
        "Le temps presse, chaque minute compte dans cette enquête à l’ambiance lourde et mystérieuse.",
        "Une enquête rapide mais intense vous attend dans ce décor victorien.",
        "La résolution doit être rapide pour empêcher un nouveau drame dans le manoir Ashford."
      ],
      moyen: [
        "Un temps équilibré pour réfléchir et agir dans ce huis clos au parfum d’encaustique.",
        "Une enquête qui mêle tension et réflexion dans les salons feutrés du XIXe siècle.",
        "Le temps vous donne une marge, mais attention aux faux-semblants et aux faux indices."
      ],
      long: [
        "Une longue enquête où chaque détail dans ce décor d’époque peut faire basculer l’affaire.",
        "Vous avez le temps d'explorer chaque piste en profondeur dans cette ambiance feutrée et brumeuse.",
        "Une énigme complexe qui nécessite patience et perspicacité, comme dans un roman de Sherlock Holmes."
      ]
    }
  },

  medieval: {
    introductions: [
      "L'an de grâce 1247. Le château retentit d'une tragédie sourde, et les murmures courent dans les couloirs de pierre.",
      "Au cœur du duché, un mystère sanglant ébranle la cour, alors que les alliances vacillent et que la peur s’installe.",
      "Les torches vacillent alors qu'un meurtre vient d'être commis dans la grande salle. Qui parmi les convives ourdit un sombre complot ?"
    ],
    lieux: [
      "la grande salle du château fort",
      "la chapelle secrète sous la tour",
      "les cuisines en pierre froide",
      "la chambre du seigneur",
      "le donjon humide"
    ],
    armes: [
      "une dague en acier rouillé",
      "une hache de combat lourde",
      "une flèche empoisonnée",
      "une pierre tranchante",
      "un chaudron renversé"
    ],
    crimes: [
      "un assassinat brutal dans la nuit",
      "un empoisonnement au breuvage sacré",
      "une disparition inquiétante au lever du jour",
      "un vol d’artefact sacré ou d’or du trésor"
    ],
    objectifs: [
      "Déjouez les plans des traîtres dans ce château médiéval avant qu’ils ne frappent encore.",
      "Identifiez le coupable parmi les nobles et serviteurs de la cour.",
      "Résolvez ce mystère ancien pour rétablir la paix dans le duché."
    ],
    durees: {
      court: [
        "Le temps est compté : une menace pèse sur la cour et doit être déjouée vite.",
        "Une enquête rapide dans un monde rude où la justice est implacable.",
        "Chaque minute perdue peut coûter la vie à un innocent."
      ],
      moyen: [
        "Un équilibre entre action et réflexion dans ce décor historique authentique.",
        "Une enquête qui nécessite tact et vigilance, sous le regard des seigneurs.",
        "Le temps vous laisse la chance de trouver la vérité, mais guettez les pièges."
      ],
      long: [
        "Une longue quête où chaque détail historique et chaque indice compte pour la vérité.",
        "Explorez le château et ses secrets avec patience et ruse.",
        "Un mystère complexe digne des plus grandes légendes médiévales."
      ]
    }
  },

  futuriste: {
    introductions: [
      "Dans la mégalopole de Neo-City, un crime high-tech secoue les élites, dissimulé dans les méandres du cyberespace.",
      "L'an 2150, où la technologie et la trahison s’entrelacent dans l’ombre d’une conspiration interplanétaire.",
      "Un virus mortel a frappé... mais qui est derrière cette cyberattaque ? Et s’il ne s’agissait que d’un leurre ?"
    ],
    lieux: [
      "la salle des serveurs du méga-corporation",
      "le labo secret de cyber-génétique",
      "le toit panoramique avec vue sur la ville lumineuse",
      "le quartier des hackers clandestins",
      "le cockpit d’un vaisseau spatial"
    ],
    armes: [
      "un pistolet laser",
      "un poison synthétique injecté par nanopuce",
      "un virus informatique mortel",
      "un laser de précision",
      "une arme à impulsion électromagnétique"
    ],
    crimes: [
      "un assassinat cybernétique aux conséquences terribles",
      "une empoisonnement via une puce infectée",
      "une disparition liée à un piratage informatique",
      "un vol de données ultra-sensibles"
    ],
    objectifs: [
      "Démasquez le traître avant qu’il ne fasse exploser la mégalopole high-tech.",
      "Trouvez le coupable dans ce réseau complexe de mensonges et de données.",
      "Résolvez cette énigme avant qu’un virus ne détruise tout espoir."
    ],
    durees: {
      court: [
        "Le temps est compté dans ce monde numérique où tout peut s’effacer d’un clic.",
        "Une enquête rapide dans un univers où la technologie est votre pire ennemie.",
        "Agissez vite, les données volées peuvent être effacées à tout moment."
      ],
      moyen: [
        "Un délai raisonnable pour comprendre les interactions complexes de ce futur.",
        "La réflexion et la technologie s’unissent pour déjouer le complot.",
        "Le temps vous permet d’explorer les systèmes de sécurité et les failles."
      ],
      long: [
        "Une enquête longue et immersive, mêlant hacking et déduction.",
        "Explorez chaque couche de sécurité et chaque piste dans cette affaire cybernétique.",
        "Une énigme technologique où la patience et la logique sont vos meilleures armes."
      ]
    }
  },

  autre: {
    introductions: [
      "Une atmosphère mystérieuse plane sur cette époque atypique, entre réalité déformée et vérités multiples.",
      "Les temps changent, et avec eux, un crime aux multiples facettes trouble l’ordre établi.",
      "Un événement hors du temps bouleverse le destin de tous, et chacun devra choisir son camp."
    ],
    lieux: [
      "un lieu insolite hors du temps",
      "un univers parallèle aux règles étranges",
      "une zone neutre entre plusieurs mondes",
      "une dimension inconnue",
      "un espace hors réalité"
    ],
    armes: [
      "une arme inconnue aux effets mystérieux",
      "un poison d’origine indéterminée",
      "une force invisible et meurtrière",
      "une malédiction ancestrale",
      "un artefact énigmatique"
    ],
    crimes: [
      "un meurtre aux circonstances étranges",
      "une disparition inexpliquée",
      "un vol à l’apparence magique",
      "une trahison hors des lois humaines"
    ],
    objectifs: [
      "Dénichez le coupable dans ce décor hors normes et trouvez la vérité.",
      "Explorez les mystères de ce monde atypique pour résoudre l’affaire.",
      "Réussissez cette quête énigmatique avant que les secrets ne disparaissent."
    ],
    durees: {
      court: [
        "Un temps limité pour agir dans ce monde aux règles incertaines.",
        "Une enquête rapide dans un univers où rien n’est acquis.",
        "Chaque seconde compte, et la réalité peut basculer à tout instant."
      ],
      moyen: [
        "Un délai permettant de s’adapter aux mystères de ce décor atypique.",
        "La réflexion est la clé pour avancer dans cette énigme hors du commun.",
        "Un temps de jeu équilibré pour une immersion profonde."
      ],
      long: [
        "Une longue enquête dans un univers où chaque détail peut changer la donne.",
        "Explorez les secrets cachés et dénouez les fils invisibles.",
        "Une aventure complexe qui teste la perception et la logique."
      ]
    }
  }
};

// Fonction utilitaire : choisir un élément aléatoire dans

// Assure-toi que ton bouton appelle bien cette fonction
document.getElementById("generer-btn").addEventListener("click", afficherScenario);
