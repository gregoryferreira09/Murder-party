// --- Données de jeu ---
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

// --- Variables d'état ---
let connexionsRestantes = 5;
let actionType = null; // "vote" ou "connexion"
let joueurSelectionAction = null;

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
  }
  document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
}

// --- Initialisation ---
document.addEventListener('DOMContentLoaded', function() {
  switchTab('fiche');
  updateChrono();
});

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
    const div = document.createElement('div');
    div.className = 'joueur-avatar';
    div.innerHTML = `<img src="${j.image}" alt="${j.nom}" class="avatar"><br>${j.nom}`;
    div.tabIndex = 0; // accessibilité clavier
    div.onclick = () => selectJoueur(div, j);
    div.onkeydown = e => { if (e.key === "Enter" || e.key === " ") selectJoueur(div, j); };
    joueursDiv.appendChild(div);
  });

  document.getElementById('action-btn').disabled = true;
  document.getElementById('action-btn').onclick = function() {
    if (!joueurSelectionAction) return;
    if (actionType === "vote") {
      document.getElementById('actionResult').innerHTML = `<p>🕯️ Votre vote pour <strong>${joueurSelectionAction.nom}</strong> a été scellé...</p>`;
      showToast("Vote enregistré !");
      const effet = document.getElementById("effetElimination");
      effet.classList.add("visible");
      setTimeout(() => effet.classList.remove("visible"), 2000);
    } else {
      validerConnexion();
    }
  }
}

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
  // Affichage d'indice
  const indice = joueurSelectionAction.indices[Math.floor(Math.random() * joueurSelectionAction.indices.length)];
  const estFiable = joueurSelectionAction.fiabilite === "fiable";
  const fiabiliteTexte = estFiable ? "Haute" : "Douteuse";
  const fiabiliteClasse = estFiable ? "fiable" : "suspect";
  const indiceDiv = document.createElement('div');
  indiceDiv.className = 'indice';
  indiceDiv.innerHTML = `<p>🔍 "${indice}"</p><p><span class="fiabilite ${fiabiliteClasse}">Fiabilité : ${fiabiliteTexte}</span></p>`;
  document.getElementById('listeIndices').appendChild(indiceDiv);
  if (Math.random() < 0.25) {
    showToast("Souvenir mystérieux débloqué !");
    const bonus = document.createElement('div');
    bonus.className = 'indice';
    bonus.innerHTML = `<p>🎁 Un indice bonus vous traverse l'esprit : "Un allié secret pourrait être proche..."</p>`;
    document.getElementById('listeIndices').appendChild(bonus);
  }
}
function refuserConnexion() {
  document.getElementById('modal-connexion').classList.remove('show');
  showToast("Connexion refusée.");
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

// --- Accessibilité/ergonomie supplémentaire possible dans ton CSS ---
// .joueur-avatar.selected { outline: 3px solid #e0c185; box-shadow: 0 0 12px #e0c185; }
// .avatar { width:80px; border-radius:50%; border:3px solid #e9c78c; }
// .modal        { ... } .modal-content { ... } .modal-actions { ... }
// .toast        { ... } .toast.show { ... }
