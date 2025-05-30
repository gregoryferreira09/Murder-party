// Nettoyage automatique des salons inactifs (frontend : envoie une requête spéciale au backend, à brancher côté serveur)
window.requestSalonCleanup = function() {
  fetch('/api/cleanup-salons', {method:'POST'});
};

// Gestion reconnexion/offline
window.addEventListener('offline', () => {
  if (window.toast) window.toast("Vous êtes hors ligne !", "error");
});
window.addEventListener('online', () => {
  if (window.toast) window.toast("Connexion rétablie.", "success");
});

// Surveillance mémoire client (debug)
setInterval(() => {
  if (performance && performance.memory) {
    if (performance.memory.usedJSHeapSize > 100*1024*1024) { // 100Mo
      console.warn("Mémoire JS élevée, possible fuite !");
    }
  }
}, 10000);
