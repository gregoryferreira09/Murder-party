// --- Données de jeu par défaut (pour la liste des autres joueurs) ---
const joueurs = [
  { 
    nom: 'Inspecteur Alaric', 
    image: 'avatar-1.png',
    histoire: "Ancien détective de Scotland Yard, rongé par un passé trouble...",
    pouvoir: "Interrogez deux joueurs à chaque tour...",
    indices: [
      "Tu es prêt à résoudre le mystère.",
      "Ta réputation te précède dans le domaine des enquêtes."
    ], 
    fiabilite: "fiable" 
  },
  { 
    nom: 'Violette', 
    image: 'avatar-1.png',
    histoire: "Une héritière mystérieuse, toujours vêtue de violet.",
    pouvoir: "Peut détourner les soupçons une fois par partie.",
    indices: [
      "A été vue avec la victime peu avant le crime.",
      "Semblait nerveuse lors du dîner."
    ], 
    fiabilite: "fiable" 
  },
  { 
    nom: 'Brume', 
    image: 'avatar-1.png',
    histoire: "Personne ne sait d'où il sort... mais il sait tout sur tout le monde.",
    pouvoir: "Peut se cacher un tour.",
    indices: [
      "Possède une clé suspecte.",
      "A disparu 10 minutes pendant la soirée."
    ], 
    fiabilite: "suspect" 
  }
];

// --- Variables d'état ---
let persoActif = null;
let connexionsRestantes = 5;
let actionType = null; // "vote" ou "connexion"
let joueurSelectionAction = null;
let indicesGagnes = [];

// --- Initialisation ---
document.addEventListener('DOMContentLoaded', function() {
  // Récupérer le personnage choisi
  const persoStocke = localStorage.getItem("persoChoisi");
  if (persoStocke) {
    persoActif = JSON.parse(persoStocke);
  } else {
    // Par défaut, Inspecteur Alaric
    persoActif = joueurs[0];
  }

  // Remplir dynamiquement l'interface
  document.getElementById("nomPersonnage").textContent = persoActif.nom;
  document.getElementById("avatarPersonnage").src = "../../Public/images/" + persoActif.image;
  document.getElementById("avatarPersonnage").alt = "Avatar de " + persoActif.nom;
  if (persoActif.histoire)
    document.getElementById("histoirePerso").innerHTML = "<strong>Histoire :</strong> " + persoActif.histoire;
  else
    document.getElementById("histoirePerso").innerHTML = "<strong>Histoire :</strong> ...";
  if (persoActif.pouvoir)
    document.getElementById("pouvoirPerso").innerHTML = "<strong>Pouvoir :</strong> " + persoActif.pouvoir;
  else
    document.getElementById("pouvoirPerso").innerHTML = "<strong>Pouvoir :</strong> ...";

  switchTab('fiche');
  updateChrono();
});

// --- Gestion des onglets ---
function switchTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(c => {
    c.style.display = 'none'; c.classList.remove('active');
  });
  document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
  if(tabName === 'vote' || tabName === 'connexion') {
    document.getElementById('action').style.display = 'block';
    document.getElementById('action').classList.add('active');
    setupActionTab(tabName);
  } else {
    document.getElementById(tabName).style.display = 'block';
    document.getElementById(tabName).classList.add('active');
    if(tabName === 'indices') updateOngletIndices();
  }
  document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
}

// --- Onglets Vote / Connexion ---
function setupActionTab(type) {
  actionType = type;
  joueurSelectionAction = null;
  document.getElementById('actionResult').innerHTML = "";

  // Titre et bouton
  document.getElementById('action-titre').textContent = (type === "vote") ? "Votez pour un suspect :" : "Connexion entre joueurs :";
  document.getElementById('action-btn').textContent = (type === "vote") ? "Valider le vote" : "Valider la connexion";

  // Affichage des joueurs
  const joueursDiv = document.getElementById('action-joueurs');
  joueursDiv.innerHTML = '';
  joueurs.forEach(j => {
    // Empêcher de voter pour soi-même : utiliser le nom du personnage actif
    if (type === "vote" && j.nom === persoActif.nom) return;
    const div = document.createElement('div');
    div.className = 'joueur-avatar';
    div.innerHTML = `<img src="../../Public/images/${j.image}" alt="${j.nom}" class="avatar" onerror="this.src='https://via.placeholder.com/80?text=Avatar';"><br>${j.nom}`;
    div.tabIndex = 0; // accessibilité clavier
    div.onclick = () => selectJoueur(div, j);
    div.onkeydown = e => { if (e.key === "Enter" || e.key === " ") selectJoueur(div, j); };
    joueursDiv.appendChild(div);
  });

  // Désactiver bouton si aucune sélection ou plus de connexions
  document.getElementById('action-btn').disabled = (type === "connexion" && connexionsRestantes <= 0);

  document.getElementById('action-btn').onclick = function() {
    if (!joueurSelectionAction) return;
    if (actionType === "vote") {
      // Ajoute le cadre rouge sur le joueur sélectionné
      document.querySelectorAll('.joueur-avatar').forEach(d => d.classList.remove('valide'));
      const selectedDiv = document.querySelector('.joueur-avatar.selected');
      if (selectedDiv) {
        selectedDiv.classList.add('valide');
      }

      document.getElementById('actionResult').innerHTML = `<p>🕯️ Votre vote pour <strong>${joueurSelectionAction.nom}</strong> a été scellé...</p>`;
      showToast("Vote enregistré !");
      const effet = document.getElementById("effetElimination");
      effet.classList.add("visible");
      try { document.getElementById('sound-vote').play(); } catch(e){}
      setTimeout(() => effet.classList.remove("visible"), 2000);
    } else {
      validerConnexion();
    }
  }
}

