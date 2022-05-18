export const timer_countdown = (TIMER, countdown) => {
  if (TIMER.seconds > 0) {
    TIMER.seconds--;
  } else if (TIMER.seconds == 0) {
    TIMER.minutes--;
    TIMER.seconds = 59;
  }

  if (TIMER.seconds < 10) {
    TIMER.seconds = "0" + TIMER.seconds;
  }
  if (TIMER.minutes < 10) {
    if (TIMER.minutes.toString().charAt(0) != "0") {
      TIMER.minutes = "0" + TIMER.minutes;
    }
    if (TIMER.minutes == "0") {
      TIMER.minutes = "0" + 0;
    }
  }
  countdown.textContent = `${TIMER.minutes}:${TIMER.seconds}`;
};
