// --- Configuration et initialisation Firebase ---
const firebaseConfig = {
  apiKey: "AIzaSyD-BxBu-4ElCqbHrZPM-4-6yf1-yWnL1bI",
  authDomain: "murder-party-ba8d1.firebaseapp.com",
  databaseURL: "https://murder-party-ba8d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "murder-party-ba8d1",
  storageBucket: "murder-party-ba8d1.firebasestorage.app",
  messagingSenderId: "20295055805",
  appId: "1:20295055805:web:0963719c3f23ab7752fad4",
  measurementId: "G-KSBMBB7KMJ"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// --- Génération du code (6 lettres/chiffres) ---
function generateCode(length) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function getUniquePseudo(monPseudo, pseudosExistants) {
  let uniquePseudo = monPseudo;
  let suffix = 0;
  while (pseudosExistants.includes(uniquePseudo)) {
    suffix++;
    uniquePseudo = monPseudo + suffix;
  }
  return uniquePseudo;
}

// --- Gestion du clic sur "Créer une partie" ---
document.getElementById("genererBtn").addEventListener("click", async function(e) {
  e.preventDefault();

  // Récupération des valeurs du formulaire
  const mode = document.getElementById("mode").value;
  const duree = document.getElementById("duree").value;
  const periode = document.getElementById("periode").value.trim().toLowerCase();
  const periodeAutre = (periode === "autre") ? document.getElementById("periode_autre").value : "";
  const nombreJoueurs = document.getElementById("nombreJoueurs").value;
  const criminels = document.getElementById("criminels").value;
  const criminelFantome = document.getElementById("criminel_fantome").checked;
  const avatarsLegendaires = document.getElementById("avatars_legendaires").checked;
  const inactifs = document.getElementById("inactifs").checked;

  const parametresPartie = {
    mode,
    duree,
    periode,
    periodeAutre,
    nombreJoueurs,
    criminels,
    criminelFantome,
    avatarsLegendaires,
    inactifs
  };

  // Générer un code de salon unique
  const salonCode = generateCode(6);

  // Enregistrer les paramètres dans Firebase
  await db.ref('parties/' + salonCode + '/parametres').set(parametresPartie);

  // Ajoute le créateur comme premier joueur (pseudo unique)
  const monPseudo = localStorage.getItem("pseudo") || "Anonyme";
  // Ici, pas besoin de pseudo unique car c'est le premier joueur
  await db.ref('parties/' + salonCode + '/joueurs').push({
    pseudo: monPseudo
  });

  // Stocker le code du salon côté joueur pour la suite
  localStorage.setItem("salonCode", salonCode);

  // Redirection vers la page salon
  window.location.href = "salon.html";
});
