// server/server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// 👥 Stocke les salons actifs : { codeSalon: { joueurs: [...], host: socketId } }
const salons = {};

// Sert les fichiers statiques dans le dossier client
app.use(express.static(path.join(__dirname, '../client')));

// Gère les connexions Socket.io
io.on('connection', (socket) => {
  console.log('✅ Joueur connecté :', socket.id);

  // Création de salon
  socket.on('creerSalon', () => {
    const code = genererCodeSalon();
    salons[code] = {
      joueurs: [socket.id],
      host: socket.id
    };
    socket.join(code);
    socket.emit('salonCree', code);
    console.log(`🆕 Salon ${code} créé par ${socket.id}`);
  });

  // Déconnexion
  socket.on('disconnect', () => {
    console.log('❌ Joueur déconnecté :', socket.id);

    // Retirer le joueur des salons
    for (const code in salons) {
      const salon = salons[code];
      salon.joueurs = salon.joueurs.filter(id => id !== socket.id);

      // Supprimer le salon s’il est vide
      if (salon.joueurs.length === 0) {
        delete salons[code];
        console.log(`🗑️ Salon ${code} supprimé (vide)`);
      }
    }
  });
});

// Fonction pour générer un code à 6 chiffres unique
function genererCodeSalon() {
  let code;
  do {
    code = Math.floor(100000 + Math.random() * 900000).toString();
  } while (salons[code]);
  return code;
}

// Démarrer le serveur
http.listen(3000, () => {
  console.log('🚀 Serveur lancé sur http://localhost:3000');
});
