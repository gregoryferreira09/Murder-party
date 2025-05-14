// app.js
function updatePlayerCount() {
  const playerCount = document.getElementById('player-count');
  let connectedPlayers = 1; // Exemple: 1 joueur est connecté (créateur de la partie)
  const totalPlayers = 6;

  // Simule l'augmentation du nombre de joueurs connectés
  const interval = setInterval(function() {
    connectedPlayers++;
    playerCount.textContent = `${connectedPlayers} joueurs sur ${totalPlayers} connectés.`;
    
    if (connectedPlayers === totalPlayers) {
      clearInterval(interval);
      // Redirection ou changement d'état lorsque tous les joueurs sont connectés
      window.location.href = 'choisir-personnage.html';
    }
  }, 1000); // Simulation : le nombre de joueurs augmente chaque seconde
}

// Appeler la fonction lorsque la page se charge
window.onload = updatePlayerCount;
