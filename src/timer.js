const countdown = document.querySelector("body > div.timerBox > p");

const TIMER = { minutes: 24, seconds: 59 }; //initial time at start

let timer_active = false;

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const pause_timer = () => {
  const pauseButton = document.querySelector("body > div.buttonDiv > button:nth-child(2)");

  pauseButton.addEventListener("click", () => {
    timer_active = false;
  });
}

export const start_timer = () => {
  const startButton = document.querySelector("body > div.buttonDiv > button");
  const pauseButton = document.querySelector("body > div.buttonDiv > button:nth-child(2)");

  countdown.textContent = `${TIMER.minutes}:${TIMER.seconds}`;

  startButton.addEventListener("click", async (e) => {

    e.target.disabled = true;

    pauseButton.disabled = false;

    timer_active = true;

    while (timer_active) {
      await sleep(1000);

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
      if (TIMER.minutes == 0 && TIMER.seconds == 0) { //break loop when 25 minutes pass
        timer_active = false;
      }
    }
  });
};
function log(e) {
  console.log(e);
}