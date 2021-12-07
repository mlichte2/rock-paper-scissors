// Rock Paper Scissors game

// get random number

const randomNumberGenerator = () => {
  return Math.floor(Math.random() * 3);
};

// get rock, paper, scissors randomly for computer

const computerPlay = () => {
  let randomNumber = randomNumberGenerator();
  let computerChoice;
  switch (randomNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
    default:
      console.log("Error");
      break;
  }
  return computerChoice;
};

// static player selection -- commenting out since we are getting a user input below

// const playerChoice = "scissors";

// play round

const playRound = (playerChoice) => {
  let computerChoice = computerPlay();
  if (playerChoice === computerChoice) {
    console.log(`Tie, both players selected ${playerChoice}`);
  } else {
    if (playerChoice === "rock" && computerChoice === "scissors") {
      console.log(`Player wins! ${playerChoice} beats ${computerChoice}`);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      console.log(`Player wins! ${playerChoice} beats ${computerChoice}`);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      console.log(`Player wins! ${playerChoice} beats ${computerChoice}`);
    } else {
      console.log(`Computer wins! ${computerChoice} beats ${playerChoice}`);
    }
  }
};

// prompt player for choice

const getPlayerChoice = () => {
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  playerChoice = playerChoice.toLowerCase();
  console.log(`You chose ${playerChoice}`);
  return playerChoice;
};

// play game 5 times with user input

const game = () => {
  playRound(getPlayerChoice());
  playRound(getPlayerChoice());
  playRound(getPlayerChoice());
  playRound(getPlayerChoice());
  playRound(getPlayerChoice());
};

// execute play function!!!

game();
