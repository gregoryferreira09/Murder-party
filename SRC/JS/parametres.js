// ../../Public/scripts/parametres.js
import { getProfil, saveProfil, applyUserSettings } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
  const soundCheckbox = document.getElementById("toggleSound");
  const notifCheckbox = document.getElementById("toggleNotifications");
  const langueSelect = document.getElementById("langue");
  const saveButton = document.getElementById("saveParams");

  // Élément message de confirmation (à ajouter dans le HTML sous le bouton)
  const saveMessage = document.getElementById("saveMessage");

  // Charge les paramètres depuis le profil
  const profil = getProfil();
  soundCheckbox.checked = profil.soundEnabled || false;
  notifCheckbox.checked = profil.notificationsEnabled || false;
  langueSelect.value = profil.langue || "fr";

  // Sauvegarder les paramètres au clic
  saveButton.addEventListener("click", () => {
    // Validation simple de la langue
    const validLangues = ["fr", "en"];
    if (!validLangues.includes(langueSelect.value)) {
      alert("Langue non valide.");
      return;
    }

    // Mise à jour de l'objet profil
    profil.soundEnabled = soundCheckbox.checked;
    profil.notificationsEnabled = notifCheckbox.checked;
    profil.langue = langueSelect.value;

    // Désactiver bouton pendant sauvegarde
    saveButton.disabled = true;

    saveProfil(profil);
    applyUserSettings();

    // Feedback visuel dédié
    if (saveMessage) {
      saveMessage.textContent = "Paramètres enregistrés avec succès !";
      saveMessage.style.display = "block";
    }

    // Réactiver bouton et masquer message après délai
    setTimeout(() => {
      saveButton.disabled = false;
      if (saveMessage) {
        saveMessage.style.display = "none";
      }
    }, 3000);
  });
});
