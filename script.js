function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice = "";
    if (randomNumber < (1/3)) {
        computerChoice = "Rock";
    }
    else if (randomNumber < (2/3)) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice - Rock, Paper or Scissors");
    return humanChoice;
}