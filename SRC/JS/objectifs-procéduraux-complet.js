// Murder Party - Objectifs personnels procéduraux ultra-variés (clé en main)
// Toutes époques incluses, chaque liste est fournie, prêt à l'emploi

const dataObjectifs = {
  medieval: {
    roles: [
      "tavernier", "prévôt", "seigneur", "servante", "forgeron", "moine", "chevalier", "guérisseuse", "ménestrel", "dame"
    ],
    actions: [
      "Convaincre au moins {nb} joueurs que {cible} est {motifCourt}",
      "Faire en sorte que {cible} soit interrogé par au moins {nb} personnes",
      "Empêcher que {cible} soit accusé lors du vote final",
      "Protéger {cible} : aucun vote ne doit être émis contre lui/elle",
      "Faire accuser {cible} par au moins {nb} joueur(s)",
      "Faire en sorte que {cible} avoue un secret devant tous",
      "Inciter {cible} à s’allier avec toi publiquement",
      "Faire sortir {cible} de la salle pendant une phase",
      "Obtenir que {cible} prenne ta défense publiquement"
    ],
    motifsCourts: [
      "coupable", "dangereux", "menteur", "jaloux", "malhonnête", "sorcier", "voleur", "corrompu",
      "impie", "manipulateur", "lâche", "traître", "usurpateur"
    ],
    contentieux: [
      "{cible} t’a fait passer une nuit en geôle pour tapage lors de {evenement}",
      "Tu soupçonnes {cible} d’avoir volé {objet} dans {lieu}",
      "{cible} t’a humilié publiquement lors de {evenement}",
      "{cible} a refusé de payer sa dette envers toi",
      "{cible} a répandu une rumeur blessante sur toi",
      "{cible} a blessé un proche à toi lors de {evenement}",
      "{cible} a tenté de t’empoisonner, tu en es convaincu",
      "{cible} t’a accusé à tort lors de {evenement}",
      "{cible} a brisé un serment passé avec toi",
      "{cible} t’a volé {objet} dans {lieu}",
      "{cible} t’a menacé lors de {evenement}",
      "{cible} a refusé de t’aider alors que tu étais en danger",
      "{cible} t’a dénoncé au seigneur lors de {evenement}",
      "{cible} a tenté de séduire ton/ta bien-aimé(e)",
      "{cible} a détruit une de tes possessions précieuses",
      "{cible} a tenté de faire croire que tu étais complice d’un crime"
    ],
    objets: [
      "ta bourse", "une épée", "un grimoire", "un médaillon", "un secret de famille", "des vivres", "une bague", "une lettre", "un talisman", "un manteau"
    ],
    lieux: [
      "la taverne", "le donjon", "le marché", "la cuisine", "le jardin", "le puits", "le cellier", "la chapelle", "la cour", "la forge"
    ],
    evenements: [
      "la fête du village", "la dernière messe", "le tournoi annuel", "l’incendie du moulin", "le bal du printemps", "la chasse du seigneur", "le souper des notables", "le mariage du chevalier", "le pèlerinage", "la foire d’automne"
    ],
    exclusionPairs: [
      ["prévôt", "prévôt"], ["seigneur", "seigneur"]
    ]
  },
  renaissance: {
    roles: [
      "marchand", "courtisane", "duchesse", "inventeur", "peintre", "médium", "musicien", "banquier", "régisseur", "valet"
    ],
    actions: [
      "Convaincre au moins {nb} joueurs que {cible} est {motifCourt}",
      "Faire accuser {cible} par au moins {nb} joueur(s)",
      "Faire en sorte que {cible} soit interrogé par au moins {nb} personnes",
      "Protéger {cible} lors du vote final",
      "Obtenir un aveu public de {cible} sur une faute passée",
      "Inciter {cible} à t’innocenter devant le groupe",
      "Obtenir que {cible} te donne publiquement raison",
      "Faire sortir {cible} de la salle pendant une phase"
    ],
    motifsCourts: [
      "jaloux(se)", "corrompu(e)", "dangereux(se)", "menteur(se)", "manipulateur(trice)", "sorcier(ère)", "traître(sse)", "rancunier(ère)", "envieux(se)", "fourbe"
    ],
    contentieux: [
      "{cible} a volé ton idée pour une œuvre d’art",
      "{cible} a fait courir une rumeur sur ta famille",
      "{cible} a saboté un de tes projets",
      "{cible} t’a humilié lors de {evenement}",
      "{cible} a refusé de te prêter de l’argent",
      "{cible} a tenté de séduire ton/ta bien-aimé(e)",
      "{cible} t’a dénoncé à la cour du duc",
      "{cible} t’a trompé lors de {evenement}",
      "{cible} a révélé un de tes secrets",
      "{cible} t’a évincé d’une affaire lucrative",
      "{cible} a dérobé {objet} dans {lieu}",
      "{cible} a ridiculisé ton travail devant {personnageSecondaire}"
    ],
    objets: [
      "un carnet de croquis", "une bourse de ducats", "un costume de bal", "un tableau", "une sculpture", "une lettre secrète", "un bijou", "un plan d’invention"
    ],
    lieux: [
      "la galerie", "l’atelier", "le bal", "le marché", "le port", "le salon de la duchesse", "le jardin", "la salle des fêtes"
    ],
    evenements: [
      "la fête du printemps", "le vernissage du peintre", "la présentation à la cour", "le bal masqué", "le carnaval", "le marché aux fleurs", "le banquet de la duchesse", "le duel d’escrime", "la foire aux inventions", "la messe du dimanche"
    ],
    exclusionPairs: [
      ["duchesse", "duchesse"]
    ]
  },
  victorien: {
    roles: [
      "majordome", "comte", "lady", "pianiste", "jardinier", "cuisinière", "médecin", "valet", "gouvernante", "prêtre"
    ],
    actions: [
      "Convaincre au moins {nb} joueurs que {cible} est {motifCourt}",
      "Faire accuser {cible} par au moins {nb} joueur(s)",
      "Protéger {cible} lors du vote final",
      "Faire en sorte que {cible} soit interrogé par au moins {nb} personnes",
      "Obtenir un aveu public de {cible} sur une faute passée",
      "Obtenir que {cible} prenne ta défense devant tous",
      "Inciter {cible} à t’innocenter devant le groupe",
      "Faire sortir {cible} de la salle pendant une phase"
    ],
    motifsCourts: [
      "suspect", "faux-jeton", "manipulateur(trice)", "dangereux(se)", "menteur(se)", "jaloux(se)", "coupable", "hypocrite", "calculateur(trice)", "orgueilleux(se)"
    ],
    contentieux: [
      "{cible} t’a menacé de révéler ton secret à tout le manoir",
      "{cible} a volé {objet} te revenant de droit",
      "{cible} a saboté une de tes relations sociales",
      "{cible} t’a accusé à tort lors de {evenement}",
      "{cible} a terni ta réputation auprès du comte",
      "{cible} a détruit un objet précieux dans {lieu}",
      "{cible} t’a humilié lors de {evenement}",
      "{cible} t’a dénoncé auprès de la lady",
      "{cible} a tenté de te faire renvoyer",
      "{cible} a révélé une rumeur à ton sujet",
      "{cible} a surpris ta liaison secrète",
      "{cible} t’a privé d’un héritage"
    ],
    objets: [
      "un bijou", "un livre ancien", "une clé", "un carnet secret", "une lettre d’amour", "un vase", "un portrait", "un piano miniature"
    ],
    lieux: [
      "le salon", "la serre", "la bibliothèque", "la cuisine", "la chambre du comte", "le jardin d’hiver", "la cave", "le vestibule", "le grenier"
    ],
    evenements: [
      "le bal de charité", "le dîner du dimanche", "la garden-party", "la messe du village", "la tempête d’hiver", "l’anniversaire du comte", "la lecture publique", "la chasse à courre", "le concours de piano"
    ],
    exclusionPairs: [
      ["majordome", "majordome"]
    ]
  },
  western: {
    roles: [
      "barman", "shérif", "tenancière", "forgeron", "cowboy", "danseuse", "bandit", "médecin", "prêcheur", "fermier"
    ],
    actions: [
      "Convaincre au moins {nb} joueurs que {cible} est {motifCourt}",
      "Faire accuser {cible} par au moins {nb} joueur(s)",
      "Protéger {cible} lors du vote final",
      "Faire en sorte que {cible} soit interrogé par au moins {nb} personnes",
      "Obtenir un aveu public de {cible} sur une faute passée",
      "Obtenir que {cible} prenne ta défense devant tous",
      "Inciter {cible} à t’innocenter devant le groupe",
      "Faire sortir {cible} de la salle pendant une phase"
    ],
    motifsCourts: [
      "coupable", "dangereux", "menteur", "tricheur", "hors-la-loi", "jaloux", "voleur", "corrompu", "fourbe", "violent"
    ],
    contentieux: [
      "{cible} t’a jeté en prison pour ivresse après {evenement}",
      "{cible} a triché contre toi lors de {evenement}",
      "{cible} t’a humilié publiquement lors de {evenement}",
      "{cible} a volé {objet} dans {lieu}",
      "{cible} a blessé ton cheval lors de {evenement}",
      "{cible} t’a accusé à tort de vol lors de {evenement}",
      "{cible} a menacé ta famille",
      "{cible} a refusé de payer sa dette après {evenement}",
      "{cible} t’a dénoncé au shérif",
      "{cible} a tenté de saboter ton ranch",
      "{cible} a répandu une rumeur à ton sujet"
    ],
    objets: [
      "ta montre à gousset", "un colt", "une lettre", "de l’or", "une selle", "une photo", "un chapeau", "une bouteille de whisky"
    ],
    lieux: [
      "le saloon", "l’écurie", "la rue principale", "l’église", "la banque", "le ranch", "le train", "le bureau du shérif", "le cimetière"
    ],
    evenements: [
      "la partie de poker", "le bal du samedi soir", "la bagarre générale", "la fête de la moisson", "l’attaque de la diligence", "le rodéo", "le sermon du dimanche", "la vente aux enchères", "le duel au soleil"
    ],
    exclusionPairs: [
      ["shérif", "shérif"]
    ]
  },
  contemporain: {
    roles: [
      "barman", "PDG", "banquier", "journaliste", "enseignant", "médecin", "chauffeur", "startupeuse", "avocat", "influenceur"
    ],
    actions: [
      "Convaincre au moins {nb} joueurs que {cible} est {motifCourt}",
      "Faire accuser {cible} par au moins {nb} joueur(s)",
      "Protéger {cible} lors du vote final",
      "Faire en sorte que {cible} soit interrogé par au moins {nb} personnes",
      "Obtenir un aveu public de {cible} sur une faute passée",
      "Obtenir que {cible} prenne ta défense devant tous",
      "Inciter {cible} à t’innocenter devant le groupe",
      "Faire sortir {cible} de la salle pendant une phase"
    ],
    motifsCourts: [
      "coupable", "manipulateur(trice)", "malhonnête", "dangereux(se)", "menteur(se)", "jaloux(se)", "corrompu(e)", "toxique", "hypocrite", "opportuniste"
    ],
    contentieux: [
      "{cible} t’a humilié en réunion devant toute l’équipe",
      "{cible} a volé ton idée de projet",
      "{cible} a répandu une rumeur sur ta vie privée",
      "{cible} a refusé de t’aider lors d’un moment crucial",
      "{cible} t’a mis des bâtons dans les roues pour une promotion",
      "{cible} a fait virer un(e) de tes ami(e)s",
      "{cible} t’a accusé à tort lors de {evenement}",
      "{cible} a volé {objet} dans {lieu}",
      "{cible} t’a dénoncé à la direction",
      "{cible} t’a ridiculisé sur les réseaux sociaux",
      "{cible} a saboté un de tes projets",
      "{cible} a révélé un de tes secrets à la presse"
    ],
    objets: [
      "un ordinateur portable", "un smartphone", "un document confidentiel", "une clé USB", "un dossier médical", "un badge d’accès", "une carte bancaire", "des photos privées"
    ],
    lieux: [
      "la salle de réunion", "la cafétéria", "le bureau", "le parking", "l’ascenseur", "le rooftop", "la salle de sport", "le hall d’entrée"
    ],
    evenements: [
      "la soirée d’entreprise", "le séminaire annuel", "la réunion de crise", "le pot de départ", "le brainstorming", "le lancement du produit", "l’audit surprise", "la fête de Noël", "la grève", "le team building"
    ],
    exclusionPairs: [
      ["PDG", "PDG"]
    ]
  },
  futuriste: {
    roles: [
      "barman", "commandant", "roboticienne", "androïde", "technicien", "IA", "biologiste", "directeur", "cyberdétective", "pilote"
    ],
    actions: [
      "Convaincre au moins {nb} joueurs que {cible} est {motifCourt}",
      "Faire accuser {cible} par au moins {nb} joueur(s)",
      "Protéger {cible} lors du vote final",
      "Faire en sorte que {cible} soit interrogé par au moins {nb} personnes",
      "Obtenir un aveu public de {cible} sur une faute passée",
      "Obtenir que {cible} prenne ta défense devant tous",
      "Inciter {cible} à t’innocenter devant le groupe",
      "Désactiver temporairement {cible} (faire sortir de la salle une phase)"
    ],
    motifsCourts: [
      "corrompu(e)", "dangereux(se)", "pirate", "défectueux(se)", "menteur(se)", "complice", "espion(ne)", "instable", "rebelle", "sabotage"
    ],
    contentieux: [
      "{cible} t’a mis en isolement sur la station",
      "{cible} a piraté tes accès biométriques",
      "{cible} t’a dénoncé à la direction",
      "{cible} a tenté de saboter ton module",
      "{cible} a effacé tes souvenirs d’une expérience",
      "{cible} a terni ta réputation auprès de l’IA centrale",
      "{cible} t’a accusé à tort lors de {evenement}",
      "{cible} a volé {objet} dans {lieu}",
      "{cible} a modifié tes paramètres sans ton consentement",
      "{cible} t’a espionné lors de {evenement}",
      "{cible} t’a exclu d’une mission importante"
    ],
    objets: [
      "un implant cybernétique", "un module mémoire", "une puce d’accès", "un exosquelette", "un rapport de mission", "une clé quantique", "un nano-outil", "une capsule énergétique"
    ],
    lieux: [
      "le sas d’air", "le laboratoire", "le poste de pilotage", "la salle de maintenance", "le jardin hydroponique", "le réfectoire", "le dôme de commandement", "la cabine de repos"
    ],
    evenements: [
      "le banquet orbital", "la panne générale", "l’attaque pirate", "la réunion du conseil", "la sortie extravéhiculaire", "l’expérience ratée", "la fête de la station", "la simulation d’urgence", "le téléportage expérimental"
    ],
    exclusionPairs: [
      ["commandant", "commandant"]
    ]
  },
  historique: {
    roles: [
      "philosophe", "roi", "cardinal", "inventeur", "espionne", "duc", "écrivain", "général", "ambassadrice", "astronome"
    ],
    actions: [
      "Convaincre au moins {nb} joueurs que {cible} est {motifCourt}",
      "Faire accuser {cible} par au moins {nb} joueur(s)",
      "Protéger {cible} lors du vote final",
      "Faire en sorte que {cible} soit interrogé par au moins {nb} personnes",
      "Obtenir un aveu public de {cible} sur une faute passée",
      "Obtenir que {cible} prenne ta défense devant tous",
      "Inciter {cible} à t’innocenter devant le groupe",
      "Faire sortir {cible} de la salle pendant une phase"
    ],
    motifsCourts: [
      "dangereux(se)", "usurpateur(trice)", "complice", "manipulateur(trice)", "corrompu(e)", "traître(sse)", "fanatique", "coupable", "ambitieux(se)", "hypocrite"
    ],
    contentieux: [
      "{cible} a censuré ton dernier ouvrage",
      "{cible} t’a exclu de la cour royale",
      "{cible} a révélé ton secret à toute la ville",
      "{cible} a volé ton invention",
      "{cible} a tenté de ruiner ta réputation",
      "{cible} t’a humilié publiquement lors de {evenement}",
      "{cible} t’a dénoncé à l’Inquisition",
      "{cible} a manipulé une décision du roi contre toi",
      "{cible} a volé {objet} dans {lieu}",
      "{cible} t’a accusé à tort lors de {evenement}",
      "{cible} a tenté de séduire ton allié(e)"
    ],
    objets: [
      "un parchemin secret", "une carte du ciel", "une lettre royale", "un médaillon", "un traité philosophique", "un livre interdit", "un instrument scientifique", "des plans d’invention"
    ],
    lieux: [
      "la bibliothèque", "le cabinet du roi", "le jardin royal", "la salle du trône", "la chapelle", "le salon du cardinal", "l’observatoire", "les cuisines", "le bal"
    ],
    evenements: [
      "la réception diplomatique", "le bal masqué", "la chasse royale", "la cérémonie de couronnement", "le colloque scientifique", "la messe solennelle", "le banquet du duc", "l’ambassade", "l’éclipse", "l’audience publique"
    ],
    exclusionPairs: [
      ["roi", "roi"]
    ]
  }
};

