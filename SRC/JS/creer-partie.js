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

// Utilitaire pour tirage aléatoire
function getRandomElements(array, n) {
  const copy = [...array];
  const result = [];
  for (let i = 0; i < n && copy.length > 0; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(idx, 1)[0]);
  }
  return result;
}

// --- Génération du code (6 lettres/chiffres) ---
function generateCode(length) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

document.getElementById("genererBtn").addEventListener("click", async function(e) {
  e.preventDefault();

  const btn = document.getElementById("genererBtn");
  btn.disabled = true;

  try {
    // Récupération des valeurs du formulaire
    const mode = document.getElementById("mode").value;
    const duree = document.getElementById("duree").value;
    const periode = document.getElementById("periode").value.trim().toLowerCase();
    const periodeAutre = (periode === "autre") ? document.getElementById("periode_autre").value : "";
    const nombreJoueurs = parseInt(document.getElementById("nombreJoueurs").value, 10);
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
      inactifs,
      createur: localStorage.getItem("pseudo") || "Anonyme"
    };

    // Générer un code de salon unique
    const salonCode = generateCode(6);

    // Enregistrer les paramètres dans Firebase
    await db.ref('parties/' + salonCode + '/parametres').set(parametresPartie);

    // --- TIRAGE UNIQUE DES PERSONNAGES ET STOCKAGE EN BASE ---
    // 1. Récupère la bonne liste de personnages selon la période
    // 2. Tire au sort la liste unique pour la partie
    // 3. Stocke la liste dans Firebase
    let listePersos;
    if (periode === "autre" && periodeAutre) {
      // Pour "autre", adapte selon ta logique ou choisis une liste par défaut
      // Ici, on prend la liste "contemporain" par défaut
      listePersos = getRandomElements(window.personnagesParEpoque["contemporain"], nombreJoueurs);
    } else {
      listePersos = getRandomElements(window.personnagesParEpoque[periode], nombreJoueurs);
    }
    await db.ref('parties/' + salonCode + '/personnages').set(listePersos);

    // Ajoute le créateur comme premier joueur (pseudo unique)
    const monPseudo = localStorage.getItem("pseudo") || "Anonyme";
    await db.ref('parties/' + salonCode + '/joueurs').push({
      pseudo: monPseudo
    });

    // Stocker le code du salon côté joueur pour la suite
    localStorage.setItem("salonCode", salonCode);

    // Stocker les paramètres en local
    localStorage.setItem("parametresPartie", JSON.stringify(parametresPartie));

    // Redirection vers la page salon
    window.location.href = "salon.html";
  } catch (error) {
    alert("Erreur lors de la création de la partie : " + error.message);
    console.error(error);
    btn.disabled = false;
  }
});
