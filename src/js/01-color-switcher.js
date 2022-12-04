function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
};

var color;

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]')
};

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);

function onBtnStart(e) {
  refs.btnStart.disabled = true ;
  refs.btnStop.disabled = false ;
  color = setInterval(changeColor, 1000);
};

function onBtnStop(e) {
  refs.btnStart.disabled = false ;
  refs.btnStop.disabled = true ;
  clearInterval(color);
};
