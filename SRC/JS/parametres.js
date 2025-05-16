// ../../Public/scripts/parametres.js
import { getProfil, saveProfil, applyUserSettings } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
  const soundCheckbox = document.getElementById("toggleSound");
  const notifCheckbox = document.getElementById("toggleNotifications");
  const langueSelect = document.getElementById("langue");
  const saveButton = document.getElementById("saveParams");
  const saveMessage = document.getElementById("saveMessage");

  const profil = getProfil();
  console.log("Profil chargé au démarrage:", profil);
  soundCheckbox.checked = profil.soundEnabled || false;
  notifCheckbox.checked = profil.notificationsEnabled || false;
  langueSelect.value = profil.langue || "fr";

  function saveParams() {
    const validLangues = ["fr", "en"];
    if (!validLangues.includes(langueSelect.value)) {
      alert("Langue non valide.");
      return;
    }

    profil.soundEnabled = soundCheckbox.checked;
    profil.notificationsEnabled = notifCheckbox.checked;
    profil.langue = langueSelect.value;

    console.log("Profil avant sauvegarde:", profil);

    saveButton.disabled = true;
    try {
      saveProfil(profil);
      console.log("Sauvegarde réussie");
    } catch (e) {
      console.error("Erreur lors de la sauvegarde :", e);
    }

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

  saveButton.addEventListener("click", saveParams);
  soundCheckbox.addEventListener("change", saveParams);
  notifCheckbox.addEventListener("change", saveParams);
  langueSelect.addEventListener("change", saveParams);
});
