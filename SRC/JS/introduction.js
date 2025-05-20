// === UNIVERS COHÉRENTS & ÉLARGIS ===
const univers = {
  
  victorien: {
  lieux: lieuxParEpoque.victorien,
  // autres propriétés...
},
    victimes: [
      { nom: "le comte Ashford", genre: "m" }, { nom: "la gouvernante Wells", genre: "f" }, { nom: "le colonel Rutherford", genre: "m" },
      { nom: "lady Emily", genre: "f" }, { nom: "le majordome Carter", genre: "m" }, { nom: "le jeune héritier Samuel", genre: "m" },
      { nom: "la cousine Agathe", genre: "f" }, { nom: "le docteur Finch", genre: "m" }, { nom: "la pianiste Margery", genre: "f" }
    ],
    suspects: [
      "le majordome Carter", "la gouvernante Wells", "lady Emily", "le colonel Rutherford", "le jardinier Hopkins", "la cuisinière Mrs. Doyle",
      "le neveu Henry", "la cousine Agathe", "le docteur Finch", "la pianiste Margery"
    ],
    temoins: [
      { nom: "le jardinier Hopkins", genre: "m" }, { nom: "la cuisinière Mrs. Doyle", genre: "f" }, { nom: "la vieille Miss Carter", genre: "f" },
      { nom: "le palefrenier Giles", genre: "m" }, { nom: "le cocher Brown", genre: "m" }, { nom: "l'institutrice May", genre: "f" }
    ],
    indices: [
      "une montre cassée près d’un fauteuil", "un mouchoir monogrammé oublié sur le sol", "des traces de boue menant vers le sous-sol",
      "un verre de vin à moitié plein à l’odeur suspecte", "une lettre déchirée dans la cheminée", "une perle arrachée trouvée dans l'escalier",
      "des cendres de cigarette dans la serre", "un carnet griffonné tombé sous un canapé"
    ],
    traitsVictimes: [
      "respecté", "craintif", "mystérieux", "détesté", "ambitieux", "très apprécié", "discret", "rancunier", "hypocrite", "brillant", "timide"
    ],
    motifs: [
      "l’héritage", "la jalousie", "une ancienne rancune", "un secret inavoué", "l’ambition politique", "une dette de jeu",
      "un amour contrarié", "une humiliation publique", "la peur d’un scandale", "une rivalité professionnelle"
    ],
    armes: [
      "un chandelier", "une dague", "du poison", "un revolver", "une corde", "un coupe-papier", "un tisonnier", "une canne-épée",
      "un coussin", "une fiole d'acide", "un couteau de cuisine"
    ],
    ambiances: [
      "le tonnerre gronde au loin", "les invités masqués se perdent dans la fête", "le brouillard étreint le jardin",
      "le petit matin s’annonce trouble", "un dîner animé se prépare", "des éclats de voix résonnent dans la maison",
      "une horloge sonne sinistrement", "l’orage menace de couper l’électricité"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les secrets se murmurent, les regards s’évitent.",
      "Le manoir vibre d’une excitation étrange. {suspect1} semble préoccupé·e ce soir.",
      "Dans {la_lieu}, la tension monte. Des rumeurs courent sur {motif}.",
      "Un bal masqué s’organise : la jalousie couve entre {suspect1} et {suspect2}.",
      "[INDICE] La soirée commence dans {la_lieu}. Déjà, {indice}.",
      "[TEMOIN] Selon {temoin}, l’attitude de {suspect1} est étrange ce soir.",
      "Une dispute éclate dans {la_lieu}. Tous semblent nerveux.",
      "La pluie frappe les vitres, l’ambiance est lourde. {suspect2} évite les regards."
    ],
    crimes: {
      classique: [
        "Un cri retentit : {victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés. {indice}",
        "{victime} a été assassiné·e {dans_la_lieu}. {temoin} affirme avoir vu {suspect1} rôder dans le secteur.",
        "La découverte est brutale : {victime} gît {dans_la_lieu}. Tous se tournent vers {suspect1}.",
        "{victime} a succombé à une attaque violente {dans_la_lieu}. {temoin} est bouleversé·e.",
        "Le drame s'est joué {dans_la_lieu} : {victime} a été tué·e. {indice}",
        "{victime} est retrouvé·e étendu·e {dans_la_lieu}, la scène est figée, {arme} à la main."
      ],
      poison: [
        "Le repas tourne au drame : {victime} s’effondre, empoisonné·e. {indice}",
        "{victime} n’a pas survécu à une gorgée de trop {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "Le médecin du manoir parle d’empoisonnement. {suspect1} et {suspect2} se défaussent.",
        "Un parfum suspect flotte dans l'air. {victime} s'écroule subitement."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}. {temoin} l’a vu quitter la pièce précipitamment.",
        "La famille s’inquiète : {victime} n’a pas reparu depuis la veille. {indice}",
        "{victime} a disparu sans laisser de traces {dans_la_lieu}. {suspect1} reste silencieux.",
        "{victime} n’a pas été vu·e depuis la nuit dernière."
      ],
      vol: [
        "Un bijou a disparu, et {victime} donne l’alerte. {temoin} dit avoir vu {suspect1} rôder dans les environs.",
        "Dans la confusion, {victime} remarque la disparition d’un objet précieux {dans_la_lieu}. {indice}",
        "Un vol audacieux déstabilise tout le monde. {suspect1} est immédiatement suspecté.",
        "Le coffre du {lieu} a été forcé. {indice}"
      ]
    }
  },

