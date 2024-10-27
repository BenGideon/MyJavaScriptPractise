// Optimized version
"use strict";

let answer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);
const displayScore = () =>
  (document.querySelector(".score").textContent = score);
const displayHighScore = () =>
  (document.querySelector(".highscore").textContent = highScore);
const setBodyStyle = (color, width) => {
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".number").style.width = width;
};

document.querySelector(".again").addEventListener("click", () => {
  answer = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayScore();
  setBodyStyle("#222", "15rem");
});

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No number, enter a number");
  } else if (guess < 1 || guess > 20) {
    displayMessage("Guess should be between 1 and 20");
  } else if (guess === answer) {
    displayMessage("Correct answer!");
    document.querySelector(".number").textContent = answer;
    setBodyStyle("#60b347", "30rem");

    if (score > highScore) {
      highScore = score;
      displayHighScore();
    }
  } else {
    if (score > 1) {
      displayMessage(guess > answer ? "It's high" : "It's low");
      score--;
      displayScore();
    } else {
      displayMessage("Sorry, you lost the game");
      score = 0;
      displayScore();
    }
  }
});

// Basic Version

// "use strict";

// // document.querySelector(".message").textContent = "CORRECT NUMBER";

// let ans = Math.trunc(Math.random() * 20) + 1;

// let score = 20;
// let highScore = 0;

// document.querySelector(".number").textContent = "?";

// document.querySelector(".again").addEventListener("click", function () {
//   document.querySelector(".number").textContent = "?";
//   score = 20;
//   ans = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector(".message").textContent = "START GUESSING . . . ";
//   document.querySelector(".guess").value = "";
//   document.querySelector(".score").textContent = score;

//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });

// //console.log(ans);

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   //console.log(guess);

//   if (!guess) {
//     document.querySelector(".message").textContent =
//       "NO NUMBER, ENTER A NUMBER";
//   } else if (guess === ans) {
//     document.querySelector(".number").textContent = ans;
//     document.querySelector(".message").textContent = "CORRECT ANSWER";
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(".highscore").textContent = highScore;
//     } else {
//       document.querySelector(".highscore").textContent = highScore;
//     }
//   } else if (guess < 1 || guess > 20) {
//     document.querySelector(".message").textContent =
//       "GUESS SHOULD BE BETWEEN 1 AND 20";
//   } else if (guess > ans) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "IT'S HIGH";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent =
//         "SORRY, YOU LOST THE GAME";
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess < ans) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "IT'S LOW";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent =
//         "SORRY, YOU LOST THE GAME";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });
