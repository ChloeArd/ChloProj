let input1 = document.getElementById("input1")

//Les boutons nombres et virgules:
//Bouton 0
document.getElementById("zero").addEventListener("click", function() {
    input1.value += 0;
});

//Bouton 1
document.getElementById("un").addEventListener("click", function() {
    input1.value += 1;
});

//Bouton 2
document.getElementById("deux").addEventListener("click", function() {
    input1.value += 2 ;
});

//Bouton 3
document.getElementById("trois").addEventListener("click", function() {
    input1.value += 3;
});

//Bouton 4
document.getElementById("quatre").addEventListener("click", function() {
    input1.value += 4;
});

//Bouton 5
document.getElementById("cinq").addEventListener("click", function() {
    input1.value += 5;
});

//Bouton 6
document.getElementById("six").addEventListener("click", function() {
    input1.value += 6;
});

//Bouton 7
document.getElementById("sept").addEventListener("click", function() {
    input1.value += 7;
});

//Bouton 8
document.getElementById("huit").addEventListener("click", function() {
    input1.value += 8;
});

//Bouton 9
document.getElementById("neuf").addEventListener("click", function() {
    input1.value += 9;
});

//Bouton virgule
document.getElementById("virgule").addEventListener("click", function() {
    input1.value += ".";
});

//Les boutons d'opérations:
document.getElementById("addition").addEventListener("click", function() {
    input1.value += "+";
});

document.getElementById("soustraction").addEventListener("click", function() {
    input1.value += "-";
});

document.getElementById("multiplication").addEventListener("click", function() {
    input1.value += "*";
});

document.getElementById("modulo").addEventListener("click", function() {
    input1.value += "%";
});

// Bouton égal
document.getElementById("result").addEventListener("click", function result () {
    let resultat = input1.value;
    input1.value = eval(resultat);
});

// Le bouton reset:
document.getElementById("reset").addEventListener("click", function reset() {
    input1.value = "";
});
