"use strict";

const wordBank =["voldemort", "quidditch", "ravenclaw", "snitch", "Lovegood", "azkaban", "dursley", "dumbledore", "minerva"]
let numberofGuessesleft = 12; //displays how many guesses are left for player
//Variables

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];



//Elements

// let wordChoice ;        // Lives
// var counter ;           // Count correct geusses
// var space;              // Number of spaces in word '-'


//Generating random words
let randomWord = Math.floor (Math.random() * wordBank.length); // Computer chooses random word
let chosenWord = wordBank[randomWord];                         // Word being guessed
let letterBlanks = [];                                         // Blank underscore

// Blank spaces based on wordlength
let wordChoice = () => {
for (let i = 0; i < chosenWord.length; i++) {
    letterBlanks.push('_'); 
}
return letterBlanks;

} 

// console.log(wordChoice());


function updateDisplay(){
    document.getElementById("numberofGuessesleft").innerText = numberofGuessesleft - 1;
    document.getElementById("chosenWord").innerHTML=" ";
    for(let i=0; i< rightLetter.length; i++) {
        document.getElementById("chosenWord").innerText == guessedLetter[i];
    }
}

document.keyPress = function(event) {
   if (event.keyCode >= 65 && event.keyCode < 91);
}
// chosenWord.addEventListener = ("keypress") => {
console.log("keypress");
// }




// alert(wordChoice);

// let chosenWordLength = chosenWord.length() = 3;
// alert(chosenWordLength);
// let dashWordLength = [];

// for(let dashCounter = 0; dashCounter >= chosenWordLength; dashCounter++) {
//     das
// }






// console.log (wordBank.word) 

// function getLetterArray();



// var words = [
//     ""
// ]































 




// let LetterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// let alphabet = getLetterArray();

// function gameOver() {
// 	if (letterBlanks.indexOf("_") === -1) {
// 		wins++;
// 		alert("winner winner");
// 	} else {
// 		losses++;
// 		alert("lost")
// 	}
	
// 	document.getElementById("winCount").innerHTML = wins;
// 	document.getElementById("lossCount").innerHTML = losses;


// // let wins = 0,
// // losses = 0,
// // correct = 0,
// // lives = 8,
// // lettersGuessed=[],
// // letterBlanks=[],
// // randomWord = "";
// // let word = "timeup";