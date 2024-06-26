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
    "Bas-bleu"          : "nm VIEILLI Femme pédante, à prétentions littéraires.",
    "Échancrer"         : "vt Creuser, découper une partie du bord de quelque chose.",
    "Manitou"           : "nm FAM Personne puissante ou qui fait autorité dans un domaine.",
    "Maraud"            : "n VX Scélérat, voleur.",
    "Verve"             : "nf Qualité de quelqu'un qui parle avec enthousiasme et brio.",
    "Diapré"            : "adf LITT De couleurs variées, vives.",
    "Lacis"             : "nm Réseau de fil ou de soie ; réseau de personnes, de routes...",
    "Fleurer"           : "vi Répandre une odeur ; évoquer.",
    "Biffer"            : "vt Rayer / effacer ce qui est écrit.",
    "Impavide"          : "adj LITT Sans peur, inébranlable.",
    "Soliloquer"        : "vi Se parler à soi-même.",
    "Supputer"          : "vt SOUT Essayer, d'après certaines données, de prévoir l'évolution d'une situation, la probabilité d'un événement : supputer les chances d'aboutir.",
    "Ruffian"           : "nm Débauché, voire proxénète ou voyou.",
    "Proxénétisme"      : "nm Activité délictueuse consistant à favoriser la prostitution d'autrui ou à en tirer profit.",
    "Vaticiner"         : "vi LITT, PÉJOR Prophétie pompeuse et oiseuse.",
    "Pléthore"          : "nf Suraboncance.",
    "Circonlocution"    : "nf Moyen détourné de parler, périphrase.",
    "Anomie"            : "nf Désorganisation sociale résultant de l'absence de normes communes dans une société.",
    "Tribulations"      : "nf pl Mésaventures.",
    "Primesautier"      : "adj Vif, alerte, spontané : esprit primesautier.",
    "Bouter"            : "vt Action qui consiste à mettre dehors quelqu'un, quelque chose.",
    "Pudibond"          : "adj Qui manifeste une pudeur excessive, ridicule.",
    "Flagornerie"       : "adj LITT Basse flatterie.",
    "Potentat"          : "nm 1. Souverain absolu d'un Etat puissant 2. FIG Homme qui dirige de façon tyrannique.",
    "Mirifique"         : "adj IRO Etonnant, merveilleux.",
    "Rodomontade"       : "nf LIIT Attitude prétentieuse.",
    "Forfanterie"       : "nf LITT Vantardise. Etaler ses prétendues vertus.",
    "Hédonisme"         : "nm Morale qui fait du plaisir, de la satisfaction des sens, le but de la vie.",
    "Impondérable"      : "adj SOUT 1. Difficile à évaluer, à prévoir 2. FIG Element ou circonstance imprévisible : se méfier des impondérables.",
    "Diatribe"          : "nf Critique amère et violente ; pamphlet.",
    "Tonitruant"        : "adj Bruyant comme le tonnerre : voix tonitruante.",
    "Fourbir"           : "vt Nettoyer ; polir : fourbir des armes.",
    "Encensoir"         : "nm Cassolette suspendue où brûle l'encens.",
    "Encenser"          : "vt 1. Agiter l'encensoir devant quelque chose : encenser un autel 2. FIG Flatter, honorer avec des louanges excessives : la presse l'encense.",
    "Quia (à)"          : "loc adv LITT être, mettre à quia : être réduit, réduire à ne pas pouvoir répondre.",
    "Velléité"          : "nf (surtout au pluriel) Volonté hésitante ; intention fugitive : avoir des velléités d'écrire.",
    "Compendieusement"  : "adv LITT Brièvement, succinctement.",
    "Glabelle"          : "nf Éminence médiane placée sur la partie verticale de l'os frontal.",
    "Prohibition"       : "nf Interdiction promulguée par une autorité.",
    "Nonobstant"        : "prép. Malgré.",
    "Indolent"          : "adj Nonchalant, apathique."
};

