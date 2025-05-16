// Public/scripts/utils.js

export function applyUserSettings() {
  const savedParams = JSON.parse(localStorage.getItem("userSettings"));

  if (!savedParams) return;

  // Exemple : appliquer la langue (affiche un message ou change des textes dynamiquement)
  if (savedParams.langue === "en") {
    document.documentElement.lang = "en";
    // Tu peux ajouter ici du texte dynamique traduit si tu utilises un système i18n simple
  } else {
    document.documentElement.lang = "fr";
  }

  // Exemple : sons activés
  if (savedParams.soundEnabled) {
    window.playSound = (src) => {
      const audio = new Audio(src);
      audio.play();
    };
  } else {
    window.playSound = () => {};
  }

  // Notifications internes (pas les Notifications système ici)
  window.notificationsEnabled = savedParams.notificationsEnabled || false;
}
