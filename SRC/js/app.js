// app.js

// Fonction pour mettre à jour le nombre de joueurs connectés
function updatePlayerCount() {
  const playerCount = document.getElementById('player-count');
  let connectedPlayers = 1;  // Exemple: 1 joueur est connecté (créateur de la partie)
  const totalPlayers = 6;    // Total de joueurs attendus

  // Fonction simulant la connexion des joueurs, tu pourrais remplacer cette logique par des appels réseau réels
  const interval = setInterval(() => {
    connectedPlayers++;
    playerCount.textContent = `${connectedPlayers} joueurs sur ${totalPlayers} connectés.`;

    // Quand tous les joueurs sont connectés, on arrête l'intervalle et on redirige
    if (connectedPlayers === totalPlayers) {
      clearInterval(interval);
      redirectToCharacterSelection(); // Fonction de redirection
    }
  }, 1000);  // Mise à jour chaque seconde (simulation)
}

// Fonction de redirection après la connexion de tous les joueurs
function redirectToCharacterSelection() {
  // Logique de redirection (par exemple vers une nouvelle page de sélection de personnages)
  window.location.href = 'choisir-personnage.html';
}

// Simulation de l'état des joueurs connectés
async function simulatePlayerConnection() {
  const playerCount = document.getElementById('player-count');
  let connectedPlayers = 0;
  const totalPlayers = 6;

  // Simulation d'une connexion progressive des joueurs
  for (let i = 0; i < totalPlayers; i++) {
    connectedPlayers++;
    playerCount.textContent = `${connectedPlayers} joueurs sur ${totalPlayers} connectés.`;
    await new Promise(resolve => setTimeout(resolve, 1000));  // Attente d'1 seconde entre chaque connexion
  }

  // Une fois tous les joueurs connectés, rediriger
  redirectToCharacterSelection();
}

// Exécution de la simulation à l'ouverture de la page
window.onload = simulatePlayerConnection;
