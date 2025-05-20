// SRC/JS/Scenario.js

import univers from './univers.js';

const ANTI_REPEAT_HISTORY_SIZE = 5;

// === OUTILS FRANÇAIS ===
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

// === HISTORIQUE localStorage ===
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

// --- Antirépétition stricte sur tous les éléments principaux ---
function tirageUnique(array, key, history, fieldName) {
  // Exclut tout élément qui a été utilisé dans l’un des derniers scénarios
  const used = new Set(history.map(s => s[fieldName]));
  const filtered = array.filter(el => {
    const val = typeof key === "function" ? key(el) : (el[key] ?? el);
    return !used.has(val);
  });
  return filtered.length ? randomItem(filtered) : randomItem(array);
}
function tirageTemplateUnique(array, history, fieldName) {
  // Exclut tout template déjà utilisé récemment
  const used = new Set(history.map(s => s[fieldName]));
  const filtered = array.filter(el => !used.has(el));
  return filtered.length ? randomItem(filtered) : randomItem(array);
}

function categoriseDuree(minutes) {
  if (minutes <= 30) return "court";
  if (minutes <= 90) return "moyen";
  return "long";
}

// === GÉNÉRATION DE SCÉNARIO ===
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
    const nbJoueurs = parseInt(scenarioData.nombreJoueurs, 10);

    // Historique long pour antirépétition stricte
    let history = getScenarioHistory();
    let maxTry = 15, tryCount = 0, scenarioOk = false, scenarioObj;

    while (!scenarioOk && tryCount < maxTry) {
      tryCount++;

      // Tirages uniques sur chaque champ

      // --- Lieu : objet { nom, genre }
      const lieux = periodeData.lieux;
      const lieuObj = tirageUnique(lieux, "nom", history, "lieu");
      const lieu = lieuObj.nom;
      const genreLieu = lieuObj.genre;

      // --- Personnages (tableau de noms)
      const personnages = shuffleArray([...periodeData.personnages]);
      const victime = tirageUnique(personnages, null, history, "victime");
      const suspects = personnages.filter(nom => nom !== victime);
      const suspect1 = tirageUnique(suspects, null, history, "suspect1");
      const suspect2 = tirageUnique(suspects.filter(nom => nom !== suspect1), null, history, "suspect2");

      // --- Témoins (si assez de joueurs)
      let temoin;
      if (nbJoueurs >= 4 && periodeData.personnages.length >= 4) {
        const candidatsTemoin = personnages.filter(nom =>
          ![victime, suspect1, suspect2].includes(nom)
        );
        temoin = randomItem(candidatsTemoin);
      }

      // --- Autres champs
      const armes = Array.isArray(periodeData.armes) ? periodeData.armes : Object.values(periodeData.armes).flat();
      const arme = tirageUnique(armes, null, history, "arme");
      const ambiance = tirageUnique(periodeData.ambiances, null, history, "ambiance");
      const traitVictime = periodeData.traitsVictimes ? tirageUnique(periodeData.traitsVictimes, null, history, "traitVictime") : "";
      const motif = tirageUnique(periodeData.mobiles || periodeData.motifs, null, history, "motif");
      const indice = (nbJoueurs >= 3 && periodeData.indices) ? tirageUnique(periodeData.indices, null, history, "indice") : undefined;

      // --- Templates intro/crime uniques
      let introCandidates = periodeData.intro.filter((tpl) => {
        if (tpl.startsWith("[TEMOIN]")) return !!temoin;
        if (tpl.startsWith("[INDICE]")) return !!indice;
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

      // --- Articles
      const artLieu = getArticle(lieu, { m: 'le', f: 'la' });
      const artDansLieu = articleDans(lieu, artLieu);
      const artVictime = getArticle(victime, { m: 'le', f: 'la' });

      // --- Variables pour template
      const variables = {
        "{lieu}": lieu,
        "{la_lieu}": artLieu + (artLieu.endsWith("'") ? "" : " ") + lieu,
        "{dans_la_lieu}": artDansLieu + " " + lieu,
        "{victime}": victime,
        "{le_victime}": artVictime + (artVictime.endsWith("'") ? "" : " ") + victime,
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

      // Objectif/temps
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

      const objectif = tirageUnique(
        scenarioLibrary.objectifs[scenarioData.criminels] || scenarioLibrary.objectifs[1],
        null, history, "objectif"
      );
      const dureeCat = categoriseDuree(scenarioData.duree);
      const detailsDuree = tirageUnique(scenarioLibrary.durees[dureeCat], null, history, "detailsDuree");

      // Vérification stricte : tout doit être différent
      scenarioObj = {
        lieu: lieu,
        victime: victime,
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

    // Ajout à l'historique
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
