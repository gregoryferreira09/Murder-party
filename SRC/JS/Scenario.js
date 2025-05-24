// --- CONFIGURATION ET INITIALISATION FIREBASE ---
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
if (typeof firebase !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = typeof firebase !== "undefined" ? firebase.database() : null;

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
  victorien: { /* ... inchangé ... */ },
  medieval: { /* ... inchangé ... */ },
  futuriste: { /* ... inchangé ... */ },

  renaissance: {
    lieux: [
      { nom: "palais", genre: "m" }, { nom: "atelier", genre: "m" }, { nom: "salle de bal", genre: "f" }, { nom: "jardin à l'italienne", genre: "m" }
    ],
    victimes: [
      { nom: "le duc Lorenzo", genre: "m" }, { nom: "la marquise Bianca", genre: "f" }, { nom: "le peintre Filippo", genre: "m" }
    ],
    suspects: [
      "le banquier Cosimo", "la marquise Bianca", "le peintre Filippo", "le serviteur Paolo"
    ],
    temoins: [
      { nom: "le jardinier Pietro", genre: "m" }, { nom: "la dame de compagnie Isabella", genre: "f" }
    ],
    indices: [
      "une esquisse inachevée tachée de sang", "un bijou familial sous le tapis", "une lettre codée posée sur un lutrin"
    ],
    traitsVictimes: [
      "inspiré", "prétentieux", "jaloux"
    ],
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
      "Dans {la_lieu}, les artistes chuchotent à propos de {motif}.",
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
      ],
      vol: [
        "Un bijou a disparu, et {victime} donne l’alerte. {temoin} dit avoir vu {suspect1} près du lieu du crime."
      ]
    }
  },

  western: {
    lieux: [
      { nom: "saloon", genre: "m" }, { nom: "ranch", genre: "m" }, { nom: "gare", genre: "f" }, { nom: "ruelle", genre: "f" }
    ],
    victimes: [
      { nom: "le shérif Bill", genre: "m" }, { nom: "la tenancière Molly", genre: "f" }
    ],
    suspects: [
      "le hors-la-loi Jack", "la joueuse de poker Sally", "le barman Joe", "le maire Sam"
    ],
    temoins: [
      { nom: "le barman Joe", genre: "m" }, { nom: "le gamin Tom", genre: "m" }
    ],
    indices: [
      "un colt encore fumant", "des traces de bottes boueuses", "une pièce d’or oubliée"
    ],
    traitsVictimes: [
      "courageux", "calculateur"
    ],
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
      ],
      vol: [
        "Le coffre de la banque a été vidé. {temoin} dit avoir vu {suspect1} près du lieu du crime."
      ]
    }
  },

  contemporain: {
    lieux: [
      { nom: "villa", genre: "f" }, { nom: "bureau", genre: "m" }, { nom: "club privé", genre: "m" }, { nom: "hôtel", genre: "m" }
    ],
    victimes: [
      { nom: "le PDG Martin", genre: "m" }, { nom: "la directrice Sophie", genre: "f" }
    ],
    suspects: [
      "le comptable Alain", "la secrétaire Julie", "le chauffeur Karim", "la consultante Emma"
    ],
    temoins: [
      { nom: "le portier Paul", genre: "m" }, { nom: "la réceptionniste Léa", genre: "f" }
    ],
    indices: [
      "une carte d’accès oubliée", "une trace de rouge à lèvres sur un verre", "un badge d’entreprise retrouvé"
    ],
    traitsVictimes: [
      "ambitieux", "discret"
    ],
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
        "Un cri retentit dans l’hôtel : {victime} gît {dans_la_lieu}. {temoin} accuse {suspect1}."
      ],
      poison: [
        "Le cocktail de {victime} était empoisonné.",
        "{victime} n’a pas survécu à une boisson fatale {dans_la_lieu}."
      ],
      disparition: [
        "On ne retrouve plus {victime} {dans_la_lieu}."
      ],
      vol: [
        "Le coffre-fort a été ouvert. {temoin} dit avoir vu {suspect1} près du lieu du crime."
      ]
    }
  },

  historique: {
    lieux: [
      { nom: "abbaye", genre: "f" }, { nom: "champ de bataille", genre: "m" }, { nom: "port", genre: "m" }, { nom: "théâtre", genre: "m" }
    ],
    victimes: [
      { nom: "le général Dupont", genre: "m" }, { nom: "la duchesse Marie", genre: "f" }
    ],
    suspects: [
      "le capitaine Morel", "la cantinière Elise", "le moine Pierre", "le marchand Jacques"
    ],
    temoins: [
      { nom: "le soldat Louis", genre: "m" }, { nom: "la servante Anne", genre: "f" }
    ],
    indices: [
      "une médaille abandonnée", "une lettre anonyme", "un mouchoir brodé"
    ],
    traitsVictimes: [
      "stratégique", "mystérieux"
    ],
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
      ],
      vol: [
        "Le trésor du théâtre a disparu. {temoin} dit avoir vu {suspect1} près du lieu du crime."
      ]
    }
  }
};

const scenarioLibrary = {
  objectifs: {
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
  let scenarioData;
  try {
    scenarioData = JSON.parse(localStorage.getItem("parametresPartie"));
  } catch {
    scenarioData = null;
  }

  if (scenarioData) {
    let periodeCle = scenarioData.periode;
    // Si la période n'existe pas, ne génère rien (plus de fallback "autre")
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

    // Sauvegarde le scénario pour l’affichage moderne
    localStorage.setItem("scenarioCourant", JSON.stringify(scenarioObj));

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
    } else {
    container.innerHTML = "<p>Aucune donnée de scénario trouvée.</p>";
  }
}

// --- SYNCHRO ET INIT UNIQUE ---
// --- SYNCHRO ET INIT UNIQUE ---
document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("scenarioContainer");
  const salonCode = localStorage.getItem('salonCode');

  if (!container) return;

  // Gestion offline/online
  window.addEventListener('offline', () => {
    // Ajoute un message seulement si pas déjà présent
    if (!document.getElementById('offline-warning')) {
      const warning = document.createElement('div');
      warning.id = 'offline-warning';
      warning.style.color = "#e86d6d";
      warning.style.marginTop = "18px";
      warning.textContent = "Vous êtes hors ligne.";
      container.appendChild(warning);
    }
  });

  window.addEventListener('online', () => {
    window.location.reload();
  });

  window.addEventListener('storage', (event) => {
    if (event.key === 'salonCode') window.location.reload();
  });

  // Chargement des paramètres via Firebase puis génération du scénario
  if (salonCode && typeof db !== "undefined" && db) {
    db.ref('parties/' + salonCode + '/parametres').once('value')
      .then((snap) => {
        const params = snap.val();
        if (!params) {
          container.innerHTML = "<p>La partie n'existe plus ou a expiré. Veuillez en créer une nouvelle.</p>";
          localStorage.removeItem('salonCode');
          localStorage.removeItem('parametresPartie');
          return;
        }
        localStorage.setItem('parametresPartie', JSON.stringify(params));
        if (typeof genererScenario === "function") {
          genererScenario();
        } else {
          container.innerHTML += "<p>Erreur : la fonction de génération de scénario n'est pas disponible.</p>";
        }
      })
      .catch((error) => {
        container.innerHTML = `<p>Erreur lors de la connexion à la base de données : ${escapeHtml(error.message)}</p>`;
      });
  } else {
    container.innerHTML = "<p>Aucun salon trouvé. Veuillez créer ou rejoindre une partie.</p>";
  }
});

// Fonction utilitaire pour échapper le HTML (sécurité)
function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
