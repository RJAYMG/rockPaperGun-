const buttons = document.querySelectorAll("button")
const resultDiv = document.getElementById("result")

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const choice = e.target.id
        resultDiv.textContent = `You chose: ${choice[0].toUpperCase() + choice.slice(1)}`
    })
})