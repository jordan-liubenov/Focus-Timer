import { timer_active } from "./timer.js";

const message_area = document.querySelector("#msg");

if (timer_active) {
  message_area.textContent = "You should be focused on what you're doing right now... hopefully."
}