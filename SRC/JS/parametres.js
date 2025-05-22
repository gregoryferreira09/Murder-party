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

  saveButton.disabled = true;

  // Par défaut, on cache le message
  saveMessage.style.display = "none";
  saveMessage.textContent = "";

  try {
    saveProfil(profil);

    // Affiche le message de succès
    saveMessage.textContent = "Paramètres enregistrés avec succès !";
    saveMessage.style.display = "block";

    // Disparition automatique après 3 secondes
    setTimeout(() => {
      saveMessage.style.display = "none";
      saveMessage.textContent = "";
    }, 3000);

  } catch (e) {
    console.error("Erreur lors de la sauvegarde :", e);

    // Message d'erreur en cas d'échec
    saveMessage.textContent = "Erreur lors de l'enregistrement des paramètres !";
    saveMessage.style.display = "block";
    saveMessage.style.color = "red";

    setTimeout(() => {
      saveMessage.style.display = "none";
      saveMessage.textContent = "";
      saveMessage.style.color = "green";
    }, 3000);
  }

  saveButton.disabled = false;
  applyUserSettings();
}

  saveButton.addEventListener("click", saveParams);
  soundCheckbox.addEventListener("change", saveParams);
  notifCheckbox.addEventListener("change", saveParams);
  langueSelect.addEventListener("change", saveParams);
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button').forEach((btn, i) => {
    setTimeout(() => {
      btn.style.opacity = '0';
      btn.style.animation = `fadeUp 1s ease-out forwards`;
    }, i * 120);
  });
});
