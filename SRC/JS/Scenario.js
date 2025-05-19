// Scenario.js amélioré : génération dynamique et cohérente de murder party

// 1. Structure de données enrichie

const scenarioDataModel = {
  periodes: {
    antiquite: {
      lieux: ["atrium", "thermes", "forum", "basilique"],
      objets: ["gladius", "amphore de vin", "stylet"],
      crimes: ["empoisonnement", "assassinat"],
      noms: ["Marcus", "Livia", "Caius", "Julia", "Decimus", "Antonia"]
    },
    victorien: {
      lieux: ["bibliothèque", "cellier", "salon", "jardin"],
      objets: ["révolver", "poignard", "verre de brandy"],
      crimes: ["poison", "classique", "vol"],
      noms: ["Lord Ashford", "Lady Scarlet", "James Butler", "Miss Violet", "Colonel Mustard", "Mme Rose"]
    },
    futuriste: {
      lieux: ["labo", "pont de vaisseau", "quartiers privés"],
      objets: ["rayon-laser", "nano-poison", "cyber-clef"],
      crimes: ["hacking", "empoisonnement", "sabotage"],
      noms: ["Nova", "Orion", "Zeta", "Luna", "Dr.X", "Cpt Vega"]
    }
  },
  crimes: {
    empoisonnement: {
      description: "Une fiole de poison a été versée dans un(e) {objet}, scellant le sort de la victime dans le/la {lieu}.",
      lieuxCompatibles: ["atrium", "salon", "labo", "bibliothèque", "cellier"],
    },
    assassinat: {
      description: "Un corps sans vie a été retrouvé dans le/la {lieu}, frappé avec un(e) {objet}.",
      lieuxCompatibles: ["forum", "cellier", "pont de vaisseau", "bibliothèque", "salon"],
    },
    vol: {
      description: "Un objet précieux ({objet}) a disparu du/de la {lieu}. Qui l’a dérobé, et pourquoi ?",
      lieuxCompatibles: ["bibliothèque", "salon", "quartiers privés", "cellier"],
    },
    hacking: {
      description: "Un système vital a été piraté dans le/la {lieu} à l’aide d’un(e) {objet}.",
      lieuxCompatibles: ["labo", "pont de vaisseau"],
    },
    sabotage: {
      description: "Un sabotage a été découvert dans le/la {lieu}, traces d’un(e) {objet} suspect.",
      lieuxCompatibles: ["labo", "pont de vaisseau"],
    },
    poison: {
      description: "Le poison s’est glissé dans le/la {objet}, mortel et discret, dans le/la {lieu}.",
      lieuxCompatibles: ["salon", "bibliothèque", "cellier", "labo"],
    },
    classique: {
      description: "La scène de crime est maculée de sang dans le/la {lieu}, un(e) {objet} abandonné sur place.",
      lieuxCompatibles: ["bibliothèque", "cellier", "salon", "jardin"],
    },
  },
  mobiles: [
    "jalousie", "héritage", "secret", "vengeance", "amour déçu", "chantage", "vol d’identité", "rivalité professionnelle"
  ],
  rebondissements: [
    "Le corps a été déplacé après le crime.",
    "Un indice a été falsifié pour accuser à tort.",
    "Un complice agit dans l’ombre.",
    "Un témoin a disparu juste avant l’enquête.",
    "Une coupure de courant plonge tout le monde dans le noir.",
    "Un nouveau crime survient !"
  ],
  fauxIndices: [
    "Une boucle d’oreille inconnue est retrouvée sur les lieux.",
    "Un message codé est glissé sous la porte.",
    "Des traces de pas mènent vers la sortie, mais s’arrêtent brusquement.",
    "Une lettre de menace sur le bureau de la victime.",
    "Un objet appartenant à un innocent retrouvé sur la scène."
  ],
  objectifsSecrets: [
    "Protéger coûte que coûte un autre personnage.",
    "Découvrir le secret du maître des lieux.",
    "Faire accuser un innocent.",
    "Trouver un objet caché.",
    "Transmettre une information sans se faire repérer."
  ]
};

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function melange(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Génération dynamique du scénario
function genererScenarioDynamique(parametres) {
  // Récupération période et données associées
  const periode = parametres.periode || randomItem(Object.keys(scenarioDataModel.periodes));
  const periodeData = scenarioDataModel.periodes[periode];

  // Lieu compatible avec la période
  const lieu = randomItem(periodeData.lieux);
  // Objet compatible avec la période
  const objet = randomItem(periodeData.objets);

  // Crimes compatibles avec le lieu sélectionné
  const crimesPossibles = periodeData.crimes.filter(
    c => scenarioDataModel.crimes[c].lieuxCompatibles.includes(lieu)
  );
  const crimeType = randomItem(crimesPossibles);
  const crimeData = scenarioDataModel.crimes[crimeType];

  // Description du crime avec variables
  let crimeDescription = crimeData.description
    .replace("{lieu}", lieu)
    .replace("{objet}", objet);

  // Mobile du crime
  const mobile = randomItem(scenarioDataModel.mobiles);

  // Rebondissement aléatoire
  const rebondissement = Math.random() < 0.5 ? randomItem(scenarioDataModel.rebondissements) : "";

  // Faux indice éventuel
  const fauxIndice = Math.random() < 0.5 ? randomItem(scenarioDataModel.fauxIndices) : "";

  // Personnages
  const nbJoueurs = parametres.nombreJoueurs || 6;
  const nomsPersos = melange(periodeData.noms).slice(0, nbJoueurs);

  // Génération des relations et objectifs secrets
  let personnages = nomsPersos.map(nom => ({
    nom,
    alibi: randomItem([
      "Était dans une autre pièce.",
      "A discuté avec un témoin.",
      "N'a pas d'alibi clair.",
      "Affirme avoir dormi.",
      "Dit avoir quitté les lieux juste avant.",
      "A entendu un bruit suspect depuis le couloir."
    ]),
    objectifSecret: randomItem(scenarioDataModel.objectifsSecrets)
  }));

  // Générer des liens entre personnages (rivalité, alliance, secret partagé, etc.)
  personnages.forEach((perso, idx, arr) => {
    // Relations aléatoires simples
    const autre = arr[(idx + 1) % arr.length];
    perso.relation = randomItem([
      `Soupçonne ${autre.nom} d’un acte louche.`,
      `Est complice de ${autre.nom} sur un secret passé.`,
      `A une rivalité ancienne avec ${autre.nom}.`,
      `Tente de protéger ${autre.nom} coûte que coûte.`
    ]);
  });

  // Résumé final
  return {
    introduction: `Période : ${periode}. Un mystère plane sur le/la ${lieu}...`,
    crime: crimeDescription,
    mobile: `Mobile principal du crime : ${mobile}.`,
    rebondissement: rebondissement ? `Rebondissement : ${rebondissement}` : "",
    fauxIndice: fauxIndice ? `Faux indice : ${fauxIndice}` : "",
    personnages,
    lieu, objet, crimeType, periode
  };
}

// Intégration dans le DOM + affichage détaillé

document.addEventListener("DOMContentLoaded", () => {
  const scenarioData = JSON.parse(localStorage.getItem("parametresPartie"));
  const container = document.getElementById("scenarioContainer");

  if (scenarioData) {
    const scenario = genererScenarioDynamique(scenarioData);

    // Fiches personnages à afficher
    let fichesPersos = scenario.personnages.map(p => `
      <div class="fiche-personnage">
        <strong>${p.nom}</strong><br>
        <em>Alibi&nbsp;:</em> ${p.alibi}<br>
        <em>Objectif secret&nbsp;:</em> ${p.objectifSecret}<br>
        <em>Relation&nbsp;:</em> ${p.relation}
      </div>
    `).join("");

    container.innerHTML = `
      <h2>Introduction</h2>
      <p>${scenario.introduction}</p>

      <h2>Le crime</h2>
      <p>${scenario.crime}</p>

      <h2>Mobile</h2>
      <p>${scenario.mobile}</p>

      ${scenario.rebondissement ? `<h2>Rebondissement</h2><p>${scenario.rebondissement}</p>` : ""}
      ${scenario.fauxIndice ? `<h2>Faux indice</h2><p>${scenario.fauxIndice}</p>` : ""}

      <h2>Personnages & liens</h2>
      <div class="persos-wrapper">${fichesPersos}</div>

      <div class="boutons-actions">
        <a class="gold-btn" href="choix.personnage.html">Lancement</a>
        <a class="gold-btn" href="creer-partie.html">Retour</a>
      </div>
    `;
  } else {
    container.innerHTML = "Aucune donnée de scénario trouvée.";
  }
});
