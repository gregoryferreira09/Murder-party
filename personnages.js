// personnages.js

const listeDesPersonnages = [
  {
    id: 1,
    nom: 'Violette',
    image: 'assets/violette.jpg',
    role: 'La complice rusée',
    objectifs: [
      'Protéger le meurtrier',
      'Semer le doute chez les enquêteurs'
    ],
    indices: [
      'Une lettre déchirée retrouvée dans la cheminée.',
      'Elle a été vue quittant la pièce 10 minutes avant le meurtre.'
    ],
    pouvoirs: [
      'Peut mentir une fois sans pénalité',
      'Peut intercepter un indice destiné à un autre joueur'
    ]
  },
  {
    id: 2,
    nom: 'Colonel Moutarde',
    image: 'assets/moutarde.jpg',
    role: 'L’ancien militaire au passé trouble',
    objectifs: [
      'Laver son honneur',
      'Découvrir qui le fait chanter'
    ],
    indices: [
      'Possède une arme similaire à celle du crime.',
      'A un alibi flou.'
    ],
    pouvoirs: [
      'Peut forcer un joueur à répondre à une question',
      'Peut bloquer un vote une fois'
    ]
  },
  {
    id: 3,
    nom: 'Inspecteur Lavande',
    image: 'images/perso1.png',
    role: 'L’enquêteur perspicace',
    objectifs: [
      'Résoudre l’affaire coûte que coûte',
      'Protéger les innocents'
    ],
    indices: [
      'A retrouvé un carnet avec des initiales suspectes.',
      'Était dans la bibliothèque au moment du meurtre.'
    ],
    pouvoirs: [
      'Peut recouper deux indices et en tirer une vérité',
      'Peut désigner un joueur à suivre'
    ]
  },
  {
    id: 4,
    nom: 'Madame Célestine',
    image: 'images/perso2.png',
    role: 'La voyante trouble',
    objectifs: [
      'Découvrir l’identité du coupable à travers ses visions',
      'Protéger un secret personnel'
    ],
    indices: [
      'A fait un rêve étrange la nuit précédente.',
      'A entendu un cri dans le couloir.'
    ],
    pouvoirs: [
      'Peut poser une question sur le rôle d’un autre joueur (sans réponse obligatoire)',
      'Peut "voir" un indice flou supplémentaire'
    ]
  },
  {
    id: 5,
    nom: 'Professeur Grimoire',
    image: 'images/perso3.png',
    role: 'Le scientifique excentrique',
    objectifs: [
      'Tester une nouvelle théorie criminologique',
      'Garder le contrôle sur ses expériences'
    ],
    indices: [
      'Possède une fiole contenant un résidu suspect.',
      'Avait accès au plan du manoir.'
    ],
    pouvoirs: [
      'Peut rejouer un tour d’interrogatoire',
      'Peut changer l’ordre des votes'
    ]
  },
  {
    id: 6,
    nom: 'Capitaine Rouge',
    image: 'images/perso4.png',
    role: 'Le marin à la retraite',
    objectifs: [
      'Protéger un vieil ami',
      'Masquer un ancien crime de guerre'
    ],
    indices: [
      'A laissé des traces de pas humides dans le couloir.',
      'Possède une carte très ancienne.'
    ],
    pouvoirs: [
      'Peut échanger son indice avec un autre joueur',
      'Peut désigner un joueur pour qu’il ne parle pas pendant un tour'
    ]
  },
  {
    id: 7,
    nom: 'Sœur Marguerite',
    image: 'images/perso5.png',
    role: 'La religieuse silencieuse',
    objectifs: [
      'Protéger la morale et la vérité',
      'Expier un péché ancien'
    ],
    indices: [
      'A récité une prière étrange avant le crime.',
      'Connait un lourd secret sur la victime.'
    ],
    pouvoirs: [
      'Peut absoudre un joueur (réduire les soupçons sur lui)',
      'Peut forcer un aveu partiel'
    ]
  },
  {
    id: 8,
    nom: 'Docteur Alambic',
    image: 'images/perso6.png',
    role: 'Le médecin mystérieux',
    objectifs: [
      'Dissiper les doutes sur ses expériences',
      'Découvrir un remède caché par la victime'
    ],
    indices: [
      'A un accès aux registres médicaux de tous.',
      'A menti sur sa localisation pendant l’enquête.'
    ],
    pouvoirs: [
      'Peut anesthésier un joueur (le faire passer son tour)',
      'Peut poser une question confidentielle'
    ]
  },
  {
    id: 9,
    nom: 'Baron Mystère',
    image: 'images/perso7.png',
    role: 'Le noble masqué',
    objectifs: [
      'Garder son identité secrète',
      'Manipuler les autres sans être démasqué'
    ],
    indices: [
      'Toujours vu avec des gants.',
      'Possède un objet trouvé sur la scène de crime.'
    ],
    pouvoirs: [
      'Peut échanger son identité avec un autre joueur (une seule fois)',
      'Peut mentir sans que cela soit suspecté une fois'
    ]
  },
  {
    id: 10,
    nom: 'Comtesse Ombrelune',
    image: 'images/perso8.png',
    role: 'L’aristocrate vénéneuse',
    objectifs: [
      'Éliminer un rival discret',
      'Faire accuser un innocent'
    ],
    indices: [
      'Était proche de la victime la veille.',
      'Possède un flacon de parfum suspect.'
    ],
    pouvoirs: [
      'Peut empoisonner un indice pour qu’il devienne faux',
      'Peut accuser un joueur sans preuve une fois'
    ]
  }
];
