function getComputerChoice(choice) {
    choice = ["Rock", "Paper", "Scissor", "Gun"]
    randomChoice = Math.floor(Math.random() * choice.length)
    return choice[randomChoice]
}

function getHumanChoice(choice) {
    choice = ["Rock", "Paper", "Scissor", "Gun"]
    prompt("Rock, paper, scisor or ...?").toLowerCase()
    if (choice.include(pick)) {
        return pick
    }
}

console.log(getComputerChoice())
console.log(getHumanChoice())