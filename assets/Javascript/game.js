const vowels = ['a', 'e', 'i', 'o', 'u']
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's',
    't', 'v', 'w', 'x', 'y', 'z'];

const wordsList = [];
gradeBasic = ["hat", "bet", "bear", "blue", "flab", "crib", "stump", "made", "frame", "grape", "track", "stand", "want", "chalk", "track"];
gradeInter = ["sharks", "sharp", "arctic", "born", "forward", "form", "forest", "apron", "music", "replied", "began", "anthill", "daylight", "handstand", "sunrise"];
gradeAdvan = ["conflicts", "examples", "helpful", "imagine", "plans", "printed", "problems", "upset", "echoed", "scrambled", "reeds", "valley", "gully", "clutched"];

// Player chooses level of difficulty 
let chosenWord;         // Selected word
const wordList = [];
const lettersCorr = [];        // Letters in chosen word
let numBlanks;           // Number of blanks to show
const curState = [];           // Number of right guesses and blanks left
let guessed;            // User's Guess
const wrongGuesses = [];       // Stored guesses
let winCounter = 0;          // Count games won
let lossCounter = 0;         // Count games lost
let games = 0;               // Count games played
let numGuesses = 10;         // Count number of guesses


//Functions to load when window is ready
// Create alphabet buttons


// $(document).ready(() => {
    vwlButts();
    conButts();
    $(".letter").on("click", ltrFunc(this.innerHTML));

// });
// $('.letter').on('click', '.btn', () => {
//     const guess = $(this).text();
//     console.log(guess);
// numGuesses--;
// guessed = guess;
// // console.log(numGuesses,chosenWord);
// if (guessed != "") {
//     checkLetters(guessed);
//     wrongGuesses.push(guessed.toUpperCase());
//     document.getElementById("guesses").innerHTML = wrongGuesses.join(" ");

// }
// });

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

    numGuesses--;
    checkLetters(guess);
    wrongGuesses.push(guess.toUpperCase());
    document.getElementById("guesses").innerHTML = wrongGuesses.join(" ");

}
// roundComplete();



//Assign events to level buttons
document.getElementById("bas").addEventListener("click", function () {
    level = this.id;
    console.log(level);
    chosenWord = gradeBasic[Math.floor(Math.random() * gradeBasic.length + 1)];
    console.log(chosenWord);
    startGame();



});

document.getElementById("int").addEventListener("click", function () {
    level = this.id;
    console.log(level);
    chosenWord = gradeInter[Math.floor(Math.random() * gradeInter.length + 1)];
    console.log(chosenWord);
    startGame();

});

document.getElementById("adv").addEventListener("click", function () {
    level = this.id;
    console.log(level);
    chosenWord = gradeAdvan[Math.floor(Math.random() * gradeAdvan.length + 1)];
    console.log(chosenWord);

    startGame();

});


function startGame() {
    numGuesses = 10;
    lettersCorr.push(chosenWord.split(""));
    console.log(lettersCorr[0].length);
    numBlanks = lettersCorr[0].length;
    const curState = [];
    const wrongGuesses = [];
    lettersCorr[0].forEach(it => {
        curState.push("_");
    })

    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("hold").innerHTML = curState.join(" ");
    document.getElementById("guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {
    let letterInWord = false;
    for (const i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
            curState[j] = letter;
        }
    }

    // if (letterInWord) {
    //     for (const j = 0; j < numBlanks; j++) {
    //         if (chosenWord[j] === letter) {
    //             curState[j] = letter;

    //         }
    document.getElementById("hold").innerHTML = curState.join(" ");
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

