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

  // Fonction commune pour sauvegarder et afficher le message
  function saveParams() {
    const validLangues = ["fr", "en"];
    if (!validLangues.includes(langueSelect.value)) {
      alert("Langue non valide.");
      return;
    }

    profil.soundEnabled = soundCheckbox.checked;
    profil.notificationsEnabled = notifCheckbox.checked;
    profil.langue = langueSelect.value;

    saveButton.disabled = true;
    saveProfil(profil);
    applyUserSettings();

    if (saveMessage) {
      saveMessage.textContent = "Paramètres enregistrés avec succès !";
      saveMessage.style.display = "block";
    }

    setTimeout(() => {
      saveButton.disabled = false;
      if (saveMessage) {
        saveMessage.style.display = "none";
      }
    }, 3000);
  }

  // Sauvegarder au clic
  saveButton.addEventListener("click", saveParams);

  // Sauvegarder à chaque changement de paramètre
  soundCheckbox.addEventListener("change", saveParams);
  notifCheckbox.addEventListener("change", saveParams);
  langueSelect.addEventListener("change", saveParams);
});
