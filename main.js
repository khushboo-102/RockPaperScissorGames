let rockButton = document.querySelector(".rock-btn");
let paperButton = document.querySelector(".paper-btn");
let scissorButton = document.querySelector(".scissor-btn")
let computerImg= document.querySelector("#comp");
let userImg = document.querySelector("#user");
let message = document.querySelector("h2");


rockButton.addEventListener("click", () => {
    const userChoice = "rock"
    const computerChoice = randomChoice()
    const winingMessage = compare (userChoice, computerChoice)
    computerImg.src = `${computerChoice}.jpg`
    userImg.src = `${userChoice}.jpg`
    message.textContent = `${winingMessage}`
})

let paper = document.querySelector("#paper")
paperButton.addEventListener("click", () => {
    const userChoice = "paper"
    const computerChoice = randomChoice()
    const winingMessage = compare (userChoice, computerChoice)
    computerImg.src = `${computerChoice}.jpg`
    userImg.src = `${userChoice}.jpg`
    message.textContent = `${winingMessage}`
})

let scissor = document.querySelector("#scissor")
scissorButton.addEventListener("click", () => {
    const userChoice = "scissor"
    const computerChoice = randomChoice()
    const winingMessage = compare (userChoice, computerChoice);
    computerImg.src = `${computerChoice}.jpg`
    userImg.src = `${userChoice}.jpg`
    message.textContent = `${winingMessage}`

})

function randomChoice(){
    let choice = ["rock", "paper", "scissor"]
    let computerrandomchoice = choice[Math.floor(Math.random () *choice.length)]
    return computerrandomchoice;
}


function compare(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        return "Tie..."
    }
    else if(userChoice === "paper" && computerChoice === "scissor"
        ||  userChoice === "rock" && computerChoice === "paper"
        ||  userChoice === "scissor" && computerChoice === "rock" 
    ) {
        return "Computer won!.."
    }
    else if(userChoice === "paper" && computerChoice === "rock" 
        ||userChoice === "rock" && computerChoice === "scissor"
        ||userChoice === "scissor" && computerChoice === "paper"
    ) {
         return "User won!.." 
    }
}

