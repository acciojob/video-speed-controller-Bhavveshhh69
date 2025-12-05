const video = document.querySelector(".viewer");
const toggleButton = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const volume = document.querySelector(".volume");
const speed = document.querySelector(".playbackSpeed");
const skipButtons = document.querySelectorAll("[data-skip]");

// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
    toggleButton.textContent = "❚❚";
  } else {
    video.pause();
    toggleButton.textContent = "►";
  }
}

// Update play/pause button when video ends
video.addEventListener("play", () => toggleButton.textContent = "❚❚");
video.addEventListener("pause", () => toggleButton.textContent = "►");

// Update Progress Bar
function updateProgress() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percentage}%`;
}

// Scrub video position by clicking on progress bar
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Skip forward/backward
skipButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    video.currentTime += parseFloat(btn.dataset.skip);
  });
});

// Volume control
volume.addEventListener("input", () => {
  video.volume = volume.value;
});

// Playback speed control
speed.addEventListener("input", () => {
  video.playbackRate = speed.value;
});

// Event Listeners
toggleButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("click", scrub);
