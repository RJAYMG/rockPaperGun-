let choice = ["rock", "paper", "scissor"]

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function getHumanChoice() {
    while (true) {
        let pick = prompt("Rock, paper, scissor...?").toLowerCase().trim();
        if (choice.includes(pick)) {
            return pick;
        }
    }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice==="rock" && computerChoice==="scissor") {
        humanScore += 1
        return "You win this round, Rock beats Scissor"
    } else if (humanChoice==="paper" && computerChoice==="rock"){
        humanScore += 1
        return "You win this round, Paper beats Rock"
    } else if (humanChoice==="scissor" && computerChoice==="paper") {
        humanScore += 1
        return "You win this round, Scissor beats Paper"
    } else if (computerChoice==="rock" && humanChoice==="scissor") {
        computerScore += 1
        return "You lose this round, Rock beats Scissor"
    } else if (computerChoice==="paper" && humanChoice==="rock"){
        computerScore += 1
        return "You lose this round, Paper beats Rock"
    } else if (computerChoice==="scissor" && humanChoice==="paper") {
        computerScore += 1
        return "You lose this round, Scissor beats Paper"
    } else if (humanChoice==="rock" && computerChoice==="rock") {
        return "This round is Tie!"
    } else if (humanChoice==="paper" && computerChoice==="paper"){
        return "This round is Tie!"
    } else if (humanChoice==="scissor" && computerChoice==="scissor") {
        return "This round is Tie!"
    }
}

function playGame() {
    for (let i = 1; i<6; i++) {
        console.log(`Round ${i}`)
        let roundResult = playRound(getHumanChoice(), getComputerChoice())
        console.log(roundResult)
        console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)
        if (i == 5) {
            console.log("Oops, end of the game")
        }
    }

    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (computerScore > humanScore) {
        console.log("You lose the game!")
    } else if (computerScore == humanScore) {
        console.log("Tie?")
    }
}

playGame()