Western: {
  lieux: lieuxParEpoque.western,
  // autres propriétés...
},
  victimes: [
    { nom: "le shérif Johnson", genre: "m" }, { nom: "la chanteuse Daisy", genre: "f" }, { nom: "le banquier Miller", genre: "m" },
    { nom: "le joueur de poker Sam", genre: "m" }, { nom: "la patronne Mary", genre: "f" }
  ],
  suspects: [
    "le hors-la-loi Billy", "la serveuse Kate", "le joueur de poker Sam", "le fermier Bob", "la patronne Mary", "le barman Joe"
  ],
  temoins: [
    { nom: "le barman Joe", genre: "m" }, { nom: "la serveuse Kate", genre: "f" }, { nom: "le conducteur de train Jack", genre: "m" }
  ],
  indices: [
    "un revolver encore chaud", "un chapeau troué", "une carte d’as ensanglantée",
    "une botte couverte de boue", "un verre cassé derrière le bar"
  ],
  traitsVictimes: [
    "dur", "respecté", "redouté", "chanceux", "solitaire", "rancunier"
  ],
  motifs: [
    "la vengeance", "une dette de jeu", "une histoire d’amour contrariée", "un vol manqué", "une rivalité dans la ville"
  ],
  armes: [
    "un revolver", "un couteau", "du poison", "une corde de lasso", "un pichet de whisky"
  ],
  ambiances: [
    "le vent soulève la poussière", "le piano joue dans le saloon", "le soleil tape sur la ville", "le train approche en sifflant"
  ],
  intro: [
    "{ambiance} dans {la_lieu}. Les regards sont méfiants.",
    "Le saloon est en effervescence. {suspect1} surveille {suspect2}.",
    "Dans {la_lieu}, la tension monte autour de {motif}.",
    "[INDICE] {indice} trouble le calme.",
    "[TEMOIN] {temoin} prétend avoir vu {suspect1} près de la scène.",
    "Un étranger vient d’entrer en ville.",
    "Tout le monde attend le prochain coup de feu."
  ],
  crimes: {
    classique: [
      "Un coup de feu retentit : {victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés. {indice}",
      "{victime} a été abattu·e {dans_la_lieu}. {temoin} accuse {suspect1}.",
      "Le drame s'est joué {dans_la_lieu} : {victime} gît au sol. {indice}",
      "La stupeur s’empare du saloon : {suspect1} est aussitôt suspecté."
    ],
    poison: [
      "La soirée tourne court : {victime} s’effondre, empoisonné·e. {indice}",
      "{victime} n’a pas survécu à un whisky trafiqué {dans_la_lieu}. {temoin} accuse {suspect1}.",
      "Le médecin parle d’empoisonnement. {suspect1} et {suspect2} sont interrogés."
    ],
    disparition: [
      "{victime} reste introuvable {dans_la_lieu}. {temoin} l’a vu fuir en direction du désert.",
      "La ville s’inquiète : {victime} n’a pas reparu depuis la nuit. {indice}",
      "{victime} a disparu sans laisser de traces {dans_la_lieu}."
    ],
    vol: [
      "Le coffre de la banque a été vidé : {temoin} a vu {suspect1} rôder.",
      "Dans la cohue, {victime} remarque la disparition d’un objet {dans_la_lieu}. {indice}",
      "Un casse audacieux secoue la ville. {suspect1} est suspecté."
    ]
  }
},

