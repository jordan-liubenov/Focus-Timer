const countdown = document.querySelector("body > div.timerBox > p");

const TIMER = { minutes: 24, seconds: 59 }; //initial time at start
let timer_active = false;

//buttons ------------------------------------------------------------------------------
const startButton = document.querySelector("body > div.buttonDiv > button");
const pauseButton = document.querySelector("body > div.buttonDiv > button:nth-child(2)");
//--------------------------------------------------------------------------------------

const sleep = (ms) => { //basic sleep function that adds delay between operations when called with the passed milliseconds
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const start_timer = () => {
  countdown.textContent = `${TIMER.minutes}:${TIMER.seconds}`;

  startButton.addEventListener("click", async (e) => {

    e.target.disabled = true;
    pauseButton.disabled = false;
    timer_active = true;

    while (timer_active) {
      if (TIMER.minutes == 0 && TIMER.seconds == 0) { //break loop when the clock hits zero
        timer_active = false;
        pauseButton.disabled = true;
        startButton.disabled = false;
      }

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
      await sleep(1000);
    }
  });

  pauseButton.addEventListener("click", () => {
    countdown.textContent = `${TIMER.minutes}:${TIMER.seconds}`;
    timer_active = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
  });
};