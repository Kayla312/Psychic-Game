// creating variable to hol the number of wins and losses as the computer and user interact
var wins = 0;
var losses= 0;

// determines which key was pressed by the user
var userGuess = event.key;


// list of possible letters for the computer to choose from as an unknown letter
var randomLetterList = ["a", "b", "c", "d", "e",
 "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s",
 "t", "u", "v", "w", "x", "y", "z"];
//  choose a random letter from the array above
 var randomLetter = randomLetterList[Math.floor(math.random() * randomLetterList.length)];
if (userGuess === randomLetter) {
    wins++
}
else 

 var guessedLetters = [ userGuess];