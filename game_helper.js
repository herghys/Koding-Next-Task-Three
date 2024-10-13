function getRandomInt(min, max) {
    // Generate a random integer between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Show Win
function showWin() {
    alert(`Yay! The AI guessed your number ${aiGuess} correctly in ${aiHigherGuessCount + aiLowerGuessCount + 1} attempts!`);
    resetGame(); // Reset the game for a new round
}

//Start Game
function startGame() {
    instructionsContainer.style.display = 'none';
    gameContainer.style.display = 'block';

    //Update Value
    aiMaxValue = maxValue;
    aiMinValue = minValue;

    initialGeneration();
    updateAIAverageValue();
    aiLastNumber = aiValueAverage;
    updateGuesDisplay();
}

// Function to reset the game for another round
function resetGame() {
    // Reset all game variables
    aiGuess = 0;
    aiMaxValue = maxValue; // Reset to max number
    aiMinValue = minValue; // Reset to min number
    aiLowerGuessCount = 0; // Reset lower guess count
    aiHigherGuessCount = 0; // Reset higher guess count
    aiLastNumber = 0; // Reset the last AI guess
    aiValueAverage = 0; // Reset the average AI guess

    // Show instructions again and hide the game area
    instructionsContainer.style.display = "block";
    gameContainer.style.display = "none";
}