Contemporain: {
  lieux: [
    { nom: "appartement", genre: "m" }, { nom: "bureau", genre: "m" }, { nom: "discothèque", genre: "f" },
    { nom: "parking souterrain", genre: "m" }, { nom: "galerie d’art", genre: "f" }, { nom: "rooftop", genre: "m" }
  ],
  victimes: [
    { nom: "le PDG Martin", genre: "m" }, { nom: "la DJ Sandra", genre: "f" }, { nom: "l’avocat Paul", genre: "m" },
    { nom: "la galeriste Inès", genre: "f" }, { nom: "le gardien Boris", genre: "m" }
  ],
  suspects: [
    "l’assistante Julie", "le collègue Antoine", "la voisine Clara", "le DJ Max", "la galeriste Inès", "le gardien Boris"
  ],
  temoins: [
    { nom: "le concierge Michel", genre: "m" }, { nom: "la réceptionniste Anna", genre: "f" }, { nom: "le livreur Lucas", genre: "m" }
  ],
  indices: [
    "une clé USB mystérieuse", "une empreinte sur une vitre", "un téléphone cassé", "un ticket de parking oublié",
    "une trace de rouge à lèvres inhabituelle"
  ],
  traitsVictimes: [
    "ambitieux", "secret", "inquiet", "apprécié", "solitaire", "innovant"
  ],
  motifs: [
    "la rivalité professionnelle", "un secret d’entreprise", "une histoire d’amour cachée", "une vengeance personnelle", "un chantage"
  ],
  armes: [
    "un couteau de cuisine", "un pistolet", "du poison", "un câble électrique", "un objet contondant"
  ],
  ambiances: [
    "la nuit tombe sur la ville", "la musique résonne dans la discothèque", "une pluie fine s’abat sur la rue", "un orage gronde au loin"
  ],
  intro: [
    "{ambiance} dans {la_lieu}. Les conversations s’arrêtent brusquement.",
    "La fête bat son plein. {suspect1} observe {suspect2}.",
    "Dans {la_lieu}, la tension monte autour de {motif}.",
    "[INDICE] {indice} attire déjà les soupçons.",
    "[TEMOIN] {temoin} pense avoir aperçu {suspect1} à l’écart.",
    "Un coup de téléphone trouble la soirée.",
    "Des regards inquiets se croisent."
  ],
  crimes: {
    classique: [
      "Un cri retentit : {victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés. {indice}",
      "{victime} a été assassiné·e {dans_la_lieu}. {temoin} accuse {suspect1}.",
      "Le drame a eu lieu {dans_la_lieu} : {victime} a été tué·e. {indice}",
      "Stupeur générale : {suspect1} est immédiatement suspecté."
    ],
    poison: [
      "Le cocktail est fatal : {victime} s’effondre, empoisonné·e. {indice}",
      "{victime} n’a pas survécu à une boisson suspecte {dans_la_lieu}. {temoin} accuse {suspect1}.",
      "Le médecin conclut à un empoisonnement. {suspect1} et {suspect2} sont interrogés."
    ],
    disparition: [
      "{victime} n’est plus visible {dans_la_lieu}. {temoin} croit l’avoir vu sortir précipitamment.",
      "La fête s’interrompt : {victime} n’a pas reparu depuis un moment. {indice}",
      "{victime} a disparu sans laisser de traces."
    ],
    vol: [
      "Un objet de valeur a disparu : {temoin} a vu {suspect1} rôder.",
      "Dans la confusion, {victime} remarque la disparition d’un objet {dans_la_lieu}. {indice}",
      "Un vol trouble la soirée. {suspect1} est suspecté."
    ]
  }
},

