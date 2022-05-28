import { timer_countdown } from "./countdownLogic.js";
import { play_break_sound, play_start_sound } from "./sounds.js";
import { paused, sleep } from "./timer.js";

const short_break = document.querySelector("#shortBreakBox"); //5 min break box
const long_break = document.querySelector("#longBreakBox"); //15 min break box

const countdown = document.querySelector("body > div.timerBox > p");

const FIVE = { minutes: "0" + 4, seconds: 59 }; //short break (5 mins)
const FIFTEEN = { minutes: 14, seconds: 59 }; //long break (15 mins)

export const activate_break_long = (breakTime) => {
	if (breakTime && !paused) {
		countdown.textContent = `${FIVE.minutes}:${FIVE.seconds}`;

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


const breakButton = document.querySelector("#breakButton");
let breakActive = false;

//function for each break to have its own countdown timer

export const five_min_countDown = (startButton) => {
	FIVE.minutes = "0" + 4;
	FIVE.seconds = 59;
	countdown.textContent = `${FIVE.minutes}:${FIVE.seconds}`;

	startButton.disabled = true;
	breakButton.disabled = false;
	breakButton.addEventListener("click", async (e) => {
		e.target.disabled = true; //disables "start break button"

		breakActive = true;
		while (breakActive) { //countdown loop for break timer
			if (FIVE.minutes == 0 && FIVE.seconds == 0) {
				startButton.disabled = false; //re-enable start button
				countdown.textContent = `24:59`; //set back to 24:59
				breakActive = false;
				disable_break();
				break;
			}

			document.title = countdown.textContent = `${FIVE.minutes}:${FIVE.seconds} | Break`;
			timer_countdown(FIVE, countdown);
			await sleep(995);
		}
	});
};

export const fifteen_min_countdown = (startButton) => {
	FIFTEEN.minutes = 14;
	FIFTEEN.seconds = 59;
	countdown.textContent = `${FIFTEEN.minutes}:${FIFTEEN.seconds}`;
	startButton.disabled = true;
	breakButton.disabled = false;

	breakButton.addEventListener("click", async (e) => {
		e.target.disabled = true; //disables "start break button"

		breakActive = true;
		while (breakActive) { //countdown loop for break timer
			if (FIFTEEN.minutes == 0 && FIFTEEN.seconds == 0) {
				startButton.disabled = false; //re-enable start button
				countdown.textContent = `24:59`;
				breakActive = false;
				disable_break();
				break;
			}

			document.title = countdown.textContent = `${FIFTEEN.minutes}:${FIFTEEN.seconds} | Break`;
			timer_countdown(FIFTEEN, countdown);
			await sleep(995);
		}
	});
};