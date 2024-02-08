/****************************
 * DICTIONNAIRES
 ***************************/

    // Longueur max d'un mot : 13 caractères
const dico_voc = {
    "Rixe"              : "nf Querelle accompagnée d'injures et de coups ; bagarre.",
    "Houppelande"       : "nf Ample manteau sans manches.",
    "Circonspection"    : "nf Prudence, discrétion dans ses actes ou ses paroles.",
    "Rabot"             : "nm Outil de menuisier pour aplanir le bois ou le moulurer.",
    "Attifer"           : "vt FAM Habiller d'une manière bizarre.",
    "Antonomase"        : "nf Procédé d'expression par lequel un personnage est désigné par un nom commnun (le général pour de Gaulle) ou par lequel un nom propre est pris pour un nom commun (un harpagon pour un avare).",
    "Dithyrambique"     : "adj Très élogieux.",
    "Sigisbée"          : "nm Chevalier servant d'une dame.",
    "Récital"           : "nm Concert, spectacle donné par un seul artiste, un seul groupe, ou consacré à un seul genre.",
    "Percépteur"        : "n Fonctionnaire du Trésor chargé de recouvrer les impôts directs.",
    "Rétif"             : "adj 1. Qui s'arrête ou recule au lieu d'avancer : cheval rétif 2. FIG Indocile, récalcitrant.",
    "Proéminent"        : "adj En relief par rapport à ce qui est autour ; saillant.",
    "Helvète"           : "adj n De la Suisse.",
    "Placide"           : "adj Calme, paisible, serein.",
    "Chétif"            : "adj De faible constitution, maigre.",
    "Prolixe"           : "adj Diffus, trop long, bavard : discours prolixe.",
    "Laconisme"         : "nm Concision dans l'expression.",
    "Dundee"            : "nm Bateau de pêche à deux mâts.",
    "Bas-bleu"          : "nm VIEILLI Femme pédante, à prétentions littéraires."
}

const dico_latin = {
    "Rixe"              : "abcd",
    "Houppelande"       : "abcd",
    "Circonspection"    : "abcd",
    "Rabot"             : "abcd",
    "Attifer"           : "abcd",
    "Antonomase"        : "abcd",
    "Dithyrambique"     : "abcd",
    "Sigisbée"          : "abcd",
    "Récital"           : "abcd",
    "Percépteur"        : "abcd",
    "Rétif"             : "abcd",
    "Proéminent"        : "abcd",
    "Helvète"           : "abcd",
    "Placide"           : "abcd",
    "Chétif"            : "abcd",
    "Prolixe"           : "abcd",
    "Laconisme"         : "abcd",
    "Dundee"            : "abcd",
    "Bas-bleu"          : "abcd"
}



/****************************
 * JEUX
 ***************************/
const allGamesDivs = document.querySelectorAll("main>div:not(.game-choice)");

var gameChoiceBtns = document.querySelector("main>div.game-choice").querySelectorAll("button");
gameChoiceBtns.forEach(btn => {
    btn.addEventListener("click", load_game);
}, false)

function load_game(evt) {

    // choisir le bon dictionnaire (manuellement fait ici)
    var typeOfGame = evt.currentTarget.getAttribute('data-game');
    var dico;
    switch (typeOfGame) {
        case "vocabulaire":
            dico = dico_voc;
            break;

        case "latin":
            dico = dico_latin;
            break;

        default:
            break;
    }

    // activer le jeu (classe .active)
    allGamesDivs.forEach(div => {
        if (div.getAttribute('data-game') == evt.currentTarget.getAttribute('data-game')) {
            div.classList.add('active');
        }
    })

    // effacer le menu des jeux à choisir
    document.querySelector("main>div.game-choice").remove();

    // boîte à outils de variables
    var idxMotAuPif = -1;
    var idxMotAuPifHist = [];
    var listeMots = Object.keys(dico);
    var bouton = document.querySelector("main>div.active details+button");
    var divWipe = document.querySelector("main>div.active #word-to-define+div");
    const transitionEndEventName = getTransitionEndEventName();

    // choisir un mot à définir
    function chooseAword () {
        idxMotAuPif = getIdxAuPif(0, listeMots.length-1, idxMotAuPifHist);
        document.querySelector("main>div.active #word-to-define").innerHTML = listeMots[idxMotAuPif];
        document.querySelector("main>div.active #word-definition").innerHTML = dico[listeMots[idxMotAuPif]];
    }
    chooseAword(); // appel initial lors du chargement de la page

    // effacer le mot à définir
    function normalWipe() {
        divWipe.classList.add("active");
        document.querySelector("div>details").open = false;
        divWipe.addEventListener(transitionEndEventName, reverseWipe);
    }

    // faire apparaître un nouveau mot à définir
    function reverseWipe() {
        divWipe.removeEventListener(transitionEndEventName, reverseWipe);
        chooseAword();
        divWipe.classList.remove("active");
    }

    // changement de mot avec belle animation d'effacement
    bouton.addEventListener("click", normalWipe);

}





/****************************
 * BOITE A OUTILS
 ***************************/

// Prendre un incide aléatoirement, mais pas le droit de le voir 2 fois
function getIdxAuPif(min, max, hist) {
    let nb = randomIntFromInterval(min, max);

    if (max == hist.length-1) { // réinitialiser historique des mots parcourus si déjà tous faits
        hist = [];
    }

    if (!hist.includes(nb)) { // si idx jamais vu dans l'historique actuel, alors le prendre
        hist.push(nb);
        return nb;
    }
    else { // sinon en prendre un autre
        return (getIdxAuPif(min, max, hist));
    }
}

// Min et max inclus
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Obtenir la propriété de fin d'événement selon le moteur
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
