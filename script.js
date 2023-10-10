let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1; // Start with Player 1

function resetScores() {
  player1Score = 0;
  player2Score = 0;
  currentPlayer = 1; // Start with Player 1
}

// Initialize a variable to track the sound status
let isSoundOn = true;

// Get the button element
const soundsToggle = document.getElementById("soundsToggle");

// Function to toggle sound on and off
function toggleSound() {
  if (isSoundOn) {
    // Turn off the sounds (you can add your logic here)
    isSoundOn = false;
    soundsToggle.innerHTML = "<b>SOUNDS 🔇</b>";
    // You can add code to mute the sounds in your game here
  } else {
    // Turn on the sounds (you can add your logic here)
    isSoundOn = true;
    soundsToggle.innerHTML = "<b>🔊 SOUNDS</b>";
    // You can add code to unmute the sounds in your game here
  }
}

// Add a click event listener to the button
soundsToggle.addEventListener("click", toggleSound);

function toggleScorePlayersVisibility(show) {
  const scorePlayers = document.getElementsByClassName("scorePlayers");

  // Loop through the HTMLCollection to add or remove the "hide" class based on the 'show' parameter
  for (let i = 0; i < scorePlayers.length; i++) {
    if (show) {
      scorePlayers[i].classList.remove("hide");
    } else {
      scorePlayers[i].classList.add("hide");
    }
  }
}

function toggleGameButtonsVisibility(show) {
  const gameButtons = document.getElementsByClassName("gamebuttons");

  // Loop through the HTMLCollection to add or remove the "hide" class based on the 'show' parameter
  for (let i = 0; i < gameButtons.length; i++) {
    if (show) {
      gameButtons[i].classList.remove("hide");
    } else {
      gameButtons[i].classList.add("hide");
    }
  }
}

let playTogether = false;
const buttons = document.querySelectorAll(".choosePlayers button");
let activeButton = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (activeButton) {
      activeButton.classList.remove("active");
    }
    button.classList.add("active");
    activeButton = button;

    // Update the playTogether variable based on the active button
    if (button.classList.contains("playAlone")) {
      playTogether = false;
    } else if (button.classList.contains("playWithF")) {
      playTogether = true;

      document.getElementById("playerTurn").textContent = `${player1Name}`;
    }

    // Log the value of playTogether for testing (you can remove this)
    console.log(`playTogether is now ${playTogether}`);
  });
});

function updateScores() {
  document.getElementById(
    "pOne"
  ).textContent = `${player1Name}: ${player1Score}`;
  document.getElementById(
    "PTwo"
  ).textContent = `${player2Name}: ${player2Score}`;
  document.getElementById("playerTurn").textContent =
    currentPlayer === 1 ? `${player1Name}'s Turn` : `${player2Name}'s Turn`;
}

function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  updateScores();
}

const playTogetherButton = document.querySelector(".playWithF");
const nameModal = document.getElementById("nameModal");
const closeModal = document.getElementById("closeModal");

playTogetherButton.addEventListener("click", () => {
  playTogether = true;
  setTimeout(() => {
    nameModal.style.display = "block";
  }, 400);
});

closeModal.addEventListener("click", () => {
  nameModal.style.display = "none";
});

// Close the modal if the user clicks outside of the modal
window.addEventListener("click", (event) => {
  if (event.target == nameModal) {
    nameModal.style.display = "none";
  }
});

const nameForm = document.getElementById("nameForm");
let player1Name = ""; // Initialize player1Name
let player2Name = ""; // Initialize player2Name

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  player1Name = document.getElementById("player1Name").value; // Get Player 1's name
  player2Name = document.getElementById("player2Name").value; // Get Player 2's name

  // Update the player names on the page
  document.getElementById(
    "pOne"
  ).textContent = `${player1Name}: ${player1Score}`;
  document.getElementById(
    "PTwo"
  ).textContent = `${player2Name}: ${player2Score}`;

  nameModal.style.display = "none";
});

function randomGame() {
  const functions = [
    fetchCharacterData,
    fetchDogImages,
    fetchRandomMovies,
    fetchRickAndMortyData,
    lionKing,
    aladdin,
    jungleBook,
    aliceIn,
  ];
  const randomIndex = Math.floor(Math.random() * functions.length);
  const selectedFunction = functions[randomIndex];
  selectedFunction();
}

