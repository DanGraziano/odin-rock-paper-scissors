const results = document.getElementById("results");
let playerPoints = 0;
let computerPoints = 0;
document.getElementById("playAgain").style.display="none";

// User selection via button click

const rock = document.querySelector("#rock");
    rock.addEventListener('click', () => {
    playerSelection = "rock";
    results.innerHTML = playGame(playerSelection, computerPlay());
    winnerAlert()
    gameOver()
    });

const paper = document.querySelector("#paper");
    paper.addEventListener('click', () => {
    playerSelection = "paper";
    results.innerHTML = playGame(playerSelection, computerPlay());
    winnerAlert()
    gameOver()
    });

const scissors = document.querySelector("#scissors");
    scissors.addEventListener('click', () => {
    playerSelection = "scissors"
    results.innerHTML = playGame(playerSelection, computerPlay());
    winnerAlert()
    gameOver()
    });

// Computer randomly selects Rock, Paper, or Scissors

function computerPlay() {
    let compPlay = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * compPlay.length);
    let randomSelection = compPlay[randomNumber];
    return randomSelection;
}

// Game results 

function playGame (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You both selected ${playerSelection}. It's a tie. The score is still: ${playerPoints} to ${computerPoints}`
    }
    
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerPoints += 1;
        return `You win! Rock beats Scissors! The score is: ${playerPoints} to ${computerPoints}`;
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerPoints += 1;
        return `You lose! Paper beats Rock! The score is: ${playerPoints} to ${computerPoints}`;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerPoints += 1;
        return `You win! Paper beats Rock! The score is: ${playerPoints} to ${computerPoints}`;
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerPoints += 1;
        return `You lose! Scissors beats Paper! The score is: ${playerPoints} to ${computerPoints}`;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerPoints += 1;
        return `You win! Scissors beats Paper! The score is: ${playerPoints} to ${computerPoints}`;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerPoints += 1;
        return `You lose! Rock beats Scissors! The score is: ${playerPoints} to ${computerPoints}`;
    }

}

// Announce winner

function winnerAlert() {
    if (playerPoints == 5 && playerPoints > computerPoints) {
        results.innerText = (`Congrats! You won the game! The final score is ${playerPoints} to ${computerPoints}!`);
     } 

    else if (computerPoints == 5 && computerPoints > playerPoints) {
        results.innerText = (`Oh no! Looks like you lost the game! The final score is ${playerPoints} to ${computerPoints}!`);
    }
}

// Disable buttons once player or computer reach 5 points

function gameOver() {
    if (playerPoints == 5 || computerPoints == 5) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("playAgain").style.display="block";
        replay()
    }
}

// Play again button
function replay() {
    const playAgain = document.getElementById("playAgain");
    playAgain.innerHTML ="Play Again"
    playAgain.addEventListener('click', () => {
        location.reload()
    })
}