let choice = ["rock", "paper", "scissors", "gun"]

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function getHumanChoice() {
    while (true) {
        let pick = prompt("Rock, paper, scissors...?").toLowerCase().trim();
        if (choice.includes(pick)) {
            return pick;
        }
    }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice==="rock" && computerChoice==="scissors") {
        humanScore += 1
        return "You win this round, Rock beats Scissors"
    } else if (humanChoice==="paper" && computerChoice==="rock"){
        humanScore += 1
        return "You win this round, Paper beats Rock"
    } else if (humanChoice==="scissors" && computerChoice==="paper") {
        humanScore += 1
        return "You win this round, Scissors beats Paper"
    } else if (humanChoice==="gun") {
        humanScore += 1
        return "You win, You cheater!!"
    } else if (computerChoice==="rock" && humanChoice==="scissors") {
        computerScore += 1
        return "You lose this round, Rock beats Scissors"
    } else if (computerChoice==="paper" && humanChoice==="rock"){
        computerScore += 1
        return "You lose this round, Paper beats Rock"
    } else if (computerChoice==="scissors" && humanChoice==="paper") {
        computerScore += 1
        return "You lose this round, Scissors beats Paper"
    } else if (humanChoice==="rock" && computerChoice==="rock") {
        return "This round is Tie!"
    } else if (humanChoice==="paper" && computerChoice==="paper"){
        return "This round is Tie!"
    } else if (humanChoice==="scissors" && computerChoice==="scissors") {
        return "This round is Tie!"
    } else if (humanChoice==="gun" && computerChoice==="gun") {
        return "This round is Tie!"
    } else if (computerChoice==="gun" && humanChoice==="rock") {
        computerScore += 1
        return "You lose this round, Computer cheated!"
    } else if (computerChoice==="gun" && computerChoice==="paper") {
        computerScore += 1
        return "You lose this round, Gun beats Papera"
    } else if (computerChoice==="gun" && computerChoice==="scissors") {
        computerScore += 1
        return "You lose this round, Computer cheated!"
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