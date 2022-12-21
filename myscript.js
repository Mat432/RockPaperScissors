// computer player
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3);
    
    switch (randomNumber) {
        case 0:
            return "rock";
        break;
        
        case 1:
            return "paper";
        break;

        case 2:
            return "scissors";
        break;
    }
}
console.log(getComputerChoice())


// game rules 
function playRound (playerSelection, computerSelection) {
    
    let player = playerSelection.toLowerCase();
    let computer = computerSelection

        if (player === "rock" && computer === "paper")
            return "AI win";
        else if (player === "rock" && computer === "scissors")
            return "You win";
        else if (player === "paper" && computer === "rock")
            return "You win";
        else if (player === "paper" && computer === "scissors")
            return "AI win";
        else if (player === "scissors" && computer === "rock")
            return "AI win";
        else if (player === "scissors" && computer === "paper")
            return "You win";

}
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

// score 
function game() {
    
    const count = prompt("Make a choice")

}