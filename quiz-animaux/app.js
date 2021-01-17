let quizAnimaux = [
    {"numero" : 1, "Question" : "Quel est la famille du chien ?", "choix1" : "Félidés", "choix2" : "Canidés", "choix3" : "Bovin", "choix4" : "Amphibien", "image" : "https://images.unsplash.com/photo-1506903536293-8419385acdce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 2, "Question" : "Comment s'appelle l'ancêtre commun à tous les êtres vivants ?", "choix1" : "LOLA", "choix2" : "LUCA", "choix3" : "ZOE", "choix4" : "REMI", "image" : "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1hbHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 3, "Question" : "Comment appelle-t-on les animaux voyant la nuit ?", "choix1" : "Nyctalope", "choix2" : "Negrophile", "choix3" : "Nocturne", "choix4" : "Fisdupe", "image" : "https://images.unsplash.com/photo-1571659315127-8e882c129e0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8b3dsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 4, "Question" : "Quel animal ne vole pas ?", "choix1" : "Le pingouin", "choix2" : "La cigogne", "choix3" : "Le pélican", "choix4" : "Le manchot", "image" : "https://images.unsplash.com/photo-1582487809094-520150fdb872?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGVuZ3VpbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 5, "Question" : "Combien une pieuvre possède-t-elle de tentacules ?", "choix1" : "12", "choix2" : "10", "choix3" : "8", "choix4" : "6", "image" : "https://images.unsplash.com/photo-1548645933-c62d4468cbb9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8b2N0b3B1c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 6, "Question" : "Comment appelle-t-on les 'pattes' d'un rapace ?", "choix1" : "Les serres", "choix2" : "Les aiguises", "choix3" : "Les griffes", "choix4" : "Les attrapes-tous", "image" : "https://images.unsplash.com/photo-1546930712-6be020e9538a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fHJhcHRvcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 7, "Question" : "Quel nom porte l’habitat du castor ?", "choix1" : "Une tanière", "choix2" : "Une aire", "choix3" : "Une hutte", "choix4" : "Un terrier", "image" : "https://images.unsplash.com/photo-1563155853-f7f8955967ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXZlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 8, "Question" : "Comment appelle-t-on la femelle du sanglier ?", "choix1" : "La sanglia", "choix2" : "La marcasse", "choix3" : "La truie", "choix4" : "La laie", "image" : "https://images.unsplash.com/photo-1610279559937-b9d8251b2396?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9hcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 9, "Question" : "Quels sont les deux sens du chat les plus développés ?", "choix1" : "L'ouïe et le toucher", "choix2" : "La vue et l'ouïe", "choix3" : "L'odorat et le goût", "choix4" : "La vue et le toucher", "image" : "https://images.unsplash.com/photo-1547045662-e5a75e7238c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"},
    {"numero" : 10, "Question" : "Quel est le cri de la brebis ?", "choix1" : "Le bêlement", "choix2" : "Le beuglement", "choix3" : "Le vagissement", "choix4" : "Le jappement", "image" : "https://images.unsplash.com/photo-1543305235-49385f50ccdc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIyfHxzaGVlcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}
]
let index = 0;
let buttonNext = $("#enterNext");
let result = $("#result");
let choice1 = $("#choice1");
let choice2 = $("#choice2");
let choice3 = $("#choice3");
let choice4 = $("#choice4");
let answerAll = $("#answerAll");
let score = 0;

//Question 1
$("#numero").html(quizAnimaux[0].numero);
$("#questions").html(quizAnimaux[0].Question);
$("#labelChoice1").html(quizAnimaux[0].choix1);
$("#labelChoice2").html(quizAnimaux[0].choix2);
$("#labelChoice3").html(quizAnimaux[0].choix3);
$("#labelChoice4").html(quizAnimaux[0].choix4);
$("#imageQuestion").attr("src", quizAnimaux[0].image);

//animation
$("#question2").fadeOut();
$("#question2").fadeIn();
//the answer to each question
let answerQuestion1 = quizAnimaux[0].choix2;
let answerQuestion2 = quizAnimaux[1].choix2;
let answerQuestion3 = quizAnimaux[2].choix1;
let answerQuestion4 = quizAnimaux[3].choix4;
let answerQuestion5 = quizAnimaux[4].choix3;
let answerQuestion6 = quizAnimaux[5].choix1;
let answerQuestion7 = quizAnimaux[6].choix3;
let answerQuestion8 = quizAnimaux[7].choix4;
let answerQuestion9 = quizAnimaux[8].choix2;
let answerQuestion10 = quizAnimaux[9].choix1;

//When we press enter, we go to the next quiz and we check if the answer is right or wrong
buttonNext.click(function () {
    answerQuiz(0, choice2, answerQuestion1); //answers qst 1
    answerQuiz(1, choice2, answerQuestion2); //answers qst 2
    answerQuiz(2, choice1, answerQuestion3); //answers qst 3
    answerQuiz(3, choice4, answerQuestion4); //answers qst 4
    answerQuiz(4, choice3, answerQuestion5); //answers qst 5
    answerQuiz(5, choice1, answerQuestion6); //answers qst 6
    answerQuiz(6, choice3, answerQuestion7); //answers qst 7
    answerQuiz(7, choice4, answerQuestion8); //answers qst 8
    answerQuiz(8, choice2, answerQuestion9); //answers qst 9
    answerQuiz(9, choice1, answerQuestion10); //answers qst 10

    if(index === 9) {
        result.css({"display": "block"});
        buttonNext.css({"display": "none"});
    }
    else {
        index ++;
    }
    $("#question2").fadeOut(300);
    $("#question2").fadeIn(1000);
    $("#numero").html(quizAnimaux[index].numero);
    $("#questions").html(quizAnimaux[index].Question);
    $("#labelChoice1").html(quizAnimaux[index].choix1);
    $("#labelChoice2").html(quizAnimaux[index].choix2);
    $("#labelChoice3").html(quizAnimaux[index].choix3);
    $("#labelChoice4").html(quizAnimaux[index].choix4);
    $("#imageQuestion").attr("src", quizAnimaux[index].image);
    $("input:radio").prop("checked", false);
})

//When you press result, the final score is displayed and the answers too
result.click(function () {
    $("#question2").css({"display" : "none"});
    $("#score").html(score);
    $("#resultFinal").css({"display" : "block"});
    answerAll.css({"display" : "block"});
    answerAll.append("<p id='final'>Les réponses étaient : </p>");
    answerAll.append("<p>Question 1 : " + answerQuestion1 + "</p>");
    answerAll.append("<p>Question 2 : " + answerQuestion2 + "</p>");
    answerAll.append("<p>Question 3 : " + answerQuestion3 + "</p>");
    answerAll.append("<p>Question 4 : " + answerQuestion4 + "</p>");
    answerAll.append("<p>Question 5 : " + answerQuestion5 + "</p>");
    answerAll.append("<p>Question 6 : " + answerQuestion6 + "</p>");
    answerAll.append("<p>Question 7 : " + answerQuestion7 + "</p>");
    answerAll.append("<p>Question 8 : " + answerQuestion8 + "</p>");
    answerAll.append("<p>Question 9 : " + answerQuestion9 + "</p>");
    answerAll.append("<p>Question 10 : " + answerQuestion10 + "</p>");
    answerAll.append("<img src='https://tse1.mm.bing.net/th?id=OIP.6VoUv1SLxrkw3NajqRjYBAHaE7&pid=Api&P=0&w=243&h=163'> Merci pour t'as participation !")
});

//check if the answer is right or wrong
function answerQuiz(i, id, answer){
    if(index === i){
        if(id.is(':checked')){
            alert("Bonne réponse !");
            score++;
        }
        else {
            alert("Mauvaise réponse ! C'était " + answer + "." );
        }
    }
}