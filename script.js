/* 
 * AI Logics Made by Herghys (Helmi Arghya Santosa) - 2024
 * AI Logics converted from C# Script
*/
//#region Variables
//Constants
const maxValue = 100;
const minValue = 1;

//AI Variables
let aiGuess = 0;

let aiMaxValue = 0;
let aiMinValue = 0;

let aiLastHigherGuess = 0;
let aiLastLowerGuess = 0;

let aiLowerGuessCount = 0;
let aiHigherGuessCount = 0;

//Helper
let aiLastNumber = 0;
let aiValueAverage = 0;
//#endregion Variables


//-------------------------------------//
/* Challenge #1: Add AI Guess Counter
 * 1. For now AI guess is still 0
 * 2. HTML / CSS is already provided, you only needed to add / modify the JavaScript
 * 3. If you're ready, don't forget to uncomment the code below "Challenge #1 View"
 * 
 * Task: Add a GuessCounter when AI is Guessing
 * 
 * You can add aiGuessCount anywhere
 * You may modify the value of aiGuessCount
 * For Example:
 *  aiGuessCount++;
 *  aiGuessCount = a + b;
 *  aiGuessCount = 1 +  10;
 *  aiGuessCount = aiGuessCount + 1;
*/
let aiGuessCount = 0;


/* Challenge #2: Let's add auto checker if the value is correct
 * 1. You will be provided a user generated value and will be set before the game started
 * 3. HTML / CSS is already provided, you only needed to add / modify the JavaScript
 * 
 * Task: Add a checker if aiGuess == userValue then call showWin();
*/
let userValue = 0;
//-------------------------------------//



//#region AI Logic Functions
function initialGeneration() {
    aiGuess = Math.floor(Math.random() * (aiMaxValue - aiMinValue + 1)) + aiMinValue;
}

function getRandomInt(min, max) {
    // Generate a random integer between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateHigher() {
    //Add Chcker if LastNumber is Updated
    let lastNumberUpdated = false;

    //Reset lastLower
    aiLastLowerGuess = aiValueAverage;

    //Check if user has already press "Lower"
    if (aiLowerGuessCount > 0) {

        //Update ai's last guessed Number
        aiLastNumber = aiGuess;
        lastNumberUpdated = true;
    }

    //Min Checker with lastAIHigherGuess
    let randomMin = aiValueAverage;
    let randomMax = aiMaxValue;

    if (aiLastHigherGuess > aiValueAverage){
        randomMin = aiLastHigherGuess;
    }

    //Let AI Guess, given range min: randomMin, max: aiMaxValue
    aiGuess = getRandomInt(randomMin, randomMax);

    //Challenge 3 #1 Code Here


    //End of Challenge 3 #1 Code

    //Update higher lower guess
    aiLastHigherGuess = aiGuess;

    //Update new average value
    updateAIAverageValue();

    //Check if ai's last number is updated or no
    //If not updated => return
    if (!lastNumberUpdated)
        return;

    //If last number was updated => check if the last guessed number lower than average
    //If lower => Update AI's min value to ai's last number
    if (aiLastNumber < aiValueAverage)
        aiMinValue = aiLastNumber;
}

function generateLower() {
    //Add Chcker if LastNumber is Updated
    let lastNumberUpdated = false;

    //Reset lastLower
    aiLastHigherGuess = aiValueAverage;


    //Check if user has already press "Higher"
    if (aiHigherGuessCount > 0) {

        //Update ai's last guessed Number
        aiLastNumber = aiGuess;
        lastNumberUpdated = true;
    }

    //Min Checker with lastAIHigherGuess
    let randomMin= aiValueAverage;
    let randomMax= aiMinValue;

    if (aiLastLowerGuess < aiValueAverage){
        randomMax = aiLastLowerGuess;
        console.log(`aiLastLowerGuess < aiValueAverage ${randomMin} - ${randomMax}`);
    }

    if (randomMin > randomMax) {
        randomMin = minValue;
        randomMax = aiGuess;
        console.log(`aiMinValue > randomMax ${randomMin} - ${randomMax}`)
    }

    //Let AI Guess, given range min: randomMin, max: randomMax 
    console.log(`${randomMin} - ${randomMax}`)
    aiGuess = getRandomInt(randomMin, randomMax);
    console.log(`aiGuess ${aiGuess}`)
    //Challenge 3 #2 Code Here


    //End of Challenge 3 #2 Code

    //Update last lower guess
    aiLastLowerGuess = aiGuess;

    console.log(`aiLastLowerGuess ${aiLastLowerGuess}`)

    updateAIAverageValue();
    console.log(`Average ${aiValueAverage}`)
    

    //Check if ai's last number is updated or no
    //If not updated => return
    if (!lastNumberUpdated)
        return;

    //If last number was updated => check if the last guessed number lower than average
    //If lower => Update AI's max value to ai's last number;
    if (aiLastNumber > aiValueAverage)
        aiMaxValue = aiLastNumber;
}

function updateAIAverageValue() {
    console.log(`Update Average`);
    console.log(`Max ${aiMaxValue} - Min ${aiMinValue}`);

    aiValueAverage = Math.floor((aiMaxValue + aiMinValue) / 2);
}
//#endregion AI Logic Functions


//#region UI and Logic
//Update UI Display
function updateGuesDisplay() {

    document.getElementById("ai-guess").textContent = `AI's Guess: ${aiGuess}`;
    document.getElementById("ai-guess-count").textContent = `Number of guessess: ${aiGuessCount}`;
}

//Show Win
function showWin() {
    alert(`Yay! The AI guessed your number ${aiGuess} correctly in ${aiHigherGuessCount + aiLowerGuessCount + 1} attempts!`);
    resetGame(); // Reset the game for a new round
}

//Start Game
function startGame() {
    document.getElementById('instructions-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

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
    document.getElementById("instructions-container").style.display = "block";
    document.getElementById("game-container").style.display = "none";
}
//#endregion UI and Logic

//#region Game Controls
// "Start Game" Clicked
document.getElementById("start-game-btn").addEventListener("click", function () {
    // Hide the instructions and show the game area
    document.getElementById("instructions-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    startGame(); // Start the AI guessing
});

// "Higher" Clicked
document.getElementById("higher-btn").addEventListener("click", function () {
    // Tell the AI that its guess was too low
    generateHigher();
    updateGuesDisplay();
});

// "Lower" clicked
document.getElementById("lower-btn").addEventListener("click", function () {
    // Tell the AI that its guess was too high
    generateLower();
    updateGuesDisplay();
});

// "Correct" clicked
document.getElementById("correct-btn").addEventListener("click", function () {
    // Celebrate the AI's correct guess
    showWin();
});
//#endregion Game Controls