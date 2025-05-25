// SRC/JS/referentiel-identites.js

const referentielIdentites = {
  liensVictime: {
    medieval: [
      "Ancien·ne écuyer·ère de la victime",
      "Rival·e pour l’héritage du fief",
      "Protégé·e par la victime au château",
      "Ami·e d’enfance du village",
      "Croyant·e que la victime est maudite",
      "Confrère·sse de la confrérie locale"
    ],
    renaissance: [
      "Rival·e artistique de la victime",
      "Protégé·e du mécène assassiné",
      "Complice de soirées secrètes",
      "Cousin·e de province",
      "Sujet d’un tableau de la victime"
    ],
    victorien: [
      "Employé·e de maison",
      "Hérite d’une part du testament",
      "Compagnon·ne de salon littéraire",
      "Voisin·e du manoir",
      "Ancien·ne soupirant·e"
    ],
    western: [
      "Compagnon·ne de beuverie",
      "Rival·e de poker",
      "Ancien·ne associé·e dans un hold-up",
      "Filleul·e du shérif",
      "Client·e habituel·le du saloon"
    ],
    contemporain: [
      "Collègue de bureau",
      "Voisin·e de palier",
      "Connaissance via un réseau social",
      "Partenaire de club de sport",
      "Ancien·ne camarade de lycée"
    ],
    futuriste: [
      "Coéquipier·ère sur la station",
      "Rival·e de laboratoire",
      "Sujet d’une expérience commune",
      "Ancien·ne amant·e cybernétique",
      "Membre de la même guilde spatiale"
    ],
    historique: [
      "Rival·e politique",
      "Membre de la cour royale",
      "Compagnon·ne de voyage",
      "Disciple dans une école célèbre"
    ]
  },

  secrets: {
    medieval: [
      "Vous avez consulté une sorcière récemment.",
      "Vous volez parfois dans les cuisines.",
      "Vous avez surpris la victime dans un rituel étrange.",
      "Vous cachez une blessure mystérieuse.",
      "Vous avez été menacé·e par un inconnu·e lors de la dernière foire."
    ],
    renaissance: [
      "Vous falsifiez des œuvres d’art en secret.",
      "Vous entretenez une liaison interdite.",
      "Vous avez volé une invention de la victime.",
      "Vous avez espionné une rencontre secrète.",
      "Vous êtes endetté·e auprès d’un usurier."
    ],
    victorien: [
      "Vous avez intercepté une lettre compromettante.",
      "Vous vous êtes introduit·e dans la bibliothèque de nuit.",
      "Vous avez été vu·e avec un poison.",
      "Vous avez tenté de soudoyer le majordome.",
      "Vous êtes la cible d’un chantage."
    ],
    western: [
      "Vous avez triché lors d’une partie de cartes.",
      "Vous possédez une arme volée.",
      "Vous avez aidé un bandit recherché.",
      "Vous cachez un sac d’or dans la grange.",
      "Vous avez un passé de hors-la-loi."
    ],
    contemporain: [
      "Vous avez piraté le téléphone de la victime.",
      "Vous avez un lien secret avec la police.",
      "Vous détenez des infos compromettantes sur un collègue.",
      "Vous cachez une addiction.",
      "Vous êtes l’auteur·rice d’un blog anonyme à scandale."
    ],
    futuriste: [
      "Vous communiquez en secret avec une IA rebelle.",
      "Vous avez saboté une expérience récemment.",
      "Vous possédez un implant interdit.",
      "Vous cachez un message extraterrestre.",
      "Vous êtes soupçonné·e d’espionnage industriel."
    ],
    historique: [
      "Vous avez trahi votre patrie par le passé.",
      "Vous êtes l’enfant illégitime d’un notable.",
      "Vous détenez un artefact volé.",
      "Vous avez falsifié un document royal.",
      "Vous êtes impliqué·e dans une société secrète."
    ]
  },

  missions: {
    medieval: [
      "Déjouer un complot contre le seigneur.",
      "Protéger un secret familial.",
      "Convaincre la guérisseuse d’avouer un crime.",
      "Obtenir une relique cachée.",
      "Sauver l’honneur de votre famille."
    ],
    renaissance: [
      "Voler discrètement une œuvre d’art.",
      "Faire accuser un rival artistique.",
      "Obtenir la confiance du mécène.",
      "Empêcher la découverte d’un faux.",
      "Récupérer une lettre compromettante."
    ],
    victorien: [
      "Découvrir qui espionne le manoir.",
      "S’assurer que le testament soit modifié.",
      "S’infiltrer dans une réunion secrète.",
      "Gagner la confiance de la gouvernante.",
      "Obtenir un objet dans la chambre forte."
    ],
    western: [
      "Gagner une fortune au poker.",
      "Faire accuser le shérif.",
      "Obtenir une rançon.",
      "Empêcher un duel.",
      "Sortir du saloon sans être vu·e."
    ],
    contemporain: [
      "Faire accuser un collègue.",
      "Récupérer un objet dans le bureau de la victime.",
      "Empêcher la fuite d’informations.",
      "Convaincre la police de votre innocence.",
      "Découvrir le mot de passe du wifi de la victime."
    ],
    futuriste: [
      "Saboter un module de la station.",
      "Pirater l’IA centrale.",
      "Empêcher une expérience dangereuse.",
      "Convaincre l’équipage de suivre vos ordres.",
      "Récupérer un échantillon unique."
    ],
    historique: [
      "Protéger un secret d’État.",
      "Obtenir une place à la cour.",
      "Faire accuser un rival politique.",
      "Empêcher la divulgation d’un document.",
      "Récupérer une relique sacrée."
    ]
  },

  anecdotes: {
    medieval: [
      "Vous chantez faux mais adorez les banquets.",
      "Vous avez peur des chouettes.",
      "Votre plat préféré est la soupe d’ortie."
    ],
    renaissance: [
      "Vous adorez les bals masqués.",
      "Vous collectionnez les plumes rares.",
      "Vous craignez les orages."
    ],
    victorien: [
      "Vous faites toujours tomber votre monocle.",
      "Vous avez un faible pour le thé à la bergamote.",
      "Vous ne supportez pas les chiens."
    ],
    western: [
      "Vous ne buvez que du lait.",
      "Vous parlez à votre cheval.",
      "Vous n’avez jamais vu la mer."
    ],
    contemporain: [
      "Vous êtes accro au café.",
      "Vous détestez les réunions Zoom.",
      "Vous collectionnez les mugs rigolos."
    ],
    futuriste: [
      "Vous avez le mal de l’espace.",
      "Vous collectionnez les météorites.",
      "Vous parlez couramment trois langues alien."
    ],
    historique: [
      "Vous écrivez de la poésie en secret.",
      "Vous adorez les jeux de société antiques.",
      "Vous êtes daltonien·ne."
    ]
  }
};

if (typeof module !== 'undefined') module.exports = referentielIdentites;
else window.referentielIdentites = referentielIdentites;
