// SRC/JS/creer-partie.js

// --- Configuration Firebase ---
const firebaseConfig = {
  apiKey: "AIzaSyD-BxBu-4ElCqbHrZPM-4-6yf1-yWnL1bI",
  authDomain: "murder-party-ba8d1.firebaseapp.com",
  databaseURL: "https://murder-party-ba8d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "murder-party-ba8d1",
  storageBucket: "murder-party-ba8d1.appspot.com",
  messagingSenderId: "20295055805",
  appId: "1:20295055805:web:0963719c3f23ab7752fad4",
  measurementId: "G-KSBMBB7KMJ"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// Génère un UUID v4
function generateUUID() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

async function creerPartie(formData) {
  // Utilise formData pour lire les valeurs
  const mode = formData.get("mode");
  const duree = formData.get("duree");
  const periode = formData.get("periode");
  const periodeAutre = formData.get("periode_autre") || "";
  const nombreJoueurs = parseInt(formData.get("nombreJoueurs"), 10);
  const criminels = parseInt(formData.get("criminels"), 10);
  const criminel_fantome = !!formData.get("criminel_fantome");
  const avatars_legendaires = !!formData.get("avatars_legendaires");
  const inactifs = !!formData.get("inactifs");

  // Validation des champs
  if (!mode || !duree || !periode || isNaN(nombreJoueurs) || nombreJoueurs < 1 || nombreJoueurs > 12) {
    alert("Veuillez remplir tous les champs correctement.");
    return;
  }

  // Récupérer ou générer l'UUID du créateur
  let uuid = localStorage.getItem("uuid");
  if (!uuid) {
    uuid = generateUUID();
    localStorage.setItem("uuid", uuid);
  }

  // Pseudo affiché
  let pseudo = localStorage.getItem("pseudo") || "Anonyme";
  pseudo = pseudo.replace(/[<>\/\\'"`]/g, "").trim().substring(0, 30);

  // Paramètres partie
  const parametresPartie = {
  mode,
  duree,
  periode,
  periodeAutre,
  nombreJoueurs,
  criminels,
  criminel_fantome,
  avatars_legendaires,
  inactifs,
  createur: { uuid, pseudo }
};

  // Générer code salon unique
  const salonCode = (Math.random().toString(36).substr(2, 6)).toUpperCase();

  // Enregistrer paramètres dans Firebase
  await db.ref('parties/' + salonCode + '/parametres').set(parametresPartie);

  // Tirage unique des personnages et stockage
  let listePersos;
  if (periode === "autre" && periodeAutre) {
    listePersos = getRandomElements(window.personnagesParEpoque["contemporain"], nombreJoueurs);
  } else {
    listePersos = getRandomElements(window.personnagesParEpoque[periode], nombreJoueurs);
  }
  await db.ref('parties/' + salonCode + '/personnages').set(listePersos);

  // Ajouter le créateur comme premier joueur (UUID + pseudo)
  await db.ref('parties/' + salonCode + '/joueurs').push({
    uuid,
    pseudo
  });

  localStorage.setItem("salonCode", salonCode);

  window.location.href = "salon.html";

// Fonction utilitaire pour tirer N éléments aléatoires d'un tableau, sans doublons
function getRandomElements(arr, n) {
  if (!Array.isArray(arr)) return [];
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

document.getElementById("genererBtn").addEventListener("click", function(e) {
  e.preventDefault();
  creerPartie();
});
