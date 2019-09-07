//landing page opens to a page where a random number appears at the top of the page.
//there are 4 crystals on the page 

// variables
var computerRandomNum;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
// var allCrystals;
var wins = 0;
var losses = 0;
var playerScore = 0;
var playAgain = false;


// make the random numbers to assign to variables  
function startGame() {
    computerRandomNum = Math.floor(Math.random() * 120) + 12;     //random between 12 and 120 (20 because player could potentially lose on first click)
    $("#computerRandomNum").html(computerRandomNum);                // put random number in circle on the html page
    crystal1 = Math.floor(Math.random() * 11) + 1;
    crystal2 = Math.floor(Math.random() * 11) + 1;
    crystal3 = Math.floor(Math.random() * 11) + 1;
    crystal4 = Math.floor(Math.random() * 11) + 1;               //crystal numbers should not be more than 12
    playerScore = 0;
    $("#playerScore").html("Your crystals score is:   " + playerScore);
    console.log(computerRandomNum);
    console.log(playerScore);
};


$("#crystal1").on("click", function () {                    // user clicks on crystals 1 through 4 to generate random player numbers
    playerScore += crystal1;
    $("#playerScore").html("Your crystals score is:   " + playerScore);
    console.log("Player Score: " + playerScore);
    checkScore();
})
$("#crystal2").on("click", function () {
    playerScore += crystal2;
    $("#playerScore").html("Your crystals score is:   " + playerScore);
    console.log("Player Score: " + playerScore);
    checkScore();
})
$("#crystal3").on("click", function () {
    playerScore += crystal3;
    $("#playerScore").html("Your crystals score is:   " + playerScore);
    console.log("Player Score: " + playerScore);
    checkScore();
})
$("#crystal4").on("click", function () {
    playerScore += crystal4;
    $("#playerScore").html("Your crystals score is:   " + playerScore);
    console.log("Player Score: " + playerScore);
    checkScore();
})
function checkScore() {
    if (playerScore === computerRandomNum) {                             //player wins
        wins++;

        console.log("player won");
        $("#congrats").html("Congratulation! You won!");
        $("#wins").html("Your wins  " +  wins);
        startGame();
    }
       
    else if (playerScore > computerRandomNum) {                               //player loses
        losses++
        console.log("player lost");
        $("#congrats").html("Oh sorry, you lost!");
        $("#losses").html("Your losses  " + losses);
        startGame();
    }

    else (
        console.log("keep guessing!")
    )
}

startGame();








