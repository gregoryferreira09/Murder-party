// SRC/JS/Scenario.js

import { personnagesParEpoque } from './personnages.js';

const ANTI_REPEAT_HISTORY_SIZE = 5;

// ... (fonctions utilitaires inchangées: getArticle, articleDans, randomItem, shuffleArray, etc.) ...

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

// === UNIVERS COHÉRENTS & ÉLARGIS ===
// Tu peux laisser ici uniquement ce qui concerne les lieux, ambiances, indices, motifs, armes, intro, crimes, etc.
// SUPPRIME les tableaux suspects/victimes/temoins de chaque période !

const univers = {
  victorien: {
    lieux: [ /* ... */ ],
    indices: [ /* ... */ ],
    traitsVictimes: [ /* ... */ ],
    motifs: [ /* ... */ ],
    armes: [ /* ... */ ],
    ambiances: [ /* ... */ ],
    intro: [ /* ... */ ],
    crimes: { /* ... */ }
  },
  // ... Autres époques ...
};

const scenarioLibrary = {
  objectifs: { /* ... */ },
  durees: { /* ... */ }
};

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

function filterCharactersByCategory(characters, category) {
  // Si pas de champ categories, considérer que tout le monde peut tout
  return characters.filter(p => !p.categories || p.categories.includes(category));
}

function genererScenario() {
  let scenarioData;
  try {
    scenarioData = JSON.parse(localStorage.getItem("parametresPartie"));
  } catch {
    scenarioData = null;
  }
  const container = document.getElementById("scenarioContainer");

  if (scenarioData) {
    let periodeCle = scenarioData.periode;
    if (periodeCle === "autre" && scenarioData.periodeAutre) {
      periodeCle = "autre";
    }
    if (!univers[periodeCle]) periodeCle = "autre";
    const periodeData = univers[periodeCle];

    // NOUVEAU : récupérer la liste des personnages de la période
    const persos = personnagesParEpoque[periodeCle];

    // Filtrer dynamiquement
    const suspectsArr = filterCharactersByCategory(persos, "suspect");
    const victimesArr = filterCharactersByCategory(persos, "victime");
    const temoinsArr = filterCharactersByCategory(persos, "temoin");

    const nbJoueurs = parseInt(scenarioData.nombreJoueurs, 10);

    // Historique long pour antirépétition stricte
    let history = getScenarioHistory();
    let maxTry = 15, tryCount = 0, scenarioOk = false, scenarioObj;

    while (!scenarioOk && tryCount < maxTry) {
      tryCount++;

      // Tirages uniques sur chaque champ
      const lieuObj = tirageUnique(periodeData.lieux, "nom", history, "lieu");
      const victimeObj = tirageUnique(victimesArr, "nom", history, "victime");
      const arme = tirageUnique(periodeData.armes, null, history, "arme");
      const ambiance = tirageUnique(periodeData.ambiances, null, history, "ambiance");
      const traitVictime = tirageUnique(periodeData.traitsVictimes, null, history, "traitVictime");
      const motif = tirageUnique(periodeData.motifs, null, history, "motif");

      // Suspects, témoins, indices
      // On évite de tirer la victime comme suspect
      const suspects = shuffleArray(suspectsArr.filter(sus => sus.nom !== victimeObj.nom));
      const suspect1 = tirageUnique(suspects, "nom", history, "suspect1");
      const suspectsSansSuspect1 = suspects.filter(sus => sus.nom !== suspect1.nom);
      const suspect2 = tirageUnique(suspectsSansSuspect1, "nom", history, "suspect2");

      let temoinObj, temoin;
      if (nbJoueurs >= 4 && temoinsArr.length > 0) {
        temoinObj = tirageUnique(temoinsArr.filter(t => t.nom !== victimeObj.nom && t.nom !== suspect1.nom && (!suspect2 || t.nom !== suspect2.nom)), "nom", history, "temoin");
        temoin = temoinObj ? temoinObj.nom : undefined;
      }
      let indice = (nbJoueurs >= 3 && periodeData.indices) ? tirageUnique(periodeData.indices, null, history, "indice") : undefined;

      // Templates intro/crime uniques
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
        "{suspect1}": suspect1.nom,
        "{suspect2}": suspect2 ? suspect2.nom : ""
      };
      if (temoin) variables["{temoin}"] = temoin;
      if (indice) variables["{indice}"] = indice;

      const introduction = replaceVars(introTpl, variables);
      const crime = replaceVars(crimeTpl, variables);

      // Objectif/temps
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
        suspect1: suspect1.nom,
        suspect2: suspect2 ? suspect2.nom : "",
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

    container.innerHTML = `
      <span id="regenScenarioBtn" style="cursor:pointer; float:right; font-size:1.8em;" title="Générer un autre scénario">📜</span>
      <h2>Introduction</h2>
      <p>${scenarioObj.introduction}</p>
      <h2>Le crime</h2>
      <p>${scenarioObj.crime}</p>
      <h2>Objectif général</h2>
      <p>${scenarioObj.objectif}</p>
      <h2>Détails du jeu</h2>
      <p>Mode de jeu : ${escapeHtml(scenarioData.mode)}</p>
      <p>Durée de la partie : ${escapeHtml(String(scenarioData.duree))} minutes — ${scenarioObj.detailsDuree}</p>
      <p>Période : ${escapeHtml(scenarioData.periode)}</p>
      <p>Nombre de joueurs : ${escapeHtml(String(scenarioData.nombreJoueurs))}</p>
      <p>Nombre de criminels : ${escapeHtml(String(scenarioData.criminels))}</p>
      <p>Mode criminels fantômes : ${scenarioData.criminelFantome ? "Oui" : "Non"}</p>
      <p>Avatars légendaires activés : ${scenarioData.avatarsLegendaires ? "Oui" : "Non"}</p>
      <div class="boutons-actions">
        <a class="gold-btn" href="salon.html">Lancement</a>
        <a class="gold-btn" href="creer-partie.html">Retour</a>
      </div>
      `;
    const regenBtn = document.getElementById("regenScenarioBtn");
    if (regenBtn) regenBtn.onclick = genererScenario;
  } else {
    document.getElementById("scenarioContainer").innerHTML = "<p>Aucune donnée de scénario trouvée.</p>";
  }
}

document.addEventListener("DOMContentLoaded", genererScenario);