// Utilitaire pour choisir un élément aléatoire
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Pour éviter incohérences : pas de soi-même, pas deux fois la même cible dans une même partie, pas de paires absurdes
function choisirCible(joueur, joueursPartie, exclusions = []) {
  const possibles = joueursPartie.filter(j =>
    j.uuid !== joueur.uuid &&
    !exclusions.some(([a, b]) => (a === joueur.role && b === j.role))
  );
  return possibles.length ? randomItem(possibles) : null;
}

// Génère un objectif procédural pour un joueur
function genererObjectifPerso(joueur, joueursPartie, epoque) {
  const data = dataObjectifs[epoque];
  if (!data) throw new Error("Époque non supportée : " + epoque);
  // Tirage cible
  const cible = choisirCible(joueur, joueursPartie, data.exclusionPairs || []);
  if (!cible) return null;
  
  // Tirage action
  const actionTemplate = randomItem(data.actions);
  const nb = Math.random() < 0.4 ? 2 : 3; // pour varier le nombre de personnes, pondération ajustable
  const motifCourt = randomItem(data.motifsCourts);

  // Tirage contentieux
  let motif = randomItem(data.contentieux);
  // Remplissage éventuel des variables du motif
  if (motif.includes("{objet}")) motif = motif.replace("{objet}", randomItem(data.objets));
  if (motif.includes("{lieu}")) motif = motif.replace("{lieu}", randomItem(data.lieux));
  if (motif.includes("{evenement}")) motif = motif.replace("{evenement}", randomItem(data.evenements));
  if (motif.includes("{personnageSecondaire}")) {
    // Prend un autre nom au hasard, qui n'est ni le joueur ni la cible
    const secondaires = joueursPartie.filter(j => j.uuid !== joueur.uuid && j.uuid !== cible.uuid);
    motif = motif.replace("{personnageSecondaire}", secondaires.length ? randomItem(secondaires).nom || randomItem(secondaires).role : "un autre personnage");
  }

  // Remplissage de l'action
  let action = actionTemplate.replace(/{cible}/g, cible.nom || cible.role)
                             .replace(/{motifCourt}/g, motifCourt)
                             .replace(/{nb}/g, nb);

  // Remplissage du motif
  motif = motif.replace(/{cible}/g, cible.nom || cible.role);

  return {
    cible: cible.nom || cible.role,
    cibleRole: cible.role,
    action,
    motif,
    points: action.includes(`${nb}`) ? nb : 2 // simple pondération
  };
}

// Utilisation exemple :
/*
const joueur = { uuid: "1", role: "barman", nom: "Billy Boy" };
const joueursPartie = [
  { uuid: "1", role: "barman", nom: "Billy Boy" },
  { uuid: "2", role: "shérif", nom: "Carter" },
  { uuid: "3", role: "tenancière", nom: "Molly" },
  { uuid: "4", role: "forgeron", nom: "Sam" }
];
const obj = genererObjectifPerso(joueur, joueursPartie, "western");
console.log(obj);
*/

if (typeof module !== 'undefined') module.exports = { dataObjectifs, genererObjectifPerso };
else window.dataObjectifs = dataObjectifs, window.genererObjectifPerso = genererObjectifPerso;
