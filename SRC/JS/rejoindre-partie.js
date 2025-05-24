// SRC/JS/rejoindre-partie.js

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

async function rejoindreSalon() {
  const codeEntre = document.getElementById("codeInput").value.trim().toUpperCase();
  const messageDiv = document.getElementById("message");
  const loader = document.getElementById("loader");
  const validerBtn = document.getElementById("validerBtn");

  messageDiv.textContent = "";
  loader.style.display = "block";
  validerBtn.disabled = true;

  // Validation du code salon
  if (!/^[A-Z0-9]{4}$|^[A-Z0-9]{6}$|^[A-Z0-9]{8}$/.test(codeEntre)) {
    loader.style.display = "none";
    validerBtn.disabled = false;
    messageDiv.textContent = "Le code doit comporter 4, 6 ou 8 lettres ou chiffres.";
    messageDiv.style.color = "#ff6b6b";
    return;
  }

  // Récupère le pseudo (sécurité anti-caractères spéciaux)
  let pseudoBase = (localStorage.getItem("pseudo") || "").replace(/[<>\/\\'"`]/g, "").trim().substring(0, 30);
  let pseudo = pseudoBase || "joueur";

  try {
    // Vérifier que le salon existe
    const salonSnap = await db.ref('parties/' + codeEntre).get();
    if (!salonSnap.exists()) {
      loader.style.display = "none";
      validerBtn.disabled = false;
      messageDiv.textContent = "Ce salon n'existe pas.";
      messageDiv.style.color = "#ff6b6b";
      return;
    }

    // Récupérer les pseudos déjà présents
    const joueursSnap = await db.ref('parties/' + codeEntre + '/joueurs').get();
    let pseudosExistants = [];
    joueursSnap.forEach(joueurSnap => {
      pseudosExistants.push(joueurSnap.val().pseudo.toLowerCase());
    });

    // Assigner un pseudo unique si déjà pris
    let pseudoUnique = pseudo;
    let count = 1;
    while (pseudosExistants.includes(pseudoUnique.toLowerCase())) {
      pseudoUnique = pseudo + count;
      count++;
    }
    pseudo = pseudoUnique;
    localStorage.setItem("pseudo", pseudo);

    // Vérifier le nombre max de joueurs
    const paramSnap = await db.ref('parties/' + codeEntre + '/parametres').get();
    const maxJoueurs = paramSnap.exists() ? parseInt(paramSnap.val().nombreJoueurs) : 1;
    if (pseudosExistants.length >= maxJoueurs) {
      loader.style.display = "none";
      validerBtn.disabled = false;
      messageDiv.textContent = "Ce salon est déjà complet.";
      messageDiv.style.color = "#ff6b6b";
      return;
    }

    // Générer un UUID unique pour ce joueur (stocké localement)
    let uuid = localStorage.getItem('uuid');
    if (!uuid) {
      uuid = generateUUID();
      localStorage.setItem('uuid', uuid);
    }

    // Ajouter le joueur dans la base (UUID + pseudo)
    await db.ref('parties/' + codeEntre + '/joueurs').push({
      uuid,
      pseudo
    });

    // Stocker le code du salon côté joueur
    localStorage.setItem("salonCode", codeEntre);

    // Message de succès
    loader.style.display = "none";
    validerBtn.disabled = false;
    messageDiv.textContent = `Connexion réussie ! Votre pseudo : ${pseudo}`;
    messageDiv.style.color = "#90ee90";
    setTimeout(() => {
      window.location.href = "salon.html";
    }, 1000);

  } catch (err) {
    loader.style.display = "none";
    validerBtn.disabled = false;
    messageDiv.textContent = "Erreur de connexion. Veuillez réessayer.";
    messageDiv.style.color = "#ff6b6b";
    console.error(err);
  }
}

// N'écoute la soumission du formulaire que lorsque le DOM est prêt
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("joinForm");
    if(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            rejoindreSalon();
        });
    } else {
        console.error('Formulaire "joinForm" non trouvé dans la page.');
    }
});
