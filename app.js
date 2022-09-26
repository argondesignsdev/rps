
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.querySelector('.results')
const selections = document.querySelector('.selections')
const playerScoreArea = document.querySelector('.playerScore')
const computerScoreArea = document.querySelector('.computerScore')
rock.addEventListener('click', (e) => playRound(getPlayerSelection(e.target.className), getComputerSelection()));
paper.addEventListener('click', (e)=> playRound(getPlayerSelection(e.target.className), getComputerSelection()));
scissors.addEventListener('click', (e)=> playRound(getPlayerSelection(e.target.className), getComputerSelection()));
let playerScore = 0;
let compScore = 0;
function getPlayerSelection(selection) {
playerSelect = selection;
return playerSelect
}

function getComputerSelection () {
  const rand = Math.floor(Math.random() * 3);
  let compSelects;

  rand === 0 ? compSelects = 'rock' : rand === 1 ? compSelects = 'paper' : rand === 2 ? compSelects = 'scissors' : 'Computer is broken';
  return compSelects;
}

function playRound (playerSelection, compSelection) {
determineWinner(playerSelection, compSelection)
}

function determineWinner(playerSelection, compSelection) {
if (playerSelection === compSelection) {
  results.innerText =  `It's a tie!`
  selections.innerText = `The computer chose, ${compSelection}! The player chose ${playerSelection}`
} else if (compSelection === 'rock' && playerSelection === 'scissors' || compSelection === 'paper' && playerSelection === 'rock' || compSelection === 'scissors' && playerSelection === 'paper'){
  results.innerText = `Computer wins!`
  computerScoreArea.innerText = `Computer Score: ${compScore}`
  compScore++;
  selections.innerText = `The computer chose, ${compSelection}! The player chose ${playerSelection}`
} else {
  results.innerText = `Player Wins!`
  playerScore++;
  playerScoreArea.innerText = `Player Score: ${playerScore} | `;
  selections.innerText = `The computer chose, ${compSelection}! The player chose ${playerSelection}`
  }
}