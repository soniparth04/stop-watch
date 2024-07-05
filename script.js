// scripts.js
let [hours, minutes, seconds] = [0, 0, 0];
let timerRef = document.getElementById('display');
let int = null;

document.getElementById('start').addEventListener('click', () => {
  if(int !== null){
    clearInterval(int);
  }
  int = setInterval(displayTimer, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(int);
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(int);
  [hours, minutes, seconds] = [0, 0, 0];
  timerRef.innerHTML = '00:00:00';
});

function displayTimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  timerRef.innerHTML = `${h}:${m}:${s}`;
}
