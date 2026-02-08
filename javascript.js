const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");
const round = document.getElementById("round");
const wrapper = document.getElementById("wrapper");

const choices = ["Rock", "Paper", "Scissors"];

function computerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return "Tie";
    }
    if ((humanSelection === "Rock" && computerSelection === "Scissors") ||
    (humanSelection === "Paper" && computerSelection === "Rock") ||
    (humanSelection === "Scissors" && computerSelection === "Paper")) {
        humanScore++;
        return "You win!";
    }
    else {
        computerScore++;
        return "You lose!";
    }
};

let i = 0;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        i++;
        round.textContent = `Round ${i}`
        resultDiv.textContent = "";
        const choice = e.target.id;
        const computerPick = computerChoice();
        let playerResult = document.createElement("p");
        playerResult.textContent = `You chose: ${choice}`;
        resultDiv.appendChild(playerResult);
        let computerResult = document.createElement("p");
        computerResult.textContent = `Computer chose: ${computerPick}`;
        resultDiv.appendChild(computerResult);
        const roundResult = playRound(choice, computerPick)
        const getRoundWinner = document.createElement("p")
        getRoundWinner.textContent = roundResult
        resultDiv.appendChild(getRoundWinner)
        const Scores = document.createTextNode(`Human: ${humanScore}, Computer: ${computerScore}`)
        resultDiv.appendChild(Scores)
        if (i === 5) {
            resultDiv.classList.add("fade-out");
            wrapper.innerHTML = ""
            const results = document.createElement("h1")
            if (humanScore === computerScore) {
                results.textContent = "You and the computer Tied!"
            } else if (humanScore > computerScore) {
                results.textContent = "You win the game!"
                results.style.color = "green"
            } else {
                results.textContent = "You lose the game!"
                results.style.color = "red"
            }
            wrapper.appendChild(results)
            buttons.forEach(btn => btn.disabled = true)
        }
    });
});

