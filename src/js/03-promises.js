import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', setInputForm);

const delayPromise = {
  delay: null,
  step: null,
  amount: null,
};

function setInputForm(e) {
  delayPromise[e.target.name] = Number(e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();
  if (
    delayPromise.delay === '' ||
    delayPromise.step === '' ||
    delayPromise.amount === ''
  ) {
    return;
  }

  for (let i = 0; i < delayPromise.amount; i++) {
    let delay = delayPromise.delay + i * delayPromise.step;
    createPromise(i + 1, delay)
      .then(onPromiseSuccess)
      .catch(onPromiseError);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPromiseSuccess(option) {
  Notify.success(
    ` ✅ Fulfilled promise ${option.position} in ${option.delay}ms`
  );
}

function onPromiseError(option) {
  Notify.failure(
    ` ❌  Rejected promise ${option.position} in ${option.delay}ms`
  );
}
