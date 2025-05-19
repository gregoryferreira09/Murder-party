// scenarioEngine.js

// === Données structurées par époque ===
export const scenarioData = {
  victorien: {
    contexte: {
      introduction: [
        "Londres, 1892. Une ombre plane sur le manoir des Ashford...",
        "Un bal masqué cache une menace invisible...",
        "Un brouillard épais recouvre la ville alors que le crime frappe dans l’ombre..."
      ],
      contraintes: {
        technologie: "aucune technologie moderne",
        personnages: ["lord", "majordome", "servante", "invité", "médecin"],
      }
    },
    lieux: [
      { nom: "bibliothèque", accessible: true },
      { nom: "salon", accessible: true },
      { nom: "serre tropicale", accessible: true },
      { nom: "salle à manger", accessible: true },
    ],
    armes: [
      { nom: "poignard", type: "tranchant", compatibleLieux: ["bibliothèque", "salon"] },
      { nom: "poison d’aconit", type: "toxique", compatibleLieux: ["salle à manger", "serre tropicale"] },
      { nom: "couteau de cuisine", type: "tranchant", compatibleLieux: ["salle à manger"] }
    ],
    crimes: [
      { type: "meurtre", mode: "violence", armeRequise: "tranchant" },
      { type: "empoisonnement", mode: "discret", armeRequise: "toxique" }
    ]
  },

  // Exemple d'autre époque à ajouter
  futuriste: {
    contexte: {
      introduction: [
        "Dans une station orbitale en 2247, une panne de gravité cache un meurtre.",
        "Un diplomate interstellaire a été retrouvé mort dans sa cabine cryogénique..."
      ],
      contraintes: {
        technologie: "avancée",
        personnages: ["capitaine", "androïde", "biologiste", "hacker", "ambassadeur"],
      }
    },
    lieux: [
      { nom: "salle de cryostase", accessible: true },
      { nom: "pont de commande", accessible: true },
      { nom: "laboratoire biologique", accessible: true },
    ],
    armes: [
      { nom: "scalpel laser", type: "tranchant", compatibleLieux: ["laboratoire biologique"] },
      { nom: "virus informatique", type: "toxique", compatibleLieux: ["pont de commande"] }
    ],
    crimes: [
      { type: "sabotage", mode: "technologique", armeRequise: "toxique" },
      { type: "assassinat", mode: "chirurgical", armeRequise: "tranchant" }
    ]
  }
};

// === Fonction utilitaire de choix aléatoire ===
function choisir(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// === Générateur principal de scénario ===
export function genererScenario(periode = "victorien") {
  const data = scenarioData[periode];
  if (!data) throw new Error(`Période invalide : ${periode}`);

  // Étape 1 : Choix d’intro
  const intro = choisir(data.contexte.introduction);

  // Étape 2 : Choix du crime
  const crime = choisir(data.crimes);

  // Étape 3 : Arme compatible avec ce type de crime
  const armesPossibles = data.armes.filter(a => a.type === crime.armeRequise);
  const arme = choisir(armesPossibles);

  // Étape 4 : Lieu compatible avec cette arme
  const lieuxPossibles = data.lieux.filter(l => arme.compatibleLieux.includes(l.nom));
  const lieu = choisir(lieuxPossibles);

  // Étape 5 : Objectif de jeu
  const objectifs = [
    `Résolvez le ${crime.type} ayant eu lieu dans la ${lieu.nom} avec ${arme.nom}.`,
    `Démasquez le coupable avant qu’il ne frappe encore.`,
    `Trouvez pourquoi ${arme.nom} a été utilisé dans la ${lieu.nom}...`,
    `Interrogez les suspects présents dans la ${lieu.nom} au moment du ${crime.type}.`
  ];
  const objectif = choisir(objectifs);

  // Résultat final
  return {
    introduction: intro,
    periode,
    lieu: lieu.nom,
    arme: arme.nom,
    crime: crime.type,
    objectif
  };
}
