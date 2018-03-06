"use strict";

const wordBank =["quidditch","snitch", "minerva"]


let randomWord = [Math.floor (Math.random() * wordBank.length)]; 
let chosenWord = wordBank[randomWord];

let letterBlanks =[ ];

let wordChoice = () => {
    for (let i = 0; i < chosenWord.length; i++) {
    letterBlanks[i] = "_ ,";
    }
    return letterBlanks;
    let numberofLettersleft = randomWord.length;
    }
console.log(wordChoice());
    // document.getElementById("chosenWord").innerHTML= wordChoice();






    
// while (numberofLettersleft > 0) {
//     function updateDisplay() {
//     alert(letterBlanks.join(" "));

//     let guessedLetter = document.keyPress = function(event) {
//         if (event.keyCode >= 65 && event.keyCode < 91);

//     }


//     }        
  


    //   // Get a guess from the player
    //   var guess = prompt("Guess a letter");
    //   if (guess === null) {
    //
    //     for (let i = 0; i < word.length; j++) {
    //       if (word[i] === guess) {
    //         answerArray[i] = guess;
    //         remainingLetters--;
    //       }
    //     }
    //   }

    // // The end of the game loop
    // }
;




// let numberofGuessesleft = 12; //displays how many guesses are left for player
// //Variables

// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// //Generating random words
// let randomWord = Math.floor (Math.random() * wordBank.length); // Computer chooses random word
// let chosenWord = wordBank[randomWord];                         // Word being guessed
// let letterBlanks = [];                                         // Blank underscore

// // Blank spaces based on wordlength
// let wordChoice = () => {
// for (let i = 0; i < chosenWord.length; i++) {
//     letterBlanks.push('_'); 
// }
// return letterBlanks;

// } 

// // console.log(wordChoice()); (this works)


// function updateDisplay(){
//     document.getElementById("numberofGuessesleft").innerText = numberofGuessesleft - 1;
//     document.getElementById("chosenWord").innerHTML=" ";
//     for(let i=0; i< rightLetter.length; i++) {
//         document.getElementById("chosenWord").innerText == guessedLetter[i];
//     }
// }

// document.keyPress = function(event) {
//    if (event.keyCode >= 65 && event.keyCode < 91);
// }
// // chosenWord.addEventListener = ("keypress") => {
// console.log("keypress");
// // }


































 




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