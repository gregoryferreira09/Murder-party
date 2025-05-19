// SRC/JS/scenarioData.js

export const scenarioLibrary = {
  periodes: {
    antiquite: {
      nomAffiche: "Antiquité",
      introductions: [
        "Rome, -40 av. J.-C. Un meurtre vient d'être commis dans le {{lieu}}.",
        "Égypte antique, sous le règne de Cléopâtre. Un mystérieux assassinat secoue le {{lieu}}.",
        "Dans la Grèce antique, une ombre plane sur le {{lieu}}, théâtre d’un crime odieux."
      ],
      lieux: ["atrium", "cellier", "temple", "jardin", "thermes"],
      armes: ["dague", "poison", "corde", "statue", "amphore"],
      suspects: ["un esclave", "un patricien", "un prêtre", "un gladiateur", "une vestale"],
      crimes: {
        poison: [
          "Une coupe de vin empoisonné a été trouvée dans le {{lieu}}. L'enquête commence.",
          "Le pain servi dans le {{lieu}} contenait un poison rare, réservé aux traîtres."
        ],
        classique: [
          "Le corps de la victime a été découvert dans le {{lieu}}, une {{arme}} antique plantée dans le dos.",
          "Un meurtre brutal a eu lieu dans le {{lieu}}. Aucun témoin n’a osé parler."
        ],
        disparition: [
          "Un dignitaire s’est volatilisé dans le {{lieu}}. Le mystère s’épaissit.",
          "La disparition d’un prêtre dans le {{lieu}} suscite l’effroi."
        ],
        vol: [
          "Un précieux artefact a été dérobé dans le {{lieu}}.",
          "Le trésor sacré du temple a disparu du {{lieu}}."
        ]
      }
    },
    medieval: {
      nomAffiche: "Moyen Âge",
      introductions: [
        "Château fort, an de grâce 1247. Un meurtre a secoué le {{lieu}}.",
        "Au cœur du royaume, un crime vient d’être commis dans le {{lieu}}.",
        "Une nuit sans lune, le {{lieu}} du château devient scène de drame."
      ],
      lieux: ["salle d'armes", "cellier", "grande salle", "chapelle", "cuisine"],
      armes: ["épée", "poison", "arbalète", "flèche", "poêle en fer"],
      suspects: ["un chevalier", "un bouffon", "une servante", "le chapelain", "le seigneur local"],
      crimes: {
        poison: [
          "Le vin servi dans le {{lieu}} contenait du poison. Un invité s’est effondré.",
          "Un plat empoisonné dans le {{lieu}} a coûté la vie à un noble."
        ],
        classique: [
          "Le corps d’un chevalier a été retrouvé dans le {{lieu}}, transpercé par une {{arme}}.",
          "Un meurtre brutal s’est produit dans la {{lieu}}, semant la panique parmi les convives."
        ],
        disparition: [
          "Un page a disparu mystérieusement dans le {{lieu}}.",
          "Nul ne sait ce qu’il est advenu du troubadour vu pour la dernière fois dans le {{lieu}}."
        ],
        vol: [
          "Le trésor du seigneur a été volé dans le {{lieu}}.",
          "La relique sacrée a disparu de la {{lieu}}."
        ]
      }
    },
    victorien: {
      nomAffiche: "Époque Victorienne",
      introductions: [
        "Londres, 1892. Un crime trouble la quiétude du {{lieu}}.",
        "Dans le brouillard londonien, le {{lieu}} devient le théâtre d’un drame.",
        "Une soirée mondaine tourne au cauchemar dans le {{lieu}}."
      ],
      lieux: ["bibliothèque", "cellier", "salon", "jardin d’hiver", "salle de bal"],
      armes: ["couteau", "pistolet", "poison", "statue", "candelabre"],
      suspects: ["le majordome", "la gouvernante", "un invité mystérieux", "la comtesse", "le colonel"],
      crimes: {
        poison: [
          "Une fiole de cyanure a été versée dans le thé servi au {{lieu}}.",
          "Un poison mortel a discrètement été introduit dans le verre d’un convive au {{lieu}}."
        ],
        classique: [
          "Le corps sans vie a été retrouvé dans la {{lieu}}, une {{arme}} à la main.",
          "Un poignard a mis fin à la vie d’un invité dans le {{lieu}}."
        ],
        disparition: [
          "Un héritier a disparu sans laisser de traces dans le {{lieu}}.",
          "La disparition d’un tableau inestimable a été constatée dans le {{lieu}}."
        ],
        vol: [
          "Un bijou d’une grande valeur a disparu du {{lieu}}.",
          "Le coffre a été forcé dans le {{lieu}} et tout le monde est suspect."
        ]
      }
    },
    futuriste: {
      nomAffiche: "Futuriste",
      introductions: [
        "Neo-City, 2150. Un crime high-tech a été commis dans le {{lieu}}.",
        "Dans la station orbitale, le {{lieu}} devient scène d’un meurtre sophistiqué.",
        "Le système d’IA principal du {{lieu}} vient d’être piraté pour couvrir un crime."
      ],
      lieux: ["laboratoire", "salle de téléportation", "pont de commandement", "cabine d’hyper-sommeil", "jardin hydroponique"],
      armes: ["rayon laser", "virus nanotechnologique", "dague énergétique", "neurotoxine", "robot domestique"],
      suspects: ["un androïde", "le capitaine", "une IA", "le chef scientifique", "un voyageur temporel"],
      crimes: {
        poison: [
          "Un nanopoison a été injecté dans le système d’eau du {{lieu}}.",
          "Une toxine inconnue a contaminé l’air du {{lieu}}."
        ],
        classique: [
          "Le corps a été retrouvé dans le {{lieu}}, déconnecté de la matrice, une {{arme}} à proximité.",
          "Une altercation a dégénéré en meurtre dans le {{lieu}}."
        ],
        disparition: [
          "Un scientifique s’est évaporé du {{lieu}}, sans trace dans les logs.",
          "Un prototype top secret a disparu du {{lieu}}."
        ],
        vol: [
          "Le cristal d’énergie a été volé dans le {{lieu}}.",
          "Un code d’accès a été subtilisé dans le {{lieu}}."
        ]
      }
    },
    autre: {
      nomAffiche: "Autre",
      introductions: [
        "Une atmosphère mystérieuse plane sur le {{lieu}}, entre réalité déformée et vérités multiples."
      ],
      lieux: ["salle inconnue", "dimension parallèle", "lieu indéfini"],
      armes: ["objet étrange", "pouvoir mystérieux"],
      suspects: ["personne connue", "créature énigmatique"],
      crimes: {
        poison: [
          "Un poison mystérieux a été trouvé dans le {{lieu}}."
        ],
        classique: [
          "Un meurtre a été commis dans le {{lieu}}, mais rien n’est logique ici."
        ],
        disparition: [
          "Quelqu’un a disparu dans le {{lieu}}, sans laisser de traces."
        ],
        vol: [
          "Quelque chose d’inestimable a été dérobé dans le {{lieu}}."
        ]
      }
    }
  },
  objectifs: {
    1: [
      "Dénichez le meurtrier avant qu’il ne frappe à nouveau. Chaque minute compte, chaque regard peut trahir.",
      "Trouvez l'assassin avant que la vérité ne soit effacée à jamais. Il ou elle se cache peut-être juste sous vos yeux.",
      "Résolvez cette énigme en un temps limité pour sauver l’innocent, car le vrai coupable vous observe déjà."
    ],
    2: [
      "Deux coupables se cachent... à vous de les démasquer avant qu’ils ne s’enfuient. Ils pourraient même se couvrir mutuellement.",
      "Découvrez l’identité des deux criminels avant qu’ils ne manipulent toute l’enquête.",
      "La complexité augmente : deux meurtriers, un seul mystère. Faites attention à ce que chacun dit… ou tait."
    ],
    3: [
      "Trois assassins, liés par un pacte secret, ont dissimulé leur crime derrière une toile de mensonges. Saurez-vous démêler le vrai du faux avant qu’un innocent ne tombe ?",
      "Une trahison orchestrée par trois esprits machiavéliques secoue le domaine. Chaque indice pourrait être un leurre.",
      "Ils sont trois. Trois silhouettes dans l’ombre, unies par un mobile insondable. Saurez-vous les démasquer ?"
    ]
  },
  durees: {
    court: [
      "Le temps presse, chaque minute compte dans cette course contre la montre.",
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
