import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let dataTimeValue = null;
const timer = document.querySelector('.timer');

const fields = document.querySelectorAll('.field');
fields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.width = '70px';
  const dataSpan = field.querySelector('.value');
  dataSpan.style.fontSize = '32px';
  dataSpan.style.fontWeight = 'bold';
  return field;
});

timer.style.display = 'flex';

const dataStartBtn = document.querySelector('button[data-start]');
const inputDateTime = document.querySelector('#datetime-picker');

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

dataStartBtn.disabled = true;
dataStartBtn.addEventListener('click', startBtnHendler);

function dateValid(data1, data2) {
  if (data1 < data2) {
    dataStartBtn.disabled = true;
    Notify.failure('Please choose a date in the future');

    return;
  }
  dataStartBtn.disabled = false;
}

function outputData({ days, hours, minutes, seconds }) {
  dataDays.textContent = days;
  dataHours.textContent = hours;
  dataMinutes.textContent = minutes;
  dataSeconds.textContent = seconds;
}

function startBtnHendler() {
  const timerId = setInterval(() => {
    const currentDate = new Date();
    if (currentDate === dataTimeValue || currentDate > dataTimeValue) {
      clearTimeout(timerId);
      return;
    }
    const result = convertMs(dataTimeValue - currentDate);
    outputData(result);
  }, 1000);
}
//
flatpickr(inputDateTime, {
  dateFormat: 'Y-m-d H:i',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dataTimeValue = selectedDates[0];
    dateValid(dataTimeValue, new Date());
  },
});
function addLeadingZero(value) {
  value = String(value);
  //   console.log('value: ', value.length);
  return value.length > 1 ? value : `0${value}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
