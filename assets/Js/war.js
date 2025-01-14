// const dealButton = document.querySelector("#dealButton");
const newGameBtn = document.getElementById("new-game");
const modal = document.querySelector(".modal");
const modalInput = document.getElementById("your-name");
const submitBtn = document.getElementById("submit-btn");
const displayArea = document.getElementById("display-area");
const formEl = document.getElementById("form");
const winner = document.getElementById("winner-display");
const inputValue = modalInput.value;

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  // const inputValue = modalInput.value;
  // console.log("inputValue", inputValue);
  displayArea.textContent = inputValue + "'s";
  localStorage.setItem("username", JSON.stringify(inputValue));
});

// function determineWinner(userScore, cpuScore) {
// let determineWinner = function () {
if (parseInt(userScore.value === 0)) {
  winner.textContent = "Computer Wins!";
} else if (parseInt(cpuScore.value === 0)) {
  winner.textContent = `${inputValue} Wins!`;
}
// };
// determineWinner();
