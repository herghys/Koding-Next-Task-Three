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
/* Challenge #1: Let's add auto checker if the value is correct
 * Your number selection is stored, but your program need to now wether the AI is correct, 
 * you can do it manually by clicking the "Correct" button, 
 * but how if we make our program to automatically tell if The AI is correct?
 * 
 * Task: 
 * Add a checker if aiGuess == userValue then call showWin();
*/
let userValue = 0;


/* Challenge #2: Add AI Guess Counter
 * AI Guess count is still locked to 0, can you help the AI to count how many it has guess?
 * 
 * Task: 
 * Add a GuessCounter when AI is Guessing
 * 
 * What you can do:
 * You can add aiGuessCount anywhere
 * You may modify the value of aiGuessCount
 * 
 * For Example:
 *  aiGuessCount++;
 *  aiGuessCount = a + b;
 *  aiGuessCount = 1 +  10;
 *  aiGuessCount = aiGuessCount + 1;
*/
let aiGuessCount = 0;


/* Challenge #3: Prevent the AI to give same results multiple times in a row
 * There is a slight chance where the AI will give the same result multiple times in a row, such as:
 * [2, 32, 32, 32 , 31, 90, 90]
 * 
 * Task(s)
 * Add some code to prevent the AI to generate the same result multiple times in a row. 
 * You need to use ```while``` statement for this task. 
 * This loop statement needs to placed whenever the AI is generating lower / higher value
 * You may modify / add variables IF NEEDED
 */
//-------------------------------------//



//Initial Number Generation
function initialGeneration() {
    aiGuess = Math.floor(Math.random() * (aiMaxValue - aiMinValue + 1)) + aiMinValue;
}

//Generate Higher Value
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
    let loopCounter = 0;
    //
    // your code goes here...
    //

    //End of Challenge 3 #1 Code

    //Update higher lower guess
    aiLastHigherGuess = aiGuess;
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


//Generate Lower Value
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
    }

    if (randomMin > randomMax) {
        randomMin = minValue;
        randomMax = aiGuess;
    }

    //Let AI Guess, given range min: randomMin, max: randomMax 
    aiGuess = getRandomInt(randomMin, randomMax);

    //Challenge 3 #2 Code Here
    let loopCounter = 0;
    //
    // your code goes here...
    //

    //End of Challenge 3 #2 Code

    //Update last lower guess
    aiLastLowerGuess = aiGuess;
    updateAIAverageValue();

    //Check if ai's last number is updated or no
    //If not updated => return
    if (!lastNumberUpdated)
        return;

    //If last number was updated => check if the last guessed number lower than average
    //If lower => Update AI's max value to ai's last number;
    if (aiLastNumber > aiValueAverage)
        aiMaxValue = aiLastNumber;
}

//Update Average Value
function updateAIAverageValue() {
    aiValueAverage = Math.floor((aiMaxValue + aiMinValue) / 2);
}

//OnClic Handler (Higher)
function onGenerateHigherClicked(){
    // Tell the AI that its guess was too low
    generateHigher();
    updateGuessDisplay();
}


//OnClick Handler (Lower)
function onGenerateLowerClicked(){
     // Tell the AI that its guess was too high
     generateLower();
     updateGuessDisplay();
}


//Update UI Display
function updateGuessDisplay() {
    aiGuessLabel.textContent = `AI's Guess: ${aiGuess}`;
    aiGuessCountLabel.textContent = `Number of guessess: ${aiGuessCount}`;
}