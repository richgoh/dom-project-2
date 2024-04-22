//Code JavaScript pour attendre que le contenu DOM soit chargé à l'aide de l'événement "DOMContentLoaded".
document.addEventListener("DOMContentLoaded", function() {

// Sélection des éléments "color-box" et "change-color-btn" à l'aide de "document.getElementById()". 
    const colorBox = document.getElementById("color-box"); 
    const changeColorBtn = document.getElementById("change-color-btn");

    // Fonction pour générer une couleur aléatoire en RGB
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256); // Valeur de rouge aléatoire entre 0 et 255
        const g = Math.floor(Math.random() * 256); // Valeur de vert aléatoire entre 0 et 255
        const b = Math.floor(Math.random() * 256); // Valeur de bleu aléatoire entre 0 et 255
        return `rgb(${r},${g},${b})`; // Retourne la couleur au format "rgb(r,g,b)"
    }

    // Ajout d'un écouteur d'événements au bouton pour changer la couleur
    changeColorBtn.addEventListener("click", function() {
        const randomColor = getRandomColor(); // Génère une couleur aléatoire
        colorBox.style.backgroundColor = randomColor; // Applique la couleur au fond de la boîte
    });
});
