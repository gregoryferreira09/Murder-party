import { alibis } from './alibis.js';
import { indices } from './indices.js';
import { personnagesParEpoque } from './personnages.js';
import { lieuxParEpoque } from './lieux.js';
import { armesParEpoque } from './armes.js';
import { secrets } from './secret.js';
import { liensAvecVictime } from './liensavecvictime.js';
import { mobiles } from './mobiles.js';

// --- Ajout des introductions ---
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

// --- Ajout des ambiances ---
const ambiances = {
  medieval: [
    "Le banquet bat son plein",
    "Une tempête gronde au-dehors",
    "La lune éclaire faiblement les couloirs",
    "La cloche du village résonne",
    "La garde s’est assoupie",
    "Les flammes vacillent dans la cheminée",
    "Le vent siffle entre les tours",
    "Une chouette hulule dans la nuit"
  ],

  renaissance: [
    "Les lanternes illuminent la cour du palais",
    "Un bal masqué agite la noblesse",
    "Les artistes rivalisent de talent devant la duchesse",
    "Les rires fusent dans la salle des festins",
    "Un orage menace sur la cité",
    "Les musiciens s'accordent pour la soirée",
    "Le jardin fleuri embaume l'air",
    "Les intrigues murmurent sous les voûtes"
  ],

  victorien: [
    "Le tonnerre gronde au loin",
    "Les invités masqués se perdent dans la fête",
    "Le brouillard étreint le jardin",
    "Le petit matin s’annonce trouble",
    "Un dîner animé se prépare",
    "Des éclats de voix résonnent dans la maison",
    "Une horloge sonne sinistrement",
    "L’orage menace de couper l’électricité"
  ],

  western: [
    "Le vent soulève la poussière sur la rue principale",
    "Le saloon résonne de rires et de verres qui s’entrechoquent",
    "La chaleur assomme la petite ville",
    "Un duel se prépare sous le soleil",
    "Les chevaux piaffent devant le saloon",
    "La nuit tombe sur la prairie",
    "Des voix s’élèvent autour du feu de camp",
    "La diligence arrive dans un nuage de poussière"
  ],

  contemporain: [
    "La musique s’élève depuis le rooftop",
    "La pluie tambourine sur les vitres du bureau",
    "Le bruit des klaxons résonne dans la rue",
    "Les néons clignotent dans la nuit urbaine",
    "Un afterwork débute dans la cafétéria",
    "Un orage menace la ville",
    "Les smartphones crépitent de notifications",
    "Un silence pesant s’installe dans la salle de réunion"
  ],

  futuriste: [
    "L’alerte rouge retentit",
    "Les couloirs s'illuminent en bleu",
    "L'énergie fluctue dans la station",
    "Le vaisseau tangue sous une micro-météorite",
    "La maintenance s'éternise",
    "Le sas grince",
    "Une panne d’IA inquiète l’équipage",
    "L’observatoire détecte une anomalie spatiale"
  ],

  historique: [
    "Les tambours de guerre résonnent loin",
    "La foule envahit la place principale",
    "Les chandelles vacillent dans la salle du trône",
    "Des messagers s'activent dans les couloirs du palais",
    "Un cortège traverse la ville",
    "Les cloches annoncent une cérémonie solennelle",
    "L’orage menace la campagne environnante",
    "Les feux d’artifice célèbrent un événement royal"
  ]
};

// Harmonisation de la casse pour "renaissance" dans personnagesParEpoque
const personnagesrenaissance = (personnagesParEpoque.renaissance || personnagesParEpoque.renaissance).map(p => p.nom);

// Structure univers complète
const univers = {
  medieval: {
    alibis: alibis.medieval,
    indices: indices.medieval,
    personnages: personnagesParEpoque.medieval.map(p => p.nom),
    lieux: lieuxParEpoque.medieval,
    armes: armesParEpoque.medieval,
    secrets: secrets.medieval,
    liensAvecVictime: liensAvecVictime.medieval,
    mobiles: mobiles.medieval,
    intro: intro.medieval,
    ambiances: ambiances.medieval
  },
  victorien: {
    alibis: alibis.victorien,
    indices: indices.victorien,
    personnages: personnagesParEpoque.victorien.map(p => p.nom),
    lieux: lieuxParEpoque.victorien,
    armes: armesParEpoque.victorien,
    secrets: secrets.victorien,
    liensAvecVictime: liensAvecVictime.victorien,
    mobiles: mobiles.victorien,
    intro: intro.victorien,
    ambiances: ambiances.victorien
  },
  futuriste: {
    alibis: alibis.futuriste,
    indices: indices.futuriste,
    personnages: personnagesParEpoque.futuriste.map(p => p.nom),
    lieux: lieuxParEpoque.futuriste,
    armes: armesParEpoque.futuriste,
    secrets: secrets.futuriste,
    liensAvecVictime: liensAvecVictime.futuriste,
    mobiles: mobiles.futuriste,
    intro: intro.futuriste,
    ambiances: ambiances.futuriste
  },
  western: {
    alibis: alibis.western,
    indices: indices.western,
    personnages: personnagesParEpoque.western.map(p => p.nom),
    lieux: lieuxParEpoque.western,
    armes: armesParEpoque.western,
    secrets: secrets.western,
    liensAvecVictime: liensAvecVictime.western,
    mobiles: mobiles.western,
    intro: intro.western,
    ambiances: ambiances.western
  },
  contemporain: {
    alibis: alibis.contemporain,
    indices: indices.contemporain,
    personnages: personnagesParEpoque.contemporain.map(p => p.nom),
    lieux: lieuxParEpoque.contemporain,
    armes: armesParEpoque.contemporain,
    secrets: secrets.contemporain,
    liensAvecVictime: liensAvecVictime.contemporain,
    mobiles: mobiles.contemporain,
    intro: intro.contemporain,
    ambiances: ambiances.contemporain
  },
  renaissance: {
    alibis: alibis.renaissance,
    indices: indices.renaissance,
    personnages: personnagesrenaissance,
    lieux: lieuxParEpoque.renaissance,
    armes: armesParEpoque.renaissance,
    secrets: secrets.renaissance,
    liensAvecVictime: liensAvecVictime.renaissance,
    mobiles: mobiles.renaissance,
    intro: intro.renaissance,
    ambiances: ambiances.renaissance
  },
  historique: {
    alibis: alibis.historique,
    indices: indices.historique,
    personnages: personnagesParEpoque.historique.map(p => p.nom),
    lieux: lieuxParEpoque.historique,
    armes: armesParEpoque.historique,
    secrets: secrets.historique,
    liensAvecVictime: liensAvecVictime.historique,
    mobiles: mobiles.historique,
    intro: intro.historique,
    ambiances: ambiances.historique
  }
  // Ajoute ici d'autres époques si besoin
};
export default univers;
