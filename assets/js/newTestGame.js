//landing page opens to a page where a random number appears at the top of the page.
//there are 4 crystals on the page 

// variables
var computerRandomNum;
var crystals = ["crystal1","crystal2","crystal3","crystal4",];
var wins = 0;
var losses = 0;
var playerScore = 0;
var playAgain = false;


// make the random numbers to assign to variables  
function startGame() {
    computerRandomNum = Math.floor(Math.random() * 150) + 21;     //random between 20 and 150 (20 because player could potentially lose on first click)
    crystals = Math.floor(Math.random() * 20) + 1; 
    crystals = parseInt(crystals);                //crystal numbers should not be more than 20/21
    playerScore = 0;
    console.log(computerRandomNum);
    // console.log(playerScore);

    for (var i = 0; i < crystals.length; i++) {
        console.log(crystals[i]);

    }

    $("#crystals").on("click", function () {                    // user clicks on crystals 1 through 4 to generate random player numbers
        playerScore += crystals;
        console.log("Player Score: " + playerScore);
    })

    // $("#crystal1").on("click", function () {                    // user clicks on crystals 1 through 4 to generate random player numbers
    //     playerScore += crystals;
    //     console.log("Player Score: " + playerScore);
    // })
    // $("#crystal2").on("click", function () {
    //     playerScore += crystals;
    //     console.log("Player Score: " + playerScore);
    // })
    // $("#crystal3").on("click", function () {                        
    //     playerScore += crystals;
    //     console.log("Player Score: " + playerScore);
    // })
    // $("#crystal4").on("click", function () {
    //     playerScore += crystals;
    //     console.log("Player Score: " + playerScore);
    // })

    if (playerScore === computerRandomNum) {                             //player wins
        wins = wins++;
        console.log("player won");
        $("#congrats").html("Congratulation! You won!" + wins);
        playAgain = confirm("Play Again?");

        if (playAgain === true) {
            startGame();
            playerScore = 0;
        }
        else {
            alert(" Ok, goodby. Please close your browser.");
        }
    }

    if (playerScore > computerRandomNum) {                               //player loses
        losses = losses++
        console.log("player lost");
        $("#computerRandomNum").html(computerRandomNum);
        playAgain = confirm("Play Again?");

        if (playAgain === true) {
            startGame();
            playerScore = 0;
        }
        else {
            alert(" Ok, goodby. Please close your browseer");
        }
    }
};

startGame();

// put random number in circle on the html page
$("#computerRandomNum").html(computerRandomNum);

// put player score on the html page
$("#playerScore").html("Your current score is:   " + playerScore);



