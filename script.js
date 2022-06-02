// Rock beats scissors
// Paper beats rock
// Scissors beats paper


function computerPlay() {
    let selection = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * selection.length);
    let randomSelection = selection[randomNumber];
    return randomSelection;

}


