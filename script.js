function getComputerChoice() {
  let x = Math.random() * 10
  if (x < 3.3333334) {
    return "Rock"
  }
  else if (x < 6.6666667) {
    return "Paper"
  }
  else {
    return "Scissor"
  }
}

function playRound(playerSelection, computerSelection){
  let playerChoice = playerSelection.toLowerCase()
  
  if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissor"){
    return "Incorrect input"
  }
  if (playerChoice == "rock") {
    if (computerSelection == "Scissor") {
      return "You Win! Rock beats scissor."
    }
    else if (computerSelection == "Paper") {
      return "You Lose! Rock loses to paper."
    }
  }

  if (playerChoice.toLowerCase() == "paper") {
    if (computerSelection == "Rock") {
      return "You Win! Paper beats rock."
    }
    else if (computerSelection == "Scissor") {
      return "You Lose! Paper loses to scissor."
    }
  }

  if (playerChoice.toLowerCase() == "scissor") {
    if (computerSelection == "Paper") {
      return "You Win! Scissor beats paper."
    }
    else if (computerSelection == "Rock") {
      return "You Lose! Scissor loses to rock."
    }
  }
  return "It's a tie! You picked " + playerChoice + ", and the computer also picked " + computerSelection
  
}


function game(){
  let computerScore = 0
  let playerScore = 0
  let round = 1
  while (computerScore < 3 && playerScore < 3) {
    let winner = playRound(prompt(), getComputerChoice())
    if (winner.includes("Win")){
      playerScore += 1
      console.log("Round " + round + " Winner: Player!")
      round +=1
    }
    else if (winner.includes("Lose")){
      computerScore += 1
      console.log("Round " + round + " Winner: Computer!")
      round +=1
    }
    else if (winner.includes("tie")){
      console.log("Round " + round + " Winner: Tie, we'll have a replay!")
    }
    else {
      console.log("Incorrect input")
    }

  }
  if (playerScore > computerScore) {
    return "\n \nYou Win!"
  }
  else {
    return "\n \nYou Lose! Try again!"
  }

}

console.log(game())