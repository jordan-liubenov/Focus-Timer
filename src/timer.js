import { activate_break_long, activate_break_short, disable_break } from "./breaks.js";

const countdown = document.querySelector("body > div.timerBox > p");

let TIMER = { minutes: 24, seconds: 59 }; //initial time at start
export let timer_active = false;

export let counter = 0;
export let breakTime = false;

export let paused = false;

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
    paused = false;
    e.target.disabled = true;
    pauseButton.disabled = false;
    timer_active = true;
    breakTime = false;

    disable_break(breakTime);

    while (timer_active) {
      if (TIMER.minutes == 0 && TIMER.seconds == 0) { //break loop when the clock hits zero
        timer_active = false;

        paused = false;

        pauseButton.disabled = true;
        startButton.disabled = false;

        TIMER = { minutes: 24, seconds: 59 } //set timer to default values after it finishes a pass
        countdown.textContent = `${TIMER.minutes}:${TIMER.seconds}`;

        counter++;
        breakTime = true;
        break;
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
      await sleep(995);
    }
    if (counter % 3 == 0) {
      activate_break_long(breakTime);
    } else {
      activate_break_short(breakTime);
    }
  });

  pauseButton.addEventListener("click", () => {
    countdown.textContent = `${TIMER.minutes}:${TIMER.seconds}`;
    timer_active = false;
    startButton.disabled = false;
    pauseButton.disabled = true;

    paused = true;
  });
};