// univers.js — Banquet médiéval Murder Party

const univers = {
  medieval: {
    banquet: {
      
      lieux: [
  {
    nom: "Grande salle du château",
    genre: "f",
    ambiance:  "Autour de la grande table du souverain, chacun fait bonne figure : la musique résonne, les coupes s’entrechoquent, mais tous s’efforcent de faire semblant. Derrière les sourires, la méfiance rôde et chacun surveille ses paroles, redoutant de trahir ses vrais sentiments."
  }
],

      trames: [
  "Au cœur du festin, {victime} s’effondre soudainement {dans_la_lieu}. L’effroi saisit les convives, le banquet vire aussitôt au cauchemar. les regards suspicieux commencent à se croiser et le mystère s'installe…"
      ],
      
      ambiances: [
  "Autour de la grande table du souverain, chacun fait bonne figure : la musique résonne, les coupes s’entrechoquent, mais tous s’efforcent de faire semblant. Derrière les sourires, la méfiance rôde et chacun surveille ses paroles, redoutant de trahir ses vrais sentiments."
],
      
      personnages: [
    {
          nom: "Roi Arthus",
          role: "roi",
          genre: "m",
          traits: ["autoritaire", "paranoïaque", "charismatique"]
        },
        {
          nom: "Reine Isabeau",
          role: "reine",
          genre: "f",
          traits: ["influente", "jalouse", "stratégique"]
        },
        {
          nom: "Prince héritier Gauvain",
          role: "prince héritier",
          genre: "m",
          traits: ["ambitieux", "impatient", "fier"]
        },
        {
          nom: "Reine mère Aliénor",
          role: "reine mère",
          genre: "f",
          traits: ["manipulatrice", "protectrice", "traditionnaliste"]
        },
        {
          nom: "Évêque Anselme",
          role: "évêque",
          genre: "m",
          traits: ["moraliste", "calculateur", "inquisiteur"]
        },
        {
          nom: "Chef de la garde Roland",
          role: "chef de la garde",
          genre: "m",
          traits: ["loyal", "rigide", "secret"]
        },
        {
          nom: "Chevalier Tristan",
          role: "chevalier",
          genre: "m",
          traits: ["héroïque", "impulsif", "fier"]
        },
        {
          nom: "Dame de compagnie Blanche",
          role: "dame de compagnie",
          genre: "f",
          traits: ["discrète", "dévouée", "curieuse"]
        },
        {
          nom: "Bouffon Piers",
          role: "bouffon",
          genre: "m",
          traits: ["malicieux", "observateur", "provocateur"]
        },
        {
          nom: "Ménestrel Hugo",
          role: "ménestrel",
          genre: "m",
          traits: ["créatif", "envieux", "rêveur"]
        },
        {
          nom: "Cuisinier maître Arnulf",
          role: "cuisinier",
          genre: "m",
          traits: ["orgueilleux", "colérique", "inventif"]
        },
        {
          nom: "Saltimbanque Colin",
          role: "saltimbanque",
          genre: "m",
          traits: ["opportuniste", "mystérieux", "charmeur"]
        },
        {
          nom: "Gueu Martin",
          role: "gueu",
          genre: "m",
          traits: ["rancunier", "rusé", "envieux"]
        }
      ],

      armes: [
        "coupe empoisonnée",
        "dague de table",
        "cordelette de rideau",
        "pichet de vin",
        "poison dans le gibier",
        "épingle de broche",
        "pain moisi empoisonné"
      ],

      indices: [
        "Une fiole de poison vide est retrouvée sous la chaise de {suspect}.",
        "{temoin} a vu {suspect} manipuler la coupe de {victime}.",
        "Un mot de menace signé de la main de {suspect} est retrouvé dans la poche de {victime}.",
        "Une tache de sang sur la manche de {suspect}.",
        "Un bijou appartenant à {suspect} est retrouvé sous la table de {victime}.",
        "Des traces de pas boueuses mènent de la cuisine à la table de {victime}.",
        "Un pan de vêtement arraché (de {suspect}) trouvé près du corps de {victime}."
      ],

      intros: [
        "Le banquet bat son plein lorsque {victime} s'effondre sur son écuelle. Le silence se fait…",
        "Un cri retentit soudain. {victime} vient de s'écrouler, la panique gagne la salle.",
        "La fête est brusquement interrompue par la chute de {victime}, victime d'un crime odieux.",
        "Un toast s'élève, mais {victime} ne relève plus la tête. Quelqu'un vient de commettre l'irréparable."
      ],

      crimes: {
        classique: [
          "{victime} est retrouvé·e sans vie, une dague plantée dans le dos sous la table.",
          "{victime} s'écroule, une trace de strangulation visible sur le cou.",
          "{victime} gît au sol, frappé·e par une main inconnue durant la fête."
        ],
        poison: [
          "{victime} porte la coupe à ses lèvres, puis s'effondre. Un poison mortel a frappé.",
          "Quelques bouchées de gibier, et {victime} suffoque : le poison agit vite.",
          "Le vin de {victime} avait un goût amer... il ne verra pas la fin du banquet."
        ],
        disparition: [
          "{victime} quitte la table, on ne le/la reverra plus. Seule sa bague reste sur sa chaise.",
          "{victime} s’isole brièvement… on retrouve plus tard sa cape ensanglantée dans un couloir.",
          "On cherche {victime} : il/elle a disparu, laissant un silence glaçant."
        ]
      },

 mobiles: { 
    
  "Roi Arthus": {
    "Reine Isabeau": [
      "La reine complotait pour placer leur fils sur le trône.",
      "La reine a humilié le roi devant la cour.",
      "La reine a révélé un secret du roi."
    ],
    "Prince héritier Gauvain": [
      "Gauvain voulait précipiter l’accession au trône.",
      "Gauvain a défié l’autorité de son père publiquement.",
      "Gauvain menaçait de révéler une faiblesse du roi."
    ],
    "Reine mère Aliénor": [
      "Aliénor lui imposait sans cesse ses choix.",
      "Aliénor tentait de contrôler le royaume.",
      "Aliénor a révélé de vieux secrets de famille."
    ],
    "Évêque Anselme": [
      "Anselme faisait pression sur la couronne.",
      "Anselme menaçait d’excommunier le roi.",
      "Anselme connaissait un secret compromettant."
    ],
    "Chef de la garde Roland": [
      "Roland remettait en cause l’autorité royale.",
      "Roland couvrait des mutins.",
      "Roland a trahi la confiance du roi."
    ],
    "Chevalier Tristan": [
      "Tristan a perdu l’honneur du roi dans un tournoi.",
      "Tristan était trop populaire auprès du peuple.",
      "Tristan a défié le roi."
    ],
    "Dame de compagnie Blanche": [
      "Blanche a surpris le roi dans une situation compromettante.",
      "Blanche prenait trop de place auprès de la reine.",
      "Blanche menaçait de parler à la reine."
    ],
    "Bouffon Piers": [
      "Piers s’est moqué du roi devant la cour.",
      "Piers connaissait un secret du roi.",
      "Piers était sur le point d’être renvoyé."
    ],
    "Ménestrel Hugo": [
      "Hugo a écrit une chanson satirique.",
      "Hugo voulait révéler un secret du roi.",
      "Hugo réclamait une place à la cour."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf a servi un plat avarié au roi.",
      "Arnulf voulait se venger d’un renvoi.",
      "Arnulf savait des choses sur la famille royale."
    ],
    "Saltimbanque Colin": [
      "Colin a volé lors du banquet.",
      "Colin faisait chanter la cour.",
      "Colin a été banni du château."
    ],
    "Gueu Martin": [
      "Martin voulait venger l’expulsion de sa famille.",
      "Martin haïssait la noblesse.",
      "Martin a menacé le roi publiquement."
    ]
  },

  "Reine Isabeau": {
    "Roi Arthus": [
      "Le roi voulait répudier la reine.",
      "Le roi était infidèle.",
      "Le roi méprisait Isabeau devant la cour."
    ],
    "Prince héritier Gauvain": [
      "Gauvain la soupçonnait de trahison.",
      "Gauvain dénigrait sa mère.",
      "Gauvain voulait exiler la reine."
    ],
    "Reine mère Aliénor": [
      "Aliénor complotait contre Isabeau.",
      "Aliénor voulait la chasser du château.",
      "Aliénor a révélé un secret sur la reine."
    ],
    "Évêque Anselme": [
      "Anselme faisait du chantage à la reine.",
      "Anselme refusait de l’absoudre.",
      "Anselme menaçait de révéler une faute."
    ],
    "Chef de la garde Roland": [
      "Roland a refusé d’obéir à la reine.",
      "Roland menaçait de révéler une intrigue.",
      "Roland s’opposait à Isabeau."
    ],
    "Chevalier Tristan": [
      "Tristan refusait de la défendre.",
      "Tristan connaissait un secret.",
      "Tristan méprisait l’autorité d’Isabeau."
    ],
    "Dame de compagnie Blanche": [
      "Blanche l’a trahie auprès du roi.",
      "Blanche connaissait sa liaison secrète.",
      "Blanche cherchait à la remplacer."
    ],
    "Bouffon Piers": [
      "Piers se moquait de la reine.",
      "Piers savait quelque chose d’inavouable.",
      "Piers a surpris Isabeau en secret."
    ],
    "Ménestrel Hugo": [
      "Hugo l’a ridiculisée en chanson.",
      "Hugo la faisait chanter.",
      "Hugo était l’objet d’une jalousie."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf a servi un plat qu’elle détestait.",
      "Arnulf menaçait de révéler un secret.",
      "Arnulf a refusé ses ordres."
    ],
    "Saltimbanque Colin": [
      "Colin a volé un bijou de la reine.",
      "Colin faisait chanter Isabeau.",
      "Colin s’est moqué d’elle."
    ],
    "Gueu Martin": [
      "Martin a insulté la reine.",
      "Martin voulait se venger de la noblesse.",
      "Martin a menacé sa famille."
    ]
  },

  "Prince héritier Gauvain": {
    "Roi Arthus": [
      "Le roi refusait de céder le trône.",
      "Le roi humiliait Gauvain en public.",
      "Le roi menaçait de le déshériter."
    ],
    "Reine Isabeau": [
      "La reine favorisait sa sœur.",
      "Isabeau ne croyait pas en Gauvain.",
      "Isabeau voulait l’éloigner de la cour."
    ],
    "Reine mère Aliénor": [
      "Aliénor le traitait comme un enfant.",
      "Aliénor voulait placer un autre héritier.",
      "Aliénor contrôlait sa vie."
    ],
    "Évêque Anselme": [
      "Anselme menaçait d’excommunier Gauvain.",
      "Anselme s’opposait à ses idées.",
      "Anselme connaissait un secret sur lui."
    ],
    "Chef de la garde Roland": [
      "Roland surveillait Gauvain de près.",
      "Roland a humilié Gauvain en duel.",
      "Roland refusait de lui obéir."
    ],
    "Chevalier Tristan": [
      "Tristan était son rival auprès du roi.",
      "Tristan plaisait à sa promise.",
      "Tristan se moquait de Gauvain."
    ],
    "Dame de compagnie Blanche": [
      "Blanche a éconduit Gauvain.",
      "Blanche savait un secret sur lui.",
      "Blanche a trahi un plan de Gauvain."
    ],
    "Bouffon Piers": [
      "Piers l’a ridiculisé en public.",
      "Piers connaissait un secret honteux.",
      "Piers faisait du chantage à Gauvain."
    ],
    "Ménestrel Hugo": [
      "Hugo refusait de flatter Gauvain.",
      "Hugo a composé une chanson satirique.",
      "Hugo était l’amant d’une conquête de Gauvain."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf a servi un plat qu’il détestait.",
      "Arnulf a surpris Gauvain en faute.",
      "Arnulf refusait ses exigences."
    ],
    "Saltimbanque Colin": [
      "Colin s’est moqué de Gauvain.",
      "Colin volait la bourse du prince.",
      "Colin menaçait de révéler un secret."
    ],
    "Gueu Martin": [
      "Martin l’a insulté publiquement.",
      "Martin complotait contre la famille.",
      "Martin voulait venger sa condition."
    ]
  },

  "Reine mère Aliénor": {
    "Roi Arthus": [
      "Le roi voulait l’exiler.",
      "Le roi refusait ses conseils.",
      "Aliénor voulait protéger la lignée."
    ],
    "Reine Isabeau": [
      "Isabeau voulait la chasser du château.",
      "Isabeau était une menace pour l’ordre familial.",
      "Isabeau avait trahi Aliénor."
    ],
    "Prince héritier Gauvain": [
      "Gauvain refusait l’autorité de sa grand-mère.",
      "Gauvain voulait changer la tradition.",
      "Gauvain a blessé Aliénor par son comportement."
    ],
    "Évêque Anselme": [
      "Anselme s’opposait à Aliénor.",
      "Anselme voulait révéler un secret.",
      "Anselme la méprisait."
    ],
    "Chef de la garde Roland": [
      "Roland a refusé de servir Aliénor.",
      "Roland couvrait un complot contre elle.",
      "Roland menaçait la famille royale."
    ],
    "Chevalier Tristan": [
      "Tristan l’a humiliée devant la cour.",
      "Tristan a refusé sa protection.",
      "Tristan était trop proche d’Isabeau."
    ],
    "Dame de compagnie Blanche": [
      "Blanche l’espionnait pour la reine.",
      "Blanche connaissait un secret de famille.",
      "Blanche voulait la remplacer."
    ],
    "Bouffon Piers": [
      "Piers l’a ridiculisée.",
      "Piers connaissait ses secrets.",
      "Piers a surpris Aliénor en faute."
    ],
    "Ménestrel Hugo": [
      "Hugo se moquait d’Aliénor en chanson.",
      "Hugo était l’amant d’une servante d’Aliénor.",
      "Hugo était irrespectueux."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf a servi un plat détesté.",
      "Arnulf a surpris Aliénor en train de comploter.",
      "Arnulf voulait quitter son service."
    ],
    "Saltimbanque Colin": [
      "Colin volait dans sa chambre.",
      "Colin faisait chanter Aliénor.",
      "Colin était irrespectueux."
    ],
    "Gueu Martin": [
      "Martin voulait venger une injustice.",
      "Martin insultait la noblesse.",
      "Martin avait menacé Aliénor."
    ]
  },

  "Évêque Anselme": {
    "Roi Arthus": [
      "Le roi refusait un privilège à l’Église.",
      "Le roi vivait dans le péché.",
      "Le roi voulait remplacer Anselme."
    ],
    "Reine Isabeau": [
      "Isabeau refusait la confession.",
      "Isabeau voulait corrompre Anselme.",
      "Isabeau connaissait un secret sur Anselme."
    ],
    "Prince héritier Gauvain": [
      "Gauvain s’opposait à l’Église.",
      "Gauvain blasphémait publiquement.",
      "Gauvain menaçait la paix religieuse."
    ],
    "Reine mère Aliénor": [
      "Aliénor le méprisait.",
      "Aliénor voulait l’éloigner du pouvoir.",
      "Aliénor refusait ses conseils."
    ],
    "Chef de la garde Roland": [
      "Roland protégeait des hérétiques.",
      "Roland voulait renverser Anselme.",
      "Roland refusait d’obéir à Anselme."
    ],
    "Chevalier Tristan": [
      "Tristan a blasphémé.",
      "Tristan refusait la morale de l’Église.",
      "Tristan a offensé Anselme."
    ],
    "Dame de compagnie Blanche": [
      "Blanche a surpris Anselme en faute.",
      "Blanche refusait la confession.",
      "Blanche connaissait un secret sur Anselme."
    ],
    "Bouffon Piers": [
      "Piers se moquait de l’Église.",
      "Piers menaçait de révéler un secret.",
      "Piers s’est joué d’Anselme."
    ],
    "Ménestrel Hugo": [
      "Hugo a chanté des chansons païennes.",
      "Hugo refusait les sermons d’Anselme.",
      "Hugo était irrespectueux."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf a servi de la viande un jour de jeûne.",
      "Arnulf se moquait des interdits religieux.",
      "Arnulf a surpris Anselme en train de pêcher."
    ],
    "Saltimbanque Colin": [
      "Colin blasphémait.",
      "Colin avait volé l’aumône.",
      "Colin se moquait des sermons."
    ],
    "Gueu Martin": [
      "Martin refusait la charité.",
      "Martin a volé à l’église.",
      "Martin insultait Anselme."
    ]
  },

  "Chef de la garde Roland": {
    "Roi Arthus": [
      "Le roi l’a humilié devant la troupe.",
      "Le roi menaçait de le renvoyer.",
      "Le roi doutait de sa loyauté."
    ],
    "Reine Isabeau": [
      "Isabeau voulait lui imposer des ordres.",
      "Isabeau menaçait sa position.",
      "Isabeau l’a accusé à tort."
    ],
    "Prince héritier Gauvain": [
      "Gauvain l’a défié en duel.",
      "Gauvain voulait l’écarter du pouvoir.",
      "Gauvain le suspectait de trahison."
    ],
    "Reine mère Aliénor": [
      "Aliénor voulait le remplacer.",
      "Aliénor doutait de sa fidélité.",
      "Aliénor l’a menacé d’exil."
    ],
    "Évêque Anselme": [
      "Anselme l’a accusé d’hérésie.",
      "Anselme refusait la protection de Roland.",
      "Anselme voulait le faire excommunier."
    ],
    "Chevalier Tristan": [
      "Tristan a défié son autorité.",
      "Tristan voulait son poste.",
      "Tristan l’a humilié publiquement."
    ],
    "Dame de compagnie Blanche": [
      "Blanche connaissait un secret sur Roland.",
      "Blanche l’a accusé de violence.",
      "Blanche a refusé ses avances."
    ],
    "Bouffon Piers": [
      "Piers s’est moqué de lui.",
      "Piers connaissait un secret militaire.",
      "Piers l’a ridiculisé devant la reine."
    ],
    "Ménestrel Hugo": [
      "Hugo a chanté une ballade contre Roland.",
      "Hugo le soupçonnait de trahison.",
      "Hugo l’a surpris dans une situation compromettante."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf a refusé de lui servir un plat.",
      "Arnulf connaissait un secret sur la garde.",
      "Arnulf l’a insulté."
    ],
    "Saltimbanque Colin": [
      "Colin a volé dans ses quartiers.",
      "Colin l’a accusé de brutalité.",
      "Colin faisait chanter Roland."
    ],
    "Gueu Martin": [
      "Martin a attaqué un soldat.",
      "Martin complotait contre la garde.",
      "Martin l’a insulté publiquement."
    ]
  },

  "Chevalier Tristan": {
    "Roi Arthus": [
      "Le roi a humilié Tristan lors d’un tournoi.",
      "Le roi refusait de l’anoblir.",
      "Le roi doutait de sa loyauté."
    ],
    "Reine Isabeau": [
      "Isabeau l’a éconduit.",
      "Isabeau favorisait un autre chevalier.",
      "Isabeau l’a accusé à tort."
    ],
    "Prince héritier Gauvain": [
      "Gauvain était son rival en amour.",
      "Gauvain l’a humilié en duel.",
      "Gauvain voulait son cheval."
    ],
    "Reine mère Aliénor": [
      "Aliénor l’a traité de roturier.",
      "Aliénor l’a accusé de trahison.",
      "Aliénor l’a ridiculisé devant la cour."
    ],
    "Évêque Anselme": [
      "Anselme l’a accusé de blasphème.",
      "Anselme refusait de bénir ses armes.",
      "Anselme connaissait une faute de Tristan."
    ],
    "Chef de la garde Roland": [
      "Roland l’a humilié devant la troupe.",
      "Roland lui refusait une promotion.",
      "Roland doutait de sa bravoure."
    ],
    "Dame de compagnie Blanche": [
      "Blanche l’a rejeté.",
      "Blanche connaissait un secret honteux.",
      "Blanche l’a dénoncé à la cour."
    ],
    "Bouffon Piers": [
      "Piers s’est moqué de Tristan.",
      "Piers connaissait ses faiblesses.",
      "Piers a chanté une chanson blessante."
    ],
    "Ménestrel Hugo": [
      "Hugo a volé la bien-aimée de Tristan.",
      "Hugo a chanté sur ses échecs.",
      "Hugo refusait de flatter Tristan."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf a servi un plat qui l’a rendu malade.",
      "Arnulf l’a insulté en cuisine.",
      "Arnulf connaissait un secret gênant."
    ],
    "Saltimbanque Colin": [
      "Colin s’est moqué de Tristan.",
      "Colin avait volé son épée.",
      "Colin voulait l’humilier publiquement."
    ],
    "Gueu Martin": [
      "Martin l’a insulté.",
      "Martin refusait de le servir.",
      "Martin voulait venger son frère tué par Tristan."
    ]
  },

  "Dame de compagnie Blanche": {
    "Roi Arthus": [
      "Le roi a tenté d’abuser de Blanche.",
      "Le roi menaçait de la faire renvoyer.",
      "Blanche voulait protéger la reine."
    ],
    "Reine Isabeau": [
      "Isabeau était jalouse de Blanche.",
      "Isabeau l’a humiliée devant la cour.",
      "Isabeau voulait la remplacer."
    ],
    "Prince héritier Gauvain": [
      "Gauvain a tenté de séduire Blanche.",
      "Gauvain l’a menacée de chantage.",
      "Gauvain connaissait un secret sur elle."
    ],
    "Reine mère Aliénor": [
      "Aliénor a menacé de la renvoyer.",
      "Aliénor la soupçonnait d’espionnage.",
      "Aliénor l’a traitée de roturière."
    ],
    "Évêque Anselme": [
      "Anselme a refusé de l’absoudre.",
      "Anselme la suspectait d’hérésie.",
      "Anselme connaissait un secret intime."
    ],
    "Chef de la garde Roland": [
      "Roland l’a importunée.",
      "Roland connaissait sa liaison secrète.",
      "Roland l’a menacée publiquement."
    ],
    "Chevalier Tristan": [
      "Tristan l’a courtisée puis rejetée.",
      "Tristan s’est moqué d’elle.",
      "Tristan a révélé un secret à son sujet."
    ],
    "Bouffon Piers": [
      "Piers l’a ridiculisée publiquement.",
      "Piers connaissait ses secrets.",
      "Piers la faisait chanter."
    ],
    "Ménestrel Hugo": [
      "Hugo l’a trahie pour une autre dame.",
      "Hugo a révélé une confidence.",
      "Hugo chantait sur elle."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf l’a accusée de vol.",
      "Arnulf a servi un plat qu’elle détestait.",
      "Arnulf la soupçonnait d’espionnage."
    ],
    "Saltimbanque Colin": [
      "Colin l’a importunée.",
      "Colin la menaçait de révéler un secret.",
      "Colin se moquait d’elle."
    ],
    "Gueu Martin": [
      "Martin l’a insultée.",
      "Martin a volé un objet précieux.",
      "Martin voulait se venger d’elle."
    ]
  },

  "Bouffon Piers": {
    "Roi Arthus": [
      "Le roi voulait le renvoyer.",
      "Le roi l’a humilié devant la cour.",
      "Le roi lui devait de l’argent."
    ],
    "Reine Isabeau": [
      "Isabeau voulait le faire taire.",
      "Isabeau était la cible de ses plaisanteries.",
      "Isabeau a détruit sa réputation."
    ],
    "Prince héritier Gauvain": [
      "Gauvain l’a frappé en public.",
      "Gauvain était la cible de ses moqueries.",
      "Gauvain a menacé de le bannir."
    ],
    "Reine mère Aliénor": [
      "Aliénor voulait le chasser du château.",
      "Aliénor méprisait son humour.",
      "Aliénor menaçait sa vie."
    ],
    "Évêque Anselme": [
      "Anselme voulait le faire excommunier.",
      "Anselme était la cible de ses satires.",
      "Anselme connaissait un secret sur Piers."
    ],
    "Chef de la garde Roland": [
      "Roland l’a brutalisé.",
      "Roland voulait le faire arrêter.",
      "Roland l’a menacé de mort."
    ],
    "Chevalier Tristan": [
      "Tristan l’a ridiculisé en duel de mots.",
      "Tristan l’a menacé physiquement.",
      "Tristan le traitait de lâche."
    ],
    "Dame de compagnie Blanche": [
      "Blanche l’a accusé d’espionnage.",
      "Blanche était la cible de ses moqueries.",
      "Blanche voulait le chasser du château."
    ],
    "Ménestrel Hugo": [
      "Hugo était son rival artistique.",
      "Hugo voulait prendre sa place.",
      "Hugo l’a trahi."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf a refusé de lui servir à manger.",
      "Arnulf était la cible de ses plaisanteries.",
      "Arnulf voulait le faire empoisonner."
    ],
    "Saltimbanque Colin": [
      "Colin lui volait ses tours.",
      "Colin voulait prendre sa place.",
      "Colin l’a humilié en public."
    ],
    "Gueu Martin": [
      "Martin s'est moqué de lui.",
      "Martin l’a volé.",
      "Martin voulait se venger."
    ]
  },

  "Ménestrel Hugo": {
    "Roi Arthus": [
      "Le roi s’est moqué de ses chansons.",
      "Le roi refusait de le payer.",
      "Le roi menaçait de le bannir."
    ],
    "Reine Isabeau": [
      "Isabeau a refusé qu’il chante pour elle.",
      "Isabeau l’a humilié.",
      "Isabeau l’a accusé d’espionnage."
    ],
    "Prince héritier Gauvain": [
      "Gauvain a critiqué ses œuvres.",
      "Gauvain lui a volé une amoureuse.",
      "Gauvain le méprisait."
    ],
    "Reine mère Aliénor": [
      "Aliénor détestait ses chansons.",
      "Aliénor voulait le bannir.",
      "Aliénor l’a accusé de trahison."
    ],
    "Évêque Anselme": [
      "Anselme interdisait ses chansons païennes.",
      "Anselme l’a accusé de blasphème.",
      "Anselme menaçait de l’excommunier."
    ],
    "Chef de la garde Roland": [
      "Roland l’a menacé de prison.",
      "Roland refusait de le protéger.",
      "Roland se moquait de lui."
    ],
    "Chevalier Tristan": [
      "Tristan a volé son instrument.",
      "Tristan l’a humilié publiquement.",
      "Tristan rivalisait pour une conquête."
    ],
    "Dame de compagnie Blanche": [
      "Blanche l’a rejeté.",
      "Blanche l’a dénoncé à la cour.",
      "Blanche connaissait ses secrets."
    ],
    "Bouffon Piers": [
      "Piers lui volait ses chansons.",
      "Piers le ridiculisait en public.",
      "Piers voulait prendre sa place."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf a servi un plat qu’il détestait.",
      "Arnulf refusait de le nourrir.",
      "Arnulf l’a insulté."
    ],
    "Saltimbanque Colin": [
      "Colin a volé son instrument.",
      "Colin lui volait ses idées.",
      "Colin l’a battu lors d’un concours."
    ],
    "Gueu Martin": [
      "Martin l’a insulté.",
      "Martin a volé sa bourse.",
      "Martin voulait se venger d’une chanson."
    ]
  },

  "Cuisinier maître Arnulf": {
    "Roi Arthus": [
      "Le roi a critiqué sa cuisine.",
      "Le roi voulait le renvoyer.",
      "Le roi refusait de le payer."
    ],
    "Reine Isabeau": [
      "Isabeau a refusé ses plats.",
      "Isabeau voulait le remplacer.",
      "Isabeau l’a accusé de vol."
    ],
    "Prince héritier Gauvain": [
      "Gauvain a insulté sa cuisine.",
      "Gauvain voulait le faire renvoyer.",
      "Gauvain l’a menacé."
    ],
    "Reine mère Aliénor": [
      "Aliénor a refusé de manger ses plats.",
      "Aliénor l'a insulté en public.",
      "Aliénor voulait engager un autre cuisinier."
    ],
    "Évêque Anselme": [
      "Anselme refusait ses plats en période de jeûne.",
      "Anselme l’a accusé d’hérésie.",
      "Anselme l’a humilié."
    ],
    "Chef de la garde Roland": [
      "Roland refusait de le protéger.",
      "Roland l’a insulté.",
      "Roland voulait le faire arrêter."
    ],
    "Chevalier Tristan": [
      "Tristan a critiqué son pain.",
      "Tristan l’a menacé.",
      "Tristan voulait le remplacer."
    ],
    "Dame de compagnie Blanche": [
      "Blanche l’a accusé de vol.",
      "Blanche refusait ses plats.",
      "Blanche a révélé un secret."
    ],
    "Bouffon Piers": [
      "Piers se moquait de sa cuisine.",
      "Piers lui a volé de la nourriture.",
      "Piers voulait l’humilier."
    ],
    "Ménestrel Hugo": [
      "Hugo a chanté une chanson offensante.",
      "Hugo refusait de lui écrire une ode.",
      "Hugo l’a insulté en public."
    ],
    "Saltimbanque Colin": [
      "Colin a volé dans ses réserves.",
      "Colin l’a menacé de chantage.",
      "Colin voulait voler sa recette."
    ],
    "Gueu Martin": [
      "Martin a volé de la nourriture.",
      "Martin l’a insulté.",
      "Martin voulait se venger d’avoir été battu."
    ]
  },

  "Saltimbanque Colin": {
    "Roi Arthus": [
      "Le roi a refusé sa solde.",
      "Le roi voulait le bannir.",
      "Le roi l’a humilié."
    ],
    "Reine Isabeau": [
      "Isabeau l’a accusé de vol.",
      "Isabeau le méprisait.",
      "Isabeau voulait l’expulser."
    ],
    "Prince héritier Gauvain": [
      "Gauvain l’a battu lors d’un concours.",
      "Gauvain l’a humilié.",
      "Gauvain voulait son instrument."
    ],
    "Reine mère Aliénor": [
      "Aliénor voulait le chasser du château.",
      "Aliénor le soupçonnait de vol.",
      "Aliénor l’a traité de vaurien."
    ],
    "Évêque Anselme": [
      "Anselme l’a traité d’hérétique.",
      "Anselme voulait son bannissement.",
      "Anselme l’a menacé."
    ],
    "Chef de la garde Roland": [
      "Roland voulait l’arrêter.",
      "Roland l’a frappé.",
      "Roland l’a menacé."
    ],
    "Chevalier Tristan": [
      "Tristan l’a battu en duel.",
      "Tristan voulait l’humilier.",
      "Tristan l’a insulté."
    ],
    "Dame de compagnie Blanche": [
      "Blanche l’a accusé de vol.",
      "Blanche le soupçonnait d’espionnage.",
      "Blanche le méprisait."
    ],
    "Bouffon Piers": [
      "Piers lui volait ses tours.",
      "Piers voulait sa place.",
      "Piers s’est moqué de lui."
    ],
    "Ménestrel Hugo": [
      "Hugo l’a battu lors d’un concours.",
      "Hugo se moquait de lui.",
      "Hugo voulait sa place."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf l’a accusé de vol.",
      "Arnulf refusait de le nourrir.",
      "Arnulf voulait le chasser des cuisines."
    ],
    "Gueu Martin": [
      "Martin l’a insulté.",
      "Martin voulait voler sa solde.",
      "Martin l’accusait de trahison."
    ]
  },

  "Gueu Martin": {
    "Roi Arthus": [
      "Le roi a expulsé sa famille.",
      "Le roi a fait exécuter son frère.",
      "Le roi lui a tout pris."
    ],
    "Reine Isabeau": [
      "Isabeau l’a fait battre.",
      "Isabeau a volé ses terres.",
      "Isabeau a fait humilier sa sœur."
    ],
    "Prince héritier Gauvain": [
      "Gauvain l’a humilié publiquement.",
      "Gauvain a fait fouetter Martin.",
      "Gauvain voulait chasser tous les gueux."
    ],
    "Reine mère Aliénor": [
      "Aliénor l’a fait bannir.",
      "Aliénor voulait sa mort.",
      "Aliénor l’a insulté."
    ],
    "Évêque Anselme": [
      "Anselme refusait l’aumône.",
      "Anselme le traitait de pécheur.",
      "Anselme a fait enfermer sa sœur."
    ],
    "Chef de la garde Roland": [
      "Roland l’a battu.",
      "Roland a tué un de ses amis.",
      "Roland refusait de l’aider."
    ],
    "Chevalier Tristan": [
      "Tristan l’a frappé.",
      "Tristan a pris sa femme pour servante.",
      "Tristan l’a humilié."
    ],
    "Dame de compagnie Blanche": [
      "Blanche s’est moquée de lui.",
      "Blanche l’a accusé à tort.",
      "Blanche a fait renvoyer sa sœur."
    ],
    "Bouffon Piers": [
      "Piers s’est moqué de lui.",
      "Piers l’a volé.",
      "Piers l’a dénoncé à la garde."
    ],
    "Ménestrel Hugo": [
      "Hugo s’est moqué de lui en chanson.",
      "Hugo a volé son instrument.",
      "Hugo l’a humilié."
    ],
    "Cuisinier maître Arnulf": [
      "Arnulf a refusé de le nourrir.",
      "Arnulf l’a battu.",
      "Arnulf a dénoncé sa famille."
    ],
    "Saltimbanque Colin": [
      "Colin l’a trahi.",
      "Colin a volé sa bourse.",
      "Colin s’est moqué de lui."
    ]
  }
},

        anecdotes: [
  "Vous avez renversé du vin sur la robe du roi lors d’un ancien banquet.",
  "Vous avez sauvé un animal de la cuisine la veille.",
  "Vous avez inventé une chanson sur la famille royale.",
  "Vous avez perdu une pièce précieuse dans la salle.",
  "Vous avez entendu un rire étrange dans la nuit.",
  "Vous avez mangé un plat raté par le cuisinier.",
  "Vous avez eu un fou rire avec le bouffon.",
  "Vous avez assisté à une dispute entre deux nobles.",
  "Vous avez partagé un secret avec la victime il y a longtemps.",
  "Vous avez aidé à organiser le banquet.",
  "Vous avez trouvé un objet étrange sous une table.",
  "Vous avez eu une discussion animée avec un garde.",
  "Vous avez été félicité pour votre tenue.",
  "Vous avez fait une mauvaise blague qui a vexé un convive.",
  "Vous avez vu un animal rôder dans la salle du banquet.",
  "Vous avez gagné un pari contre le ménestrel.",
  "Vous avez été témoin d’un vol mineur.",
  "Vous avez goûté tous les plats en cuisine avant le repas.",
  "Vous avez participé à une danse improvisée.",
  "Vous avez cru voir un fantôme dans un couloir.",
  "Vous avez fait tomber une carafe sans être vu.",
  "Vous avez été pris d’un fou rire au mauvais moment.",
  "Vous avez surpris une conversation intrigante.",
  "Vous avez reçu des compliments de la victime.",
  "Vous avez donné une fleur à un autre invité.",

  ],
  
  secrets: [
  "Vous avez surpris la victime dans une posture compromettante la veille du crime.",
  "Un autre joueur connaît votre secret le plus honteux.",
  "Vous avez été vu près du lieu du crime avant les faits.",
  "Vous détenez une lettre compromettante.",
  "Vous avez déjà trahi un autre personnage.",
  "Vous avez menti sur votre identité par le passé.",
  "Vous cachez un objet lié à la scène du crime.",
  "Vous avez un passé criminel inconnu.",
  "Vous détestiez secrètement la victime.",
  "Vous avez reçu des menaces anonymes.",
  "Vous avez été payé pour garder le silence.",
  "Vous devez de l’argent à la victime.",
  "Vous avez surpris un autre joueur en train de fouiller une chambre.",
  "Vous avez caché un indice important.",
  "Vous avez usurpé la place d’un autre invité.",
  "Vous avez reçu un bijou de la victime.",
  "Vous avez été vu en train de pleurer avant le crime.",
  "Vous avez volé un objet à la victime.",
  "Vous avez déjà tenté de fuir le château.",
  "Vous avez blessé un autre personnage accidentellement.",
  "Vous avez surpris deux personnages en pleine dispute.",
  "Vous avez falsifié un document.",
  "Vous avez été surpris en train d’espionner.",
  "Vous êtes secrètement amoureux(se) de la victime.",
  "Vous avez entendu un plan de meurtre sans l’avoir dénoncé.",
  "Vous avez déjà été faussement accusé d’un crime.",
  "Vous avez changé votre version des faits plusieurs fois.",
  "Vous avez menacé la victime dans le passé.",
  "Vous avez été témoin d’un autre crime.",
  "Vous dissimulez un détail crucial sur la soirée."
  
    ],
  

  missions: [
  "Découvrir le secret d’un autre joueur.",
  "Protéger un autre personnage de toute accusation.",
  "Faire accuser un joueur précis (choisi au hasard).",
  "Survivre sans être soupçonné à la fin.",
  "Faire croire que vous êtes innocent quoi qu'il arrive.",
  "Convaincre deux autres joueurs de votre innocence.",
  "Obtenir un indice supplémentaire auprès du MJ.",
  "Être le premier à proposer un suspect au vote final.",
  "Provoquer une alliance secrète avec un autre joueur.",
  "Obtenir une confession d’un autre joueur.",
  "Révéler publiquement un secret (même inventé).",
  "Éviter totalement de parler à un joueur choisi au hasard.",
  "S'assurer que votre voisin de table soit accusé.",
  "Convaincre quelqu’un de vous considérer comme allié.",
  "Obtenir trois informations sur la victime.",
  "Faire circuler une rumeur sur un joueur.",
  "Protéger la réputation de votre famille.",
  "Obtenir une preuve matérielle lors de l'enquête.",
  "Être désigné comme enquêteur principal.",
  "Vous faire passer pour un témoin clé.",
  "Informer discrètement un joueur d’un indice.",
  "Faire en sorte qu’aucun indice ne vous accuse.",
  "Trouver l’arme du crime.",
  "Faire en sorte que l’on croie que vous étiez ailleurs au moment du crime.",
  "Cacher votre mission à tout prix.",
  "Obtenir un vote de confiance d’au moins deux personnes.",
  "Prendre la défense d’un suspect pendant l’enquête.",
  "Faire accuser un personnage d’une autre classe sociale.",
  "Changer d’avis publiquement sur un suspect au cours de la partie.",
  "Soutirer un secret à un autre joueur.",
  "Obtenir la confiance du “chef de la garde”.",
  "Soutenir le “ménestrel” dans une accusation.",
  "Protéger la “reine” de toute accusation.",
  "Faire croire que le “cuisinier” est impliqué.",
  "Convaincre que la victime s’est suicidée.",
  "Créer un faux alibi pour un autre joueur.",
  "Être le premier à trouver un indice.",
  "S’assurer que personne ne soupçonne la “dame de compagnie”.",
  "Dévoiler un faux témoignage.",
  "Vous faire passer pour un confident de la victime.",
  "Convaincre le MJ de vous donner un indice supplémentaire.",
  "Inventer un lien familial avec la victime.",
  "Faire croire que vous avez été menacé par la victime.",
  "Mettre en avant votre innocence par des gestes.",
  "Obtenir un objet de jeu auprès d’un autre joueur.",
  "Protéger la “reine mère”.",
  "Dévoiler une rivalité passée avec la victime.",
  "S’assurer que “Gueu Martin” soit soupçonné.",
  "Faire croire à un empoisonnement accidentel.",
  "Décrédibiliser un témoin clé.",
  "Rester silencieux pendant 5 minutes.",
  "Changer votre version des faits au moins deux fois.",
  "Faire croire à un complot contre la couronne.",
  "Protéger le “prince héritier”.",
  "Accuser un personnage sans preuve.",
  "Gagner la confiance du “bouffon”.",
  "Vous faire passer pour victime d’un chantage.",
  "Faire accuser deux suspects différents.",
  "Convaincre le MJ de relancer un indice.",
  "Se lier d’amitié avec un adversaire.",
  "Prétendre avoir vu un détail crucial.",
  "Mentir sur votre emploi du temps.",
  "Faire croire que le crime était passionnel.",
  "Mettre en avant une ancienne dispute avec la victime.",
  "Protéger votre réputation.",
  "Trouver un complice (vrai ou faux).",
  "Convaincre les autres de votre loyauté.",
  "Ne jamais mentionner le nom de la victime.",
  "Être soupçonné et vous en sortir.",
  "Détourner l’attention lors d’un échange d’indices.",
  "Changer d’allié en cours de partie.",
  "Obtenir le pardon d’un autre joueur.",
  "Utiliser une anecdote pour détourner l’enquête.",
  "Provoquer une crise de confiance.",
  "Convaincre que l'arme du crime n'est pas celle trouvée.",
  "Garder un air serein en toute circonstance.",
  "Faire croire que vous avez été blessé pendant l’incident.",
  "Prendre la défense d’un innocent.",
  "Détecter un mensonge d’un autre joueur.",
  "Accuser un personnage de mensonge.",
  "Refuser de donner un alibi.",
  "Être le premier à accuser.",
  "Dévoiler l’un de vos propres secrets (faux ou vrai).",
  "Obtenir une faveur du “chef de la garde”.",
  "Protéger un secret à tout prix.",
  "Inventer une anecdote sur la victime.",
  "Être soupçonné par la majorité.",
  "Convaincre que l’enquête fait fausse route.",
  "Mentir sur votre relation avec la victime.",
  "Prendre un risque pour obtenir un indice.",
  "Sauver la vie d’un autre joueur (fictivement).",
  "Impliquer un témoin muet dans l’affaire.",
  "Vous faire oublier pendant l’enquête.",
  "Obtenir un témoignage en votre faveur.",
  "Reconnaître publiquement une faute passée.",
  "Faire un pacte secret avec un joueur.",
  "Proposer une théorie farfelue sur le crime.",
  "Défendre un personnage impopulaire.",
  "Faire croire que vous êtes en danger.",
  "Convaincre un autre joueur de changer d’avis sur vous."
      ]
    } 
  }   
}; 
window.univers = univers;
