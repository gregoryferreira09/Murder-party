// Server.js (version sécurisée & robuste)
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Stockage salons actifs : { codeSalon: { joueurs: [{uuid, pseudo, socketId}], host: uuid } }
const salons = {};

app.use(express.static(path.join(__dirname, '../client')));

io.on('connection', (socket) => {
  console.log('✅ Joueur connecté :', socket.id);

  // Création de salon
  socket.on('creerSalon', ({pseudo}) => {
    const code = genererCodeSalon();
    const uuid = uuidv4();
    salons[code] = {
      joueurs: [{uuid, pseudo, socketId: socket.id}],
      host: uuid,
    };
    socket.join(code);
    socket.emit('salonCree', { code, uuid });
    console.log(`🏅 Salon ${code} créé par ${socket.id} (UUID ${uuid})`);
  });

  // Rejoindre salon
  socket.on('rejoindreSalon', ({ code, pseudo }, callback) => {
    if (!salons[code]) {
      return callback({error: "Ce salon n'existe pas"});
    }
    // Vérifie unicité pseudo dans le salon
    const joueurs = salons[code].joueurs;
    if (joueurs.some(j => j.pseudo === pseudo)) {
      return callback({error: "Pseudo déjà utilisé dans ce salon"});
    }
    const uuid = uuidv4();
    joueurs.push({uuid, pseudo, socketId: socket.id});
    socket.join(code);
    callback({ success: true, uuid });
    io.to(code).emit('updateJoueurs', joueurs.map(j => ({pseudo: j.pseudo, uuid: j.uuid})));
  });

  // Changement de pseudo
  socket.on('majPseudo', ({ code, uuid, newPseudo }) => {
    const salon = salons[code];
    if (!salon) return;
    const joueur = salon.joueurs.find(j => j.uuid === uuid);
    if (joueur) {
      joueur.pseudo = newPseudo;
      io.to(code).emit('updateJoueurs', salon.joueurs.map(j => ({pseudo: j.pseudo, uuid: j.uuid})));
    }
  });

  // Déconnexion
  socket.on('disconnect', () => {
    console.log('⛔ Joueur déconnecté :', socket.id);
    for (const code in salons) {
      const salon = salons[code];
      salon.joueurs = salon.joueurs.filter(j => j.socketId !== socket.id);
      // Supprimer le salon s’il est vide
      if (salon.joueurs.length === 0) {
        delete salons[code];
        console.log(`🗑️ Salon ${code} supprimé (vide)`);
      }
    }
  });
});

function genererCodeSalon() {
  let code;
  do {
    code = Math.floor(100000 + Math.random() * 900000).toString();
  } while (salons[code]);
  return code;
}

http.listen(3000, () => {
  console.log('🚀 Serveur lancé sur http://localhost:3000');
});
