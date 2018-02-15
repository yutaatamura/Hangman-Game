var words = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
var computerOutput;
var separated;
var guesses = 3;
var userInputLetter;
var lettersGuessed = [];
var letterLocationIndex = [];
var double = false;
var match = false;
var displayAnswer;
var userWins = 0;
var userLosses = 0;

function selectWord() {

computerOutput = words[Math.floor(Math.random() * words.length)];
console.log(computerOutput);
separated = computerOutput.split("");
console.log(separated);
displayAnswer = new Array(separated.length).fill(" _ ");
document.getElementById("displayAnswer").innerHTML = displayAnswer.join(' ');
//use array.join(' ') to display values without the commas
};

document.onload = selectWord();
document.onload = update();

function checkDouble() {
     for (var i = 0; i < lettersGuessed.length; i++) {
         for (var j = i+1; j < lettersGuessed.length; j++) {
             console.log("J loop");    
             if (lettersGuessed[i] == lettersGuessed[j] && i != j) {
                 double = true; 
                 console.log("Double is now true");
                 lettersGuessed.splice(i, 1);
                 alert("You have already guessed this letter, try again.");
              
                 }
             }
         }
     };

function compare() {    
     if (double != false) {
         console.log("We are in the compare function where double != false");
         double = false; //reset double
         return; 
     } else {
         
        for (var i = 0; i < separated.length; i++) {
             if (userInputLetter === separated[i]) {
                 match = true;
                letterLocationIndex.push(i);
                console.log("letterLocationIndex should be updated");
                for (var i = 0; i < letterLocationIndex.length; i++) {
                displayAnswer.splice(letterLocationIndex[i],1,userInputLetter);
                document.getElementById("displayAnswer").innerHTML = displayAnswer.join(' '); 
                }           
                 }
                };
                
                letterLocationIndex = []; //reset array    
             };

             if (match != true) {
                 guesses--;
                 alert("Wrong! Try again!");
                 update();
            } else {
                alert("Nice guess!");
                update();
                match = false;
            }
        };
            
function reset() {
    lettersGuessed = [];
    guesses = 3;
    update();
    selectWord();
};
   

function update() {
        document.getElementById("userLosses").innerHTML = userLosses; 
        document.getElementById("userWins").innerHTML = userWins;
        document.getElementById("guessesLeft").innerHTML = guesses; 
        document.getElementById("guessedLetters").innerHTML = lettersGuessed;
 };


document.onkeyup = function(event) {
    
    userInputLetter = String.fromCharCode(event.which).toLowerCase();
    
     // pushes userInputLetter into the array lettersGuessed
     lettersGuessed.push(" " + userInputLetter);
     checkDouble();
     compare();

        if (displayAnswer.join("") === separated.join("")) {
            userWins++;
            alert("Congrats! You guessed it!");
            reset();
            update();
        }

        if (guesses === 0) {
            userLosses++;
            alert("Sorry, you couldn't guess it.");
            reset();
            update();
        }
    
    };








// var userWins = 0; 
// var userLosses = 0;
// var guesses = 9;
// var lettersGuessed = [];
// var computerOutput;
// var userInputLetterGlobal;
// var double = false;
 
 
//  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//  document.getElementById("guessesLeft").innerHTML = guesses;

//  document.onload = generateRandomLetter();

//  //generates random number from 0 to letters.length (26), and selects index in 'letters' array
//  function generateRandomLetter () {

//  computerOutput = letters[Math.floor(Math.random() * letters.length)];
//  console.log(computerOutput);
//  };

//  function update() {
//      document.getElementById("userLosses").innerHTML = userLosses; 
//      document.getElementById("userWins").innerHTML = userWins;
//      document.getElementById("guessesLeft").innerHTML = guesses; 
//      document.getElementById("guessedLetters").innerHTML = lettersGuessed;
//  };

// function reset() {
//     lettersGuessed = [];
//     guesses = 9;
//     update();
//     generateRandomLetter();
// };

// function checkDouble() {
//  for (var i = 0; i < lettersGuessed.length; i++) {
//      for (var j = i+1; j < lettersGuessed.length; j++) {
//          console.log("J loop");    
//          if (lettersGuessed[i] == lettersGuessed[j] && i != j) {
//              double = true; 
//              console.log("Double is now true");
//              lettersGuessed.splice(i, 1);
//              alert("You have already guessed this letter, try again.");
          
//              }
//          }
//      }
//  };


// function compare() {
//      if (double != false) {
//          console.log("We are in the compare function where double != false");
//          double = false; //reset double
//          return; 
//      } else {
//          if (userInputLetterGlobal === computerOutput) {
//          alert("Correct! You guessed it right!");
//          userWins++;
//          reset();
//          update();
     
//           } else {
//          alert("WRONG! Try again!");
//          guesses--;
//          if (guesses === 0) {
//              userLosses++
//              reset();
//          };
//          update();  
//          }
//      }
//  };


// //on key up, gets event.which ASCII number and converts to a string letter using fromCharCode. Converts any capital letters to lower case.
// document.onkeyup = function(event) {

//  var userInputLetter = String.fromCharCode(event.which).toLowerCase();
//  userInputLetterGlobal = userInputLetter;
//  // pushes userInputLetter into the array lettersGuessed
//  lettersGuessed.push(userInputLetterGlobal);
//  checkDouble();
//  compare();
// };