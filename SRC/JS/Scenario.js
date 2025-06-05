// Remplace les valeurs par celles de ton projet Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-BxBu-4ElCqbHrZPM-4-6yf1-yWnL1bI",
  authDomain: "murder-party-ba8d1.firebaseapp.com",
  databaseURL: "https://murder-party-ba8d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "murder-party-ba8d1",
  storageBucket: "murder-party-ba8d1.firebasestorage.app",
  messagingSenderId: "20295055805",
  appId: "1:20295055805:web:0963719c3f23ab7752fad4",
  measurementId: "G-KSBMBB7KMJ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// --- CONSTANTES ---
const ANTI_REPEAT_HISTORY_SIZE = 5;

// === OUTILS FRANÇAIS ET UTILS ===
// ... (copie exacte des utilitaires : getArticle, articleDans, randomItem, etc.) ...
function getArticle(word, articles = { m: 'le', f: 'la' }) {
  if (!word) return '';
  word = word.trim();
  const firstLetter = word[0].toLowerCase();
  if ("aeiouyh".includes(firstLetter)) return "l'";
  const feminine = [
    "bibliothèque", "gouvernante", "salle", "cave", "chapelle", "forêt", "dimension", "galerie", "voix", "technicienne",
    "station", "soute", "cabine", "ombre", "cuisine", "armurerie", "orphelinat", "tour", "salle d'arme", "chambre forte", "crypte"
  ];
  const wordLC = word.toLowerCase();
  if (feminine.some(x => wordLC.startsWith(x))) return articles.f;
  return articles.m;
}
function articleDans(word, article) {
  if (article === "le") return "dans le";
  if (article === "la") return "dans la";
  if (article === "l'") return "dans l'";
  return "dans";
}
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
function getScenarioHistory() {
  let history = localStorage.getItem("scenarioHistory");
  return history ? JSON.parse(history) : [];
}
function addScenarioToHistory(scenario) {
  let history = getScenarioHistory();
  history.unshift(scenario);
  if (history.length > ANTI_REPEAT_HISTORY_SIZE) history = history.slice(0, ANTI_REPEAT_HISTORY_SIZE);
  localStorage.setItem("scenarioHistory", JSON.stringify(history));
}
function categoriseDuree(minutes) {
  if (minutes <= 30) return "court";
  if (minutes <= 90) return "moyen";
  return "long";
}
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function replaceVars(tpl, variables) {
  return Object.entries(variables).reduce(
    (txt, [key, val]) => txt.replaceAll(key, escapeHtml(val)),
    tpl
  );
}
function tirageUnique(array, key, history, fieldName) {
  const used = new Set(history.map(s => s[fieldName]));
  const filtered = array.filter(el => {
    const val = typeof key === "function" ? key(el) : (el[key] ?? el);
    return !used.has(val);
  });
  return filtered.length ? randomItem(filtered) : randomItem(array);
}
function tirageTemplateUnique(array, history, fieldName) {
  const used = new Set(history.map(s => s[fieldName]));
  const filtered = array.filter(el => !used.has(el));
  return filtered.length ? randomItem(filtered) : randomItem(array);
}

