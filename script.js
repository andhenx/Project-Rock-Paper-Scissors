let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let input = window.prompt("Rock, Paper, or Scissors: ");
  let humanChoice = input.trim().toLowerCase();

  while (!["rock", "paper", "scissors"].includes(humanChoice)) {
    input = window.prompt(
      "Invalid choice! Please choose Rock, Paper, or Scissors: "
    );
    humanChoice = input.trim().toLowerCase();
  }

  return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
  } else if (
    (computerChoice === "Rock" && humanChoice === "Scissors") ||
    (computerChoice === "Paper" && humanChoice === "Rock") ||
    (computerChoice === "Scissors" && humanChoice === "Paper")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  } else {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
    console.log(
      `Round ${i + 1}: Human: ${humanScore}, Computer: ${computerScore}`
    );
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry! You lost the game.");
  } else {
    console.log("It's a tie!");
  }

  computerScore = 0;
  humanScore = 0;
}

game();
