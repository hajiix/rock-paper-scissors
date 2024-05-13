function getComputerChoice() {
  let x = Math.random() * 10;
  if (x < 3.3333334) {
    return "Rock";
  } else if (x < 6.6666667) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
  let playerChoice = playerSelection.toLowerCase();

  if (
    playerChoice != "rock" &&
    playerChoice != "paper" &&
    playerChoice != "scissor"
  ) {
    return "Incorrect input";
  }
  if (playerChoice == "rock") {
    if (computerSelection == "Scissor") {
      return "You Win! Rock beats scissor.";
    } else if (computerSelection == "Paper") {
      return "You Lose! Rock loses to paper.";
    }
  }

  if (playerChoice.toLowerCase() == "paper") {
    if (computerSelection == "Rock") {
      return "You Win! Paper beats rock.";
    } else if (computerSelection == "Scissor") {
      return "You Lose! Paper loses to scissor.";
    }
  }

  if (playerChoice.toLowerCase() == "scissor") {
    if (computerSelection == "Paper") {
      return "You Win! Scissor beats paper.";
    } else if (computerSelection == "Rock") {
      return "You Lose! Scissor loses to rock.";
    }
  }
  return (
    "It's a tie! You picked " +
    playerChoice +
    ", and the computer also picked " +
    computerSelection
  );
}

let playerScore = 0;
let computerScore = 0;

function game() {
  gameDiv = document.querySelector(".game");
  start.remove();

  function handleReset() {
    ourGame.remove();
    reset.remove();
    gameDiv.append(start);
    playerScore = computerScore = 0; 
  }

  let reset = document.createElement("button");
  reset.textContent = "Reset";
  reset.addEventListener("click", handleReset);
  document.body.insertBefore(reset, document.body.firstChild);

  let ourGame = document.createElement("div");

  let rockChoice = document.createElement("button");
  rockChoice.textContent = "🪨";
  rockChoice.setAttribute("id", "rock");
  rockChoice.classList.add("choice");

  let paperChoice = document.createElement("button");
  paperChoice.textContent = "📜";
  paperChoice.setAttribute("id", "paper");
  paperChoice.classList.add("choice");

  let scissorChoice = document.createElement("button");
  scissorChoice.textContent = "✂️";
  scissorChoice.setAttribute("id", "scissor");
  scissorChoice.classList.add("choice");

  let gameChoices = document.createElement("div");
  gameChoices.append(rockChoice, paperChoice, scissorChoice);
  gameChoices.className = "choices";

  let scoreDiv = document.createElement("div");
  scoreDiv.classList.add("scores");

  let playerText = document.createElement("h3");
  playerText.textContent = "Player Score";
  let playerScorep = document.createElement("p");
  playerScorep.textContent = playerScore;
  let playerDiv = document.createElement("div");

  let computerText = document.createElement("h3");
  computerText.textContent = "Computer Score";
  let computerScorep = document.createElement("p");
  computerScorep.textContent = computerScore;
  let computerDiv = document.createElement("div");

  let textDiv = document.createElement("div");
  let choiceText = document.createElement("p");
  let winnerText = document.createElement("p");

  textDiv.append(choiceText, winnerText);
  textDiv.classList.add("textContent");

  scoreDiv.append(playerDiv, computerDiv);
  playerDiv.append(playerText, playerScorep);
  playerDiv.classList.add("playerScore");
  computerDiv.append(computerText, computerScorep);
  computerDiv.classList.add("computerScore");

  ourGame.append(gameChoices, scoreDiv, textDiv);

  gameDiv.append(ourGame);

  let handleWin = (choice, winner) => {
    choiceText.textContent = "You chose " + choice + "!";
    if (winner.includes("Win")) {
      winnerText.textContent =
        "\r\nRound " + (1 + playerScore + computerScore) + " Winner: Player!";
      playerScore += 1;
      playerScorep.textContent = playerScore;
    } else if (winner.includes("Lose")) {
      winnerText.textContent =
        "\nRound " + (1 + playerScore + computerScore) + " Winner: Computer!";
      computerScore += 1;

      computerScorep.textContent = computerScore;
    } else {
      winnerText.textContent = "\nYou tied! Play again.";
    }

    // if (Math.max(playerScore, computerScore) >= 3) {
    //   if (playerScore == 3){
    //     winnerText.textContent = "Congrats, You Win!"
    //   } else {
    //     winnerText.textContent = "You Lost:("
    //   }
    // }
  };

  let handleRock = (playerScore, computerScore) => {
    let winner = playRound("rock");
    handleWin("rock", winner);
  };

  let handlePaper = (playerScore, computerScore) => {
    let winner = playRound("paper");
    handleWin("paper", winner);
  };

  let handleScissor = (playerScore, computerScore) => {
    let winner = playRound("scissor");
    handleWin("scissors", winner);
  };

  rockChoice.addEventListener("click", function () {
    handleRock(playerScore, computerScore);
  });
  paperChoice.addEventListener("click", function () {
    handlePaper(playerScore, computerScore);
  });
  scissorChoice.addEventListener("click", function () {
    handleScissor(playerScore, computerScore);
  });
}

let resetButton = document.createElement("button");
start = document.querySelector("#start");
start.addEventListener("click", game);
