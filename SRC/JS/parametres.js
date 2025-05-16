// Public/scripts/parametres.js

document.addEventListener("DOMContentLoaded", () => {
  const soundCheckbox = document.getElementById("toggleSound");
  const notifCheckbox = document.getElementById("toggleNotifications");
  const langueSelect = document.getElementById("langue");
  const saveButton = document.getElementById("saveParams");

  // Charger les paramètres depuis localStorage au démarrage
  const savedParams = JSON.parse(localStorage.getItem("userSettings"));
  if (savedParams) {
    soundCheckbox.checked = savedParams.soundEnabled || false;
    notifCheckbox.checked = savedParams.notificationsEnabled || false;
    langueSelect.value = savedParams.langue || "fr";
  }

  // Sauvegarde au clic sur le bouton
  saveButton.addEventListener("click", () => {
    const params = {
      soundEnabled: soundCheckbox.checked,
      notificationsEnabled: notifCheckbox.checked,
      langue: langueSelect.value
    };

    localStorage.setItem("userSettings", JSON.stringify(params));

    // Feedback visuel simple
    saveButton.textContent = "✅ Paramètres enregistrés !";
    setTimeout(() => {
      saveButton.textContent = "Sauvegarder les paramètres";
    }, 2000);
  });
});
