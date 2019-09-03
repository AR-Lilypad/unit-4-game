// variable
var gameBoardRanNumb;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var wins = 0;
var loses = 0;
var playerScore = 0;

// make the random number to assign to our variables
function startGame() {
    gameBoardRanNumb = Math.floor(Math.random() * 150) + 21;
    crystal1 = Math.floor(Math.random() * 20) + 1;
    playerScore = 0;
}