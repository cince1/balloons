let popped = 0;

document.querySelectorAll(".balloon").forEach((balloon) => {
  balloon.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = "#fff";
    e.target.textContent = "POPPED!";
    popped++;
    audioPlay();
    checkAllExploded();
  });
});

function audioPlay() {
  setTimeout(() => {
    document.querySelector(".audio").play();
  }, 10);
}

function checkAllExploded() {
  if (popped === 12) {
    let balloons = document.querySelector(".balloons");
    let message = document.querySelector(".no-balloons");
    let title = document.querySelector(".title");
    balloons.innerHTML = "";
    message.style.display = "block";
    title.style.display = "none";
  }
}
