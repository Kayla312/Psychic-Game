// creating variable to hold the number of wins and losses as the computer and user interact
var wins = 0;
var losses = 0;
// Variable to count down number of guesses
var guessesLeft = 10;
// random letter that is chosen goes into this array
var computerLetter = null;
// array that holds the letters that have been guess by the user
var guessedLetters = [];

// list of possible letters for the computer to choose from as an unknown letter
var randomLetterList = ["a", "b", "c", "d", "e",
 "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s",
 "t", "u", "v", "w", "x", "y", "z"];
//  computer choose a random letter from the array above
//  var randomLetter = randomLetterList[Math.floor(Math.random() * randomLetterList.length)];
//     computerLetter.push(randomLetter);

// // determines which key was pressed by the user
// document.onkeyup = function(event){
// var userGuess = event.key;
// guessedLetters.push(userGuess);

// //  if the users typed guess is the same as the computers code letter, the number of wons goes up
// if (userGuess === randomLetter) {
//     alert("Nicely done! Thats the letter I was thinking of!")
//     wins++
//     guessesLeft = 10;
//     guessedLetters = [];
// }
// // if the users guess doesnt match the computers code letter, then the number of guesses goes down by one, the letter is put into the brackets and
// else if (userGuess != randomLetter){
//     alert("nope! choose again")
//     guessesLeft -1;
//     guessedletters.push(userGuess);
// }
// if (guessesLeft === 0) {
//     guessesLeft = 10;
//     losses ++;
//     guessedLetters = [];
// }
// // attaching the numbers to the lines of text that identify them
// var html = 
// "<h2> Guess what letter I'm thinking of !!</h2>" +
// "<div>Wins:" + wins + "</div>" +
// "<div>Losses:" + losses + "</div>" +
// "<div>Guesses Left:" + guessesLeft + "</div>" +
// "<div>Guesses Made:" + guessesLetters + "</div>";

// document.querySelector('#game').innerHTML = html;


// }
// I need to get the wins score, losses score, letters guesses and guesses left to show up on my HTML.

// Adding code to make the game function (3/21/19)

// Function to update the number of guesses left on the HTML
var updateGuessesLeft = function() {
    document.querySelector('#guessesLeft').innerHTML = guessesLeft;
};

// Function to update the guesses made so far on the HTML
var updateGuessesMade = function() {
    document.querySelector('#guessesMade').innerHMTL = guessedLetters.join(", ");
};

// Function to assign a new random number from the array listed[NOT VISIBLE TO THE USER]
var newPsychicCompLetter = function() {
    randomLetter = randomLetterList[Math.floor(Math.random() * randomLetterList.length)];
};

// Function to reset the page to neutral
var resetGuesses = function() {
    guessesLeft = 10;
    guessedLetters = [];
    updateGuessesLeft();
    updateGuessesMade();
    newPsychicCompLetter();
};

// Functions to execute on page load so that the game begins
newPsychicCompLetter();
updateGuessesLeft();

// Function to capture key strokes and preserve letter chosen

document.onkeyup = function(itsHappening) {
    // drop the number of guesses made by one
    guessesLeft--;
    // Make the letter lowercase 
    var chosenLetter = String.fromCharCode(itsHappening.which).toLowerCase();
    // takes the letter pressed and adds it to the guessed letter array
    guessedLetters.push(chosenLetter);
    // then runs update functions
    updateGuessesLeft();
    updateGuessesMade();
    console.log(chosenLetter);
    console.log(randomLetter);

    // Checking to see if the users guess matches the computers assigned random letter
    if(randomLetter === chosenLetter){
        // Let the user know that they guess the right letter
        alert("Nicely done! Thats the letter I was thinking of!");
        // Then update the score to show that the user won
        wins++;
        document.querySelector('#playerWins').innerHTML = wins;
        // reset the game so that the user can play again
        resetGuesses();
    }
    // HOWEVER should the user run out of all their guesses...
    if( guessesLeft === 0 ){
        // let the user know that they ran out of guesses
        alert("Fam. Youre out of guesses. This is going in the report.")
        // Then update the score to show the user that they lost 
        losses++;
        document.querySelector("#playerLosses").innerHTML = losses;
        resetGuesses();
    }
}