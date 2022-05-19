import { fetch_quotes } from "./quoteFetcher.js";
import { start_timer } from "./timer.js"

const main = () => {
  start_timer();
  fetch_quotes();
}

window.addEventListener("load", main);