// === UNIVERS COHÉRENTS & ÉLARGIS ===
const univers = {
  
 medieval: universMedieval, // (ou window.universMedieval si tu ne fais pas d'import/export)
  
  renaissance: {
    lieux: [
      { nom: "palais ducal", genre: "m" },
      { nom: "atelier d’artiste", genre: "m" },
      { nom: "salle des festins", genre: "f" }
    ],
    victimes: [
      { nom: "le duc Lorenzo", genre: "m" },
      { nom: "la marquise Bianca", genre: "f" }
    ],
    suspects: [
      "Leonardo l’Inventeur", "Giulietta la Dame de compagnie", "Donatello le Sculpteur", "Isabella la Duchesse", "Francesco le Banquier",
      "Raffaella la Courtisane", "Bartolomeo le Condottiere", "Lucrezia la Peintre", "Giovanni le Cardinal", "Fiorenzo le Musicien",
      "Caterina la Médium", "Lorenzo le Marchand", "Camilla la Tisseuse", "Vittorio le Médecin", "Beatrice la Gouvernante"
    ],
    temoins: [
      { nom: "Pietro le Jardinier", genre: "m" },
      { nom: "Maddalena la Jardinière", genre: "f" }
    ],
    indices: [
      "un gant brodé retrouvé dans l’atelier", "un parfum rare flotte dans l’air", "un bijou de cour manquant",
      "une lettre codée brûlée", "une fiole vide d’un poison rare"
    ],
    traitsVictimes: ["inspiré", "prétentieux", "jaloux"],
    motifs: [
      "une rivalité artistique", "un héritage contesté", "une liaison secrète"
    ],
    armes: [
      "un stylet", "une fiole de poison", "une cordelette dorée"
    ],
    ambiances: [
      "la fête bat son plein", "la cloche sonne la fin du banquet", "les lanternes s’allument dans la cour"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les intrigues se nouent sous les fresques.",
      "Un bal masqué débute, la jalousie couve entre {suspect1} et {suspect2}.",
      "[TEMOIN] {temoin} a surpris {suspect1} dans l’ombre."
    ],
    crimes: {
      classique: [
        "Un cri retentit : {victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés.",
        "{victime} a été assassiné·e {dans_la_lieu}. {temoin} accuse {suspect1}.",
        "La découverte est brutale : {victime} gît {dans_la_lieu}. Tous se tournent vers {suspect1}."
      ],
      poison: [
        "Le repas tourne au drame : {victime} s’effondre, empoisonné·e.",
        "{victime} n’a pas survécu à une gorgée fatale {dans_la_lieu}. {temoin} accuse {suspect1}."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}. {temoin} l’a vu quitter la pièce précipitamment."
      ]
    }
  },
  victorien: {
    lieux: [
      { nom: "manoir Redford", genre: "m" },
      { nom: "bibliothèque obscure", genre: "f" },
      { nom: "salon de musique", genre: "m" }
    ],
    victimes: [
      { nom: "le colonel Ashcroft", genre: "m" },
      { nom: "la lady Violet", genre: "f" }
    ],
    suspects: [
      "le majordome Ellis", "la gouvernante Mrs. Hudson", "le médecin Dr. Carmichael", "le détective Holmes", "la dame de compagnie Lucy",
      "le banquier Edward", "la couturière Mary", "le jardinier Samuel", "le fils prodigue Henry", "la nièce Charlotte",
      "le chef cuisinier Auguste", "le révérend Black", "la poétesse Ada", "la pianiste Grace", "le valet Arthur"
    ],
    temoins: [
      { nom: "le portier Charles", genre: "m" },
      { nom: "la domestique Emily", genre: "f" }
    ],
    indices: [
      "une montre à gousset brisée", "une lettre anonyme parfumée", "un flacon d'opium vide",
      "une trace de boue sur le tapis", "un gant de femme retrouvé dans le jardin"
    ],
    traitsVictimes: ["orgueilleux", "secret", "avare"],
    motifs: [
      "un héritage disputé", "un adultère révélé", "un chantage humiliant"
    ],
    armes: [
      "une canne-épée", "un revolver", "du poison"
    ],
    ambiances: [
      "la brume recouvre le jardin", "un orage éclate sur le manoir", "le thé fume dans le salon"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. L'atmosphère est lourde de non-dits.",
      "Une dispute éclate entre {suspect1} et {suspect2} devant les invités.",
      "[TEMOIN] {temoin} déclare avoir vu {suspect1} sortir précipitamment de la {lieu}."
    ],
    crimes: {
      classique: [
        "{victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés.",
        "Un cri retentit : {victime} gît {dans_la_lieu}. {temoin} accuse {suspect1}."
      ],
      poison: [
        "Le thé de {victime} était empoisonné. Il/elle s'effondre {dans_la_lieu}.",
        "{victime} n’a pas survécu à une boisson fatale {dans_la_lieu}. {temoin} accuse {suspect1}."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}."
      ]
    }
  },
  western: {
    lieux: [
      { nom: "saloon", genre: "m" },
      { nom: "ranch", genre: "m" },
      { nom: "banque", genre: "f" }
    ],
    victimes: [
      { nom: "le shérif Bill", genre: "m" },
      { nom: "la tenancière Molly", genre: "f" }
    ],
    suspects: [
      "Billy Boy la gachette facile", "Sally la Danseuse", "Sheriff Carter", "Doc Brown", "Miss Daisy",
      "Tommy le Joueur", "Juanita la Cuisinière", "Red le Bandit", "Sam le Forgeron", "Mary la Fermière",
      "Hank le Barman", "Martha la Couturière", "Jesse le Cowboy", "Clyde le Fossoyeur", "Little Joe"
    ],
    temoins: [
      { nom: "Hank le Barman", genre: "m" },
      { nom: "Little Joe", genre: "m" }
    ],
    indices: [
      "un colt encore chaud", "des traces de bottes boueuses", "une pièce d’or oubliée",
      "un foulard ensanglanté", "un as de pique glissé sous la porte"
    ],
    traitsVictimes: ["courageux", "calculateur"],
    motifs: [
      "une vieille rancune", "un vol de bétail", "un amour contrarié"
    ],
    armes: [
      "un colt", "une corde", "un couteau de chasse"
    ],
    ambiances: [
      "le soleil tape sur la ville", "une tempête de sable approche", "la musique du piano s’arrête brusquement"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les regards sont lourds de suspicion.",
      "Une partie de poker tendue oppose {suspect1} à {suspect2}.",
      "[TEMOIN] {temoin} déclare avoir vu {suspect1} rôder près du saloon."
    ],
    crimes: {
      classique: [
        "{victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés.",
        "Un duel tourne mal : {victime} tombe {dans_la_lieu}. {temoin} accuse {suspect1}."
      ],
      poison: [
        "Une bouteille suspecte circule au saloon. {victime} s'effondre.",
        "{victime} n’a pas survécu à une boisson fatale {dans_la_lieu}."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}."
      ]
    }
  },
  contemporain: {
    lieux: [
      { nom: "salle de réunion", genre: "f" },
      { nom: "bureau open space", genre: "m" },
      { nom: "parking souterrain", genre: "m" }
    ],
    victimes: [
      { nom: "le PDG Martin", genre: "m" },
      { nom: "la directrice Sophie", genre: "f" }
    ],
    suspects: [
      "Lucas le Hacker", "Emma la Journaliste", "Sophie la Cheffe", "Antoine le Policier", "Inès la Médecin",
      "Karim le Chauffeur", "Mélanie la Prof", "Jules l’Artiste", "Clara la Startupeuse", "Marc l’Avocat",
      "Amandine la Fleuriste", "Nina la Coach sportive", "Victor le Banquier", "Élodie la Babysitter", "Pierre le Concierge"
    ],
    temoins: [
      { nom: "Romain le Barman", genre: "m" },
      { nom: "Léa la Blogueuse", genre: "f" }
    ],
    indices: [
      "un téléphone portable oublié", "un badge d’accès", "une clé USB contenant des fichiers suspects",
      "une trace de rouge à lèvres sur un verre", "une carte bancaire oubliée"
    ],
    traitsVictimes: ["ambitieux", "discret"],
    motifs: [
      "une promotion refusée", "un marché truqué", "une liaison secrète"
    ],
    armes: [
      "un coupe-papier", "un revolver", "du poison"
    ],
    ambiances: [
      "la fête bat son plein", "le téléphone sonne sans réponse", "l’orage éclate dehors"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les collègues chuchotent.",
      "Une réunion tourne au vinaigre entre {suspect1} et {suspect2}.",
      "[TEMOIN] {temoin} affirme avoir vu {suspect1} près du lieu du crime."
    ],
    crimes: {
      classique: [
        "{victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés.",
        "Un cri retentit dans la salle de réunion : {victime} gît {dans_la_lieu}. {temoin} accuse {suspect1}."
      ],
      poison: [
        "Le cocktail de {victime} était empoisonné.",
        "{victime} n’a pas survécu à une boisson fatale {dans_la_lieu}."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}."
      ]
    }
  },
  futuriste: {
    lieux: [
      { nom: "station orbitale Atlas", genre: "f" },
      { nom: "laboratoire central", genre: "m" },
      { nom: "module de cryogénie", genre: "m" }
    ],
    victimes: [
      { nom: "le commandant Vega", genre: "m" },
      { nom: "la docteure Lin", genre: "f" }
    ],
    suspects: [
      "Vega la Pilote", "JAX l’Androïde", "Dr Novak", "Zora la Roboticienne", "Directeur Kwan",
      "Mia la Technicienne", "Ikar le Biologiste", "Chef Rolf", "Tao l’Ingénieur", "S-19 le Robot",
      "EVA l’IA", "Boris le Technicien", "Lin la Biologiste", "Yuto le Stagiaire", "Astra la Navigatrice"
    ],
    temoins: [
      { nom: "Unit-5 le robot d'entretien", genre: "m" },
      { nom: "Mira la navigatrice", genre: "f" }
    ],
    indices: [
      "un implant désactivé", "une carte d'accès biométrique", "un rapport IA effacé",
      "un résidu de nano-robots", "une fiole de sérum brisé"
    ],
    traitsVictimes: ["visionnaire", "autoritaire", "paranoïaque"],
    motifs: [
      "un vol de technologie", "une rivalité scientifique", "une trahison interplanétaire"
    ],
    armes: [
      "un pistolet à impulsion", "une seringue de protoxyde", "un câble à haute tension"
    ],
    ambiances: [
      "une panne d'alimentation plonge la station dans le noir", "l'alarme d'urgence retentit dans le laboratoire", "un hologramme s'affole dans le couloir principal"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les membres d'équipage échangent des regards inquiets.",
      "Une dispute éclate entre {suspect1} et {suspect2} dans la salle de réunion.",
      "[TEMOIN] {temoin} affirme avoir vu {suspect1} manipuler un terminal dans la {lieu}."
    ],
    crimes: {
      classique: [
        "{victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés.",
        "Un cri résonne : {victime} gît {dans_la_lieu}. {temoin} accuse {suspect1}."
      ],
      poison: [
        "Le sérum de {victime} était contaminé. Il/elle s'effondre {dans_la_lieu}.",
        "{victime} n’a pas survécu à une injection fatale {dans_la_lieu}. {temoin} accuse {suspect1}."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}. {temoin} l’a vu s’enfuir dans un module annexe."
      ]
    }
  },
  historique: {
    lieux: [
      { nom: "palais royal", genre: "m" },
      { nom: "bibliothèque d'Alexandrie", genre: "f" },
      { nom: "catacombes", genre: "f" }
    ],
    victimes: [
      { nom: "le général Dupont", genre: "m" },
      { nom: "la duchesse Marie", genre: "f" }
    ],
    suspects: [
      "Cléopâtre", "Jules César", "Napoléon Bonaparte", "Marie Curie", "Alexandre le Grand",
      "Jeanne d’Arc", "Louis XIV", "Mozart", "Victor Hugo", "Marie-Antoinette",
      "Gutenberg", "Richelieu", "George Sand", "Mata Hari", "Vercingétorix"
    ],
    temoins: [
      { nom: "Louis Pasteur", genre: "m" },
      { nom: "Sarah Bernhardt", genre: "f" }
    ],
    indices: [
      "un parchemin ancien trouvé sur les lieux", "un médaillon portant des armoiries inconnues", "un sceau brisé sur une lettre officielle",
      "un gant de velours taché de sang", "une plume d’écriture brisée"
    ],
    traitsVictimes: ["stratégique", "mystérieux"],
    motifs: [
      "une trahison", "la jalousie", "une dette d’honneur"
    ],
    armes: [
      "un sabre", "du poison", "un pistolet"
    ],
    ambiances: [
      "le canon tonne au loin", "les cloches retentissent", "la foule gronde"
    ],
    intro: [
      "{ambiance} dans {la_lieu}. Les notables s'agitent.",
      "Une dispute éclate entre {suspect1} et {suspect2}.",
      "[TEMOIN] {temoin} prétend avoir vu {suspect1} avant le crime."
    ],
    crimes: {
      classique: [
        "{victime} est retrouvé·e sans vie {dans_la_lieu}, {arme} à ses côtés.",
        "Un cri retentit : {victime} gît {dans_la_lieu}. {temoin} accuse {suspect1}."
      ],
      poison: [
        "Le vin de {victime} était empoisonné.",
        "{victime} n’a pas survécu à une boisson fatale {dans_la_lieu}."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}."
      ]
    }
  }
};

