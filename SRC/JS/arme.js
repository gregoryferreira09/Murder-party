// SRC/JS/armes.js

// SRC/JS/arme.js

const armesParEpoque = {
  medieval: {
    "château": [
      { nom: "épée longue", genre: "f" },
      { nom: "dague rouillée", genre: "f" },
      { nom: "bouclier tranchant", genre: "m" },
      { nom: "pichet de vin empoisonné", genre: "m" },
      { nom: "masse d'arme", genre: "f" }
    ],
    "grande salle": [
      { nom: "chandelier", genre: "m" },
      { nom: "gourdin", genre: "m" },
      { nom: "broche à viande", genre: "f" },
      { nom: "cruche", genre: "f" },
      { nom: "couteau", genre: "m" }
    ],
    "forêt": [
      { nom: "arc court", genre: "m" },
      { nom: "bâton de berger", genre: "m" },
      { nom: "pierre sculptée", genre: "f" },
      { nom: "cordelette", genre: "f" },
      { nom: "branche", genre: "f" }
    ],
    "cave": [
      { nom: "barre de fer", genre: "f" },
      { nom: "tonneau", genre: "m" },
      { nom: "pelle", genre: "f" },
      { nom: "cordelette", genre: "f" },
      { nom: "pioche", genre: "f" }
    ],
    "donjon": [
      { nom: "chaîne", genre: "f" },
      { nom: "clé massive", genre: "f" },
      { nom: "boulet", genre: "m" },
      { nom: "épée longue", genre: "f" },
      { nom: "seau", genre: "m" }
    ],
    "chapelle": [
      { nom: "crucifix", genre: "m" },
      { nom: "chandelier", genre: "m" },
      { nom: "bible", genre: "f" },
      { nom: "cierge", genre: "m" },
      { nom: "banc", genre: "m" }
    ],
    "remparts": [
      { nom: "arbalète", genre: "f" },
      { nom: "pierre sculptée", genre: "f" },
      { nom: "lance", genre: "f" },
      { nom: "arc court", genre: "m" },
      { nom: "seau de poix", genre: "m" }
    ],
    "écuries": [
      { nom: "fourche", genre: "f" },
      { nom: "marteau", genre: "m" },
      { nom: "pelle", genre: "f" },
      { nom: "licol", genre: "m" },
      { nom: "seau", genre: "m" }
    ],
    "salle d'armes": [
      { nom: "épée longue", genre: "f" },
      { nom: "masse d'arme", genre: "f" },
      { nom: "hache de guerre", genre: "f" },
      { nom: "bouclier tranchant", genre: "m" },
      { nom: "dague rouillée", genre: "f" }
    ],
    "jardin potager": [
      { nom: "bêche", genre: "f" },
      { nom: "râteau", genre: "m" },
      { nom: "pierre sculptée", genre: "f" },
      { nom: "pot de fleur", genre: "m" },
      { nom: "couteau de récolte", genre: "m" }
    ],
    "crypte": [
      { nom: "pioche", genre: "f" },
      { nom: "chandelier", genre: "m" },
      { nom: "crâne", genre: "m" },
      { nom: "croix", genre: "f" },
      { nom: "bougie", genre: "f" }
    ],
    "tour de guet": [
      { nom: "arc court", genre: "m" },
      { nom: "pierre sculptée", genre: "f" },
      { nom: "lance", genre: "f" },
      { nom: "cordelette", genre: "f" },
      { nom: "corne", genre: "f" }
    ],
    "bastion": [
      { nom: "hallebarde", genre: "f" },
      { nom: "arbalète", genre: "f" },
      { nom: "pierre sculptée", genre: "f" },
      { nom: "épée longue", genre: "f" },
      { nom: "bouclier tranchant", genre: "m" }
    ],
    "cellier": [
      { nom: "bouteille", genre: "f" },
      { nom: "barre de fer", genre: "f" },
      { nom: "couteau", genre: "m" },
      { nom: "tonneau", genre: "m" },
      { nom: "louche", genre: "f" }
    ],
    "moulin": [
      { nom: "pelle", genre: "f" },
      { nom: "sac de farine", genre: "m" },
      { nom: "roue de bois", genre: "f" },
      { nom: "bâton ferré", genre: "m" },
      { nom: "cordelette", genre: "f" }
    ],
    "grange": [
      { nom: "fourche", genre: "f" },
      { nom: "pelle", genre: "f" },
      { nom: "cordelette", genre: "f" },
      { nom: "râteau", genre: "m" },
      { nom: "seau", genre: "m" }
    ],
    "puits": [
      { nom: "seau", genre: "m" },
      { nom: "cordelette", genre: "f" },
      { nom: "pierre sculptée", genre: "f" },
      { nom: "barre de fer", genre: "f" },
      { nom: "poulie", genre: "f" }
    ],
    "herboristerie": [
      { nom: "ciseaux", genre: "m" },
      { nom: "mortier", genre: "m" },
      { nom: "grande cuillère", genre: "f" },
      { nom: "pot en terre", genre: "m" },
      { nom: "lame", genre: "f" }
    ],
    "taverne": [
      { nom: "chope", genre: "f" },
      { nom: "couteau", genre: "m" },
      { nom: "tabouret", genre: "m" },
      { nom: "bouteille", genre: "f" },
      { nom: "brochette", genre: "f" }
    ],
    "place du village": [
      { nom: "pierre sculptée", genre: "f" },
      { nom: "bâton ferré", genre: "m" },
      { nom: "cordelette", genre: "f" },
      { nom: "pot de fleur", genre: "m" },
      { nom: "seau", genre: "m" }
    ],
    "potence": [
      { nom: "cordelette", genre: "f" },
      { nom: "tabouret", genre: "m" },
      { nom: "bâton ferré", genre: "m" },
      { nom: "pierre sculptée", genre: "f" },
      { nom: "crochet", genre: "m" }
    ],
    "chemin de ronde": [
      { nom: "pierre sculptée", genre: "f" },
      { nom: "lance", genre: "f" },
      { nom: "cordelette", genre: "f" },
      { nom: "arc court", genre: "m" },
      { nom: "bouclier tranchant", genre: "m" }
    ],
    "pigeonnier": [
      { nom: "pelle", genre: "f" },
      { nom: "seau", genre: "m" },
      { nom: "bâton ferré", genre: "m" },
      { nom: "pierre sculptée", genre: "f" },
      { nom: "cage", genre: "f" }
    ],
    "ruisseau": [
      { nom: "pierre sculptée", genre: "f" },
      { nom: "bâton ferré", genre: "m" },
      { nom: "seau", genre: "m" },
      { nom: "filet", genre: "m" },
      { nom: "cordelette", genre: "f" }
    ],
    "terre-plein": [
      { nom: "pelle", genre: "f" },
      { nom: "pioche", genre: "f" },
      { nom: "pierre sculptée", genre: "f" },
      { nom: "bâton ferré", genre: "m" },
      { nom: "cordelette", genre: "f" }
    ],
    "oratoire": [
      { nom: "bâton ferré", genre: "m" },
      { nom: "livre sacré", genre: "m" },
      { nom: "chandelier", genre: "m" },
      { nom: "crucifix", genre: "m" },
      { nom: "statue", genre: "f" }
    ],
    "bergerie": [
      { nom: "bâton de berger", genre: "m" },
      { nom: "couteau", genre: "m" },
      { nom: "cordelette", genre: "f" },
      { nom: "seau", genre: "m" },
      { nom: "houlette", genre: "f" }
    ],
    "forge": [
      { nom: "marteau", genre: "m" },
      { nom: "tenailles", genre: "f" },
      { nom: "barre de fer", genre: "f" },
      { nom: "épée longue", genre: "f" },
      { nom: "fer à cheval", genre: "m" }
    ],
    "cabane du garde": [
      { nom: "arc court", genre: "m" },
      { nom: "flèche empoisonnée", genre: "f" },
      { nom: "bâton ferré", genre: "m" },
      { nom: "couteau", genre: "m" },
      { nom: "cordelette", genre: "f" }
    ],
    "silo à grain": [
      { nom: "pelle", genre: "f" },
      { nom: "sac de grain", genre: "m" },
      { nom: "barre de fer", genre: "f" },
      { nom: "cordelette", genre: "f" },
      { nom: "seau", genre: "m" }
    ]
  },



victorien: {
  "manoir": [
    { nom: "canne-épée", genre: "f" },
    { nom: "revolver", genre: "m" },
    { nom: "statue lourde", genre: "f" },
    { nom: "chandelier", genre: "m" },
    { nom: "couteau de cuisine", genre: "m" }
  ],
  "bibliothèque": [
    { nom: "livre", genre: "m" },
    { nom: "coupe-papier", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "buste", genre: "m" },
    { nom: "statue lourde", genre: "f" }
  ],
  "salon": [
    { nom: "coussin", genre: "m" },
    { nom: "tisonnier", genre: "m" },
    { nom: "vase", genre: "m" },
    { nom: "canne-épée", genre: "f" },
    { nom: "tabouret", genre: "m" }
  ],
  "jardin": [
    { nom: "sécateur", genre: "m" },
    { nom: "pierre sculptée", genre: "f" },
    { nom: "râteau", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "corde", genre: "f" }
  ],
  "sous-sol": [
    { nom: "pelle", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "bouteille cassée", genre: "f" },
    { nom: "pioche", genre: "f" }
  ],
  "salle de bal": [
    { nom: "chandelier", genre: "m" },
    { nom: "statue lourde", genre: "f" },
    { nom: "coupelle", genre: "f" },
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "bâton ferré", genre: "m" }
  ],
  "fumoir": [
    { nom: "tisonnier", genre: "m" },
    { nom: "cigare coupé", genre: "m" },
    { nom: "canne-épée", genre: "f" },
    { nom: "presse-papier", genre: "m" },
    { nom: "briquet", genre: "m" }
  ],
  "cuisine": [
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "poêle", genre: "f" },
    { nom: "marteau à viande", genre: "m" },
    { nom: "bouteille cassée", genre: "f" },
    { nom: "planche", genre: "f" }
  ],
  "orangerie": [
    { nom: "sécateur", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "bâton ferré", genre: "m" },
    { nom: "arrosoir", genre: "m" },
    { nom: "couteau de cuisine", genre: "m" }
  ],
  "chambre forte": [
    { nom: "barre de fer", genre: "f" },
    { nom: "statue lourde", genre: "f" },
    { nom: "pied de biche", genre: "m" },
    { nom: "clé", genre: "f" },
    { nom: "brique", genre: "f" }
  ],
  "serre": [
    { nom: "sécateur", genre: "m" },
    { nom: "arrosoir", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "râteau", genre: "m" },
    { nom: "couteau de cuisine", genre: "m" }
  ],
  "grenier": [
    { nom: "corde", genre: "f" },
    { nom: "bâton ferré", genre: "m" },
    { nom: "caisse", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "ciseaux", genre: "m" }
  ],
  "cabinet d'étude": [
    { nom: "livre", genre: "m" },
    { nom: "coupe-papier", genre: "m" },
    { nom: "buste", genre: "m" },
    { nom: "loupe", genre: "f" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "galerie de portraits": [
    { nom: "cadre", genre: "m" },
    { nom: "statue lourde", genre: "f" },
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "pied de lampe", genre: "m" },
    { nom: "livre", genre: "m" }
  ],
  "salle de musique": [
    { nom: "métronome", genre: "m" },
    { nom: "pied de micro", genre: "m" },
    { nom: "violon", genre: "m" },
    { nom: "tabouret", genre: "m" },
    { nom: "partitions", genre: "f" }
  ],
  "hall d'entrée": [
    { nom: "statue lourde", genre: "f" },
    { nom: "vase", genre: "m" },
    { nom: "canne-épée", genre: "f" },
    { nom: "parapluie", genre: "m" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "salle à manger": [
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "fourchette", genre: "f" },
    { nom: "carafe", genre: "f" },
    { nom: "chandelier", genre: "m" },
    { nom: "assiette", genre: "f" }
  ],
  "cabinet médical": [
    { nom: "scalpel", genre: "m" },
    { nom: "seringue", genre: "f" },
    { nom: "mortier", genre: "m" },
    { nom: "bistouri", genre: "m" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "cour intérieure": [
    { nom: "pierre sculptée", genre: "f" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "râteau", genre: "m" },
    { nom: "bâton ferré", genre: "m" },
    { nom: "corde", genre: "f" }
  ],
  "parc": [
    { nom: "pierre sculptée", genre: "f" },
    { nom: "bâton ferré", genre: "m" },
    { nom: "râteau", genre: "m" },
    { nom: "corde", genre: "f" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "loge du gardien": [
    { nom: "clé", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "bâton ferré", genre: "m" },
    { nom: "lampe torche", genre: "f" },
    { nom: "couteau de cuisine", genre: "m" }
  ],
  "atelier d'artiste": [
    { nom: "ciseau à bois", genre: "m" },
    { nom: "marteau", genre: "m" },
    { nom: "statue lourde", genre: "f" },
    { nom: "brosse", genre: "f" },
    { nom: "pot de peinture", genre: "m" }
  ],
  "dressing": [
    { nom: "cintre", genre: "m" },
    { nom: "fer à repasser", genre: "m" },
    { nom: "chaussure", genre: "f" },
    { nom: "ceinture", genre: "f" },
    { nom: "parapluie", genre: "m" }
  ],
  "salle d'eau": [
    { nom: "robinet", genre: "m" },
    { nom: "brosse", genre: "f" },
    { nom: "savon", genre: "m" },
    { nom: "carreau", genre: "m" },
    { nom: "serviette", genre: "f" }
  ],
  "roseraie": [
    { nom: "sécateur", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "pierre sculptée", genre: "f" },
    { nom: "bâton ferré", genre: "m" },
    { nom: "corde", genre: "f" }
  ],
  "palier": [
    { nom: "balai", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "cadre", genre: "m" },
    { nom: "chaise", genre: "f" },
    { nom: "bâton ferré", genre: "m" }
  ],
  "office": [
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "casserole", genre: "f" },
    { nom: "balai", genre: "m" },
    { nom: "bouteille cassée", genre: "f" },
    { nom: "torchon", genre: "m" }
  ],
  "escalier secret": [
    { nom: "barre de fer", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "pierre sculptée", genre: "f" },
    { nom: "livre", genre: "m" },
    { nom: "chandelier", genre: "m" }
  ],
  "ponton sur le lac": [
    { nom: "corde", genre: "f" },
    { nom: "rame", genre: "f" },
    { nom: "pierre sculptée", genre: "f" },
    { nom: "planche", genre: "f" },
    { nom: "bâton ferré", genre: "m" }
  ],
  "chambre d’enfant": [
    { nom: "jouet en bois", genre: "m" },
    { nom: "livre", genre: "m" },
    { nom: "coussin", genre: "m" },
    { nom: "corde", genre: "f" },
    { nom: "bâton ferré", genre: "m" }
  ]
},

// Ajout à armesParEpoque.futuriste
futuriste: {
  "station orbitale": [
    { nom: "pistolet à impulsion", genre: "m" },
    { nom: "clé quantique", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "drone d’entretien", genre: "m" },
    { nom: "seringue de protoxyde", genre: "f" }
  ],
  "laboratoire": [
    { nom: "scalpel énergisé", genre: "m" },
    { nom: "tube à essai", genre: "m" },
    { nom: "clé à molette", genre: "f" },
    { nom: "injecteur d'ADN", genre: "m" },
    { nom: "lampe UV", genre: "f" }
  ],
  "cyber-café": [
    { nom: "clavier", genre: "m" },
    { nom: "écran", genre: "m" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "casque audio", genre: "m" },
    { nom: "tasse", genre: "f" }
  ],
  "dôme botanique": [
    { nom: "pot de fleur", genre: "m" },
    { nom: "sécateur", genre: "m" },
    { nom: "pelle", genre: "f" },
    { nom: "tuyau d'arrosage", genre: "m" },
    { nom: "pierre sculptée", genre: "f" }
  ],
  "soute": [
    { nom: "barre de fer", genre: "f" },
    { nom: "boîte lourde", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "clé à molette", genre: "f" },
    { nom: "pied de biche", genre: "m" }
  ],
  "cabine de pilotage": [
    { nom: "clé de commande", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "pistolet à impulsion", genre: "m" },
    { nom: "casque", genre: "m" },
    { nom: "extincteur", genre: "m" }
  ],
  "couloir stérile": [
    { nom: "seringue de protoxyde", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "lampe UV", genre: "f" },
    { nom: "pied de chaise", genre: "m" },
    { nom: "panneau de signalisation", genre: "m" }
  ],
  "hangar à drones": [
    { nom: "hélice", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "batterie", genre: "f" },
    { nom: "clé à molette", genre: "f" },
    { nom: "pied de biche", genre: "m" }
  ],
  "salle des machines": [
    { nom: "clé à molette", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "pied de biche", genre: "m" },
    { nom: "marteau", genre: "m" }
  ],
  "observatoire": [
    { nom: "pied de télescope", genre: "m" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "lampe UV", genre: "f" },
    { nom: "clé quantique", genre: "f" },
    { nom: "livre", genre: "m" }
  ],
  "pont principal": [
    { nom: "câble à haute tension", genre: "m" },
    { nom: "pied de biche", genre: "m" },
    { nom: "clé de commande", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "extincteur", genre: "m" }
  ],
  "module médical": [
    { nom: "seringue de protoxyde", genre: "f" },
    { nom: "scalpel énergisé", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "lampe UV", genre: "f" }
  ],
  "salle de téléportation": [
    { nom: "pied de chaise", genre: "m" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "barre de fer", genre: "f" },
    { nom: "lampe UV", genre: "f" },
    { nom: "clé quantique", genre: "f" }
  ],
  "quartiers d’équipage": [
    { nom: "bouteille", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "livre", genre: "m" },
    { nom: "chaise", genre: "f" },
    { nom: "tablette électronique", genre: "f" }
  ],
  "serre hydroponique": [
    { nom: "couteau", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "sécateur", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "bâton gravitationnel", genre: "m" }
  ],
  "salle de cryogénie": [
    { nom: "tube cryo", genre: "m" },
    { nom: "barre de fer", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "clé quantique", genre: "f" }
  ],
  "baie de chargement": [
    { nom: "barre de fer", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "boîte lourde", genre: "f" },
    { nom: "clé à molette", genre: "f" },
    { nom: "pied de biche", genre: "m" }
  ],
  "centre de commandement": [
    { nom: "câble à haute tension", genre: "m" },
    { nom: "clavier", genre: "m" },
    { nom: "lampe UV", genre: "f" },
    { nom: "clé quantique", genre: "f" },
    { nom: "livre", genre: "m" }
  ],
  "zone de quarantaine": [
    { nom: "seringue de protoxyde", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "lampe UV", genre: "f" },
    { nom: "barre de fer", genre: "f" }
  ],
  "salle de repos": [
    { nom: "coussin", genre: "m" },
    { nom: "livre", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "lampe UV", genre: "f" },
    { nom: "câble à haute tension", genre: "m" }
  ],
  "atelier robotique": [
    { nom: "tournevis", genre: "m" },
    { nom: "pince", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "clé électronique", genre: "f" }
  ],
  "ascenseur gravitationnel": [
    { nom: "câble à haute tension", genre: "m" },
    { nom: "barre de fer", genre: "f" },
    { nom: "clé quantique", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "pied de biche", genre: "m" }
  ],
  "salle de simulation": [
    { nom: "casque VR", genre: "m" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "clavier", genre: "m" },
    { nom: "lampe UV", genre: "f" }
  ],
  "dépôt d’armes énergétiques": [
    { nom: "pistolet à impulsion", genre: "m" },
    { nom: "bâton gravitationnel", genre: "m" },
    { nom: "barre de fer", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "clé quantique", genre: "f" }
  ],
  "coffre-fort de données": [
    { nom: "clé quantique", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "barre de fer", genre: "f" },
    { nom: "lampe UV", genre: "f" },
    { nom: "livre", genre: "m" }
  ],
  "salle de réunion holographique": [
    { nom: "câble à haute tension", genre: "m" },
    { nom: "pied de chaise", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "lampe UV", genre: "f" },
    { nom: "tablette électronique", genre: "f" }
  ],
  "plateforme d’atterrissage": [
    { nom: "barre de fer", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "clé quantique", genre: "f" },
    { nom: "pied de biche", genre: "m" },
    { nom: "bouteille", genre: "f" }
  ],
  "réacteur principal": [
    { nom: "pied de biche", genre: "m" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "clé quantique", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "lampe UV", genre: "f" }
  ],
  "sas d’évacuation": [
    { nom: "barre de fer", genre: "f" },
    { nom: "câble à haute tension", genre: "m" },
    { nom: "clé quantique", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "pied de biche", genre: "m" }
  ],
  "capsule d’exploration": [
    { nom: "câble à haute tension", genre: "m" },
    { nom: "clé quantique", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "lampe UV", genre: "f" }
  ]
},

contemporain: {
  "salle de réunion": [
    { nom: "stylo", genre: "m" },
    { nom: "ordinateur portable", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "bouteille d'eau", genre: "f" },
    { nom: "chaise", genre: "f" }
  ],
  "bureau open space": [
    { nom: "clavier", genre: "m" },
    { nom: "agrafeuse", genre: "f" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "câble électrique", genre: "m" },
    { nom: "tasse", genre: "f" }
  ],
  "parking souterrain": [
    { nom: "clé", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "câble électrique", genre: "m" },
    { nom: "pied de biche", genre: "m" }
  ],
  "hall d'entrée": [
    { nom: "parapluie", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "clé", genre: "f" },
    { nom: "chaise", genre: "f" },
    { nom: "pied de lampe", genre: "m" }
  ],
  "cafétéria": [
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "plateau", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "fourchette", genre: "f" }
  ],
  "rooftop": [
    { nom: "bâton", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "pierre", genre: "f" },
    { nom: "chaise", genre: "f" },
    { nom: "corde", genre: "f" }
  ],
  "appartement": [
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "lampe", genre: "f" },
    { nom: "câble électrique", genre: "m" }
  ],
  "garage": [
    { nom: "barre de fer", genre: "f" },
    { nom: "clé", genre: "f" },
    { nom: "pied de biche", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "marteau", genre: "m" }
  ],
  "salle de sport": [
    { nom: "haltère", genre: "m" },
    { nom: "corde à sauter", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "chaise", genre: "f" }
  ],
  "cuisine": [
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "poêle", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "planche à découper", genre: "f" },
    { nom: "fourchette", genre: "f" }
  ],
  "ascenseur": [
    { nom: "clé", genre: "f" },
    { nom: "câble électrique", genre: "m" },
    { nom: "barre de fer", genre: "f" },
    { nom: "pied de biche", genre: "m" },
    { nom: "bouteille", genre: "f" }
  ],
  "local à poubelles": [
    { nom: "bouteille", genre: "f" },
    { nom: "sac poubelle", genre: "m" },
    { nom: "balai", genre: "m" },
    { nom: "barre de fer", genre: "f" },
    { nom: "seau", genre: "m" }
  ],
  "toilettes": [
    { nom: "couvercle de toilette", genre: "m" },
    { nom: "brosse", genre: "f" },
    { nom: "savon", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "couloir": [
    { nom: "pot de fleur", genre: "m" },
    { nom: "câble électrique", genre: "m" },
    { nom: "cadre", genre: "m" },
    { nom: "chaise", genre: "f" },
    { nom: "balai", genre: "m" }
  ],
  "réserve": [
    { nom: "balai", genre: "m" },
    { nom: "barre de fer", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "caisse", genre: "f" },
    { nom: "câble électrique", genre: "m" }
  ],
  "sous-sol": [
    { nom: "barre de fer", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "clé", genre: "f" },
    { nom: "pied de biche", genre: "m" }
  ],
  "studio de musique": [
    { nom: "pied de micro", genre: "m" },
    { nom: "câble électrique", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "tabouret", genre: "m" },
    { nom: "livre", genre: "m" }
  ],
  "terrasse": [
    { nom: "pot de fleur", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "chaise", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "corde", genre: "f" }
  ],
  "salle d’attente": [
    { nom: "magazine", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "chaise", genre: "f" },
    { nom: "câble électrique", genre: "m" },
    { nom: "bouteille", genre: "f" }
  ],
  "vestiaire": [
    { nom: "cintre", genre: "m" },
    { nom: "chaussure", genre: "f" },
    { nom: "clé", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "bouteille", genre: "f" }
  ],
  "salle de classe": [
    { nom: "crayon", genre: "m" },
    { nom: "livre", genre: "m" },
    { nom: "règle", genre: "f" },
    { nom: "cahier", genre: "m" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "jardin partagé": [
    { nom: "bêche", genre: "f" },
    { nom: "râteau", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "pierre", genre: "f" },
    { nom: "bâton", genre: "m" }
  ],
  "palier": [
    { nom: "pot de fleur", genre: "m" },
    { nom: "chaise", genre: "f" },
    { nom: "cadre", genre: "m" },
    { nom: "balai", genre: "m" },
    { nom: "bouteille", genre: "f" }
  ],
  "bibliothèque municipale": [
    { nom: "livre", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "coupe-papier", genre: "m" },
    { nom: "buste", genre: "m" },
    { nom: "câble électrique", genre: "m" }
  ],
  "salle informatique": [
    { nom: "clavier", genre: "m" },
    { nom: "câble électrique", genre: "m" },
    { nom: "écran", genre: "m" },
    { nom: "tour PC", genre: "f" },
    { nom: "souris", genre: "f" }
  ],
  "laverie automatique": [
    { nom: "bouteille de lessive", genre: "f" },
    { nom: "câble électrique", genre: "m" },
    { nom: "panier à linge", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "balai", genre: "m" }
  ],
  "bar à cocktails": [
    { nom: "bouteille", genre: "f" },
    { nom: "verre", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "tabouret", genre: "m" },
    { nom: "couteau de cuisine", genre: "m" }
  ],
  "restaurant": [
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "fourchette", genre: "f" },
    { nom: "assiette", genre: "f" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "cave à vin": [
    { nom: "bouteille", genre: "f" },
    { nom: "caisse", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "clé", genre: "f" },
    { nom: "seau", genre: "m" }
  ],
  "cabinet médical": [
    { nom: "seringue", genre: "f" },
    { nom: "bistouri", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "gants", genre: "m" }
  ]
},

western: {
  "saloon": [
    { nom: "colt", genre: "m" },
    { nom: "bouteille de whisky cassée", genre: "f" },
    { nom: "tabouret", genre: "m" },
    { nom: "couteau de trappeur", genre: "m" },
    { nom: "lasso", genre: "m" }
  ],
  "ranch": [
    { nom: "lasso", genre: "m" },
    { nom: "fourche", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "pelle", genre: "f" },
    { nom: "couteau de trappeur", genre: "m" }
  ],
  "banque": [
    { nom: "colt", genre: "m" },
    { nom: "lingot", genre: "m" },
    { nom: "sac de pièces", genre: "m" },
    { nom: "caisse", genre: "f" },
    { nom: "livre de comptes", genre: "m" }
  ],
  "prison": [
    { nom: "barre de fer", genre: "f" },
    { nom: "clé", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "chaîne", genre: "f" },
    { nom: "tabouret", genre: "m" }
  ],
  "corral": [
    { nom: "bâton", genre: "m" },
    { nom: "corde", genre: "f" },
    { nom: "pelle", genre: "f" },
    { nom: "seau", genre: "m" },
    { nom: "fourche", genre: "f" }
  ],
  "gare": [
    { nom: "barre de fer", genre: "f" },
    { nom: "clé", genre: "f" },
    { nom: "valise", genre: "f" },
    { nom: "pelle", genre: "f" },
    { nom: "bouteille", genre: "f" }
  ],
  "poste du shérif": [
    { nom: "colt", genre: "m" },
    { nom: "matraque", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "clé", genre: "f" },
    { nom: "couteau de trappeur", genre: "m" }
  ],
  "cabane du trappeur": [
    { nom: "piège à ours", genre: "m" },
    { nom: "couteau de trappeur", genre: "m" },
    { nom: "bâton", genre: "m" },
    { nom: "fourrure", genre: "f" },
    { nom: "corde", genre: "f" }
  ],
  "mine d’or": [
    { nom: "pioche", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "pelle", genre: "f" },
    { nom: "pierre", genre: "f" },
    { nom: "corde", genre: "f" }
  ],
  "diligence": [
    { nom: "couteau de trappeur", genre: "m" },
    { nom: "corde", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "colt", genre: "m" },
    { nom: "valise", genre: "f" }
  ],
  "cimetière": [
    { nom: "pelle", genre: "f" },
    { nom: "croix", genre: "f" },
    { nom: "pierre", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "bâton", genre: "m" }
  ],
  "église": [
    { nom: "bible", genre: "f" },
    { nom: "chandelier", genre: "m" },
    { nom: "croix", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "banc", genre: "m" }
  ],
  "épicerie": [
    { nom: "bouteille", genre: "f" },
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "pot de farine", genre: "m" },
    { nom: "balance", genre: "f" },
    { nom: "corde", genre: "f" }
  ],
  "forge": [
    { nom: "marteau", genre: "m" },
    { nom: "tenailles", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "pelle", genre: "f" },
    { nom: "pioche", genre: "f" }
  ],
  "ruelle sombre": [
    { nom: "bâton", genre: "m" },
    { nom: "pierre", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "couteau de trappeur", genre: "m" }
  ],
  "pont suspendu": [
    { nom: "corde", genre: "f" },
    { nom: "planche", genre: "f" },
    { nom: "pierre", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "clé", genre: "f" }
  ],
  "pensionnat": [
    { nom: "livre", genre: "m" },
    { nom: "bâton", genre: "m" },
    { nom: "chaise", genre: "f" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "tabouret", genre: "m" }
  ],
  "barber shop": [
    { nom: "ciseaux", genre: "m" },
    { nom: "rasoir", genre: "m" },
    { nom: "serviette", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "brosse", genre: "f" }
  ],
  "auberge": [
    { nom: "bouteille", genre: "f" },
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "tabouret", genre: "m" },
    { nom: "balai", genre: "m" }
  ],
  "réserve indienne": [
    { nom: "arc", genre: "m" },
    { nom: "pierre", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "couteau de trappeur", genre: "m" },
    { nom: "corde", genre: "f" }
  ],
  "champ de bataille": [
    { nom: "carabine", genre: "f" },
    { nom: "colt", genre: "m" },
    { nom: "bâton", genre: "m" },
    { nom: "pierre", genre: "f" },
    { nom: "baïonnette", genre: "f" }
  ],
  "rivière": [
    { nom: "pierre", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "corde", genre: "f" },
    { nom: "seau", genre: "m" },
    { nom: "filet", genre: "m" }
  ],
  "colline du pendu": [
    { nom: "corde", genre: "f" },
    { nom: "pierre", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "chaise", genre: "f" },
    { nom: "tabouret", genre: "m" }
  ],
  "poste de télégraphe": [
    { nom: "clé", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "câble électrique", genre: "m" },
    { nom: "tabouret", genre: "m" }
  ],
  "wagon abandonné": [
    { nom: "barre de fer", genre: "f" },
    { nom: "boîte", genre: "f" },
    { nom: "pierre", genre: "f" },
    { nom: "couteau de trappeur", genre: "m" },
    { nom: "bâton", genre: "m" }
  ],
  "stand de tir": [
    { nom: "colt", genre: "m" },
    { nom: "carabine", genre: "f" },
    { nom: "cible", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "pierre", genre: "f" }
  ],
  "cabane du prospecteur": [
    { nom: "pioche", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "corde", genre: "f" },
    { nom: "seau", genre: "m" }
  ],
  "prairie": [
    { nom: "bâton", genre: "m" },
    { nom: "pierre", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "fourche", genre: "f" },
    { nom: "seau", genre: "m" }
  ],
  "ruisseau asséché": [
    { nom: "pierre", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "seau", genre: "m" },
    { nom: "corde", genre: "f" },
    { nom: "pelle", genre: "f" }
  ],
  "grange": [
    { nom: "fourche", genre: "f" },
    { nom: "pelle", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "seau", genre: "m" },
    { nom: "bâton", genre: "m" }
  ]
},

renaissance: {
  "palais ducal": [
    { nom: "épée de cour", genre: "f" },
    { nom: "canne sculptée", genre: "f" },
    { nom: "pistolet à rouet", genre: "m" },
    { nom: "statue d'ange", genre: "f" },
    { nom: "pichet de vin lourd", genre: "m" }
  ],
  "atelier d’artiste": [
    { nom: "ciseau à bois", genre: "m" },
    { nom: "marteau", genre: "m" },
    { nom: "statue d'ange", genre: "f" },
    { nom: "pot de peinture", genre: "m" },
    { nom: "brosse", genre: "f" }
  ],
  "salle des festins": [
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "chandelier", genre: "m" },
    { nom: "pichet de vin lourd", genre: "m" },
    { nom: "broche", genre: "f" },
    { nom: "assiette", genre: "f" }
  ],
  "jardins à l’italienne": [
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "sécateur", genre: "m" },
    { nom: "râteau", genre: "m" },
    { nom: "pierre précieuse", genre: "f" }
  ],
  "loggia": [
    { nom: "pot de fleur", genre: "m" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "statue d'ange", genre: "f" },
    { nom: "cordon de soie", genre: "m" },
    { nom: "chaise", genre: "f" }
  ],
  "chapelle privée": [
    { nom: "crucifix", genre: "m" },
    { nom: "chandelier", genre: "m" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "bible", genre: "f" },
    { nom: "cierge", genre: "m" }
  ],
  "bibliothèque": [
    { nom: "livre", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "couteau à lettre", genre: "m" },
    { nom: "buste", genre: "m" },
    { nom: "statue d'ange", genre: "f" }
  ],
  "salon de musique": [
    { nom: "violon", genre: "m" },
    { nom: "pied de chaise", genre: "m" },
    { nom: "statue d'ange", genre: "f" },
    { nom: "chandelier", genre: "m" },
    { nom: "livre", genre: "m" }
  ],
  "cour intérieure": [
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "statue d'ange", genre: "f" },
    { nom: "pierre précieuse", genre: "f" },
    { nom: "cordon de soie", genre: "m" }
  ],
  "galerie d’art": [
    { nom: "cadre", genre: "m" },
    { nom: "statue d'ange", genre: "f" },
    { nom: "pied de biche", genre: "m" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "salle de bal": [
    { nom: "chandelier", genre: "m" },
    { nom: "statue d'ange", genre: "f" },
    { nom: "coupelle", genre: "f" },
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "bâton d'alchimiste", genre: "m" }
  ],
  "cuisine": [
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "poêle", genre: "f" },
    { nom: "pichet de vin lourd", genre: "m" },
    { nom: "bouteille", genre: "f" },
    { nom: "planche", genre: "f" }
  ],
  "antichambre": [
    { nom: "statue d'ange", genre: "f" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "livre", genre: "m" },
    { nom: "cordon de soie", genre: "m" },
    { nom: "chaise", genre: "f" }
  ],
  "terrazza": [
    { nom: "pot de fleur", genre: "m" },
    { nom: "chaise", genre: "f" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "cordon de soie", genre: "m" },
    { nom: "pierre précieuse", genre: "f" }
  ],
  "salle à manger": [
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "fourchette", genre: "f" },
    { nom: "carafe", genre: "f" },
    { nom: "chandelier", genre: "m" },
    { nom: "assiette", genre: "f" }
  ],
  "laboratoire d’alchimie": [
    { nom: "mortier", genre: "m" },
    { nom: "flacon de poison", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "couteau de cuisine", genre: "m" }
  ],
  "fontaine": [
    { nom: "pierre précieuse", genre: "f" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "seau", genre: "m" },
    { nom: "cordon de soie", genre: "m" }
  ],
  "orangerie": [
    { nom: "pot de fleur", genre: "m" },
    { nom: "sécateur", genre: "m" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "arrosoir", genre: "m" },
    { nom: "couteau de cuisine", genre: "m" }
  ],
  "atelier du sculpteur": [
    { nom: "marteau", genre: "m" },
    { nom: "ciseau à bois", genre: "m" },
    { nom: "statue d'ange", genre: "f" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "studyolo": [
    { nom: "livre", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "couteau à lettre", genre: "m" },
    { nom: "buste", genre: "m" },
    { nom: "chaise", genre: "f" }
  ],
  "appartement du prince": [
    { nom: "poignard", genre: "m" },
    { nom: "statue d'ange", genre: "f" },
    { nom: "chandelier", genre: "m" },
    { nom: "livre", genre: "m" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "porte secrète": [
    { nom: "barre de fer", genre: "f" },
    { nom: "cordon de soie", genre: "m" },
    { nom: "pierre précieuse", genre: "f" },
    { nom: "livre", genre: "m" },
    { nom: "chandelier", genre: "m" }
  ],
  "dortoir des dames": [
    { nom: "livre", genre: "m" },
    { nom: "coussin", genre: "m" },
    { nom: "cordon de soie", genre: "m" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "logis du chambellan": [
    { nom: "poignard", genre: "m" },
    { nom: "livre", genre: "m" },
    { nom: "chandelier", genre: "m" },
    { nom: "statue d'ange", genre: "f" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "cabinet de curiosités": [
    { nom: "livre", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "buste", genre: "m" },
    { nom: "statue d'ange", genre: "f" },
    { nom: "bouteille", genre: "f" }
  ],
  "serre aux plantes rares": [
    { nom: "pot de fleur", genre: "m" },
    { nom: "sécateur", genre: "m" },
    { nom: "arrosoir", genre: "m" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "couteau de cuisine", genre: "m" }
  ],
  "escalier monumental": [
    { nom: "barre de fer", genre: "f" },
    { nom: "cordon de soie", genre: "m" },
    { nom: "pierre précieuse", genre: "f" },
    { nom: "livre", genre: "m" },
    { nom: "chandelier", genre: "m" }
  ],
  "pavillon de chasse": [
    { nom: "arc d'apparat", genre: "m" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "poignard", genre: "m" },
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "pierre précieuse", genre: "f" }
  ],
  "balcon sur la place": [
    { nom: "pot de fleur", genre: "m" },
    { nom: "bâton d'alchimiste", genre: "m" },
    { nom: "cordon de soie", genre: "m" },
    { nom: "chaise", genre: "f" },
    { nom: "pierre précieuse", genre: "f" }
  ],
  "portique": [
    { nom: "statue d'ange", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "pierre précieuse", genre: "f" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "bâton d'alchimiste", genre: "m" }
  ]
},

historique: {
  "Colisée": [
    { nom: "gladius romain", genre: "m" },
    { nom: "trident", genre: "m" },
    { nom: "bouclier spartiate", genre: "m" },
    { nom: "filet de gladiateur", genre: "m" },
    { nom: "pierre taillée", genre: "f" }
  ],
  "thermes": [
    { nom: "bâton", genre: "m" },
    { nom: "pot en terre", genre: "m" },
    { nom: "éponge", genre: "f" },
    { nom: "pierre taillée", genre: "f" },
    { nom: "banc", genre: "m" }
  ],
  "forum": [
    { nom: "pierre taillée", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "statue d’Empereur", genre: "f" },
    { nom: "livre", genre: "m" },
    { nom: "corde", genre: "f" }
  ],
  "pyramide de Khéops": [
    { nom: "pierre taillée", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "ciseau", genre: "m" }
  ],
  "palais royal": [
    { nom: "épée d’apparat", genre: "f" },
    { nom: "dague", genre: "f" },
    { nom: "statue d’Empereur", genre: "f" },
    { nom: "chandelier", genre: "m" },
    { nom: "bâton", genre: "m" }
  ],
  "bibliothèque d'Alexandrie": [
    { nom: "livre", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "buste", genre: "m" },
    { nom: "statue d’Empereur", genre: "f" },
    { nom: "couteau à lettre", genre: "m" }
  ],
  "amphithéâtre": [
    { nom: "pierre taillée", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "gladius romain", genre: "m" },
    { nom: "statue d’Empereur", genre: "f" },
    { nom: "corde", genre: "f" }
  ],
  "abbaye": [
    { nom: "bâton", genre: "m" },
    { nom: "chandelier", genre: "m" },
    { nom: "bible", genre: "f" },
    { nom: "croix", genre: "f" },
    { nom: "cierge", genre: "m" }
  ],
  "observatoire": [
    { nom: "pied de télescope", genre: "m" },
    { nom: "livre", genre: "m" },
    { nom: "bâton", genre: "m" },
    { nom: "statue d’Empereur", genre: "f" },
    { nom: "lampe", genre: "f" }
  ],
  "catacombes": [
    { nom: "pierre taillée", genre: "f" },
    { nom: "crâne", genre: "m" },
    { nom: "barre de fer", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "bougie", genre: "f" }
  ],
  "temple de Zeus": [
    { nom: "statue de Zeus", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "chandelier", genre: "m" },
    { nom: "livre", genre: "m" },
    { nom: "pierre taillée", genre: "f" }
  ],
  "forteresse": [
    { nom: "gladius romain", genre: "m" },
    { nom: "bouclier spartiate", genre: "m" },
    { nom: "barre de fer", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "arc composite", genre: "m" }
  ],
  "salle du trône": [
    { nom: "épée d’apparat", genre: "f" },
    { nom: "statue d’Empereur", genre: "f" },
    { nom: "chandelier", genre: "m" },
    { nom: "bâton", genre: "m" },
    { nom: "livre", genre: "m" }
  ],
  "place publique": [
    { nom: "pierre taillée", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "corde", genre: "f" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "statue d’Empereur", genre: "f" }
  ],
  "sénat": [
    { nom: "livre", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "buste", genre: "m" },
    { nom: "statue d’Empereur", genre: "f" },
    { nom: "couteau à lettre", genre: "m" }
  ],
  "atelier d’imprimerie de Gutenberg": [
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "bâton", genre: "m" },
    { nom: "presse", genre: "f" },
    { nom: "pot d'encre", genre: "m" },
    { nom: "livre", genre: "m" }
  ],
  "galère": [
    { nom: "rame", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "pierre taillée", genre: "f" },
    { nom: "bâton", genre: "m" }
  ],
  "cabinet d’alchimie": [
    { nom: "mortier", genre: "m" },
    { nom: "flacon de poison", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "couteau de cuisine", genre: "m" },
    { nom: "bâton", genre: "m" }
  ],
  "Attentat Kennedy": [
    { nom: "pistolet", genre: "m" },
    { nom: "livre", genre: "m" },
    { nom: "parapluie", genre: "m" },
    { nom: "câble électrique", genre: "m" },
    { nom: "bâton", genre: "m" }
  ],
  "galerie des glaces": [
    { nom: "chandelier", genre: "m" },
    { nom: "statue d’Empereur", genre: "f" },
    { nom: "pierre taillée", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "cadre", genre: "m" }
  ],
  "jardin botanique": [
    { nom: "pot de fleur", genre: "m" },
    { nom: "sécateur", genre: "m" },
    { nom: "bâton", genre: "m" },
    { nom: "arrosoir", genre: "m" },
    { nom: "couteau de cuisine", genre: "m" }
  ],
  "bastille": [
    { nom: "barre de fer", genre: "f" },
    { nom: "gladius romain", genre: "m" },
    { nom: "bâton", genre: "m" },
    { nom: "corde", genre: "f" },
    { nom: "statue d’Empereur", genre: "f" }
  ],
  "Titanic": [
    { nom: "câble électrique", genre: "m" },
    { nom: "rame", genre: "f" },
    { nom: "bouteille", genre: "f" },
    { nom: "barre de fer", genre: "f" },
    { nom: "corde", genre: "f" }
  ],
  "salon des philosophes": [
    { nom: "livre", genre: "m" },
    { nom: "chandelier", genre: "m" },
    { nom: "buste", genre: "m" },
    { nom: "statue d’Empereur", genre: "f" },
    { nom: "pot de fleur", genre: "m" }
  ],
  "Temple maya": [
    { nom: "pierre taillée", genre: "f" },
    { nom: "statue de dieu", genre: "f" },
    { nom: "bâton", genre: "m" },
    { nom: "corde", genre: "f" },
    { nom: "couteau de rituel", genre: "m" }
  ],
  "laboratoire de physique": [
    { nom: "tube à essai", genre: "m" },
    { nom: "barre de fer", genre: "f" },
    { nom: "lampe", genre: "f" },
    { nom: "livre", genre: "m" },
    { nom: "câble électrique", genre: "m" }
  ],
  "écuries royales": [
    { nom: "fourche", genre: "f" },
    { nom: "pelle", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "seau", genre: "m" },
    { nom: "bâton", genre: "m" }
  ],
  "hameau de la reine": [
    { nom: "bâton", genre: "m" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "pierre taillée", genre: "f" },
    { nom: "corde", genre: "f" },
    { nom: "seau", genre: "m" }
  ],
  "cabinet des curiosités": [
    { nom: "livre", genre: "m" },
    { nom: "statue d’Empereur", genre: "f" },
    { nom: "pot de fleur", genre: "m" },
    { nom: "buste", genre: "m" },
    { nom: "bouteille", genre: "f" }
  ],
  "chapelle ardente": [
    { nom: "chandelier", genre: "m" },
    { nom: "crucifix", genre: "m" },
    { nom: "cierge", genre: "m" },
    { nom: "bâton", genre: "m" },
    { nom: "livre", genre: "m" }
  ]
}

export { armesParEpoque };
