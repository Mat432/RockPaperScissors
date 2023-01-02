let playerScore
let computerScore

const options = document.querySelectorAll(".options");
const results = document.querySelector(".results");
const score = document.querySelector(".score");

gameStart();
updateScore();

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

        default:
            return 2;
        break;

    }
}

// game rules 
function playRound(playerSelection, computerSelection) {
  let player = playerSelection;
  let computer = computerSelection;

  if (player === computer) {
    results.textContent = "It's a draw";
  } else if ((player === "rock" && computer === "scissors") ||
             (player === "paper" && computer === "rock") ||
             (player === "scissors" && computer === "paper")) {
    playerScore++;
    updateScore();
    results.textContent = "You won";
  } else {
    computerScore++;
    updateScore();
    results.textContent = "AI won";
  };
}


function gameStart() {
  playerScore = 0;
  computerScore = 0;
  options.forEach(choice => {
    choice.disabled = false;
  });
  updateScore();
}

// Score and winner
function updateScore() {
  if (playerScore===5) {
    score.textContent =  "You Win this round!"
} else if (computerScore===5) {
    score.textContent = "Ai Wins this round!"
} else {
  score.textContent = `${playerScore} - ${computerScore}`;
}
}

function play(playerSelection) {
  let computerSelection = getComputerChoice();
   return playRound(playerSelection, computerSelection);
}

options.forEach(choice => {
  choice.addEventListener('click', () => {
    play(choice.textContent);
  })
});