const scenarioLibrary = {
  objectifs: {
    medieval: [
      "Démasquez le traître avant qu’il ne frappe à nouveau dans la seigneurie.",
      "Retrouvez l’assassin qui hante le château avant que la rumeur ne se répande au village.",
      "Résolvez cette énigme avant que le sang ne souille davantage l’honneur du fief."
    ],
    renaissance: [
      "Dévoilez le secret qui ensanglante la cour et sauvez votre réputation.",
      "Trouvez l’artiste meurtrier avant que la jalousie ne détruise tout.",
      "Élucidez ce crime au cœur du palais avant que la vérité ne soit ensevelie sous les masques."
    ],
    victorien: [
      "Débusquez le coupable au sein de la haute société avant qu’un nouveau scandale n’éclate.",
      "Trouvez l’assassin avant que la brume de Londres n’efface toute trace.",
      "Menez l’enquête dans le manoir pour sauver l’honneur de la famille."
    ],
    western: [
      "Démasquez le hors-la-loi avant qu’il ne prenne la poudre d’escampette.",
      "Retrouvez le coupable du règlement de compte avant que la ville ne sombre dans le chaos.",
      "Résolvez le mystère du saloon pour ramener la paix à Dusty Town."
    ],
    contemporain: [
      "Trouvez le responsable avant que l’affaire n’éclate dans les médias.",
      "Démasquez le coupable dans l’entreprise avant qu’il ne disparaisse avec ses secrets.",
      "Menez l’enquête express avant que la vérité ne soit effacée des serveurs."
    ],
    futuriste: [
      "Identifiez le saboteur avant que la station orbitale ne soit perdue.",
      "Démasquez l’androïde meurtrier avant qu’il ne pirate l’IA centrale.",
      "Résolvez le crime cybernétique pour empêcher une crise interplanétaire."
    ],
    historique: [
      "Décelez le complot avant que l’Histoire ne soit réécrite dans le sang.",
      "Trouvez le coupable au cœur des intrigues royales pour préserver la dynastie.",
      "Élucidez le crime avant que la postérité n’accuse un innocent."
    ],
    // Par nombre de criminels pour compatibilité
    1: [
      "Dénichez le meurtrier avant qu’il ne frappe à nouveau.",
      "Trouvez l'assassin avant que la vérité ne soit effacée à jamais.",
      "Résolvez cette énigme en un temps limité pour sauver l’innocent."
    ],
    2: [
      "Deux coupables se cachent... à vous de les démasquer avant qu’ils ne s’enfuient.",
      "Découvrez l’identité des deux criminels avant qu’ils n’aient le temps de manipuler toute l’enquête.",
      "La complexité augmente : deux meurtriers, un seul mystère."
    ],
    3: [
      "Trois assassins, liés par un pacte secret, ont dissimulé leur crime derrière une toile de mensonges.",
      "Une trahison orchestrée par trois esprits machiavéliques secoue le domaine.",
      "Ils sont trois. Trois silhouettes dans l’ombre, unies par un mobile insondable."
    ]
  },
  durees: {
    medieval: [
      "La cloche du village sonnera bientôt… Saurez-vous résoudre le crime à temps ?",
      "Agissez avant que la rumeur ne se répande dans tout le royaume.",
      "La nuit tombe sur le château : chaque minute compte pour sauver l’honneur du seigneur."
    ],
    renaissance: [
      "Le bal touche à sa fin, le temps presse pour démasquer le coupable.",
      "Les masques tomberont bientôt : élucidez l’énigme avant l’aube.",
      "Le banquet va s’achever, l’honneur de la cour est entre vos mains."
    ],
    victorien: [
      "Le brouillard envahit le manoir : ne laissez pas l’assassin s’échapper.",
      "La police arrive dans l’heure, menez l’enquête sans faux pas.",
      "Le thé refroidit dans le salon, mais la tension monte d’un cran."
    ],
    western: [
      "Le prochain train part bientôt, démasquez le coupable avant son départ.",
      "Le soleil va se coucher sur la ville… Résolvez l’affaire avant la nuit.",
      "Les colts sont chargés : chaque minute de retard risque d’être fatale."
    ],
    contemporain: [
      "La police est en route : levez le mystère avant qu’elle ne débarque.",
      "Le buzz monte sur les réseaux : il faut résoudre le crime avant le bad buzz.",
      "Le temps presse, les preuves s’effacent vite dans la modernité."
    ],
    futuriste: [
      "L’oxygène de la station s’épuise : trouvez le coupable avant la panne.",
      "Le compte à rebours de l’IA centrale est lancé : résolvez vite l’affaire.",
      "Un message crypté circule… chaque minute rapproche le système du chaos."
    ],
    historique: [
      "Les cloches de la ville vont sonner le glas du secret.",
      "L’Histoire retiendra votre échec ou votre succès : agissez vite.",
      "Le conseil royal se réunit bientôt… la vérité doit éclater avant."
    ],
    // Pour compatibilité par durée générique
    court: [
      "Le temps presse, chaque minute compte dans cette course contre la montre.",
      "Une enquête rapide mais intense vous attend. Vos instincts devront primer sur vos doutes.",
      "La résolution doit être rapide pour empêcher un nouveau drame."
    ],
    moyen: [
      "Un temps équilibré pour réfléchir et agir.",
      "Une enquête qui mêle tension et réflexion.",
      "Le temps vous donne une marge, mais attention aux erreurs."
    ],
    long: [
      "Une longue enquête où chaque détail peut faire basculer l’affaire.",
      "Vous avez le temps d'explorer chaque piste en profondeur.",
      "Une énigme complexe qui nécessite patience et perspicacité."
    ]
  }
};

