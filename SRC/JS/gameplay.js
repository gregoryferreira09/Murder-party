// --- Données de jeu (adaptées pour la logique JS uniquement, plus de génération avatars) ---
const joueurs = [
  { nom: 'Inspecteur Alaric', image: 'image-personnage.jpg', indices: [
    "Tu es prêt à résoudre le mystère.",
    "Ta réputation te précède dans le domaine des enquêtes."
  ], fiabilite: "fiable" }, // Ton personnage
  { nom: 'Violette', image: 'violette.jpg', indices: [
    "A été vue avec la victime peu avant le crime.",
    "Semblait nerveuse lors du dîner."
  ], fiabilite: "fiable" },
  { nom: 'Brume', image: 'brume.jpg', indices: [
    "Possède une clé suspecte.",
    "A disparu 10 minutes pendant la soirée."
  ], fiabilite: "suspect" }
];

let connexionsRestantes = 5;
let actionType = null; // "vote" ou "connexion"
let joueurSelectionAction = null;
let indicesGagnes = [];

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
  window.scrollTo({ top: 0, behavior: "auto" });
}

// --- Initialisation ---
document.addEventListener('DOMContentLoaded', function() {
  setupAvatarClicks(); // Attach handlers to static avatars
  switchTab('fiche');
  updateChrono();
});

// --- Onglets Vote / Connexion : gestion de l'état du bouton et du titre ---
function setupActionTab(type) {
  actionType = type;
  joueurSelectionAction = null;
  document.getElementById('actionResult').innerHTML = "";

  document.getElementById('action-titre').textContent = (type === "vote") ? "Votez pour un suspect :" : "Connexion entre joueurs :";
  document.getElementById('action-btn').textContent = (type === "vote") ? "Valider le vote" : "Valider la connexion";
  document.getElementById('action-btn').disabled = true;

  // Désélectionne tous les avatars
  document.querySelectorAll('.joueur-avatar').forEach(d => d.classList.remove('selected'));
}

// --- Sélection d'un joueur (statique) ---
function setupAvatarClicks() {
  document.querySelectorAll('.joueur-avatar').forEach(div => {
    div.onclick = () => {
      document.querySelectorAll('.joueur-avatar').forEach(d => d.classList.remove('selected'));
      div.classList.add('selected');
      joueurSelectionAction = {
        nom: div.getAttribute('data-nom'),
        fiabilite: div.getAttribute('data-fiabilite'),
        indices: div.getAttribute('data-indices').split('|')
      };
      document.getElementById('action-btn').disabled = false;
    };
    // Accessibilité clavier
    div.tabIndex = 0;
    div.onkeydown = e => { if (e.key === "Enter" || e.key === " ") div.click(); };
  });
}

// --- Bouton Vote/Connexion ---
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('action-btn').onclick = function() {
    if (!joueurSelectionAction) return;
    if (actionType === "vote") {
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
});

// --- Modale Connexion ---
function validerConnexion() {
  if (!joueurSelectionAction || connexionsRestantes <= 0) return showToast("Connexion impossible.");
  showConnexionModal(joueurSelectionAction.nom);
}
function showConnexionModal(nomCible) {
  document.getElementById('modal-connexion-text').textContent = `Voulez-vous vous connecter avec ${nomCible} ?`;
  document.getElementById('modal-connexion').classList.add('show');
  document.body.classList.add('modal-open');
}
function accepterConnexion() {
  document.getElementById('modal-connexion').classList.remove('show');
  document.body.classList.remove('modal-open');
  connexionsRestantes--;
  document.getElementById("connexionRestantes").textContent = connexionsRestantes;
  showToast("Connexion acceptée !");
  try { document.getElementById('sound-connexion').play(); } catch(e){}
  // Affichage d'indice
  const indices = joueurSelectionAction.indices;
  const indice = indices[Math.floor(Math.random() * indices.length)];
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
  document.body.classList.remove('modal-open');
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
    document.body.classList.remove('modal-open');
  }
});
document.getElementById('modal-connexion').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('show');
    document.body.classList.remove('modal-open');
  }
});
