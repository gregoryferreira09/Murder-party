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

function getUniquePseudo(monPseudo, pseudosExistants) {
  let uniquePseudo = monPseudo;
  let suffix = 0;
  while (pseudosExistants.includes(uniquePseudo)) {
    suffix++;
    uniquePseudo = monPseudo + suffix;
  }
  return uniquePseudo;
}

async function rejoindreSalon() {
  const codeEntre = document.getElementById("codeInput").value.trim().toUpperCase();
  const messageDiv = document.getElementById("message");

  // Vérifier que le salon existe
  const salonSnap = await db.ref('parties/' + codeEntre).get();
  if (!salonSnap.exists()) {
    messageDiv.textContent = "Ce salon n'existe pas.";
    messageDiv.style.color = "#ff6b6b";
    return;
  }

  // Récupérer les pseudos déjà présents
  const joueursSnap = await db.ref('parties/' + codeEntre + '/joueurs').get();
  let pseudosExistants = [];
  joueursSnap.forEach(joueurSnap => {
    pseudosExistants.push(joueurSnap.val().pseudo);
  });

  // Générer pseudo unique
  let monPseudo = localStorage.getItem("pseudo") || "Anonyme";
  let pseudoFinal = getUniquePseudo(monPseudo, pseudosExistants);

  // Ajouter le joueur dans la base
  await db.ref('parties/' + codeEntre + '/joueurs').push({
    pseudo: pseudoFinal
  });

  // Stocker le code du salon côté joueur
  localStorage.setItem("salonCode", codeEntre);

  messageDiv.textContent = "Connexion réussie !";
  messageDiv.style.color = "#90ee90";
  setTimeout(() => {
    window.location.href = "salon.html";
  }, 1200);
}

// Pour la touche Entrée sur l'input
document.getElementById("codeInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    rejoindreSalon();
  }
});
// Charger l’état aDejaRejoint au chargement
window.addEventListener("load", chargerEtatRejoint);

// Après avoir récupéré les joueurs déjà présents et les paramètres
const paramSnap = await db.ref('parties/' + codeEntre + '/parametres').get();
const maxJoueurs = paramSnap.exists() ? parseInt(paramSnap.val().nombreJoueurs) : 1;
if (pseudosExistants.length >= maxJoueurs) {
  messageDiv.textContent = "Ce salon est déjà complet.";
  messageDiv.style.color = "#ff6b6b";
  return;
}
