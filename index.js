const countdown = document.querySelector('.countdown');
const minutesSpan = countdown.querySelector('.minutes');
const secondsSpan = countdown.querySelector('.seconds');

let totalSeconds = 5 * 60; // 5 minutes

setInterval(updateTimer, 1000);

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  minutesSpan.textContent = minutes.toString().padStart(2, '0');
  secondsSpan.textContent = seconds.toString().padStart(2, '0');

  totalSeconds--;

  if (totalSeconds < 0) {
    clearInterval();
    alert('Time is up!');
  }
}