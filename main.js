/****************************
 * DICTIONNAIRE DE MOTS
 ***************************/
var dico = {
    "Rixe" : "nf Querelle accompagnée d'injures et de coups ; bagarre.",
    "Houppelande" : "nf Ample manteau sans manches.",
    "Circonspection" : "nf Prudence, discrétion dans ses actes ou ses paroles.",
    "Rabot" : "nm Outil de menuisier pour aplanir le bois ou le moulurer.",
    "Attifer" : "vt FAM Habiller d'une manière bizarre.",
    "Antonomase" : "nf Procédé d'expression par lequel un personnage est désigné par un nom commnun (le général pour de Gaulle) ou par lequel un nom propre est pris pour un nom commun (un harpagon pour un avare).",
    "Dithyrambique" : "adj Très élogieux.",
    "Sigisbée" : "nm Chevalier servant d'une dame.",
    "Récital" : "nm Concert, spectacle donné par un seul artiste, un seul groupe, ou consacré à un seul genre.",
    "Percépteur" : "n Fonctionnaire du Trésor chargé de recouvrer les impôts directs.",
    "Rétif" : "adj 1. Qui s'arrête ou recule au lieu d'avancer : cheval rétif 2. FIG Indocile, récalcitrant.",
    "Proéminent" : "adj En relief par rapport à ce qui est autour ; saillant.",
    "Helvète" : "adj n De la Suisse.",
    "Placide" : "adj Calme, paisible, serein.",
    "Chétif" : "adj De faible constitution, maigre.",
    "Prolixe" : "adj Diffus, trop long, bavard : discours prolixe.",
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
