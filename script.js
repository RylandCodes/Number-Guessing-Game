const numberInput = document.getElementById("number-input");
const resultText = document.getElementById("result-text");
const scoreText = document.getElementById("score-text");

let correctNum = Math.floor(Math.random() * 10); // 0 to 10
let guesses = 0;

scoreText.textContent = "";
resultText.textContent = "";

numberInput.addEventListener("input", () => {
     let num = numberInput.value;
     if (num == correctNum) {
          resultText.textContent = "You Won!";
          scoreText.textContent = `You only took ${guesses} guesses.`;
          guesses = 0;
          correctNum = Math.floor(Math.random() * 10);
          console.log("Restarting");
     } else {
          if (num < correctNum) {
               resultText.textContent = "Higher";
               guesses ++;
          } else if (num > correctNum) {
               resultText.textContent = "Lower";
               guesses ++;
          }
     }
});