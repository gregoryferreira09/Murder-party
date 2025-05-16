// ../../Public/scripts/parametres.js
import { getProfil, saveProfil, applyUserSettings } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
  const soundCheckbox = document.getElementById("toggleSound");
  const notifCheckbox = document.getElementById("toggleNotifications");
  const langueSelect = document.getElementById("langue");
  const saveButton = document.getElementById("saveParams");

  // Charge les paramètres depuis le profil
  const profil = getProfil();
  soundCheckbox.checked = profil.soundEnabled || false;
  notifCheckbox.checked = profil.notificationsEnabled || false;
  langueSelect.value = profil.langue || "fr";

  // Sauvegarder les paramètres au clic
  saveButton.addEventListener("click", () => {
    const profil = getProfil(); // récupérer à jour
    profil.soundEnabled = soundCheckbox.checked;
    profil.notificationsEnabled = notifCheckbox.checked;
    profil.langue = langueSelect.value;
    saveProfil(profil);

    // Appliquer les paramètres immédiatement (sons, langue, notifications)
    applyUserSettings();

    // Feedback visuel
    saveButton.textContent = "✅ Paramètres enregistrés !";
    setTimeout(() => {
      saveButton.textContent = "Sauvegarder les paramètres";
    }, 2000);
  });
});
