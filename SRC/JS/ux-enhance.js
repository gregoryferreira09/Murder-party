// Loader global
window.showLoader = function(msg = "Chargement...") {
  let loader = document.getElementById('global-loader');
  if (!loader) {
    loader = document.createElement('div');
    loader.id = 'global-loader';
    loader.style = "position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;background:rgba(30,23,18,0.82);color:#fff;display:flex;align-items:center;justify-content:center;font-size:2em;";
    loader.innerHTML = `<div>${msg}</div>`;
    document.body.appendChild(loader);
  } else {
    loader.innerHTML = `<div>${msg}</div>`;
    loader.style.display = 'flex';
  }
};
window.hideLoader = function() {
  let loader = document.getElementById('global-loader');
  if (loader) loader.style.display = 'none';
};

// Feedback automatique sur tous les formulaires
document.addEventListener('submit', function(e) {
  const form = e.target;
  let feedback = form.querySelector('.form-feedback');
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.className = 'form-feedback';
    feedback.style = "color:#2ecc40;font-weight:bold;margin-top:8px;";
    form.appendChild(feedback);
  }
  feedback.textContent = "Formulaire envoyé !";
  setTimeout(()=>{ feedback.textContent = ""; }, 2000);
}, true);

// Onboarding simple
window.showOnboarding = function() {
  if (!localStorage.getItem('onboardingDone')) {
    alert("Bienvenue dans Murder Party ! Un tuto interactif est disponible dans le menu d'aide.");
    localStorage.setItem('onboardingDone', '1');
  }
};
document.addEventListener('DOMContentLoaded', window.showOnboarding);
