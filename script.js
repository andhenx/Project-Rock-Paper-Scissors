let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultsDiv = document.getElementById("results");
  const scoreDiv = document.getElementById("score");

  let resultMessage = "";

  if (computerChoice === humanChoice) {
    resultMessage = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (computerChoice === "Rock" && humanChoice === "Scissors") ||
    (computerChoice === "Paper" && humanChoice === "Rock") ||
    (computerChoice === "Scissors" && humanChoice === "Paper")
  ) {
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  } else {
    resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  }

  resultsDiv.textContent = resultMessage;
  scoreDiv.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      resultsDiv.textContent += " Congratulations! You won the game!";
    } else {
      resultsDiv.textContent += " Sorry! You lost the game.";
    }
    // Reseta o jogo
    computerScore = 0;
    humanScore = 0;
  }
}

// Adiciona event listeners aos botões
document
  .getElementById("rock")
  .addEventListener("click", () => playRound("Rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("Paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("Scissors"));
