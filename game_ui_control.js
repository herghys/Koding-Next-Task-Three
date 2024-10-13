const errorMessage = document.getElementById("user-input-error-message");
const userNumberInputText = document.getElementById("user-number");
const aiGuessLabel = document.getElementById("ai-guess");
const yourNumberLabel = document.getElementById("your-number");
const aiGuessCountLabel = document.getElementById("ai-guess-count");
const instructionsContainer = document.getElementById('instructions-container');
const gameContainer = document.getElementById('game-container');
let userNumberInput =0;


//#region Game Controls
userNumberInputText.addEventListener("blur", function(){
    userNumberInput = parseInt(userNumberInputText.value, 10);
    if (userNumberInput < minValue) {
        errorMessage.style.display = "block";
        errorMessage.textContent = `Cannot lower than ${minValue}` ;
        userNumberInputText.value = minValue;

    }
    else if (userNumberInput > maxValue){
        errorMessage.style.display = "block";
        errorMessage.textContent = `Cannot higher than ${maxValue}` ;
        userNumberInputText.value = maxValue;
    }
});

// "Start Game" Clicked
document.getElementById("start-game-btn").addEventListener("click", function () {
    userNumberInput = parseInt(userNumberInputText.value, 10);
    if (userNumberInput === ""  ||  isNaN(userNumberInput) ) {
        errorMessage.style.display = "block";
        errorMessage.textContent = " Please add a number between 1 - 100";
        return;
    }
    
    userValue = userNumberInput;

    // Hide the instructions and show the game area

    errorMessage.style.display = "none";
    instructionsContainer.style.display = "none";
    gameContainer.style.display = "block";

    userValue = userNumberInput; // Store the user number
    console.log(userValue);
    yourNumberLabel.textContent = `Your Number: ${userValue}`;

    startGame(); // Start the AI guessing
});

// "Higher" Clicked
document.getElementById("higher-btn").addEventListener("click", onGenerateHigherClicked);

// "Lower" clicked
document.getElementById("lower-btn").addEventListener("click", onGenerateLowerClicked);

// "Correct" clicked
document.getElementById("correct-btn").addEventListener("click", function () {
    // Celebrate the AI's correct guess
    showWin();
});
//#endregion Game Controls