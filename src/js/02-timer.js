import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const dTimerRef = document.querySelector('.timer');
const dFieldRef = document.querySelectorAll('.timer .field');

const inputRef = document.querySelector('#datetime-picker');
inputRef.addEventListener('input', {});

for (d of dFieldRef) {
  d.style.display = 'grid'
}

console.log(dFieldRef);

dTimerRef.style.display = 'flex';

flatpickr('#datetime-picker', options);

console.log(inputRef);

// ввод даты
// проверка даты
// запуск таймера
// ежесекундная проверка

