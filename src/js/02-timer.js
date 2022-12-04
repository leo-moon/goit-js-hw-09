import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

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
  dTimer: document.querySelector('.timer'),
  dField: document.querySelectorAll('.timer .field'),
  input:  document.querySelector('#datetime-picker'),
  button: document.querySelector('button'),
  spanD : document.querySelector('[data-days]'),
  spanH : document.querySelector('[data-hours]'),
  spanM : document.querySelector('[data-minutes]'),
  spanS : document.querySelector('[data-seconds]'),
  spanV : document.querySelectorAll('.value'),
  spanL : document.querySelectorAll('.label'),
}

refs.input.style.padding = '0 10px';
refs.input.style += `
  width: '1000px';
  height: '150px';
  padding: 0 10px;
  background-color: #ddd;
`;
// border: 1px solid #cccccc;

for (v of refs.spanV) {
  v.style += `
    font-weight: 500;
    font-weight: 500;
    font-size: 30px;
    margin: auto;
  `
};

for (l of refs.spanL) {
  l.style += `
    font-weight: 400;
    text-transform: uppercase;
    font-weight: 400;
    color: #212;
  `
};

for (d of refs.dField) {
  d.style += `
  margin-right: 5px;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 10px 5px;
  margin-right: 5px;
  `
}
// flex-direction: column;grid-columns: 140px;
  // grid-gap: 12px;border: 1px solid #212;

refs.dTimer.style.display = 'flex';


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
  console.log('count 9999',msec);
}

function pad(value) {
  return String(value).padStart(2, '0')
}

function timer ({ days, hours, minutes, seconds }) {
  console.log('count    0000111111',days , hours, minutes, seconds, msec );
  refs.spanD.textContent = pad(days);
  refs.spanH.textContent = pad(hours);
  refs.spanM.textContent = pad(minutes);
  refs.spanS.textContent = pad(seconds);
};

function startCountdown () {
  refs.button.disabled = true;
  countDown = setInterval(() => {
    timerCount();
    timer(convertMs(msec));
  }, 1000);
}



flatpickr('#datetime-picker', options);

refs.input.addEventListener('input', main);


function main() {
  // console.log( 'input.value',  new Date(refs.input.value));
  // разница между датами
  timerCount();
  // проверка даты
  if (msec<5000) { 
    console.log('ddddd'); 
    return
  };
  console.log('msec', convertMs(msec));
  // запуск таймера
  refs.button.addEventListener('click', startCountdown);

};
