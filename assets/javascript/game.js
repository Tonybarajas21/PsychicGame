var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourguesses = []
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var winScoretext = document.getElementById("winScore");
var lossesScore = document.getElementById("lossesScore");
var reset = function() {
    guessesLeft = 10;
    document.getElementById("YourGuess").innerHTML ="Your Guesses so far: " +  [];
    
}


alert("Guess what letter I'm thinking of?")
document.onkeydown = function (event) {
    var yourguesses = String.fromCharCode(event.keyCode);
    var userGuess = event.key;
    console.log(userGuess);
    
    if (userGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]);
    document.getElementById("YourGuess").innerHTML += yourguesses;

    if ((guessesLeft == 0)) { alert("you loose");
    losses++
    document.getElementById("lossesScore").innerHTML = "Losses:" + losses
    reset();
    }

    if ((userGuess == computerGuess)) {
        alert("win");
        wins++
        document.getElementById("winScore").innerHTML = "Wins:" + wins;
        reset();
    }
    else if (userGuess !== computerChoices) {
        guessesLeft--;
        document.getElementById("GuessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
         
    }
    if (userGuess === computerGuess) {
        wins++;
        
      }

     
}



 
 




