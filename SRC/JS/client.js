// Connexion au serveur Socket.io
const socket = io();

// Quand la connexion est établie
socket.on('connect', () => {
  console.log('🧠 Connecté au serveur avec l’ID :', socket.id);
});

// Quand on clique sur le bouton "Créer une partie"
document.getElementById('btn-creer-salon')?.addEventListener('click', () => {
  console.log('🆕 Demande de création de salon envoyée au serveur');
  socket.emit('creerSalon');
});

// Le serveur renvoie le code du salon créé
socket.on('salonCree', (code) => {
  console.log('🎉 Salon créé avec le code :', code);
  const affichageCode = document.getElementById('code-salon');
  if (affichageCode) {
    affichageCode.innerText = `Code de salon : ${code}`;
  }
});