const playerId = localStorage.getItem("pseudo") || "Anonyme";

// --- Sélection d'un joueur ---
function selectJoueur(div, joueur) {
  document.querySelectorAll('.joueur-avatar').forEach(d => d.classList.remove('selected'));
  div.classList.add('selected');
  joueurSelectionAction = joueur;
  document.getElementById('action-btn').disabled = false;
}

// --- Modale Connexion ---
function validerConnexion() {
  if (!joueurSelectionAction || connexionsRestantes <= 0) return showToast("Connexion impossible.");
  showConnexionModal(joueurSelectionAction.nom);
}
function showConnexionModal(nomCible) {
  document.getElementById('modal-connexion-text').textContent = `Voulez-vous vous connecter avec ${nomCible} ?`;
  document.getElementById('modal-connexion').classList.add('show');
}
function accepterConnexion() {
  document.getElementById('modal-connexion').classList.remove('show');
  connexionsRestantes--;
  document.getElementById("connexionRestantes").textContent = connexionsRestantes;
  showToast("Connexion acceptée !");
  try { document.getElementById('sound-connexion').play(); } catch(e){}
  // Affichage d'indice
  const indice = joueurSelectionAction.indices[Math.floor(Math.random() * joueurSelectionAction.indices.length)];
  indicesGagnes.push({
    indice,
    fiabilite: joueurSelectionAction.fiabilite
  });
  afficherIndice(indice, joueurSelectionAction.fiabilite);
  if (Math.random() < 0.25) {
    showToast("Souvenir mystérieux débloqué !");
    const bonus = "Un allié secret pourrait être proche...";
    indicesGagnes.push({indice: bonus, fiabilite: "fiable"});
    afficherIndice(bonus, "fiable");
  }
  // Si on est sur l'onglet indices, on met à jour
  updateOngletIndices();
  // Désactiver le bouton si plus de connexions
  if (connexionsRestantes <= 0 && actionType === "connexion") {
    document.getElementById('action-btn').disabled = true;
  }
}
function refuserConnexion() {
  document.getElementById('modal-connexion').classList.remove('show');
  showToast("Connexion refusée.");
}

// --- Affichage indice dynamique ---
function afficherIndice(texte, fiabilite) {
  const estFiable = fiabilite === "fiable";
  const fiabiliteTexte = estFiable ? "Haute" : "Douteuse";
  const fiabiliteClasse = estFiable ? "fiable" : "suspect";
  const indiceDiv = document.createElement('div');
  indiceDiv.className = 'indice';
  indiceDiv.innerHTML = `<p>🔍 "${texte}"</p><p><span class="fiabilite ${fiabiliteClasse}">Fiabilité : ${fiabiliteTexte}</span></p>`;
  document.getElementById('listeIndices').appendChild(indiceDiv);
}

// --- Synchronisation onglet indices ---
function updateOngletIndices() {
  const liste = document.getElementById('listeIndices');
  liste.innerHTML = '';
  indicesGagnes.forEach(({indice, fiabilite}) => {
    afficherIndice(indice, fiabilite);
  });
}

// --- Chronomètre ---
let secondes = 1800;
function updateChrono() {
  const minutes = Math.floor(secondes / 60);
  const sec = secondes % 60;
  document.getElementById("tempsRestant").textContent = `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
  if (secondes > 0) secondes--;
  setTimeout(updateChrono, 1000);
}

// --- Toast notification améliorée ---
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = "toast show";
  setTimeout(() => { toast.className = "toast"; }, 2500);
}

// --- Accessibilité : fermer modale avec Échap ou clic hors contenu ---
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    document.getElementById('modal-connexion').classList.remove('show');
  }
});
document.getElementById('modal-connexion').addEventListener('click', function(e) {
  if (e.target === this) this.classList.remove('show');
});
