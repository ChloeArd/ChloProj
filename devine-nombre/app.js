let button = document.getElementById("entrer");
let donner = document.getElementById("donner");
let repeter = document.getElementsByClassName("repet");

let random = Math.random() * (100 - 1) + 1;
random = Math.trunc(random);

let nbEssais = 0;

function bouton () {

    let input1 = document.getElementById("input1").value;
    input1 = parseInt(input1);
    nbEssais++;

    if (input1 > random) {
        position("red", "Tu es haut !");
    }
    if (input1 < random) {
        position("red", "Tu es bas !");
    }
    if (isNaN(input1)) {
        position("red", " T'as cru m'avoir? Mes un chiffre !");
    }
    if (input1 === random) {
        position("green", "Tu as trouvé le bon nombre, en " + nbEssais + " essais. BRAVOOOO !" );
    }
    if (nbEssais === 10) {
        position("red", "Ahaha loupé ! Le nombre correct était " + random + ".");
        location.reload();
    }

    for (let i = 0; i < input1; i++) {
        let nombreDit = document.createElement('li');
        nombreDit.innerHTML = "Nombre utilisé: " + document.getElementById("input1").value;
        nombreDit.style.color = "blue"
        repeter.item(i).append(nombreDit);
    }
}

button.addEventListener("click", bouton);

function position (color, text) {
    let position = document.createElement('p');
    position.innerHTML = text;
    position.style.color = color;
    donner.append(position);
}