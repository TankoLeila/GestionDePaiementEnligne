// Récupérer le bouton "Pay Here"
var payHereBtn = document.getElementById("pay-here-btn");

// Récupérer le modal
var modal = document.getElementById("payment-modal");

// Récupérer le bouton de fermeture
var closeModalBtn = document.getElementsByClassName("close")[0];

// Ouvrir le modal quand on clique sur le bouton "Pay Here"
payHereBtn.onclick = function() {
  modal.style.display = "block";
}

// Fermer le modal quand on clique sur le bouton de fermeture
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Fermer le modal quand on clique en dehors de celui-ci
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
