const start_sound = document.querySelector("#audioStart");
const break_sound = document.querySelector("#audioEnd");

export const play_start_sound = () => {
	start_sound.play();
}

export const play_break_sound = () => {
	break_sound.play();
}
