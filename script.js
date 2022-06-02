//Computer picks a Rock, Paper, or Scissors at random

function computerPlay() {
    let compPlay = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * compPlay.length);
    let randomSelection = compPlay[randomNumber];
    return randomSelection;
}

// User is asked to enter in Rock, Paper, or Scissors

function playerInput (playerInput, input) {
    playerInput = prompt("Rock, Paper, or Scissors");
    lowerCaseInput = playerInput.toLowerCase();
    return(lowerCaseInput);
}

// Computer's move is stored in a constant. User's input is stored in a second constant

const playerSelection = playerInput();
const computerSelection = computerPlay();

// Function for the first round with an if and else if statement based on user and comp selection

function playRound (playerSelection, computerSelection) {
    let roundWinner = " ";
    if (playerSelection === computerSelection) {
        roundWinner = `You both selected ${playerSelection}. It's a tie`
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundWinner = "You win! Rock beats Scissors!";
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        roundWinner = "You lose! Paper beats Rock!";
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        roundWinner = "You win! Paper beats Rock!";
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundWinner = "You lose! Scissors beats Paper!";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundWinner = "You win! Scissors beats Paper!";
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundWinner = "You lose! Rock beats Scissors!";
    }

    else {
        roundWinner = "Something went wrong. Please try again";
    }
    
    return roundWinner;

}

console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection));
