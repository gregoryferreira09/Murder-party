// scenarioBanquet.js
// univers doit être accessible (import ou window.univers)

// Pour créer un scénario banquet médiéval :
const scenario = genererScenarioBanquet(univers.medieval.banquet);
// ...envoie ensuite ce scénario vers Firebase, etc.

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Gère les articles en français
function getArticle(word, genre) {
  if (!word) return '';
  const voyelles = "aeiouyh";
  if (voyelles.includes(word[0].toLowerCase())) return "l'";
  return genre === "f" ? "la" : "le";
}

function articleDans(word, genre) {
  const art = getArticle(word, genre);
  if (art === "l'") return "dans l'";
  return art === "la" ? "dans la" : "dans le";
}

// Générateur central
function genererScenarioBanquet(banquet) {
  const data = banquet;

  // 1. Tirage des rôles principaux
  const persos = data.personnages.slice();
  const nbJoueurs = 12;
  const joueurs = persos.slice(0, nbJoueurs);

  // 2. Tirage des rôles (victime, coupable, témoins, suspects)
  const indicesPersos = [...Array(nbJoueurs).keys()];
  const victimIdx = randomItem(indicesPersos);
  const victim = joueurs[victimIdx];
  const suspects = joueurs.filter((p, i) => i !== victimIdx);
  const culpritIdx = randomItem([...Array(suspects.length).keys()]);
  const culprit = suspects[culpritIdx];

  // 3. Lieu & ambiance
  const lieuObj = randomItem(data.lieux);
  const lieuNom = typeof lieuObj === "object" ? lieuObj.nom : lieuObj;
  const lieuGenre = typeof lieuObj === "object" ? lieuObj.genre : "m";
  const ambiance = randomItem(data.ambiances);

  // 4. Arme & crime
  const arme = randomItem(data.armes);
  const crimeTpl = randomItem(data.crimes.classique);

  // 5. Trame centrale
  const introTemplate = (data.introductions && data.introductions.length > 0) ? data.introductions[0] : null;
const introduction = introTemplate
  ? introTemplate
      .replace("{victime}", victim.nom)
      .replace("{dans_la_lieu}", articleDans(lieuNom, lieuGenre) + " " + lieuNom)
  : "";

  // 6. Introduction du crime
  const crime = crimeTpl
    .replace("{victime}", victim.nom)
    .replace("{dans_la_lieu}", articleDans(lieuNom, lieuGenre) + " " + lieuNom)
    .replace("{arme}", arme);

  // 7. Attribution des indices, secrets, anecdotes, mobiles
  const scenarioJoueurs = joueurs.map(joueur => {
    let mobile = "";
    if (joueur.nom !== victim.nom && data.mobiles[joueur.nom] && data.mobiles[joueur.nom][victim.nom]) {
      mobile = randomItem(data.mobiles[joueur.nom][victim.nom]);
    }
    return {
      nom: joueur.nom,
      role: joueur.role,
      genre: joueur.genre,
      victime: joueur.nom === victim.nom,
      coupable: joueur.nom === culprit.nom,
      mobile: mobile,
      secret: randomItem(data.secrets),
      anecdote: randomItem(data.anecdotes),
      indice: randomItem(data.indices)
        .replace("{suspect}", culprit.nom)
        .replace("{victime}", victim.nom)
        .replace("{temoin}", randomItem(joueurs.filter(j=>j.nom!==joueur.nom)).nom)
    };
  });

  // 8. Retour de l'objet scénario
  return {
    introduction: introduction,
    ambiance: ambiance,
    lieu: lieuNom,
    arme: arme,
    crime: crime,
    joueurs: scenarioJoueurs
  };
}

// Pour une intégration front : window.genererScenarioBanquet = genererScenarioBanquet;
