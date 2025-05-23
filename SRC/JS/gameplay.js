// SRC/JS/gameplay.js

// --- Configuration Firebase ---
const firebaseConfig = {
  apiKey: "AIzaSyD-BxBu-4ElCqbHrZPM-4-6yf1-yWnL1bI",
  authDomain: "murder-party-ba8d1.firebaseapp.com",
  databaseURL: "https://murder-party-ba8d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "murder-party-ba8d1",
  storageBucket: "murder-party-ba8d1.appspot.com",
  messagingSenderId: "20295055805",
  appId: "1:20295055805:web:0963719c3f23ab7752fad4"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// --- Infos joueur ---
const salonCode = localStorage.getItem("salonCode");
const uuid = localStorage.getItem("uuid");
let pseudo = localStorage.getItem("pseudo") || "Anonyme";
let personnageSelectionne = localStorage.getItem("personnageSelectionne");

// --- Variables d'état ---
let joueurs = [];
let persoActif = null;
let connexionsRestantes = 5;
let actionType = null; // "vote" ou "connexion"
let joueurSelectionAction = null;
let indicesGagnes = [];

function toast(msg, type = "info") {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = "toast show";
  if (type === "error") toast.style.background = "#e86d6d";
  else if (type === "success") toast.style.background = "#6be985";
  else toast.style.background = "#e0c185";
  setTimeout(() => { toast.className = "toast"; }, 2500);
}

// --- Récupère infos joueur sélectionné et liste joueurs depuis la base ---
async function chargerJoueurs() {
  if (!salonCode) return;
  const joueursSnap = await db.ref('parties/' + salonCode + '/joueurs').get();
  joueurs = [];
  joueursSnap.forEach(snap => {
    joueurs.push(snap.val());
  });
}

// --- Récupère fiche personnage ---
async function chargerPersoActif() {
  if (!personnageSelectionne) return;
  const persosSnap = await db.ref('parties/' + salonCode + '/personnages').get();
  persosSnap.forEach(snap => {
    if (snap.key === personnageSelectionne) {
      persoActif = { ...snap.val(), id: snap.key };
    }
  });
  majFichePerso();
}

function majFichePerso() {
  if (!persoActif) return;
  document.getElementById("nomPersonnage").textContent = persoActif.nom;
  document.getElementById("avatarPersonnage").src = "../../Public/images/" + (persoActif.image || "avatar-1.png");
  document.getElementById("histoirePerso").innerHTML = "<strong>Histoire :</strong> " + (persoActif.histoire || "");
  document.getElementById("pouvoirPerso").innerHTML = "<strong>Pouvoir :</strong> " + (persoActif.pouvoir || "");
}

// --- Accessibilité focus ---
function focusTabButton(tabName) {
  const btn = document.querySelector(`[onclick="switchTab('${tabName}')"]`);
  if (btn) btn.focus();
}

// --- Gestion des onglets ---
function switchTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(c => {
    c.style.display = 'none';
    c.classList.remove('active');
  });
  document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
  if (tabName === 'vote' || tabName === 'connexion') {
    document.getElementById('action').style.display = 'block';
    document.getElementById('action').classList.add('active');
    setupActionTab(tabName);
  } else {
    document.getElementById(tabName).style.display = 'block';
    document.getElementById(tabName).classList.add('active');
    if (tabName === 'indices') updateOngletIndices();
  }
  focusTabButton(tabName);
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

  // Affichage des joueurs (hors soi-même)
  const joueursDiv = document.getElementById('action-joueurs');
  joueursDiv.innerHTML = '';
  joueurs.forEach(j => {
    if (type === "vote" && j.uuid === uuid) return;
    const div = document.createElement('div');
    div.className = 'joueur-avatar';
    div.tabIndex = 0;
    div.setAttribute("role", "button");
    div.setAttribute("aria-label", `${j.pseudo}`);
    div.innerHTML = `<img src="../../Public/images/${j.image || 'avatar-1.png'}" alt="${j.pseudo}" class="avatar" onerror="this.src='https://via.placeholder.com/80?text=Avatar';"><br>${j.pseudo}`;
    div.onclick = () => selectJoueur(div, j);
    div.onkeydown = e => { if (e.key === "Enter" || e.key === " ") selectJoueur(div, j); };
    joueursDiv.appendChild(div);
  });

  document.getElementById('action-btn').disabled = true;
  document.getElementById('action-btn').onclick = function () {
    if (!joueurSelectionAction) return;
    if (actionType === "vote") {
      document.querySelectorAll('.joueur-avatar').forEach(d => d.classList.remove('valide'));
      const selectedDiv = document.querySelector('.joueur-avatar.selected');
      if (selectedDiv) selectedDiv.classList.add('valide');
      document.getElementById('actionResult').innerHTML = `<p>🔏 Votre vote pour <strong>${joueurSelectionAction.pseudo}</strong> a été scellé...</p>`;
      toast("Vote enregistré !", "success");
      // TODO : enregistrer le vote dans la base côté serveur
    } else {
      validerConnexion();
    }
  };
}

