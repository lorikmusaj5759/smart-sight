/*
filename: complex_rock_paper_scissors_game.js

This code implements a complex version of the rock-paper-scissors game. It includes features such as computer AI, user input validation, score tracking, and game rounds.

Rules:
- Rock beats scissors
- Scissors beats paper
- Paper beats rock

*/

// Constants
const choices = ["rock", "paper", "scissors"];
const WIN_SCORE = 3; // Number of wins required to win the game

// Variables
let userScore = 0;
let computerScore = 0;

// Function to get random computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to validate user input
function validateUserChoice(userChoice) {
  userChoice = userChoice.toLowerCase();
  if (!choices.includes(userChoice)) {
    console.log("Invalid choice. Please choose either rock, paper, or scissors.");
    return false;
  }
  return true;
}

// Function to play a single round and determine the winner
function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("You win this round!");
    userScore++;
    return;
  }

  console.log("You lose this round!");
  computerScore++;
}

// Function to display the final winner
function displayWinner() {
  if (userScore > computerScore) {
    console.log("Congratulations! You win the game.");
  } else {
    console.log("Sorry! Computer wins the game.");
  }
}

// Main game loop
function playGame() {
  console.log("Let's play Rock-Paper-Scissors!");

  let round = 1;
  while (userScore < WIN_SCORE && computerScore < WIN_SCORE) {
    console.log(`Round ${round}:`);

    let userChoice = prompt("Choose your weapon (rock, paper, or scissors):");
    while (!validateUserChoice(userChoice)) {
      userChoice = prompt("Choose your weapon (rock, paper, or scissors):");
    }

    const computerChoice = getComputerChoice();

    console.log(`Your choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    playRound(userChoice, computerChoice);

    console.log(`Score: You ${userScore} - ${computerScore} Computer`);

    round++;
  }

  displayWinner();
}

playGame();