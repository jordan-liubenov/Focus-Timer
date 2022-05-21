const easterEggDiv = document.querySelector("#easterBox");
const clearButton = document.querySelector("#clearButton");

let COUNTER = 0;

let visible = false;

const create_video_player = () => {
  let videoPlayer = document.createElement("video");

  videoPlayer.width = 700;
  videoPlayer.height = 600;
  videoPlayer.src = "../video/roundabout.mp4";
  videoPlayer.autoplay = true;

  return videoPlayer;
};

export const easter_egg = () => {
  clearButton.style.display = "none";

  easterEggDiv.addEventListener("click", () => {
    if (COUNTER == 3) {
      visible = true;

      for (let i = 0; i < 9; i++) {
        const video = create_video_player();
        easterEggDiv.appendChild(video);
        if (i == 0) {
          video.muted = false;
        } else {
          video.muted = true;
        }
      }

      clear_page();
      COUNTER = 0;

    } else {
      COUNTER++;
    }
  });
};

//TO-DO: add "Clear Page" button functionality
function clear_page() {
  if (!visible) {
    return;
  }

  clearButton.style.display = "block";

  clearButton.addEventListener("click", (e) => {
    visible = false;
    easterEggDiv.replaceChildren();
    e.target.style.display = "none";
  });

  //if visible=true, set "clearBtn" to be visible,
  //add event listener that removes all videos from the easterEggDiv
  //make visible=false and finally hide the "clearBtn" again
}