function selectJoueur(div, joueur) {
  document.querySelectorAll('.joueur-avatar').forEach(d => d.classList.remove('selected'));
  div.classList.add('selected');
  joueurSelectionAction = joueur;
  document.getElementById('action-btn').disabled = false;
}

// --- Modale Connexion ---
function validerConnexion() {
  if (!joueurSelectionAction || connexionsRestantes <= 0) return toast("Connexion impossible.", "error");
  showConnexionModal(joueurSelectionAction.pseudo);
}

function showConnexionModal(nomCible) {
  document.getElementById('modal-connexion-text').textContent = `Voulez-vous vous connecter avec ${nomCible} ?`;
  document.getElementById('modal-connexion').classList.add('show');
  document.getElementById('modal-connexion').focus();
}

function accepterConnexion() {
  document.getElementById('modal-connexion').classList.remove('show');
  connexionsRestantes--;
  document.getElementById("connexionRestantes").textContent = connexionsRestantes;
  toast("Connexion acceptée !", "success");
  // TODO : enregistrer la connexion côté serveur
  // Affichage d'indice fictif
  afficherIndice("Indice obtenu lors de la connexion.", "fiable");
  if (connexionsRestantes <= 0 && actionType === "connexion") {
    document.getElementById('action-btn').disabled = true;
  }
}
function refuserConnexion() {
  document.getElementById('modal-connexion').classList.remove('show');
  toast("Connexion refusée.", "info");
}

// --- Affichage indices ---
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
  indicesGagnes.forEach(({ indice, fiabilite }) => {
    afficherIndice(indice, fiabilite);
  });
}

// Chronomètre
let secondes = 1800;
function updateChrono() {
  const minutes = Math.floor(secondes / 60);
  const sec = secondes % 60;
  document.getElementById("tempsRestant").textContent = `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
  if (secondes > 0) secondes--;
  setTimeout(updateChrono, 1000);
}

// --- Accessibilité : fermer modale avec Échap ou clic hors contenu ---
document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    document.getElementById('modal-connexion').classList.remove('show');
  }
});
document.getElementById('modal-connexion').addEventListener('click', function (e) {
  if (e.target === this) this.classList.remove('show');
});

// --- Gestion erreurs/déconnexions ---
window.addEventListener('offline', () => {
  toast("Vous êtes hors ligne !", "error");
});
window.addEventListener('online', () => {
  toast("Connexion rétablie.", "success");
});

// --- Init page ---
document.addEventListener('DOMContentLoaded', async function () {
  if (!salonCode || !uuid) {
    toast("Erreur de session. Merci de recharger la page.", "error");
    return;
  }
  await chargerJoueurs();
  await chargerPersoActif();
  switchTab('fiche');
  updateChrono();
});
