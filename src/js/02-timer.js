import flatpickr from "flatpickr";
// Дополнительный импорт стилей
// import "/flatpickr/dist/flatpickr.min.css";
import "../../node_modules/flatpickr/dist/flatpickr.css";
// import Notiflix from 'notiflix';
import { Notify } from "../../node_modules/notiflix/build/notiflix-notify-aio";

let msec = 0;
var countDown;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {},
};

const refs = {
  body  : document.querySelector('body'),
  dTimer: document.querySelector('.timer'),
  dField: document.querySelectorAll('.timer .field'),
  input : document.querySelector('#datetime-picker'),
  button: document.querySelector('button'),
  spanD : document.querySelector('[data-days]'),
  spanH : document.querySelector('[data-hours]'),
  spanM : document.querySelector('[data-minutes]'),
  spanS : document.querySelector('[data-seconds]'),
  spanV : document.querySelectorAll('.value'),
  spanL : document.querySelectorAll('.label'),
};

refs.input.style +=`
  width: '1000px';
  height: '150px';
  width: '1000px';
  margin: 0 auto;
  padding: 0 10px;
  background-color: #ddd;
`;

for (const v of refs.spanV) {
  v.style += `
    font-weight: 500;
    font-weight: 500;
    font-size: 30px;
    margin: auto;
  `
};

for (const l of refs.spanL) {
  l.style += `
    font-weight: 400;
    text-transform: uppercase;
    font-weight: 400;
    color: #212;
  `
};

for (const d of refs.dField) {
  d.style += `margin-right: 5px;
  display: grid;
  justify-content: center;
  
  width: 80px;
  padding: 5px 5px;
  margin: 0 2px;
  `
}

refs.dTimer.style.display = 'flex';
refs.dTimer.style.justifyContent  = 'center';

refs.button.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function timerCount() {
  msec = new Date(refs.input.value) - new Date();
  if (msec < 100) {
    msec = 0;
    clearInterval(countDown);
  }
}

function addLeadingZero(value) {
  // контроль вывода двух цифр
  return String(value).padStart(2, '0')
}

function timer ({ days, hours, minutes, seconds }) {
  refs.spanD.textContent = addLeadingZero(days);
  refs.spanH.textContent = addLeadingZero(hours);
  refs.spanM.textContent = addLeadingZero(minutes);
  refs.spanS.textContent = addLeadingZero(seconds);
};

function startCountdown () {
  countDown = setInterval(() => {  
    refs.button.disabled = true;
    refs.button.style.backgroundColor = '#ccc';
    timerCount();
    timer(convertMs(msec));
  }, 1000);
}

flatpickr('#datetime-picker', options);

refs.input.addEventListener('input', main);

function main() {
  // разница между датами
  timerCount();
  // проверка даты
  if (msec<5000) {
    Notify.failure('ГУСЬ, Please choose a date in the future');
    return
  };
  console.log('msec', convertMs(msec));
  // запуск таймера
  refs.button.disabled = false;
  refs.button.style.backgroundColor = '#00ee00';
  refs.button.addEventListener('click', startCountdown);
};
