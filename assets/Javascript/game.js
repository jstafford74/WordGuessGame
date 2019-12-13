const vowels = ['a', 'e', 'i', 'o', 'u']
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's',
    't', 'v', 'w', 'x', 'y', 'z'];

const wordsList = [];
gradeBasic = ["hat", "bet", "bear", "blue", "flab", "crib", "stump", "made", "frame", "grape", "track", "stand", "want", "chalk", "track"];
gradeInter = ["sharks", "sharp", "arctic", "born", "forward", "form", "forest", "apron", "music", "replied", "began", "anthill", "daylight", "handstand", "sunrise"];
gradeAdvan = ["conflicts", "examples", "helpful", "imagine", "plans", "printed", "problems", "upset", "echoed", "scrambled", "reeds", "valley", "gully", "clutched"];

// Player chooses level of difficulty 
// Selected word
const wordList = [];
let lettersCorr;        // Letters in chosen word
let gameCounter = -1;
let theWord;
let inWord
let numBlanks;           // Number of blanks to show
let guessed;            // User's Guess
const wrongGuesses = [];       // Stored guesses
let winCounter = 0;          // Count games won
let lossCounter = 0;         // Count games lost
let games = 0;               // Count games played
let numGuesses = 10;         // Count number of guesses


//Functions to load when window is ready
// Create alphabet buttons



vwlButts();
conButts();
$(".letter").on("click", ltrFunc);
document.getElementById("bas").addEventListener("click", startGame);
document.getElementById("int").addEventListener("click", startGame);
document.getElementById("adv").addEventListener("click", startGame);


function vwlButts() {
    vwlButts = $('#vowel-btns');
    vDiv = $('<div>');
    vowels.forEach(v => {
        vlist = $('<button>');
        vlist.attr("type", "button");
        vlist.addClass("col-2 btn btn-dark letter");
        vlist.text(v.toUpperCase());
        vlist.attr("id", "letter");
        vDiv.append(vlist);
    });
    vwlButts.append(vDiv);

}

function conButts() {
    conButts = $('#consonant-btns');
    cDiv = $('<div>');
    consonants.forEach(c => {
        clist = $('<button>');
        clist.attr("type", "button");
        clist.addClass("col-2 btn btn-dark letter");
        clist.attr("id", "letter");
        clist.text(c.toUpperCase());
        cDiv.append(clist);
    });
    conButts.append(cDiv);

}


function ltrFunc(guess) {
    var guess = this.innerHTML;
    czechLtr(guess);
    console.log(lettersCorr);
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("hold").innerHTML = lettersCorr.join('');
    document.getElementById("guesses").innerHTML = wrongGuesses;

}

// roundComplete();


function czechLtr(guess) {
    inWord = false
    const indi = [];
    for (let i = 0; i < theWord.length; i++) {
        if (theWord[i] == guess.toLowerCase()) {
            inWord = true;
            indi.push(i);
        }
    }

    if (!inWord) {
        numGuesses--;
        wrongGuesses.push(guess);
    } else {
        for (j = 0; j < indi.length; j++) {
            const x = indi[j];
            lettersCorr[x] = guess;
            console.log(lettersCorr);
        }
        return lettersCorr;
    }
}



function choseWord(arr) {
    const chosenWord = arr[[Math.floor(Math.random() * arr.length + 1)]];
    wordList.push(chosenWord);

}

function startGame() {
    level = this.id;
    gameCounter++;
    switch (level) {
        case "bas":
            choseWord(gradeBasic);
            break;
        case "int":
            choseWord(gradeInter);
            break;
        case "adv":
            choseWord(gradeAdvan);
            break;
        default:
            alert("Please Choose a Level");
    }
    theWord = wordList[gameCounter];
    lettersCorr = theWord.split('').map((ltr => "_"));
    numBlanks = lettersCorr.length;
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("hold").innerHTML = lettersCorr.join('');
    document.getElementById("guesses").innerHTML = wrongGuesses.join(" ");

    console.log(theWord);
}



function roundComplete() {
    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | Games: " + games);
    // HTML UPDATES
    document.getElementById("guesses-left").innerHTML = numGuesses;
    if (lettersCorr.toString() === curState.toString()) {
        winCounter++;
        games++;
        alert("You win!");
        document.getElementById("win-counter").innerHTML = winCounter;
        document.getElementById("games-played").innerHTML = games;

    }
    else if (numGuesses === 0) {
        lossCounter++;
        games++;
        alert("You lose");
        document.getElementById("loss-counter").innerHTML = lossCounter;
        document.getElementById("games-played").innerHTML = games;

    }
}

