let win = 0;
let score = document.getElementById("score");
let cards = document.getElementsByClassName("case");
let cardss = ["case1", "case2", "case3", "case4", "case5", "case6", "case7", "case8", "case9", "case10", "case11", "case12", "case13", "case14", "case15", "case16"];
let images = [
    "https://cdn.discordapp.com/attachments/689017273050202134/802291132331065344/141971792_1417424841942050_5879802797650236508_n.jpg", //Corygan
    "https://cdn.discordapp.com/attachments/689017273050202134/802291132331065344/141971792_1417424841942050_5879802797650236508_n.jpg", //Corygan
    "https://cdn.discordapp.com/attachments/689017273050202134/802291132331065344/141971792_1417424841942050_5879802797650236508_n.jpg", //Corygan
    "https://cdn.discordapp.com/attachments/689017273050202134/802291132331065344/141971792_1417424841942050_5879802797650236508_n.jpg", //Corygan
    "https://cdn.discordapp.com/attachments/689017273050202134/802291180955631637/141065446_2783136435273304_6106002463537366406_n.jpg", //Lou
    "https://cdn.discordapp.com/attachments/689017273050202134/802291180955631637/141065446_2783136435273304_6106002463537366406_n.jpg", //Lou
    "https://cdn.discordapp.com/attachments/689017273050202134/802291180955631637/141065446_2783136435273304_6106002463537366406_n.jpg", //Lou
    "https://cdn.discordapp.com/attachments/689017273050202134/802291180955631637/141065446_2783136435273304_6106002463537366406_n.jpg", //Lou
    "https://cdn.discordapp.com/attachments/689017273050202134/802291183014510622/141945080_459583015451019_8461059589718435587_n.jpg", //Coralie
    "https://cdn.discordapp.com/attachments/689017273050202134/802291183014510622/141945080_459583015451019_8461059589718435587_n.jpg", //Coralie
    "https://cdn.discordapp.com/attachments/689017273050202134/802291183014510622/141945080_459583015451019_8461059589718435587_n.jpg", //Coralie
    "https://cdn.discordapp.com/attachments/689017273050202134/802291183014510622/141945080_459583015451019_8461059589718435587_n.jpg", //Coralie
    "https://cdn.discordapp.com/attachments/689017273050202134/802291241084911716/141733271_703455240347663_8531103319793622144_n.jpg", //Lily
    "https://cdn.discordapp.com/attachments/689017273050202134/802291241084911716/141733271_703455240347663_8531103319793622144_n.jpg", //Lily
    "https://cdn.discordapp.com/attachments/689017273050202134/802291241084911716/141733271_703455240347663_8531103319793622144_n.jpg", //Lily
    "https://cdn.discordapp.com/attachments/689017273050202134/802291241084911716/141733271_703455240347663_8531103319793622144_n.jpg", //Lily
    "https://cdn.discordapp.com/attachments/689017273050202134/802291261674881044/v_t1.15752-9_141120991_1504480179750131_6874288660026297141_n.jpg", //Moi
    "https://cdn.discordapp.com/attachments/689017273050202134/802291261674881044/v_t1.15752-9_141120991_1504480179750131_6874288660026297141_n.jpg", //Moi
    "https://cdn.discordapp.com/attachments/689017273050202134/802291261674881044/v_t1.15752-9_141120991_1504480179750131_6874288660026297141_n.jpg", //Moi
    "https://cdn.discordapp.com/attachments/689017273050202134/802291261674881044/v_t1.15752-9_141120991_1504480179750131_6874288660026297141_n.jpg", //Moi
    "https://cdn.discordapp.com/attachments/689017273050202134/802291286370811924/141018068_173308090793714_8870579525725858227_n.jpg", //Camille
    "https://cdn.discordapp.com/attachments/689017273050202134/802291286370811924/141018068_173308090793714_8870579525725858227_n.jpg", //Camille
    "https://cdn.discordapp.com/attachments/689017273050202134/802291286370811924/141018068_173308090793714_8870579525725858227_n.jpg", //Camille
    "https://cdn.discordapp.com/attachments/689017273050202134/802291286370811924/141018068_173308090793714_8870579525725858227_n.jpg", //Camille
    "https://cdn.discordapp.com/attachments/689017273050202134/802291310949564456/142141904_3435508683243515_5541349003084947393_n.jpg", //Noëlan
    "https://cdn.discordapp.com/attachments/689017273050202134/802291310949564456/142141904_3435508683243515_5541349003084947393_n.jpg", //Noëlan
    "https://cdn.discordapp.com/attachments/689017273050202134/802291310949564456/142141904_3435508683243515_5541349003084947393_n.jpg", //Noëlan
    "https://cdn.discordapp.com/attachments/689017273050202134/802291310949564456/142141904_3435508683243515_5541349003084947393_n.jpg", //Noëlan
    "https://cdn.discordapp.com/attachments/689017273050202134/802293755276820480/image0.jpg", //Audrey
    "https://cdn.discordapp.com/attachments/689017273050202134/802293755276820480/image0.jpg", //Audrey
    "https://cdn.discordapp.com/attachments/689017273050202134/802293755276820480/image0.jpg", //Audrey
    "https://cdn.discordapp.com/attachments/689017273050202134/802293755276820480/image0.jpg" //Audrey
];
let randomCardss;
let randomImages;
let image = document.getElementsByTagName("img");
let nbClick = 1;

