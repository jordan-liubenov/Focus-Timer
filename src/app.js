import { start_timer } from "./timer.js"
import { fetch_quotes } from "./quoteFetcher.js";

const main = () => {
  fetch_quotes();
  start_timer();
}

window.addEventListener("load", main);