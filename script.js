const video = document.querySelector(".player__video");
const toggle = document.querySelector(".toggle");
const rewindBtn = document.querySelector(".rewind");
const skipBtn = document.querySelector(".skip");
const volume = document.querySelector(".volume");
const speed = document.querySelector(".playbackSpeed");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");

// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = "❚❚";
  } else {
    video.pause();
    toggle.textContent = "►";
  }
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

// Update progress bar
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percent + "%";
});

// Scrub
progress.addEventListener("click", (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
});

// Rewind 10 seconds
rewindBtn.addEventListener("click", () => {
  video.currentTime -= 10;
});

// Skip forward 25 seconds
skipBtn.addEventListener("click", () => {
  video.currentTime += 25;
});

// Volume control
volume.addEventListener("input", () => {
  video.volume = volume.value;
});

// Playback speed control
speed.addEventListener("input", () => {
  video.playbackRate = speed.value;
});
