import throttle from 'lodash.throttle';

console.log('hi world!')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]')
};

refs.btnStart.addEventListener('click', throttle(onBtnStart, 1000));
refs.btnStop.addEventListener('click', onBtnStop);

function onBtnStart(e) {
console.log('start');
refs.btnStart.disabled = true ;
refs.btnStop.disabled = false ;
refs.body.style.backgroundColor=getRandomHexColor();
};

function onBtnStop(e) {
  console.log('stop');
  refs.btnStart.disabled = false ;
  refs.btnStop.disabled = true ;
};
