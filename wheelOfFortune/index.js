(function () {
  const wheel = document.querySelector('.wheel');
  const rollBtn = document.querySelector('.button');
  let deg = 0;

  const spin = () => {
    rollBtn.style.pointerEvents = 'none';
    // calculate time to spin randomly
    deg = Math.floor(7000 + Math.random() * 7500);
    console.log(deg);
    wheel.style.transition = 'all 10s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    // add blur when spin is starting
    wheel.classList.add('blur');
  };

  const stopSpin = () => {
    // remove blur when spin is stopping
    wheel.classList.remove('blur');
    rollBtn.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const curr = deg % 360;
    wheel.style.transform = `rotate(${curr}deg)`;
  };

  // add spin events
  rollBtn.addEventListener('click', spin);

  // add the event to stop spinning
  wheel.addEventListener('transitionend', stopSpin);
})();
console.log('object');
