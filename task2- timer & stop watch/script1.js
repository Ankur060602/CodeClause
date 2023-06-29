let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchTime = 0;
  document.querySelector(".stopwatch").textContent = "00:00:00.000";
}

function updateStopwatch() {
  stopwatchTime += 10;
  const milliseconds = stopwatchTime % 1000;
  const seconds = Math.floor(stopwatchTime / 1000) % 60;
  const minutes = Math.floor(stopwatchTime / 1000 / 60) % 60;
  const hours = Math.floor(stopwatchTime / 1000 / 60 / 60) % 24;
  const time = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
  document.querySelector(".stopwatch").textContent = time;
}