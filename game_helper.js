//Start Game
function startGame() {
    instructionsContainer.style.display = 'none';
    gameContainer.style.display = 'block';

    //Update Value
    aiMaxValue = maxValue;
    aiMinValue = minValue;

    //Setup Initial
    initialGeneration();
    updateAIAverageValue();
    aiLastNumber = aiValueAverage;
    updateGuessDisplay();
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