clickCards(0);
clickCards(1);
clickCards(2);
clickCards(3);
clickCards(4);
clickCards(5);
clickCards(6);
clickCards(7);
clickCards(8);
clickCards(9);
clickCards(10);
clickCards(11);
clickCards(12);
clickCards(13);
clickCards(14);
clickCards(15);

//place the pictures randomly in the 12 cards
//create an image with a url in a cards randomly and delete the id on cardss, for no repeat
for(let i = 0; i < cards.length; i++){
    randomCardss = cardss[Math.floor(Math.random() * cardss.length)];
    randomImages = images[i];
    let createimg = document.createElement("img");
    createimg.src = randomImages;
    createimg.id = "imageMarvel"+[i];
    let indexCardss = cardss.indexOf(randomCardss);
    let indexImages = images.indexOf(randomImages);
    document.getElementById(randomCardss).append(createimg);
    //delete the word on array cardss
    cardss.splice(indexCardss, 1);
    images.splice(indexImages, 1);

    //You can click on all the cards
    cards[i].addEventListener("click", function () {
        //if all the images are in display = "block", then we make the game disappear, we display the score, and the replay button
        if (document.getElementById("imageMarvel0").style.display === "block" && document.getElementById("imageMarvel1").style.display === "block" && document.getElementById("imageMarvel2").style.display === "block" && document.getElementById("imageMarvel3").style.display === "block" && document.getElementById("imageMarvel4").style.display === "block" && document.getElementById("imageMarvel5").style.display === "block" && document.getElementById("imageMarvel6").style.display === "block" && document.getElementById("imageMarvel7").style.display === "block" && document.getElementById("imageMarvel8").style.display === "block" && document.getElementById("imageMarvel9").style.display === "block" && document.getElementById("imageMarvel10").style.display === "block" && document.getElementById("imageMarvel11").style.display === "block" && document.getElementById("imageMarvel12").style.display === "block" && document.getElementById("imageMarvel13").style.display === "block" && document.getElementById("imageMarvel14").style.display === "block" && document.getElementById("imageMarvel15").style.display === "block"){
            setTimeout(function () {
                document.getElementById("game").style.display = "none";
                document.getElementById("window").style.display = "flex";
                score.innerHTML = 6;
            }, 2000);
        }
        if (nbClick < 2){
            nbClick++;
            clickCards(0);
            clickCards(1);
            clickCards(2);
            clickCards(3);
            clickCards(4);
            clickCards(5);
            clickCards(6);
            clickCards(7);
            clickCards(8);
            clickCards(9);
            clickCards(10);
            clickCards(11);
            clickCards(12);
            clickCards(13);
            clickCards(14);
            clickCards(15);
        }
        else if(nbClick === 2 ) {
            for (let i = 0; i < image.length; i++) {
                // Check if the 2 images are in display = "block" and if so, they disappear definitively, if they are not the same, they disappear but not definitively.
                if (document.getElementById("imageMarvel0").style.display === "block" && document.getElementById("imageMarvel1").style.display === "block") {
                    conditionDubleCase("imageMarvel0", "imageMarvel1");
                }
                if (document.getElementById("imageMarvel2").style.display === "block" && document.getElementById("imageMarvel3").style.display === "block") {
                    conditionDubleCase("imageMarvel2", "imageMarvel3");
                }
                if (document.getElementById("imageMarvel4").style.display === "block" && document.getElementById("imageMarvel5").style.display === "block") {
                    conditionDubleCase("imageMarvel4", "imageMarvel5");
                }
                if (document.getElementById("imageMarvel6").style.display === "block" && document.getElementById("imageMarvel7").style.display === "block") {
                    conditionDubleCase("imageMarvel6", "imageMarvel7");
                }
                if (document.getElementById("imageMarvel8").style.display === "block" && document.getElementById("imageMarvel9").style.display === "block") {
                    conditionDubleCase("imageMarvel8", "imageMarvel9");
                }
                if (document.getElementById("imageMarvel10").style.display === "block" && document.getElementById("imageMarvel11").style.display === "block") {
                    conditionDubleCase("imageMarvel10", "imageMarvel11");
                }
                if (document.getElementById("imageMarvel12").style.display === "block" && document.getElementById("imageMarvel13").style.display === "block") {
                    conditionDubleCase("imageMarvel12", "imageMarvel13");
                }
                if (document.getElementById("imageMarvel14").style.display === "block" && document.getElementById("imageMarvel15").style.display === "block") {
                    image[i].style.display = "none";
                    conditionDubleCase("imageMarvel14", "imageMarvel15");
                }
                //Otherwise the images will disappear in 1s
                else {
                    setTimeout(function () {
                        image[i].style.display = "none";
                        nbClick = 1;
                    }, 1000);
                }
            }
        }
    });
}

//replay the memory
document.getElementById("replay").addEventListener("click", function (){
    window.location.reload();
})

// when you click on a card, its image appears
function clickCards(index){
    for (let i = index; i < cards.length; i++){
        cards[index].addEventListener("click", function () {
            for (let i = index; i < image.length; i++) {
                image[index].style.display = "block";
            }
        });
    }
}

//if 2 images are identical then they remain displayed, ie in display = "block".
//I put a time interval of 1ms so that my images always remain displayed
function conditionDubleCase(id1, id2) {
    setInterval(function () {
        document.getElementById(id1).style.display = "block";
        document.getElementById(id2).style.display = "block";
    }, 1);
}