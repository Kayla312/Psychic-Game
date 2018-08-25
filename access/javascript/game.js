// creating variable to hol the number of wins and losses as the computer and user interact
var wins = 0;
var losses= 0;
var guessesLeft= 10;
var computerLetter=[];
var guessedLetters= [];

// list of possible letters for the computer to choose from as an unknown letter
var randomLetterList = ["a", "b", "c", "d", "e",
 "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s",
 "t", "u", "v", "w", "x", "y", "z"];
//  computer choose a random letter from the array above
 var randomLetter = randomLetterList[Math.floor(Math.random() * randomLetterList.length)];
    computerLetter.push(randomLetter);

// determines which key was pressed by the user
document.onkeyup = function(event){
var userGuess = event.key;
guessedLetters.push(userGuess);

//  if the users typed guess is the same as the computers code letter, the number of wons goes up
if (userGuess === randomLetter) {
    alert("Nicely done! Thats the letter I was thinking of!")
    wins++
    guessesLeft = 10;
    guessedLetters = [];
}
// if the users guess doesnt match the computers code letter, then the number of guesses goes down by one, the letter is put into the brackets and
else if (userGuess != randomLetter){
    alert("nope! choose again")
    guessesLeft -1;
    guessedletters.push(userGuess);
}
if (guessesLeft === 0) {
    guessesLeft = 10;
    losses ++;
    guessedLetters = [];
}
// attaching the numbers to the lines of text that identify them
var html = 
"<h2> Guess what letter I'm thinking of !!</h2>" +
"<div>Wins:" + wins + "</div>" +
"<div>Losses:" + losses + "</div>" +
"<div>Guesses Left:" + guessesLeft + "</div>" +
"<div>Guesses Made:" + guessesLetters + "</div>";

document.querySelector('#game').innerHTML = html;


}
// I need to get the wins score, losses score, letters guesses and guesses left to show up on my HTML.