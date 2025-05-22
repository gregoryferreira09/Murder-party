// === Code existant ===
let aDejaRejoint = false;

function rejoindreSalon() {
  if (aDejaRejoint) return;

  const codeEntre = document.getElementById("codeInput").value.trim().toUpperCase();
  const codeSalon = localStorage.getItem("salonCode");
  const messageDiv = document.getElementById("message");

  if (!codeSalon) {
    messageDiv.textContent = "Aucun salon actif trouvé. Demandez au créateur de la partie de créer un salon.";
    messageDiv.style.color = "#ff6b6b";
    return;
  }

  if (codeEntre === codeSalon) {
    let connectes = parseInt(localStorage.getItem("joueursConnectes") || "0");
    let maxJoueurs = parseInt(localStorage.getItem("nombreJoueurs") || "6");

    if (connectes >= maxJoueurs - 1) {
      messageDiv.textContent = "Le salon est déjà complet.";
      messageDiv.style.color = "#ffa500";
      return;
    }

    connectes += 1;
    localStorage.setItem("joueursConnectes", connectes.toString());
    localStorage.setItem("joueurRejoint_" + Date.now(), "oui");
    aDejaRejoint = true;

    messageDiv.textContent = "Connexion réussie !";
    messageDiv.style.color = "#90ee90";

    afficherCompteur();
  } else {
    messageDiv.textContent = "Code invalide. Vérifiez et réessayez.";
    messageDiv.style.color = "#ff6b6b";
  }
}

function afficherCompteur() {
  const compteurDiv = document.getElementById("compteur");
  const connectes = parseInt(localStorage.getItem("joueursConnectes") || "0");
  const parametres = JSON.parse(localStorage.getItem("parametresPartie"));
  const maxJoueurs = parametres ? parseInt(parametres.nombreJoueurs) : 6;
  compteurDiv.textContent = `${connectes} joueur(s) sur ${maxJoueurs} connectés`;
}

setInterval(() => {
  const connectes = parseInt(localStorage.getItem("joueursConnectes") || "0");
  const parametres = JSON.parse(localStorage.getItem("parametresPartie"));
  const maxJoueurs = parametres ? parseInt(parametres.nombreJoueurs) : 6;

  afficherCompteur();

  if (connectes >= maxJoueurs - 1) {
    window.location.href = "lancement-partie.html";
  }
}, 1000);

function retourAccueil() {
  if (aDejaRejoint) {
    let connectes = parseInt(localStorage.getItem("joueursConnectes") || "0");
    connectes -= 1;
    localStorage.setItem("joueursConnectes", connectes.toString());
    aDejaRejoint = false;
  }
  window.location.href = "accueil.html";
}

// === AMELIORATIONS AJOUTEES ===

// 1) Stocker et récupérer aDejaRejoint dans localStorage pour persistance après reload
function chargerEtatRejoint() {
  const etat = localStorage.getItem("aDejaRejoint");
  aDejaRejoint = (etat === "true");
}

function sauvegarderEtatRejoint(valeur) {
  aDejaRejoint = valeur;
  localStorage.setItem("aDejaRejoint", valeur.toString());
}

// Modifier rejoindreSalon pour utiliser sauvegarde
const rejoindreSalonOriginal = rejoindreSalon;
rejoindreSalon = function() {
  if (aDejaRejoint) return;
  rejoindreSalonOriginal();
  if (aDejaRejoint) sauvegarderEtatRejoint(true);
};

// Modifier retourAccueil pour mettre à jour aussi localStorage
const retourAccueilOriginal = retourAccueil;
retourAccueil = function() {
  if (aDejaRejoint) {
    let connectes = parseInt(localStorage.getItem("joueursConnectes") || "0");
    connectes = isNaN(connectes) ? 0 : connectes;
    connectes -= 1;
    localStorage.setItem("joueursConnectes", connectes.toString());
    sauvegarderEtatRejoint(false);
  }
  retourAccueilOriginal();
};

const playerId = localStorage.getItem("pseudo") || "Anonyme";

// 2) Ajout d'une fonction robuste pour parseInt avec fallback
function parseIntSafe(valeur, defaut) {
  const n = parseInt(valeur);
  return isNaN(n) ? defaut : n;
}

// Remplacer les parseInt dans afficherCompteur et setInterval par parseIntSafe
const afficherCompteurOriginal = afficherCompteur;
afficherCompteur = function() {
  const compteurDiv = document.getElementById("compteur");
  const connectes = parseIntSafe(localStorage.getItem("joueursConnectes"), 0);
  const parametresStr = localStorage.getItem("parametresPartie");
  let maxJoueurs = 6;
  if (parametresStr) {
    try {
      const parametres = JSON.parse(parametresStr);
      maxJoueurs = parseIntSafe(parametres.nombreJoueurs, 6);
    } catch {
      maxJoueurs = 6;
    }
  }
  compteurDiv.textContent = `${connectes} joueur(s) sur ${maxJoueurs} connectés`;
};

// 3) Eviter répétition dans récupération paramètres dans setInterval, ajouter délai avant redirection
setInterval(() => {
  const connectes = parseIntSafe(localStorage.getItem("joueursConnectes"), 0);
  const parametresStr = localStorage.getItem("parametresPartie");
  let maxJoueurs = 6;
  if (parametresStr) {
    try {
      const parametres = JSON.parse(parametresStr);
      maxJoueurs = parseIntSafe(parametres.nombreJoueurs, 6);
    } catch {
      maxJoueurs = 6;
    }
  }

  afficherCompteur();

  if (connectes >= maxJoueurs - 1) {
    // Ajout délai de 2 secondes pour laisser voir le message
    setTimeout(() => {
      window.location.href = "lancement-partie.html";
    }, 2000);
  }
}, 1000);

// 4) Accessibilité: déclencher rejoindreSalon sur "Entrée" dans input
document.getElementById("codeInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    rejoindreSalon();
  }
});

// Charger l’état aDejaRejoint au chargement
window.addEventListener("load", chargerEtatRejoint);