// --- GÉNÉRATION DU SCÉNARIO ---
function genererScenario() {
  console.log("genererScenario() appelée");
  const salonCode = localStorage.getItem("salonCode");
  if (!salonCode) return;

  // On récupère les paramètres de la partie directement depuis Firebase
  firebase.database().ref('parties/' + salonCode + '/parametres').once('value').then(function(snap) {
    if (!snap.exists()) {
      if (document.getElementById("scenario-loading")) {
        document.getElementById("scenario-loading").textContent = "Paramètres de partie introuvables.";
      }
      return;
    }
    const scenarioData = snap.val();

    let periodeCle = scenarioData.periode;
    if (!univers[periodeCle]) return;
    const periodeData = univers[periodeCle];
    const nbJoueurs = parseInt(scenarioData.nombreJoueurs, 10);

    let history = getScenarioHistory();
    let maxTry = 15, tryCount = 0, scenarioOk = false, scenarioObj;

    while (!scenarioOk && tryCount < maxTry) {
      tryCount++;

      const lieuObj = tirageUnique(periodeData.lieux, "nom", history, "lieu");
      const victimeObj = tirageUnique(periodeData.victimes, "nom", history, "victime");
      const arme = tirageUnique(periodeData.armes, null, history, "arme");
      const ambiance = tirageUnique(periodeData.ambiances, null, history, "ambiance");
      const traitVictime = tirageUnique(periodeData.traitsVictimes, null, history, "traitVictime");
      const motif = tirageUnique(periodeData.motifs, null, history, "motif");

      const suspects = shuffleArray(periodeData.suspects.filter(sus => !victimeObj.nom.toLowerCase().includes(sus.toLowerCase())));
      const suspect1 = tirageUnique(suspects, null, history, "suspect1");
      const suspect2 = tirageUnique(suspects.filter(sus => sus !== suspect1), null, history, "suspect2");

      let temoinObj, temoin;
      if (nbJoueurs >= 4 && periodeData.temoins) {
        temoinObj = tirageUnique(periodeData.temoins, "nom", history, "temoin");
        temoin = temoinObj ? temoinObj.nom : undefined;
      }
      let indice = (nbJoueurs >= 3 && periodeData.indices) ? tirageUnique(periodeData.indices, null, history, "indice") : undefined;

      let introCandidates = periodeData.intro.filter((tpl) => {
        if (tpl.startsWith("[TEMOIN]")) return temoin;
        if (tpl.startsWith("[INDICE]")) return indice;
        return true;
      });
      const introTpl = tirageTemplateUnique(introCandidates, history, "introTpl").replace(/^\[(INDICE|TEMOIN)\]\s?/, "");

      let modeCrime = scenarioData.mode;
      if (!periodeData.crimes[modeCrime]) modeCrime = "classique";
      const crimeTemplates = periodeData.crimes[modeCrime].filter(tpl => {
        if (tpl.includes("{temoin}") && !temoin) return false;
        if (tpl.includes("{indice}") && !indice) return false;
        if (tpl.includes("{suspect2}") && !suspect2) return false;
        return true;
      });
      const crimeTpl = tirageTemplateUnique(crimeTemplates, history, "crimeTpl");

      const artLieu = getArticle(lieuObj.nom, { m: 'le', f: 'la' });
      const artDansLieu = articleDans(lieuObj.nom, artLieu);
      const artVictime = getArticle(victimeObj.nom, { m: 'le', f: 'la' });

      const variables = {
        "{lieu}": lieuObj.nom,
        "{la_lieu}": artLieu + (artLieu.endsWith("'") ? "" : " ") + lieuObj.nom,
        "{dans_la_lieu}": artDansLieu + " " + lieuObj.nom,
        "{victime}": victimeObj.nom,
        "{le_victime}": artVictime + (artVictime.endsWith("'") ? "" : " ") + victimeObj.nom,
        "{traitVictime}": traitVictime,
        "{motif}": motif,
        "{arme}": arme,
        "{ambiance}": ambiance,
        "{suspect1}": suspect1,
        "{suspect2}": suspect2
      };
      if (temoin) variables["{temoin}"] = temoin;
      if (indice) variables["{indice}"] = indice;

      const introduction = replaceVars(introTpl, variables);
      const crime = replaceVars(crimeTpl, variables);

      const objectif = tirageUnique(scenarioLibrary.objectifs[scenarioData.criminels] || scenarioLibrary.objectifs[1], null, history, "objectif");
      const dureeCat = categoriseDuree(scenarioData.duree);
      const detailsDuree = tirageUnique(scenarioLibrary.durees[dureeCat], null, history, "detailsDuree");

      scenarioObj = {
        lieu: lieuObj.nom,
        victime: victimeObj.nom,
        arme,
        ambiance,
        traitVictime,
        motif,
        suspect1,
        suspect2,
        temoin: temoin || "",
        indice: indice || "",
        introTpl,
        crimeTpl,
        introduction,
        crime,
        objectif,
        detailsDuree
      };

      scenarioOk = !history.some(h =>
        h.lieu === scenarioObj.lieu ||
        h.victime === scenarioObj.victime ||
        h.arme === scenarioObj.arme ||
        h.ambiance === scenarioObj.ambiance ||
        h.traitVictime === scenarioObj.traitVictime ||
        h.motif === scenarioObj.motif ||
        h.suspect1 === scenarioObj.suspect1 ||
        h.suspect2 === scenarioObj.suspect2 ||
        h.temoin === scenarioObj.temoin ||
        h.indice === scenarioObj.indice ||
        h.introTpl === scenarioObj.introTpl ||
        h.crimeTpl === scenarioObj.crimeTpl ||
        h.objectif === scenarioObj.objectif ||
        h.detailsDuree === scenarioObj.detailsDuree
      );

      if (!scenarioOk && tryCount === maxTry) {
        history = [];
        tryCount = 0;
      }
    }

    addScenarioToHistory(scenarioObj);

    // Sauvegarde le scénario pour l’affichage moderne (optionnel)
    localStorage.setItem("scenarioCourant", JSON.stringify(scenarioObj));

    // Sauvegarde le scénario dans Firebase pour tous les joueurs
    db.ref('parties/' + salonCode + '/scenario').set(scenarioObj);

    // Affiche dans les bons éléments si ils existent
    function fillScenarioDisplay() {
      if (document.getElementById("introduction")) document.getElementById("introduction").innerHTML = scenarioObj.introduction;
      if (document.getElementById("crime")) document.getElementById("crime").innerHTML = scenarioObj.crime;
      if (document.getElementById("objectif")) document.getElementById("objectif").innerHTML = scenarioObj.objectif;
      if (document.getElementById("mode")) document.getElementById("mode").textContent = scenarioData.mode || "-";
      if (document.getElementById("duree")) document.getElementById("duree").textContent = scenarioData.duree + " min — " + (scenarioObj.detailsDuree || "");
      if (document.getElementById("periode")) document.getElementById("periode").textContent = scenarioData.periode || "-";
      if (document.getElementById("joueurs")) document.getElementById("joueurs").textContent = scenarioData.nombreJoueurs || "-";
      if (document.getElementById("criminels")) document.getElementById("criminels").textContent = scenarioData.criminels || "-";
      if (document.getElementById("fantome")) document.getElementById("fantome").textContent = scenarioData.criminelFantome ? "Oui" : "Non";
      if (document.getElementById("avatars")) document.getElementById("avatars").textContent = scenarioData.avatarsLegendaires ? "Oui" : "Non";
      // Cache le message de chargement, affiche le contenu
      if (document.getElementById("scenario-loading")) document.getElementById("scenario-loading").style.display = "none";
      if (document.getElementById("scenario-content")) document.getElementById("scenario-content").style.display = "block";
    }
    fillScenarioDisplay();
  });
}
