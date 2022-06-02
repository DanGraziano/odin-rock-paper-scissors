// Rock beats scissors
// Paper beats rock
// Scissors beats paper


function computerPlay() {
    let selection = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * selection.length);
    let randomSelection = selection[randomNumber];
    return randomSelection;

}

function playerSelection (playerInput, input) {
    playerInput = prompt("Rock, Paper, or Scissors");
    input = playerInput.toLocaleLowerCase();
    return(input);

}

const computerSelection = computerPlay();

function playRound (playerSelection, computerSelection) {
    roundWinner = " ";
    if (playerSelection === computerSelection) {
        roundWinner = 'You both selected ${playerSelection}. It/s a tie'
    }
    
    else if (playerSelection == "rock" && computerSelection == "Scissors"){

        roundWinner = "You win! Rock beats Scissors!";
    }

    else if (playerSelection == "paper" && computerSelection == "Rock") {
        roundWinner = "You win! Paper beats Rock!";
    }

    else if (playerSelection == "scissors" && computerSelection == "Paper") {
        roundWinner = "You win! Scissors beats Paper!";
    }

    else if (playerSelection == "paper" && computerSelection == "Scissors") {
        roundWinner = "You lose! Scissors beats Paper!";
    }

    else if (playerSelection == "rock" && computerSelection == "Paper") {
        roundWinner = "You lose! Paper beats Rock!";
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundWinner = "You lose! Rock beats Scissors!";
    }

    else (roundWinner = "Something went wrong. Try again") 
    return roundWinner;

}

console.log(playRound(playerSelection(), computerSelection));