// Function to create a card cell
function createCardCell() {
  const cardCell = document.createElement("div");
  cardCell.className = "card-cell";

  const front = document.createElement("div");
  front.className = "front";

  const back = document.createElement("div");
  back.className = "back";

  cardCell.appendChild(front);
  cardCell.appendChild(back);

  return cardCell;
}

// Function to generate and append card cells to the board
function generateCardCells(numCells) {
  const board = document.getElementById("board"); // Replace 'board' with the actual ID of your board element

  for (let i = 0; i < numCells; i++) {
    const cardCell = createCardCell();
    board.appendChild(cardCell);
  }
}

// Call the generateCardCells function with the desired number of cells
generateCardCells(50); // Replace 50 with the number of card cells you need

const winningMessage = document.getElementById("winningMessage");

document.addEventListener("DOMContentLoaded", function () {
  startGame();
});

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// Function to shuffle an array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let flippedCards = [];

let canFlip = true;

function flipCard(cardCell) {
  // Check if the maximum of 2 cards have already been flipped and if flipping is allowed
  if (
    flippedCards.length < 2 &&
    canFlip &&
    !cardCell.classList.contains("flipped")
  ) {
    // Toggle the 'flipped' class to rotate the card
    cardCell.classList.toggle("flipped");
    // Add the flipped card to the array
    flippedCards.push(cardCell);

    // If two cards are flipped, check if they match
    if (flippedCards.length === 2) {
      // Get the background images of the two flipped cards
      const card1 =
        flippedCards[0].querySelector(".front").style.backgroundImage;
      const card2 =
        flippedCards[1].querySelector(".front").style.backgroundImage;

      if (card1 === card2) {
        // Cards match, prevent further flipping of these cards
        canFlip = false;
        if (playTogether === true) {
          if (currentPlayer === 1) {
            player1Score++;
          } else if (currentPlayer === 2) {
            player2Score++;
          }
          updateScores();
        }
        // Add the animation to all .back elements in the board
        // Add the "back-animation" class to all .back elements in the board
        cardCells.forEach((card) => {
          const backElement = card.querySelector(".back");
          backElement.classList.add("back-animation");
        });

        // Remove the "back-animation" class after 3 seconds
        setTimeout(() => {
          cardCells.forEach((card) => {
            const backElement = card.querySelector(".back");
            backElement.classList.remove("back-animation");
          });
        }, 1000); // Adjust the delay as needed (3000 milliseconds = 3 seconds)

        // Remove the click event listeners from matched cards
        flippedCards.forEach((card) => {
          card.removeEventListener("click", () => {
            flipCard(card);
          });
        });

        if (isSoundOn) {
          // Play the sound based on the active mode
          playRandomSound(getActiveMode());
        }
        // Reset the flippedCards array to empty
        flippedCards = [];

        // Check if all cards are matched (you can add your logic here)
        if (allCardsAreMatched()) {
          // All cards are matched, you can perform some action here (e.g., display a message)
          stopTimer();
          console.log("All cards are matched!");
          endGame();
        } else {
          // Not all cards are matched, allow flipping more cards
          canFlip = true;

          // Add click event listeners to all card-cell elements
          cardCells.forEach((card) => {
            card.addEventListener("click", () => {
              flipCard(card);
            });
          });
        }
      } else {
        // Cards don't match, flip them back after a delay
        setTimeout(() => {
          flippedCards.forEach((card) => {
            card.classList.toggle("flipped");
          });
          flippedCards = [];

          // If no match, switch the player
          if (playTogether === true) {
            switchPlayer();
          }
        }, 1000); // Adjust the delay as needed
      }
    }
  }
}

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

function shuffleCards() {
  // Get all the card elements
  const cards = Array.from(cardCells);

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the positions of two cards
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  // Append the shuffled cards back to the board
  const board = document.querySelector(".board");
  cards.forEach((card) => board.appendChild(card));
}

// compare the number of flipped cards with the total number of cards
function allCardsAreMatched() {
  const matchedCards = document.querySelectorAll(".card-cell.flipped");
  return matchedCards.length === cardCells.length;
}

// Add a click event listener to all card-cell elements
const cardCells = document.querySelectorAll(".card-cell");

cardCells.forEach((cardCell) => {
  cardCell.addEventListener("click", () => {
    flipCard(cardCell);
  });
});

function startGame() {
  winningMessage.style.display = "none";
  const startingMessage = document.getElementById("startingMessage");
  startingMessage.classList.add("show");
  toggleScorePlayersVisibility(false);
}

