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

while (!gameOver === true) {
    if (getComputerChoice==="rock" && getHumanChoice==="scissor") {
        console.log(lose())
    } else if (getComputerChoice==="paper" && getHumanChoice==="rock") {
        console.log(lose())
    }
}

console.log(getComputerChoice())
console.log(getHumanChoice())