import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/material_red.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputDateRef = document.querySelector('#datetime-picker');
const btnStartRef = document.querySelector('[data-start]');

inputDateRef.flatpickr({
  enableTime: true,
  time_24hr: true,
  enableSeconds: true,
  dateFormat: 'd.m.Y H:i',
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() > Date.now()) {
      btnStartRef.removeAttribute('disabled');
    } else {
      btnStartRef.setAttribute('disabled', 'disabled');
      console.log(3);
    }

    // console.log(selectedDates[0].getTime());
    // console.log(Date.now());
  },
});

// inputDateRef.addEventListener('blur', onXxx);

btnStartRef.addEventListener('click', onOoo);

// function onXxx(e) {
//   console.log(2);
// }

function onOoo(e) {
  console.log(1);

  btnStartRef.setAttribute('disabled', 'disabled');
}

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   dateFormat: 'Y-m-d H:i',
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
