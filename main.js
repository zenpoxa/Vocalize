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
var idxMotAuPif = -1;
var continuer;
var listeMots = Object.keys(dico);
var bouton = document.querySelector("details+button");
var divWipe = document.querySelector("#word-to-define+div");

function chooseAword () {
    continuer = false;

    idxMotAuPif = randomIntFromInterval(0, listeMots.length-1, idxMotAuPif);
    document.querySelector("#word-to-define").innerHTML = listeMots[idxMotAuPif];
    document.querySelector("#word-definition").innerHTML = dico[listeMots[idxMotAuPif]];
    document.querySelector("textarea").value = "";
}
chooseAword();

const transitionEndEventName = getTransitionEndEventName();

function normalWipe() {
    divWipe.classList.add("active");
    document.querySelector("div>details").open = false;
    divWipe.addEventListener(transitionEndEventName, reverseWipe);
}

function reverseWipe() {
    divWipe.removeEventListener(transitionEndEventName, reverseWipe);
    chooseAword();
    divWipe.classList.remove("active");
}

bouton.addEventListener("click", normalWipe);


/****************************
 * BOITE A OUTILS
 ***************************/

    // min et max inclus
function randomIntFromInterval(min, max, former) {
    let nb = Math.floor(Math.random() * (max - min + 1) + min)
    if (nb == former) {
        return (randomIntFromInterval(min, max, former))
    }
    else {
        return nb;
    }
}

    // obtenir la propriété de fin d'événement selon le moteur
function getTransitionEndEventName() {
    var transitions = {
        "transition"      : "transitionend",
        "OTransition"     : "oTransitionEnd",
        "MozTransition"   : "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
     }
    let bodyStyle = document.body.style;
    for(let transition in transitions) {
        if(bodyStyle[transition] != undefined) {
            return transitions[transition];
        } 
    }
  }
