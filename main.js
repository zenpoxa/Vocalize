/****************************
 * DICTIONNAIRE DE MOTS
 ***************************/
var dico = {
    "Rixe" : "nf. Querelle accompagnée d'injures et de coups ; bagarre.",
    "Houppelande" : "nf. Ample manteau sans manches.",

}

/****************************
 * JEU
 ***************************/
var idxMotAuPif;
var continuer;
var listeMots = Object.keys(dico);

function chooseAword () {
    continuer = false;

    idxMotAuPif = randomIntFromInterval(0, listeMots.length-1);
    document.querySelector("#word-to-define").innerHTML = listeMots[idxMotAuPif];
    document.querySelector("#word-definition").innerHTML = dico[listeMots[idxMotAuPif]];
    document.querySelector("div>details").open = false;
    document.querySelector("textarea").value = "";
}
chooseAword();

/****************************
 * BOITE A OUTILS
 ***************************/
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}