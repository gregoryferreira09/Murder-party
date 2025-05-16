// Public/scripts/utils.js

// Récupère l'objet profil complet depuis localStorage ou crée un profil vide
export function getProfil() {
  try {
    const stored = localStorage.getItem("profil");
    if (!stored) return {};
    return JSON.parse(stored);
  } catch (e) {
    console.warn("Erreur lors de la lecture du profil localStorage", e);
    return {};
  }
}

// Sauvegarde l'objet profil complet dans localStorage
export function saveProfil(profil) {
  try {
    localStorage.setItem("profil", JSON.stringify(profil));
  } catch (e) {
    console.error("Erreur lors de la sauvegarde du profil localStorage", e);
  }
}

// Applique les paramètres utilisateurs (sons, langue, notifications, etc.)
export function applyUserSettings() {
  const profil = getProfil();

  // Appliquer la langue (sur l'attribut lang du html)
  if (profil.langue === "en") {
    document.documentElement.lang = "en";
  } else {
    document.documentElement.lang = "fr";
  }

  // Activer ou désactiver la fonction playSound globale
  if (profil.soundEnabled) {
    window.playSound = (src) => {
      const audio = new Audio(src);
      audio.play().catch((err) => {
        // Silence erreur autoplay ou autres
        console.warn("Erreur lecture son", err);
      });
    };
  } else {
    window.playSound = () => {};
  }

  // Flag global pour activer les notifications internes dans l'app
  window.notificationsEnabled = Boolean(profil.notificationsEnabled);
}
