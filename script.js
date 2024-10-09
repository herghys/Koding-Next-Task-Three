// Initial setup for AI guessing game
const min = 1; // Set minimum to 1 (to match the game rules)
const max = 20; // Keep max at 100
let guessCount = 0; // Start at 0 to avoid counting the first guess before it's made
let aiGuess = 0;
let lastGuess = 0;
let tempMin = min; // Temporary min to track range
let tempMax = max; // Temporary max to track range

// Function to generate a random guess when the guess is lower
function generateRandomGuessLower() {
    // Generate a random guess between the current tempMin and lastGuess (exclusive)

    if (aiGuess >= max || lastGuess >= max) {
        console.log("aiGuess >= max || lastGuess >= max");
        aiGuess = Math.floor(Math.random() * (max - min + 1)) + min; // New guess within range
    }

    if (lastGuess <= min) {
        console.log("lastGuess <= min");
        aiGuess = min; // If lastGuess is equal to min, guess remains at min
    } 
    else {
        console.log("Generating guess lower than lastGuess");
        aiGuess = Math.floor(Math.random() * (lastGuess - min)) + min; // Ensuring it's below lastGuess
    }

    // Double check if tempMin >= max and reset tempMin if necessary
    if (tempMin >= max){
        tempMin = min; // Reset tempMin to min value
        tempMax = max;
        aiGuess = max; // Set AI Guess to max value for next iteration
    }

    console.log("New AI Guess (Lower):", aiGuess);
}

// Function to generate a random guess when the guess is higher
function generateRandomGuessUpper() {
    // Generate a random guess between lastGuess (exclusive) and tempMax
    if (aiGuess <= min || lastGuess <= min) {
        console.log("lastGuess <= min");
        aiGuess = Math.floor(Math.random() * (max - min + 1)) + min; // New guess within full range
    } 
    if (lastGuess >= max) {
        console.log("lastGuess >= max");
        aiGuess = max; // If lastGuess is equal to max, guess remains at max
    } 
    else {
        console.log("Generating guess higher than lastGuess");
        aiGuess = Math.floor(Math.random() * (tempMax - lastGuess)) + lastGuess + 1; // Ensuring it's above lastGuess
    }

    // Double check if tempMax <= min and reset tempMax if necessary
    if (tempMax <= min) {
        tempMax = max; // Resetting tempMax to max
        tempMin = min;
        aiGuess = max; // Set AI Guess to max value for next iteration
    }

    console.log("New AI Guess (Upper):", aiGuess);
    lastGuess = aiGuess;
}

function initGuess(){
    aiGuess = Math.floor(Math.random() * (max - min + 1)) + min; // New guess within full range
}

// Function to update the AI's guess display
function updateGuess() {
    document.getElementById('guess').textContent = aiGuess;
    document.getElementById('guess-count').textContent = `Number of guesses: ${guessCount + 1}`; // Increment for display
}

// Function to start the game
function startGame() {
    document.getElementById('instructions-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    guessCount = 0; // Reset the count at the start
    tempMin = min; // Reset tempMin to the original min
    tempMax = max; // Reset tempMax to the original max
    initGuess(); // Generate the first guess
    updateGuess();
}

// Event listener for the start game button
document.getElementById('start-game-btn').addEventListener('click', startGame);

// Event listeners for the buttons to adjust AI's guess
document.getElementById('higher-btn').addEventListener('click', () => {
    lastGuess = aiGuess; // Update lastGuess to the current guess
    tempMin = lastGuess + 1; // Set tempMin to the current guess (exclusive)
    guessCount++;
    generateRandomGuessUpper(); // Generate a new guess based on the updated limits
    updateGuess();
});

document.getElementById('lower-btn').addEventListener('click', () => {
    lastGuess = aiGuess; // Update lastGuess to the current guess
    tempMax = lastGuess - 1; // Set tempMax to lastGuess - 1
    guessCount++;
    generateRandomGuessLower(); // Generate a new guess based on the updated limits
    updateGuess();
});

document.getElementById('correct-btn').addEventListener('click', () => {
    alert(`Yay! The AI guessed your number in ${guessCount + 1} tries!`);
    resetGame();
});

// Function to reset the game to its initial state
function resetGame() {
    guessCount = 0; // Reset the guess count
    tempMin = min; // Reset tempMin back to original min
    tempMax = max; // Reset tempMax back to original max
    generateRandomGuessUpper(); // Generate the first guess for the new game
    updateGuess();
    document.getElementById('instructions-container').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
}
