# KodingNext - Task Three
Helmi Arghya Santosa
## Instructions
```
🤔 Think of a number between 1 and 100.
🕵️ The AI will try to guess your number.
👆 You will guide the AI by clicking on the "Higher", "Lower", or "Correct" buttons.
📈 If your number is higher than the AI's guess, click "Higher".
📉 If your number is lower, click "Lower".
🏆 If the AI guesses correctly, click "Correct" to end the game.
```

## Play Test (Demo)
[Click Here To Play the Demo](https://herghys.github.io/Koding-Next-Task-Three/)


## Challenge(s) for Kids
There are 3 challenges available for this session.

---
### Challenge #1 (Easy): Let's add auto show win status if aiGuess value = your inputtedValue
#### Difficulty: Easy

Your number selection is stored, but your program need to now wether the AI is correct, you can do it manually by clicking the "Correct" button, but how if we make our program to automatically tell if The AI is correct?

Task
-
- Add a checker if aiGuess == userValue then call showWin()
- AI Logic inside ```script.js```

for example:
```js
if (aiGuess == userValue){
    showWin();
}
```
Provided function and variables:
```javascript
let aiGuess = 0;
let userValue = 0;

//Show Win
function showWin() {
    alert(`Yay! The AI guessed your number ${aiGuess} correctly in ${aiHigherGuessCount + aiLowerGuessCount + 1} attempts!`);
    resetGame(); // Reset the game for a new round
}
```

---
### Challenge #2 (Medium): Add AI Guess Counter
#### Difficulty: Medium

AI Guess count is still locked to 0, can you help the AI to count how many it has guess?

Task
-
- Add a GuessCounter when AI is Guessing
- AI Logic inside ```script.js```

What you can do:
- You can add aiGuessCount anywhere
- You may modify the value of aiGuessCount

For Example:
- aiGuessCount++;
- aiGuessCount = a + b;
- aiGuessCount = 1 +  10;
- aiGuessCount = aiGuessCount + 1;

Provided variable and function:
```js
let aiGuessCount = 0;
```

---
### Challenge 3 (Hard): Prevent the AI to give same results multiple times in a row
There is a slight chance where the AI will give the same result multiple times in a row, such as:
```javascript
[2, 32, 32, 32 , 31, 90, 90]
```
Task: 
-
- Add some code to prevent the AI to generate the same result multiple times in a row. You need to use ```while``` statement for this task. 
- This loop statement needs to placed whenever the AI is generating lower / higher value
- You may modify / add variables <b>IF NEEDED</b>
- AI Logic inside ```script.js```


Hint:
Generate Lower
```javascript
function generateHigher() {
    // code

    let loopCounter = 0;
    //
    // your code goes here...
    //

    //code
}

function generateLower(){
    // code

    let loopCounter = 0;
    //
    // your code goes here...
    //

    //code
}
```
