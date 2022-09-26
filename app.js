
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

// Plays one round of the game and determines the winner of the round
function playRound () {
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

if (playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'scissors' && computerChoice === 'rock' || playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === '') {
  return [1, computerChoice, playerChoice];
} else if (playerChoice === computerChoice){
  return [2, computerChoice, playerChoice];
} else {
  return [3, computerChoice, playerChoice];
  }
}
// Plays 5 rounds of the game, keeps score, and announces the score as well as the selections.
function playGame() { 
let compWins = 0;
let playerWins = 0;
let tie = 0;

for ( i = 0; i < 5; i++){ 
  let results = playRound();
  results[0] === 1 ? compWins++ : results[0] === 2 ? tie++ : results[0] === 3 ? playerWins++ : 'Error';
  console.log(`Round ${i+1}: Computer: ${results[1]} Player: ${results[2]}`);
}
return `Computer Wins: ${compWins}, Player Wins: ${playerWins}, Ties: ${tie}`
}

console.log(playGame())