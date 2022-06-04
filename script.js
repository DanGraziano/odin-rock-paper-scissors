//Computer picks a Rock, Paper, or Scissors at random

function computerPlay() {
    let compPlay = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * compPlay.length);
    let randomSelection = compPlay[randomNumber];
    return randomSelection;
}

// User is asked to enter in Rock, Paper, or Scissors. Input is then converted to lowercase
// While loop prompts user again if the box is closed without making a choice

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

// Function for the first round with an if statement based on user and comp selection

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You both selected ${playerSelection}. It's a tie.`
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
        return "Something went wrong. Please try again.";
    }

}

// A function for a game that is five rounds 
// The player and computer start with 0 points and gain 1 point for each win
// The for loop will loop the game for 5 rounds

function game () {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let computerTurn = computerPlay();
        let playerTurn = playerInput();
        let roundResult = playRound(playerTurn, computerTurn);
        if (roundResult.includes("You win")) {
            playerPoints += 1;
            console.log(roundResult + ` The score is: ${playerPoints} to ${computerPoints}`);
        }
        else if (roundResult.includes("You lose")) {
            computerPoints += 1;
            console.log(roundResult + ` The score is: ${playerPoints} to ${computerPoints}`);
        }   
        else if (roundResult.includes("tie")){
            
            console.log(roundResult + ` The score is still: ${playerPoints} to ${computerPoints}`);
        } 
        else {
            console.log ("Something went wrong. Please try again.");
        }
    }

    if (playerPoints > computerPoints) {
        console.log(`Congrats! You won the game! The final score is ${playerPoints} to ${computerPoints}!`);
      } 
    
    else if (playerPoints < computerPoints) {
        console.log(`Oh no! Looks like you lost the game! The final score is ${playerPoints} to ${computerPoints}!`);
    }

    else {
        console.log(`Looks like it's a tie! The final score is ${playerPoints} to ${computerPoints}!`);
        
    }
}

game()