"Scène historique": {
  lieux: [
    { nom: "château", genre: "m" }, { nom: "salle du trône", genre: "f" }, { nom: "tranchée", genre: "f" },
    { nom: "place publique", genre: "f" }, { nom: "cabinet royal", genre: "m" }, { nom: "campement", genre: "m" }
  ],
  victimes: [
    { nom: "le roi Charles", genre: "m" }, { nom: "la duchesse Anne", genre: "f" }, { nom: "le général Lefebvre", genre: "m" },
    { nom: "le philosophe Voltaire", genre: "m" }, { nom: "la résistante Lucie", genre: "f" }
  ],
  suspects: [
    "la duchesse Anne", "le général Lefebvre", "le philosophe Voltaire", "le garde Gaston", "la servante Jeanne", "le conseiller Richelieu"
  ],
  temoins: [
    { nom: "le garde Gaston", genre: "m" }, { nom: "la servante Jeanne", genre: "f" }, { nom: "le médecin royal Dubois", genre: "m" }
  ],
  indices: [
    "une lettre codée", "une arme ancienne retrouvée", "un uniforme taché de sang",
    "un drapeau chiffonné", "un médaillon brisé"
  ],
  traitsVictimes: [
    "influent", "visionnaire", "controversé", "apprécié", "craint", "incompris"
  ],
  motifs: [
    "la rivalité politique", "la vengeance", "un changement de régime", "une trahison", "la peur du scandale"
  ],
  armes: [
    "une épée d’apparat", "un pistolet ancien", "du poison", "une corde", "un chandelier de bronze"
  ],
  ambiances: [
    "le peuple gronde sur la place", "la guerre fait rage aux portes de la ville", "le roi donne audience au palais", "la nuit tombe sur le campement"
  ],
  intro: [
    "{ambiance} dans {la_lieu}. Les événements prennent une tournure dramatique.",
    "Le château bruisse de rumeurs. {suspect1} semble éviter {suspect2}.",
    "Dans {la_lieu}, tout le monde parle de {motif}.",
    "[INDICE] {indice} sème le trouble.",
    "[TEMOIN] {temoin} a vu {suspect1} agir de façon étrange.",
    "Un discours interrompt les conversations.",
    "La tension monte dans toute la ville."
  ],
  crimes: {
    classique: [
      "Un cri retentit : {victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés. {indice}",
      "{victime} a été assassiné·e {dans_la_lieu}. {temoin} accuse {suspect1}.",
      "Le drame s'est joué {dans_la_lieu} : {victime} a été tué·e. {indice}",
      "Stupeur générale : {suspect1} est immédiatement suspecté."
    ],
    poison: [
      "Le repas du roi tourne au drame : {victime} s’effondre, empoisonné·e. {indice}",
      "{victime} n’a pas survécu à une coupe suspecte {dans_la_lieu}. {temoin} accuse {suspect1}.",
      "Le médecin royal évoque un empoisonnement. {suspect1} et {suspect2} sont surveillés."
    ],
    disparition: [
      "{victime} n’est plus visible {dans_la_lieu}. {temoin} croit l’avoir vu fuir.",
      "La cour s’agite : {victime} n’a pas reparu depuis la veille. {indice}",
      "{victime} a disparu sans laisser de traces {dans_la_lieu}."
    ],
    vol: [
      "Un objet d’État a disparu : {temoin} a vu {suspect1} dans la pièce.",
      "Dans la confusion, {victime} remarque la disparition d’un objet {dans_la_lieu}. {indice}",
      "Un vol trouble la tranquillité du palais. {suspect1} est suspecté."
    ]
  }
},

  
Renaissance: {
  lieux: [
    { nom: "palais", genre: "m" }, { nom: "atelier d'artiste", genre: "m" }, { nom: "jardin royal", genre: "m" },
    { nom: "salle de bal", genre: "f" }, { nom: "bibliothèque", genre: "f" }, { nom: "salle des cartes", genre: "f" }
  ],
  victimes: [
    { nom: "le duc Lorenzo", genre: "m" }, { nom: "la marquise Isabelle", genre: "f" }, { nom: "le peintre Vasari", genre: "m" },
    { nom: "la musicienne Bianca", genre: "f" }, { nom: "l’alchimiste Cesare", genre: "m" }
  ],
  suspects: [
    "la marquise Isabelle", "le peintre Vasari", "la musicienne Bianca", "le chevalier Raffaello", "le chambellan Pietro", "la dame d’honneur Sofia"
  ],
  temoins: [
    { nom: "le valet Tomaso", genre: "m" }, { nom: "la servante Lucia", genre: "f" }, { nom: "le jardinier Marco", genre: "m" }
  ],
  indices: [
    "une plume tachée d’encre", "un flacon de poison caché derrière un livre", "un mouchoir brodé retrouvé dans le jardin",
    "une partition déchirée", "une bague ornée d’un blason inconnu"
  ],
  traitsVictimes: [
    "brillant", "envieux", "mystérieux", "innovant", "jalousé", "érudit"
  ],
  motifs: [
    "la jalousie artistique", "un héritage contesté", "une trahison amoureuse", "la rivalité entre familles", "un secret d’alchimiste"
  ],
  armes: [
    "une dague ouvragée", "du poison", "un chandelier", "une épée fine", "un livre lourd"
  ],
  ambiances: [
    "le bal bat son plein", "la fête illumine les salons", "un débat savant agite la bibliothèque", "la musique envahit le palais"
  ],
  intro: [
    "{ambiance} dans {la_lieu}. Les intrigues de cour s’entremêlent.",
    "Le palais résonne de rumeurs. {suspect1} semble éviter {suspect2}.",
    "Dans {la_lieu}, les artistes chuchotent à propos de {motif}.",
    "[INDICE] {indice} trouble déjà la soirée.",
    "[TEMOIN] {temoin} croit avoir surpris {suspect1} à l’écart.",
    "Une tension palpable flotte sous les ors du palais.",
    "Un air de mystère plane sur la fête."
  ],
  crimes: {
    classique: [
      "Un cri retentit : {victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés. {indice}",
      "{victime} a été assassiné·e {dans_la_lieu}. {temoin} affirme avoir vu {suspect1} rôder.",
      "Le drame s'est joué {dans_la_lieu} : {victime} a été tué·e. {indice}",
      "Le choc est total : {victime} gît {dans_la_lieu}. Tous se tournent vers {suspect1}."
    ],
    poison: [
      "Le festin vire au drame : {victime} s’effondre, empoisonné·e. {indice}",
      "{victime} n’a pas survécu à une gorgée suspecte {dans_la_lieu}. {temoin} accuse {suspect1}.",
      "Le médecin du palais parle d’empoisonnement. {suspect1} et {suspect2} s’observent."
    ],
    disparition: [
      "On ne retrouve plus {victime} {dans_la_lieu}. {temoin} l’a vu partir précipitamment.",
      "La cour s’inquiète : {victime} n’a pas reparu depuis la veille. {indice}",
      "{victime} a disparu sans laisser de traces {dans_la_lieu}."
    ],
    vol: [
      "Un bijou a disparu, et {victime} donne l’alerte. {temoin} dit avoir vu {suspect1} rôder.",
      "Dans la confusion, {victime} remarque la disparition d’un objet précieux {dans_la_lieu}. {indice}",
      "Un vol audacieux ébranle la fête. {suspect1} est suspecté."
    ]
  }
},
  
  medieval: {
    lieux: [
      { nom: "château", genre: "m" }, { nom: "grande salle", genre: "f" }, { nom: "forêt", genre: "f" }, { nom: "cave", genre: "f" },
      { nom: "donjon", genre: "m" }, { nom: "chapelle", genre: "f" }, { nom: "remparts", genre: "m" }, { nom: "écuries", genre: "f" },
      { nom: "salle d'arme", genre: "f" }, { nom: "jardin potager", genre: "m" }, { nom: "crypte", genre: "f" }, { nom: "tour de guet", genre: "f" }
    ],
    victimes: [
      { nom: "le seigneur de Montfaucon", genre: "m" }, { nom: "la servante Ysabeau", genre: "f" }, { nom: "le chevalier Gaspard", genre: "m" },
      { nom: "la dame Aliénor", genre: "f" }, { nom: "le bouffon Arthus", genre: "m" }, { nom: "la cuisinière Berthe", genre: "f" },
      { nom: "le moine Enguerrand", genre: "m" }
    ],
    suspects: [
      "la servante Ysabeau", "le chevalier Gaspard", "la dame Aliénor", "le bouffon Arthus", "le forgeron Hugues", "le prévôt Thomas",
      "la lavandière Mahaut", "le ménestrel Colin", "le cuisinier Lambert"
    ],
    temoins: [
      { nom: "le ménestrel Colin", genre: "m" }, { nom: "le forgeron Hugues", genre: "m" }, { nom: "le prévôt Thomas", genre: "m" },
      { nom: "la lavandière Mahaut", genre: "f" }, { nom: "le page Rémi", genre: "m" }, { nom: "la guérisseuse Béatrix", genre: "f" }
    ],
    indices: [
      "des traces de sang mènent vers la cave", "un médaillon brisé a été retrouvé sous une table", "un morceau de parchemin caché dans la paillasse",
      "une botte couverte de boue près de la porte", "une plume rare laissée sur la scène", "une fiole vide sous le banc", "une cape déchirée dans la cour"
    ],
    traitsVictimes: [
      "loyal", "superstitieux", "redouté", "manipulateur", "intrigant", "héroïque", "taciturne", "charismatique", "peureux", "cupide"
    ],
    motifs: [
      "la vengeance", "un héritage contesté", "une histoire d’amour interdite", "un serment brisé", "une prophétie", "une rivalité chevaleresque",
      "une jalousie de pouvoir", "la peur d’une malédiction"
    ],
    armes: [
      "une épée", "une arbalète", "du poison", "une dague rouillée", "un gourdin", "une masse d'arme", "une lance", "une cordelette",
      "une pierre", "un pichet de vin empoisonné"
    ],
    ambiances: [
      "le banquet bat son plein", "une tempête gronde au-dehors", "la lune éclaire faiblement les couloirs", "la cloche du village résonne",
      "la garde s’est assoupie", "les flammes vacillent dans la cheminée", "le vent siffle entre les tours", "une chouette hulule dans la nuit"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les dames murmurent, les seigneurs s’observent.",
      "La tension est à son comble dans la cour. {suspect1} semble éviter {suspect2}.",
      "Dans {la_lieu}, les conversations se font secrètes. Certains évoquent {motif}.",
      "Un festin débute, mais déjà la suspicion plane entre {suspect1} et {suspect2}.",
      "[INDICE] {indice}. L’atmosphère s’alourdit dans {la_lieu}.",
      "[TEMOIN] {temoin} pense avoir surpris {suspect1} à l’écart, l’air troublé.",
      "Des regards inquiets se croisent lors du banquet.",
      "La pluie martèle les tuiles, rendant l’air électrique."
    ],
    crimes: {
      classique: [
        "Un cri fend la nuit : {victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} plantée dans le dos. {indice}",
        "Le chaos s’empare de la cour : {victime} vient d’être assassiné·e {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "La stupeur est totale : {victime} gît {dans_la_lieu}. Tous se tournent vers {suspect1}.",
        "{victime} a succombé à une attaque brutale {dans_la_lieu}. {temoin} est bouleversé·e.",
        "Le drame s'est joué {dans_la_lieu} : {victime} a été tué·e. {indice}",
        "{victime} est retrouvé·e dans la cour, la foule s’attroupe."
      ],
      poison: [
        "Le festin vire au cauchemar : {victime} s’effondre, empoisonné·e. {indice}",
        "{victime} n’a pas survécu à une gorgée fatale {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "Le médecin du château parle d’empoisonnement. {suspect1} et {suspect2} s’accusent mutuellement.",
        "Un vin suspect circule à table. {victime} s’écroule."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}. {temoin} l’a aperçu quitter la pièce à la hâte.",
        "La cour s’inquiète : {victime} n’a pas reparu depuis la veille. {indice}",
        "{victime} a disparu sans laisser de traces {dans_la_lieu}. {suspect1} se renferme.",
        "{victime} a été aperçu·e pour la dernière fois près de la chapelle."
      ],
      vol: [
        "Le trésor du château a disparu. {temoin} dit avoir vu {suspect1} rôder dans les couloirs.",
        "Dans la confusion, {victime} remarque la disparition d’un objet précieux {dans_la_lieu}. {indice}",
        "Un vol audacieux choque la noblesse. {suspect1} est immédiatement suspecté.",
        "Un coffre éventré a été trouvé dans la salle d'arme."
      ]
    }
  },

  futuriste: {
    lieux: [
      { nom: "station orbitale", genre: "f" }, { nom: "laboratoire", genre: "m" }, { nom: "cyber-café", genre: "m" },
      { nom: "dôme botanique", genre: "m" }, { nom: "soute", genre: "f" }, { nom: "cabine de pilotage", genre: "f" },
      { nom: "couloir stérile", genre: "m" }, { nom: "hangar à drones", genre: "m" }, { nom: "salle des machines", genre: "f" },
      { nom: "observatoire", genre: "m" }
    ],
    victimes: [
      { nom: "le Dr Novak", genre: "m" }, { nom: "l'androïde JAX", genre: "m" }, { nom: "la pilote Vega", genre: "f" },
      { nom: "le directeur Kwan", genre: "m" }, { nom: "la technicienne Mia", genre: "f" }, { nom: "le biologiste Ikar", genre: "m" },
      { nom: "la roboticienne Zora", genre: "f" }
    ],
    suspects: [
      "la technicienne Mia", "le directeur Kwan", "la pilote Vega", "l'androïde JAX", "le biologiste Ikar", "la roboticienne Zora",
      "le chef de la sécurité Rolf", "l’ingénieur Tao"
    ],
    temoins: [
      { nom: "le robot S-19", genre: "m" }, { nom: "l’assistante IA EVA", genre: "f" }, { nom: "le technicien Boris", genre: "m" },
      { nom: "la biologiste Lin", genre: "f" }, { nom: "le stagiaire Yuto", genre: "m" }
    ],
    indices: [
      "un message crypté s'affiche sur l'écran principal", "une empreinte digitale non identifiée est relevée sur la console",
      "un composant électronique manque dans le réacteur", "une trace d'huile mène à l'issue de secours",
      "une carte d'accès est retrouvée près du sas", "un drone inactif dans un couloir", "un badge d'identification oublié sur la table"
    ],
    traitsVictimes: [
      "visionnaire", "calculateur", "instable", "secret", "innovant", "méconnu", "impatient", "arrogant", "solitaire", "charismatique"
    ],
    motifs: [
      "l’espionnage industriel", "une trahison amoureuse", "un piratage raté", "une quête de pouvoir", "la jalousie professionnelle",
      "un différend scientifique", "la peur d’un sabotage", "un conflit d’éthique"
    ],
    armes: [
      "un laser", "un nano-virus", "un scalpel énergisé", "un module saboté", "un drone d’entretien",
      "un câble à haute tension", "une seringue de protoxyde", "une capsule toxique", "un sabre plasma"
    ],
    ambiances: [
      "l’alerte rouge retentit", "les couloirs s'illuminent en bleu", "l'énergie fluctue dans la station",
      "le vaisseau tangue sous une micro-météorite", "la maintenance s'éternise", "le sas grince", "une panne d’IA inquiète l’équipage",
      "l’observatoire détecte une anomalie spatiale"
    ],
    intro: [
      "{ambiance} {dans_la_lieu}. Chacun travaille, chacun se méfie.",
      "L’équipage se réunit pour un rapport de mission. {suspect1} évite le regard de {suspect2}.",
      "Des tensions éclatent. Certains parlent de {motif}.",
      "L’IA centrale observe les moindres faits et gestes.",
      "[INDICE] {indice}. L’équipage échange des regards inquiets.",
      "[TEMOIN] Selon {temoin}, {suspect1} a agi de façon étrange près du sas.",
      "Une alerte de sécurité retentit. L’ambiance se tend.",
      "Une coupure d’électricité plonge la station dans la panique."
    ],
    crimes: {
      classique: [
        "Un cri retentit : {victime} est retrouvé·e sans vie {dans_la_lieu}, frappé·e par {arme}. {indice}",
        "La stupeur gagne l’équipage : {victime} a succombé à une attaque fatale. {temoin} accuse {suspect1}.",
        "Tout le monde se tourne vers {suspect1}, vu·e non loin de la scène.",
        "{victime} a été tué·e. {temoin} a intercepté une transmission suspecte.",
        "Le drame s'est joué {dans_la_lieu} : {victime} a été éliminé·e. {indice}",
        "{victime} est retrouvé·e dans la salle des machines, l’atmosphère est glaciale."
      ],
      poison: [
        "Une contamination soudaine frappe : {victime} s’effondre, victime d'un nano-virus. {indice}",
        "{victime} n’a pas survécu à une injection mortelle {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "Un traceur chimique révèle la présence de poison. {suspect1} est interrogé·e.",
        "Une odeur toxique s’échappe du laboratoire. {victime} s’effondre."
      ],
      disparition: [
        "L’alarme signale la disparition de {victime}. {temoin} a vu une silhouette s’éloigner {dans_la_lieu}.",
        "Plus de trace de {victime} : {suspect1} soupçonne un acte de sabotage.",
        "{victime} a disparu. {indice}",
        "{victime} n’a pas été localisé·e depuis la dernière rotation de la station."
      ],
      vol: [
        "Un module clé est dérobé : {temoin} dit avoir vu {suspect1} près de la zone.",
        "L'IA détecte un accès non autorisé. {indice}",
        "Un vol met en péril la mission. {suspect1} est suspecté.",
        "Le coffre d’accès aux données a été fracturé."
      ]
    }
  },

  autre: {
    lieux: [
      { nom: "salle étrange", genre: "f" }, { nom: "dimension inconnue", genre: "f" }, { nom: "galerie distordue", genre: "f" },
      { nom: "laboratoire du temps", genre: "m" }, { nom: "monolithe mouvant", genre: "m" }, { nom: "hypercube", genre: "m" }
    ],
    victimes: [
      { nom: "l’énigmatique X", genre: "m" }, { nom: "le voyageur temporel", genre: "m" }, { nom: "la voix sans corps", genre: "f" },
      { nom: "le maître du jeu", genre: "m" }, { nom: "l’observateur Mu", genre: "m" }
    ],
    suspects: [
      "le voyageur temporel", "la voix sans corps", "l’énigmatique X", "le maître du jeu", "l’ombre du passé", "le reflet spectral"
    ],
    temoins: [
      { nom: "le reflet spectral", genre: "m" }, { nom: "la voix d’outre-espace", genre: "f" }, { nom: "l’ombre du passé", genre: "f" },
      { nom: "l’observateur Mu", genre: "m" }
    ],
    indices: [
      "une horloge fondue marque minuit treize", "un écho temporel trouble la pièce", "une faille s’ouvre au centre du sol",
      "un fragment de mémoire flotte dans l’air", "une énigme gravée sur les murs pulse faiblement", "une clé quantique disparaît"
    ],
    traitsVictimes: [
      "insaisissable", "omniscient", "paranoïaque", "double", "hors du temps", "fragmenté", "halluciné"
    ],
    motifs: [
      "une anomalie temporelle", "l’envie de pouvoir", "la folie pure", "l’équilibre de l’univers", "la peur du néant"
    ],
    armes: [
      "un artefact", "une onde mentale", "une faille dimensionnelle", "un miroir fractal", "un rayon paradoxal"
    ],
    ambiances: [
      "alors que la réalité vacille", "sous des lumières irréelles", "au moment du grand passage", "quand le temps s’arrête",
      "l’espace se plie et se tord", "le temps s’effiloche"
    ],
    intro: [
      "{ambiance} {dans_la_lieu}. Les lois de la causalité semblent altérées.",
      "Une énigme plane sur l’assemblée. {suspect1} observe {suspect2} d’un air méfiant.",
      "Les souvenirs semblent s’effacer. Certains parlent de {motif}.",
      "Chaque instant, la dimension se reconfigure.",
      "[INDICE] {indice} survient soudain, glaçant l’assemblée.",
      "[TEMOIN] Selon {temoin}, la disparition de {suspect1} n’est pas un hasard.",
      "Un vortex s’ouvre. Les regards se troublent.",
      "Des ombres traversent les murs, semant le trouble."
    ],
    crimes: {
      classique: [
        "Un cri déformé retentit : {victime} n’est plus {dans_la_lieu}. {indice}",
        "La réalité vacille : {victime} s’effondre, frappé·e par {arme}. {temoin} prétend avoir vu {suspect1}.",
        "On accuse {suspect1}, mais la vérité vacille.",
        "{victime} disparaît sans explication. {indice}",
        "Un artefact disparu bouleverse {la_lieu}.",
        "{victime} s’efface lentement, laissant à peine une trace."
      ],
      poison: [
        "Un breuvage inconnu empoisonne {victime} {dans_la_lieu}. {indice}",
        "On soupçonne {arme} d’avoir altéré l’esprit de {victime} {dans_la_lieu}. {temoin} murmure des avertissements.",
        "{suspect1} se tait, mais tout le monde le regarde.",
        "Un champ d’énergie instable fait vaciller {victime}."
      ],
      disparition: [
        "{victime} s’est volatilisé·e {dans_la_lieu}. {temoin} croit avoir vu une silhouette franchir une faille.",
        "Nul ne sait où ni quand {victime} a disparu. {indice}",
        "Une onde mentale efface les souvenirs de {temoin}.",
        "{victime} semble ne jamais avoir existé."
      ],
      vol: [
        "Un objet d’une importance capitale disparaît {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "Dans {la_lieu}, {arme} a été volé pendant que {victime} menait une expérience.",
        "Un paradoxe menace tout équilibre. {suspect1} est désigné·e, mais tout le monde doute.",
        "Le cœur de la dimension a été subtilisé."
      ]
    }
  }
};