const dico_latin = {
    "Agricola"              : "Celui qui cultive la terre.",
    "Latum"                 : "Largeur. Dimension d'un bord à un autre.",
    "Curriculum"            : "1. Compétition, épreuve de vitesse 2. Activité impliquant une série d'étapes 3. (CV) Ensemble des renseignements conernant le passé d'une personne.",
    "Priori"                : "1. Antiérieur, qui précède dans le temps 2. Qui est au-dessus (plus remarquable).",
    "Fortiori"              : "Fort, solide, vigoureux.",
    "Visa"                  : "Choses vues - marque apposée sur les actes romains qui étaient vérifiés.",
    "Ad vitam aeternam"     : "Pour la vie éternelle ; jusqu'à la fin des jours.",
    "Posteriori"            : "Qui vient après dans le temps.",
    "Ad hominem"            : "1. Envers l'homme 2. Stratégie rhétorique qui consiste à utiliser les contradictions d'une personne pour marquer une distanciation."
};

const dico_codes = {
    "101"                   : "Capital social",
    "164"                   : "Emprunt",
    "120"                   : "Profit",
    "129"                   : "Perte",
    "13"                    : "Subvention",
    "203"                   : "R&D",
    "211"                   : "Terrain",
    "213"                   : "Construction",
    "215"                   : "Matériel industriel",
    "2183"                  : "Matériel informatique",
    "2182"                  : "Matériel de transport",
    "31"                    : "Stocks de MP",
    "35"                    : "Stocks de PF",
    "37"                    : "Stocks de marchandises (PF pas fabriqués soi-même)",
    "401"                   : "Fournisseur MP",
    "411"                   : "Client",
    "421"                   : "Personnel",
    "43"                    : "Organismes sociaux & fiscaux",
    "512"                   : "Banque",
    "53"                    : "Caisse (pièces & billets)",
    "601"                   : "Achat MP",
    "607"                   : "Achat de marchandises",
    "665"                   : "Escomptes accordés",
    "701"                   : "Vente PF",
    "706"                   : "Vente de prestations / services",
    "707"                   : "Vente de marchandises (revendeur)",
    "709"                   : "Rabais, remises et ristournes"
};



/****************************
 * JEUX
 ***************************/
const allGamesDivs = document.querySelectorAll("main>div:not(.game-choice)");
const allSpanTrans = document.querySelectorAll("main>span");
const transitionEndEventName = getTransitionEndEventName();
var typeOfGame;
var dico;

var gameChoiceBtns = document.querySelector("main>div.game-choice").querySelectorAll("button");
gameChoiceBtns.forEach(btn => {
    btn.addEventListener("click", load_game);
}, false)

function load_game(evt) {

    allSpanTrans.forEach(span => {
        span.classList.add("active");
    });
    typeOfGame = evt.currentTarget.getAttribute('data-game');
    allSpanTrans[0].addEventListener(transitionEndEventName, load_rest_of_game); // détecter la fin de l'animation
};

function load_rest_of_game() {

    // Finir l'animation d'apparition (wipe) de la fenêtre
    allSpanTrans.forEach(span => {
        span.classList.remove("active");
    });
    allSpanTrans[0].removeEventListener(transitionEndEventName, load_rest_of_game);

    // choisir le bon dictionnaire (manuellement fait ici)
    switch (typeOfGame) {
        case "vocabulaire":
            dico = dico_voc;
            break;

        case "latin":
            dico = dico_latin;
            break;

        case "codes":
            dico = dico_codes;
            break;

        default:
            break;
    }

    // activer le jeu (classe .active)
    allGamesDivs.forEach(div => {
        if (div.getAttribute('data-game') == typeOfGame) {
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
        document.querySelector("main>div.active div>details").open = false;
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
};





/****************************
 * BOITE A OUTILS
 ***************************/

// Prendre un incide aléatoirement, mais pas le droit de le voir 2 fois
function getIdxAuPif(min, max, hist) {
    let nb = randomIntFromInterval(min, max);

    if (max == hist.length-1) { // réinitialiser historique des mots parcourus si déjà tous faits
        hist.length = 0;
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
