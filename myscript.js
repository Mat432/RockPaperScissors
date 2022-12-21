//  on start score and who plays
let playerScore = 0
let computerScore = 0
let gamesPlayed = 0

// computer choice function
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

// game rules 
function playRound (playerSelection, computerSelection) {
    
    let player = playerSelection
    let computer = computerSelection

        if (player === "rock" && computer === "rock") {
            return "It's a tie! You both picked rock"
        } else if (player === "paper" && computer === "paper") {
            return "IT's a tie! You both picked paper"
        } else if (player === "scissors" && computer === "scissors") {
            return "It's a tie! You both picked scissors"
        } else if (player === "rock" && computer === "paper") {
            computerScore++
            return "AI win"
        } else if (player === "rock" && computer === "scissors") {
            playerScore++
            return "You win"
        } else if (player === "paper" && computer === "rock") {
            playerScore++
            return "You win"
        } else if (player === "paper" && computer === "scissors") {
            computerScore++
            return "AI win"
        } else if (player === "scissors" && computer === "rock") {
            computerScore++
            return "AI win"
        } else if (player === "scissors" && computer === "paper") {
            playerScore++
            return "You win"
        }

        
}



// number of game rounds and winner
const game = () => {
    for (i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Make a choice").toLowerCase();
    
        playRound(playerSelection, computerSelection) 
    }


    if (playerScore > computerScore) {
        return "You are better than AI!"
    } else if (playerScore < computerScore) {
        return "AI outsmarted You!"
    } else {
        return "It's a tide!"
    }
}
console.log(game())
