// Sanitize all text inputs & textarea fields globally
window.sanitizeInput = function(input) {
  if (typeof input !== 'string') return input;
  return input.replace(/[<>\\/\\\\'"`]/g, "").trim().substring(0, 50);
};

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('input[type="text"], textarea').forEach(inp => {
    inp.addEventListener('blur', function(e) {
      e.target.value = window.sanitizeInput(e.target.value);
    });
  });
});
