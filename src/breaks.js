import { timer_countdown } from "./countdownLoop.js";
import { play_break_sound, play_start_sound } from "./sounds.js";
import { paused, sleep } from "./timer.js";

const short_break = document.querySelector("#shortBreakBox");
const long_break = document.querySelector("#longBreakBox");

export const activate_break_long = (breakTime) => {
  if (breakTime && !paused) {
    long_break.className = "breakOn";
    play_break_sound();
  }
};

export const activate_break_short = (breakTime) => {
  if (breakTime && !paused) {
    short_break.className = "breakOn";
    play_break_sound();
  }
};

export const disable_break = () => {
  short_break.className = "breakOff";
  long_break.className = "breakOff";
  play_start_sound();
};

const countdown = document.querySelector("body > div.timerBox > p");
const breakButton = document.querySelector("#breakButton");
let breakActive = false;

//function for each break to have its own countdown timer

const FIVE = { minutes: 1, seconds: 10 }; //short break (5 mins)
const FIFTEEN = { minutes: 14, seconds: 59 }; //long break (15 mins)
//TODO - FIX INCORRECT TIME DISPLAY AFTER 2ND BREAK
export const five_min_countDown = (startButton) => {
  countdown.textContent = `${FIVE.minutes}:${FIVE.seconds}`;

  startButton.disabled = true;
  breakButton.disabled = false;
  breakButton.addEventListener("click", async (e) => {
    e.target.disabled = true; //disables "start break button"

    breakActive = true;
    while (breakActive) { //countdown loop for break timer
      if (FIVE.minutes == 0 && FIVE.seconds == 0) {
        startButton.disabled = false; //re-enable start button
        countdown.textContent = `1:10`;
        breakActive = false;
        disable_break();
        break;
      }

      timer_countdown(FIVE, countdown);
      await sleep(995);
    }
  });
};