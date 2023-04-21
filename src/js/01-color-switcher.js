const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.body;

startBtn.addEventListener('click', startChangeColor);

stopBtn.addEventListener('click', stopChangeColor);

let intervalColor = null;
let start = true;

function disebledBtn() {
  startBtn.disabled = !start ? false : true;
}

function startChangeColor() {
  if (start) {
    intervalColor = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }

  disebledBtn();
  start = !start;
}

function stopChangeColor() {
  clearTimeout(intervalColor);
  disebledBtn();
  start = !start;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
