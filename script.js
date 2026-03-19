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
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice - Rock, Paper or Scissors");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log(`The computer chose ${computerChoice}.`);
    switch (humanChoice){
        case "rock":
            switch (computerChoice){
                case "rock":
                    console.log("Round draw!");
                    break;
                case "paper":
                    console.log("You lose the round!");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You win the round!");
                    humanScore++;
                    break;
            };
            break;
        case "paper":
            switch (computerChoice){
                case "rock":
                    console.log("You win the round!");
                    humanScore++;
                    break;
                case "paper":
                    console.log("Round draw!");
                    break;
                case "scissors":
                    console.log("You lose the round!");
                    computerScore++;
                    break;
            };
            break;
        case "scissors":
            switch (computerChoice){
                case "rock":
                    console.log("You lose the round!");
                    computerScore++;
                    break;
                case "paper":
                    console.log("You win the round!");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("Round draw!");
                    break;
            };
            break;
        default:
            console.log("Invalid choice!");
            break;
    }
}