
// Random number between 0 - 3 determines the computer's selection
function getComputerChoice() {
 const rand = Math.floor(Math.random() * 3);
 let choice;
 return rand === 0 ? choice = 'rock' : rand === 1 ? choice = 'paper' : rand === 2 ? choice = 'scissors' : null
}

// Get user input from a prompt
function getPlayerChoice() {
let playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
return playerChoice;
}

// Plays one round of the game
function playRound () {
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

if (playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'scissors' && computerChoice === 'rock' || playerChoice === 'paper' && computerChoice === 'scissors') {
  return 1
} else if (playerChoice === computerChoice){
  return 2
} else {
  return 3
  }
}

