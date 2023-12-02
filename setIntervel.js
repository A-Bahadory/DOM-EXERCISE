const timerText = document.querySelector("#timer-text");
const startButton = document.querySelector(".timer-button");
const pauseButton = document.querySelector(".pause-button");

let count = 0;
let intervalId;
startButton.addEventListener("click", function () {
  intervalId = setInterval(function () {
    count += 1;
    timerText.textContent = count;
  }, 1000);
});

pauseButton.addEventListener("click", function () {
  clearInterval(intervalId);
});
