import { play_break_sound, play_start_sound } from "./sounds.js";
import { paused } from "./timer.js";

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