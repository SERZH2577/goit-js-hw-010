import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onOoo);

function onOoo(e) {
  e.preventDefault();
  let stateBool;

  if (formRef.elements.state.value === 'fulfilled') {
    stateBool = true;
  } else {
    stateBool = false;
  }

  createPromise(stateBool, formRef.elements.delay.value)
    .then(delay => {
      iziToast.success({
        position: 'topRight',
        messageColor: 'brown',
        message: `✅ Fulfilled promise in ${delay}ms`,
        timeout: 3000,
      });
    })
    .catch(delay => {
      iziToast.error({
        position: 'topRight',
        messageColor: 'brown',
        message: `❌ Rejected promise in ${delay}ms`,
        timeout: 3000,
      });
    });

  function createPromise(state, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state) {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }

  e.currentTarget.reset();
}
