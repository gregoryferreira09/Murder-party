// --- Imports / Config ---
// Si univers/scenarioLibrary sont dans Scenario.js, décommente la ligne suivante et adapte le chemin.
// import { univers, scenarioLibrary } from './Scenario.js';

// Si univers/scenarioLibrary sont dans ce fichier, copie-les ici OU assure-toi qu’ils sont déjà dans le scope.

// --- Tirages utilitaires ---
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function getArticle(word, articles = { m: 'le', f: 'la' }) {
  if (!word) return '';
  word = word.trim();
  const firstLetter = word[0].toLowerCase();
  if ("aeiouyh".includes(firstLetter)) return "l'";
  const feminine = [
    "bibliothèque", "gouvernante", "salle", "cave", "chapelle", "forêt", "dimension", "galerie", "voix", "technicienne",
    "station", "soute", "cabine", "ombre", "cuisine", "armurerie", "orphelinat", "tour", "chambre forte", "crypte"
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
function replaceVars(tpl, variables) {
  return Object.entries(variables).reduce(
    (txt, [key, val]) => txt.replaceAll(key, val),
    tpl
  );
}

// --- Génération du scénario dynamique ---
function genererScenarioDynamique({ periode, mode = "classique", duree = 30, criminels = 1, nombreJoueurs = 6 }) {
  // 1. Sélection de l'univers
  const periodKey = periode;
  const u = univers[periodKey];
  if (!u) throw new Error("Époque inconnue");

  // 2. Tirage des éléments principaux
  const lieuObj = randomItem(u.lieux);
  const victimeObj = randomItem(u.victimes);
  const suspects = shuffleArray(u.suspects.filter(s => !victimeObj.nom.toLowerCase().includes(s.toLowerCase())));
  const suspect1 = suspects[0];
  const suspect2 = suspects[1] || suspects[0];

  const temoinObj = randomItem(u.temoins || []);
  const temoin = temoinObj ? temoinObj.nom : "";
  const indice = randomItem(u.indices || []);
  const ambiance = randomItem(u.ambiances || []);
  const traitVictime = randomItem(u.traitsVictimes || []);
  const motif = randomItem(u.motifs || []);
  const arme = randomItem(u.armes || []);

  // 3. Préparation des variables pour les templates
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
    "{suspect2}": suspect2,
    "{temoin}": temoin,
    "{indice}": indice
  };

  // 4. Intro, crime, objectifs, durée
  const introTpl = randomItem(u.intro);
  const introduction = replaceVars(introTpl, variables);

  let modeCrime = u.crimes[mode] ? mode : "classique";
  const crimeTpl = randomItem(u.crimes[modeCrime]);
  const crime = replaceVars(crimeTpl, variables);

  // Objectif et durée, période-spécifique sinon fallback générique
  const objectif = randomItem((scenarioLibrary.objectifs[periodKey] || scenarioLibrary.objectifs[criminels] || scenarioLibrary.objectifs[1]));
  // Catégorisation duree
  let dureeCat = "court";
  if (+duree > 60) dureeCat = "long";
  else if (+duree > 30) dureeCat = "moyen";
  const detailsDuree = randomItem((scenarioLibrary.durees[periodKey] || scenarioLibrary.durees[dureeCat]));

  // 5. Résultat complet
  return {
    periode: periodKey,
    lieu: lieuObj.nom,
    victime: victimeObj.nom,
    suspects: suspects.slice(0, nombreJoueurs),
    arme,
    ambiance,
    traitVictime,
    motif,
    suspect1,
    suspect2,
    temoin,
    indice,
    introduction,
    crime,
    objectif,
    detailsDuree,
    mode,
    duree,
    criminels,
    joueurs: nombreJoueurs
  };
}

// --- Export ---
if (typeof module !== "undefined") {
  module.exports = { genererScenarioDynamique };
} else {
  window.genererScenarioDynamique = genererScenarioDynamique;
}
