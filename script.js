// Initial setup for AI guessing game
let min = 1;
let max = 100;
let guessCount = 1;
let aiGuess = Math.floor((min + max) / 2);

// Function to update the AI's guess display
function updateGuess() {
    document.getElementById('guess').textContent = aiGuess;
    document.getElementById('guess-count').textContent = `Number of guesses: ${guessCount}`;
}

// Function to start the game
function startGame() {
    document.getElementById('instructions-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    updateGuess();
}

// Event listener for the start game button
document.getElementById('start-game-btn').addEventListener('click', startGame);

// Event listeners for the buttons to adjust AI's guess
document.getElementById('higher-btn').addEventListener('click', () => {
    min = aiGuess + 1;
    aiGuess = Math.floor((min + max) / 2);
    guessCount++;
    updateGuess();
});

document.getElementById('lower-btn').addEventListener('click', () => {
    max = aiGuess - 1;
    aiGuess = Math.floor((min + max) / 2);
    guessCount++;
    updateGuess();
});

document.getElementById('correct-btn').addEventListener('click', () => {
    alert(`Yay! The AI guessed your number in ${guessCount} tries!`);
    resetGame();
});

// Function to reset the game to its initial state
function resetGame() {
    min = 1;
    max = 100;
    guessCount = 1;
    aiGuess = Math.floor((min + max) / 2);
    updateGuess();
    document.getElementById('instructions-container').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
}

// Initialize the game with the first guess (waiting for the user to start)