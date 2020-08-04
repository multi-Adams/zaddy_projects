const timing = document.querySelector('#pomodoro-timer');

const start = document.querySelector('#pomodoro-start');

const pause = document.querySelector('#pomodoro-pause');

const stop = document.querySelector('#pomodoro-stop');

start.addEventListener('click', () => {
  toggleClock();
});

pause.addEventListener('click', () => {
  toggleClock();
});

stop.addEventListener('click', () => {
  toggleClock(true);
});

let running = false;

let work = 1500;
let current = 1500;

let breakSession = 300;

const displaycurrent = () => {
  const secondsLeft = current;
  let result = '';
  const seconds = secondsLeft % 60;
  const minutes = parseInt(secondsLeft / 60) % 60;
  let hours = parseInt(secondsLeft / 3600);
  function addLeadingZeroes(time) {
    return time < 10 ? `0${time}` : time;
  }
  if (hours > 0) result += `${hours}:`;
  result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
  timing.innerText = result.toString();
};

const stopClock = () => {
  clearInterval(clockTimer);
  running = false;
  current = work;
  start.disabled = false;
  displaycurrent();
};

const toggleClock = (reset) => {
  if (reset) {
    stopClock();
  } else {
    if (running === true) {
      pauseTimer();
    } else {
      startTimer();
    }
  }
};

const pauseTimer = () => {
  clearInterval(clockTimer);
  running = false;
  pause.textContent = 'Play';
};

const startTimer = () => {
  running = true;
  pause.textContent = 'Pause';
  clockTimer = setInterval(() => {
    current--;
    start.disabled = true;
    displaycurrent();
  }, 1000);
};
