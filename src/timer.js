import { activate_break_long, activate_break_short, disable_break, fifteen_min_countdown, five_min_countDown } from "./breaks.js";
import { timer_countdown } from "./countdownLoop.js";

const countdown = document.querySelector("body > div.timerBox > p");

export let TIMER = { minutes: 24, seconds: 59 };
export let timer_active = false;

export let counter = 0;

let breakTime = false;

export let paused = false;

//buttons ------------------------------------------------------------------------------
const startButton = document.querySelector("body > div.buttonDiv > button");
const pauseButton = document.querySelector("body > div.buttonDiv > button:nth-child(2)");
//--------------------------------------------------------------------------------------

export const sleep = (ms) => { //basic sleep function that adds delay between operations when called with the passed milliseconds
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
      document.title = countdown.textContent = `${TIMER.minutes}:${TIMER.seconds} | Focus Timer`;
      timer_countdown(TIMER, countdown); //if timer has not reached 00:00 yet, continue to count down

      await sleep(995);
    }

    if (counter % 3 == 0 && !paused) {
      activate_break_long(breakTime);
      fifteen_min_countdown(startButton);
    } else if (counter % 3 != 0 && !paused) {
      activate_break_short(breakTime);
      five_min_countDown(startButton);
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