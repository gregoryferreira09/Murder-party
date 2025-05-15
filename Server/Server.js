// server/server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// Sert tous les fichiers du dossier client
app.use(express.static(path.join(__dirname, '../client')));

io.on('connection', (socket) => {
  console.log('✅ Joueur connecté :', socket.id);

  socket.on('disconnect', () => {
    console.log('❌ Joueur déconnecté :', socket.id);
  });
});

// Démarrer le serveur
http.listen(3000, () => {
  console.log('🚀 Serveur lancé sur http://localhost:3000');
});
