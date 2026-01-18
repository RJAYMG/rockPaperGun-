let gameOver = false

let choice = ["rock", "paper", "scissor"]

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function getHumanChoice() {
    pick = prompt("Rock, paper, scisor...?").toLowerCase();
    if (choice.includes(pick)) {
        return pick;
    } else {
        return "Invalid value"
    }
}

function win() {
    return "You win!"
}

function lose() {
    return "You lose!"
}

console.log(getComputerChoice())
console.log(getHumanChoice())

while (!gameOver === true) {
    if (getComputerChoice==="rock" && getHumanChoice==="scissor") {
        console.log(lose())
        gameOver == true
    } else if (getComputerChoice==="paper" && getHumanChoice==="rock") {
        console.log(lose())
        gameOver == true
    } else if (getComputerChoice==="scissor" && getHumanChoice==="paper") {
        console.log(lose())
        gameOver == true
    } else if (getHumanChoice==="rock" && getComputerChoice==="scissor") {
        console.log(lose())
        gameOver == true
    } else if (getHumanChoice==="paper" && getComputerChoice==="rock") {
        console.log(lose())
        gameOver == true
    } else if (getHumanChoice==="scissor" && getHumanChoice==="paper") {
        console.log(lose())
        gameOver == true
    }
}