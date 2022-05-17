import { paused, timer_active } from "./timer.js";

const short_break = document.querySelector("body > div.breakContainer > div:nth-child(1)");
const long_break = document.querySelector("body > div.breakContainer > div:nth-child(2)");

export const activate_break = (breakTime, counter) => {
  if (breakTime && !paused) {
    if (counter % 1 == 0 || counter % 2 == 0 || counter % 3 == 0) {
      short_break.className = "breakOn";
    } else if (counter % 4 == 0) {
      long_break.className = "breakOn";
      console.log("worked");
    }
  }
};

export const disable_break = (breakTime) => {
  if (!breakTime) {
    short_break.className = "breakBox";
  }
};