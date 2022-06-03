//Computer picks a Rock, Paper, or Scissors at random

function computerPlay() {
    let compPlay = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * compPlay.length);
    let randomSelection = compPlay[randomNumber];
    return randomSelection;
}

// User is asked to enter in Rock, Paper, or Scissors. Input is then converted to lowercase

function playerInput (playerInput, lowerCaseInput) {
    playerInput = prompt("Select either Rock, Paper, or Scissors");
    while (playerInput == null) {
        playerInput = prompt("Select either Rock, Paper, or Scissors"); 
    }
    lowerCaseInput = playerInput.toLowerCase();
    return(lowerCaseInput);
}

// Computer's move is stored in a constant. User's input is stored in a second constant

const playerSelection = playerInput();
const computerSelection = computerPlay();

// Function for the first round with an if and else if statement based on user and comp selection

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You both selected ${playerSelection}. It's a tie`
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors!";
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock!";
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock!";
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper!";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper!";
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors!";
    }

    else {
        return "Something went wrong. Please try again";
    }

}

console.log(playRound(playerSelection, computerSelection));

// Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// Play round one. If player wins he gets a point. If computer wins it gets a point. 
// Play round two - Prompt user for selection again and then repeat with new scores

// When play wins add one and loop until 5
// When computer wins add one and loop until 5


function game() {
    
    playerPoints = 0
    computerPoints = 0
    roundResult = playRound(playerSelection, computerSelection);
    for (let i = 0; i < 5; i++) {
        if (roundResult.includes("You win")) {
            playerPoints += 1;
        }

        else if (roundResult.includes("You lose")) {
            computerPoints += 1;
            console.log(roundResult + `The score is: ${playerPoints} to ${computerPoints}`);
        }   
        else {
            
            console.log(roundResult + `The score is: ${playerPoints} to ${computerPoints}`);
        } 
    }

    if (playerPoints > computerPoints) {
        console.log("You won the game! " + playerPoints + " to " + computerPoints + "!");
      } 
      
    else {
        console.log("You lost the game! " + computerPoints + " to " + playerPoints + "!");
    }


}
