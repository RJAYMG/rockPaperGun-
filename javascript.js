const choice = ["Rock", "Paper", "Scissor", "Gun"]

function getComputerChoice(choice) {
    randomChoice = Math.floor(Math.random() * choice.length)
    choice[randomChoice]
}