import { start_timer } from "./timer.js"
import { fetch_quotes } from "./quoteFetcher.js";
import { easter_egg } from "./easterEgg.js";

const main = () => {
  easter_egg();
  fetch_quotes();
  start_timer();
}

window.addEventListener("load", main)
