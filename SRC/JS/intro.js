// SRC/JS/intro.js

const intro = {
  medieval: [
    "{ambiance} dans {la_lieu}. Les seigneurs et les dames murmurent à voix basse.",
    "La tension monte dans {la_lieu}, alors que {suspect1} semble s’éclipser discrètement.",
    "Des rumeurs courent sur {motif}. Les regards se croisent dans {la_lieu}.",
    "Un banquet débute, mais la suspicion plane déjà entre {suspect1} et {suspect2}.",
    "[INDICE] {indice}. L’atmosphère devient lourde dans {la_lieu}.",
    "[TEMOIN] {temoin} affirme avoir surpris {suspect1} à l’écart, l’air troublé.",
    "Les chevaliers sont sur le qui-vive dans {la_lieu}.",
    "Le vent souffle fort, et chacun redoute qu’un drame éclate ce soir."
  ],

  renaissance: [
    "{ambiance} dans {la_lieu}. Les artistes et les courtisans se surveillent du coin de l’œil.",
    "La fête bat son plein dans {la_lieu}, mais {suspect1} semble préoccupé.",
    "On parle beaucoup de {motif} ce soir, notamment entre {suspect1} et {suspect2}.",
    "Un bal masqué commence, mais les intrigues sont déjà en marche.",
    "[INDICE] {indice} retrouvé dans {la_lieu} rend tout le monde nerveux.",
    "[TEMOIN] Selon {temoin}, {suspect1} s’est absenté à un moment crucial.",
    "Un orage menace la ville, ajoutant à la nervosité ambiante.",
    "Des rires résonnent, mais la méfiance s’installe dans {la_lieu}."
  ],

  victorien: [
    "{ambiance} dans {la_lieu}. Les secrets se murmurent, les regards s’évitent.",
    "Le manoir vibre d’une excitation étrange. {suspect1} semble préoccupé·e ce soir.",
    "Dans {la_lieu}, la tension monte. Des rumeurs courent sur {motif}.",
    "Un bal masqué s’organise : la jalousie couve entre {suspect1} et {suspect2}.",
    "[INDICE] La soirée commence dans {la_lieu}. Déjà, {indice}.",
    "[TEMOIN] Selon {temoin}, l’attitude de {suspect1} est étrange ce soir.",
    "Une dispute éclate dans {la_lieu}. Tous semblent nerveux.",
    "La pluie frappe les vitres, l’ambiance est lourde. {suspect2} évite les regards."
  ],

  western: [
    "{ambiance} dans {la_lieu}. Les cowboys gardent la main sur leur colt.",
    "Le saloon est agité, {suspect1} regarde autour de lui avec méfiance.",
    "On parle de {motif} dans tous les recoins de {la_lieu}.",
    "Un duel se prépare peut-être entre {suspect1} et {suspect2}.",
    "[INDICE] {indice} découvert près du saloon attise la curiosité.",
    "[TEMOIN] {temoin} dit avoir vu {suspect1} rôder dans {la_lieu}.",
    "Le vent soulève la poussière, l’ambiance est électrique.",
    "Tout le monde surveille tout le monde dans {la_lieu} ce soir."
  ],

  contemporain: [
    "{ambiance} dans {la_lieu}. Les collègues se jaugent d’un œil inquiet.",
    "La fête au bureau commence, mais {suspect1} reste à l’écart.",
    "On évoque {motif} autour de la machine à café de {la_lieu}.",
    "Une réunion tendue vient de se terminer, chacun regagne sa place.",
    "[INDICE] {indice} vient d’être retrouvé dans {la_lieu}.",
    "[TEMOIN] {temoin} pense que {suspect1} cache quelque chose.",
    "Une panne d’électricité plonge {la_lieu} dans l’obscurité.",
    "Un bruit étrange retentit, tout le monde se fige."
  ],

  futuriste: [
    "{ambiance} dans {la_lieu}. Les écrans clignotent, l’IA surveille tout.",
    "L’équipage se réunit pour un rapport de mission, mais {suspect1} évite le regard de {suspect2}.",
    "Des tensions éclatent autour de {motif}.",
    "L’alarme retentit, forçant tout le monde à rester sur ses gardes.",
    "[INDICE] {indice} trouble les techniciens de {la_lieu}.",
    "[TEMOIN] D’après {temoin}, {suspect1} a agi de façon étrange.",
    "Une coupure d’énergie plonge la station dans l’inquiétude.",
    "Des bruits métalliques résonnent dans {la_lieu}, l’ambiance est pesante."
  ],

  historique: [
    "{ambiance} dans {la_lieu}. Les puissants s’observent et se méfient.",
    "Un grand bal débute, mais déjà {suspect1} semble contrarié.",
    "On murmure à propos de {motif} dans les couloirs de {la_lieu}.",
    "Une cérémonie officielle se prépare, la tension est palpable.",
    "[INDICE] {indice} vient d’être retrouvé, jetant le trouble.",
    "[TEMOIN] Selon {temoin}, {suspect1} a quitté {la_lieu} précipitamment.",
    "Un orage approche, chacun se demande ce qu’il va se passer.",
    "Les chroniqueurs prennent des notes, il y aura matière à scandale."
  ]
};

export { intro };