function restartGame() {
  // Reset the game state
  flippedCards = [];
  canFlip = true;

  // Hide all cards by removing the "flipped" class
  cardCells.forEach((cardCell) => {
    cardCell.classList.remove("flipped");
  });

  // Reshuffle the cards
  shuffleCards();

  // Enable clicking on cards by adding click event listeners
  cardCells.forEach((cardCell) => {
    cardCell.addEventListener("click", () => {
      flipCard(cardCell);
    });
  });
  // Hide the winning message
  const winningMessage = document.getElementById("winningMessage");
  winningMessage.style.display = "none";
}

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
function endGame() {
  let winner;

  // Determine the winner based on the scores
  if (player1Score > player2Score && playTogether === true) {
    winner = player1Name;
  } else if (player2Score > player1Score && playTogether === true) {
    winner = player2Name;
  }

  scoreTimer;

  const winningMessage = document.getElementById("winningMessage");
  winningMessage.style.display = "block"; // Show the winning message

  const winnerMessage = document.querySelector(".winning-message h2");
  if (winner) {
    winnerMessage.textContent = `The Winner Is ${winner}`;
  } else {
    winnerMessage.style.display = "none";
  }

  const timerScoreElement = document.getElementById("timerScorePlaceholder");
  timerScoreElement.textContent = formatTime(timerScore);
}

restartButton2.addEventListener("click", function () {
  winningMessage.style.display = "none";
  startGame();
  restartGame();
  clickStopButton();
  toggleGameButtonsVisibility(false);
  stopTimer();
  // Add the 'hide' class to the timeDis element
  const timeDis = document.querySelector(".timeDis");
  timeDis.classList.add("hide");
});

const mainMenu = document.getElementById("mainMenu");
mainMenu.addEventListener("click", function () {
  winningMessage.style.display = "none";
  startGame();
  restartGame();
  clickStopButton();
  toggleGameButtonsVisibility(false);
  stopTimer();
  // Add the 'hide' class to the timeDis element
  const timeDis = document.querySelector(".timeDis");
  timeDis.classList.add("hide");
});

const fullscreenButton = document.getElementById("fullscreen");

fullscreenButton.addEventListener("click", () => {
  if (document.fullscreenElement) {
    // Exit fullscreen mode
    document.exitFullscreen().catch((err) => {
      console.error("Error exiting fullscreen:", err);
    });
  } else {
    // Enter fullscreen mode
    document.documentElement.requestFullscreen().catch((err) => {
      console.error("Error entering fullscreen:", err);
    });
  }
});

const fullscreen2Button = document.getElementById("fullscreen2");

fullscreen2Button.addEventListener("click", () => {
  if (document.fullscreenElement) {
    // Exit fullscreen mode
    document.exitFullscreen().catch((err) => {
      console.error("Error exiting fullscreen:", err);
    });
  } else {
    // Enter fullscreen mode
    document.documentElement.requestFullscreen().catch((err) => {
      console.error("Error entering fullscreen:", err);
    });
  }
});

//=======TIMER=======
//=======TIMER=======
//=======TIMER=======
//=======TIMER=======
//=======TIMER=======
document.addEventListener("DOMContentLoaded", function () {
  // This code will run when the DOM is fully loaded
  const timeDis = document.querySelector(".timeDis");
  timeDis.classList.add("hide");
});

// Get the time display element by its id
const timeDisplay = document.getElementById("timeDisplay");

let startTime = 0; // Initialize the start time
let timerInterval; // Variable to store the interval ID
let timerScore = 0; // Variable to store the elapsed time

function startTimer() {
  const timeDis = document.querySelector(".timeDis");
  timeDis.classList.remove("hide");
  startTime = new Date().getTime(); // Set the start time to the current time
  timerInterval = setInterval(updateTime, 1000); // Update time every second (1000 milliseconds)
}

function updateTime() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;

  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);

  const timeString =
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;

  timeDisplay.textContent = timeString; // Update the time display element
}

function formatTime(elapsedTime) {
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

function stopTimer() {
  clearInterval(timerInterval); // Stop the timer
  timerScore = new Date().getTime() - startTime; // Capture the elapsed time
  startTime = null; // Reset startTime to null
  timeDisplay.textContent = "00:00"; // Update the time display to "00:00"
  console.log("timerScore: " + formatTime(timerScore));
}

// // Example: Start the timer when a button is clicked
// const startButton = document.getElementById("startButton");
// startButton.addEventListener("click", startTimer);

// // Example: Stop the timer when another button is clicked
// const stopButton = document.getElementById("stopButton");
// stopButton.addEventListener("click", stopTimer);
