// On attrape le titre UNE SEULE FOIS
const titre = document.querySelector("#titre-principal");

// On attrape le bouton
const bouton = document.querySelector("#change-color-btn");

// On "écoute" l'événement 'click' sur le bouton
bouton.addEventListener("click", function() {
  // Ce code à l'intérieur de la fonction ne s'exécute QUE lorsque l'on clique
  titre.style.color = "red";
  console.log("Le bouton a été cliqué ! La couleur a changé.");
});