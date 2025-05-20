import univers from './univers.js';

// --- OUTILS ---
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function getArticle(word, articles = { m: 'le', f: 'la' }) {
  if (!word) return '';
  word = word.trim();
  const firstLetter = word[0].toLowerCase();
  if ("aeiouyh".includes(firstLetter)) return "l'";
  // Ajoute ici d'autres mots féminins spécifiques si besoin
  const feminine = ["bibliothèque", "gouvernante", "salle", "cave", "chapelle", "forêt", "dimension", "galerie", "voix", "technicienne"];
  if (feminine.some(x => word.toLowerCase().startsWith(x))) return articles.f;
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

// --- GÉNÉRATEUR PRINCIPAL ---
export function genererScenario(periode = 'victorien', options = {}) {
  const data = univers[periode];
  if (!data) throw new Error("Période inconnue");

  // 1. Sélections aléatoires
  const lieu = randomItem(data.lieux);
  const arme = randomItem(data.armes);
  const mobile = randomItem(data.mobiles);
  const ambiance = randomItem(data.ambiances);
  const personnages = [...data.personnages];
  const victime = randomItem(personnages);
  const suspects = personnages.filter(p => p !== victime);
  const suspect1 = randomItem(suspects);
  const suspect2 = suspects.length > 1 ? randomItem(suspects.filter(s => s !== suspect1)) : suspect1;
  const indice = randomItem(data.indices);
  const temoin = randomItem(personnages.filter(p => p !== victime && p !== suspect1 && p !== suspect2));

  // 2. Préparation des variables pour templates
  const artLieu = getArticle(lieu, { m: 'le', f: 'la' });
  const artDansLieu = articleDans(lieu, artLieu);

  const variables = {
    "{lieu}": lieu,
    "{la_lieu}": artLieu + (artLieu.endsWith("'") ? "" : " ") + lieu,
    "{dans_la_lieu}": artDansLieu + " " + lieu,
    "{suspect1}": suspect1,
    "{suspect2}": suspect2,
    "{victime}": victime,
    "{motif}": mobile,
    "{indice}": indice,
    "{temoin}": temoin,
    "{ambiance}": ambiance,
  };

  // 3. Génération de l'introduction
  let introTpls = data.intro.filter(tpl => {
    if (tpl.startsWith("[INDICE]")) return !!indice;
    if (tpl.startsWith("[TEMOIN]")) return !!temoin;
    return true;
  });
  let introTpl = randomItem(introTpls).replace(/^\[(INDICE|TEMOIN)\]\s?/, "");
  let introduction = replaceVars(introTpl, variables);

  // 4. Génération du crime (exemple simple, à améliorer selon ton propre modèle de crime)
  const crime = `Un crime a été commis ${variables["{dans_la_lieu}"]}. L'arme : ${arme}. Indice trouvé : ${indice}.`;

  // 5. Génération de l’objectif de jeu
  const objectifs = [
    "Découvrez qui est le meurtrier avant la fin de la partie.",
    "Résolvez le mystère avant qu’un autre crime ne soit commis.",
    "Trouvez le mobile du crime pour innocenter les suspects."
  ];
  const objectif = randomItem(objectifs);

  // 6. Retour du scénario complet
  return {
    introduction,
    crime,
    objectif
  };
}

// --- Exemple d'intégration (dans un autre fichier, ou dans un bouton d'UI) ---
// import { genererScenario } from './generateurScenario.js';
// const scenario = genererScenario('victorien');
// document.getElementById('intro').innerText = scenario.introduction;
// document.getElementById('crime').innerText = scenario.crime;
// document.getElementById('objectif').innerText = scenario.objectif;
