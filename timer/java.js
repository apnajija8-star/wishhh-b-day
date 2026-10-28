// =====================================================
// BIRTHDAY COUNTDOWN — fixed deadline, India Standard Time
// Deadline: 29 October 2026 at 12:00 AM IST
// =====================================================

const TARGET_TIME = new Date("2026-10-29T00:00:00+05:30").getTime();

const NEXT_PAGE_URL = "../chotu/meeta.html";
const countdown = document.getElementById("countdown");
const statusText = document.getElementById("status");

let countdownInterval = null;
let redirected = false;

function updateCountdown() {
  const msLeft = TARGET_TIME - Date.now();

  if (msLeft <= 0) {
    countdown.textContent = "00d 00h 00m 00s";
    countdown.classList.remove("urgent");
    statusText.textContent = "The surprise is ready! ❤️";
    if (!redirected) {
      redirected = true;
      if (countdownInterval) clearInterval(countdownInterval);
      window.location.replace(NEXT_PAGE_URL);
    }
    return;
  }

  const totalSeconds = Math.floor(msLeft / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdown.textContent =
    `${String(days).padStart(2, "0")}d ` +
    `${String(hours).padStart(2, "0")}h ` +
    `${String(minutes).padStart(2, "0")}m ` +
    `${String(seconds).padStart(2, "0")}s`;

  if (totalSeconds <= 10) countdown.classList.add("urgent");
  else countdown.classList.remove("urgent");
}

updateCountdown();
countdownInterval = setInterval(updateCountdown, 1000);

// ---------------- Floating hearts background ----------------
const canvas = document.getElementById("hearts-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function spawnHeart() {
  return {
    x: Math.random() * window.innerWidth,
    y: window.innerHeight + Math.random() * 200,
    s: 8 + Math.random() * 18,
    v: 0.4 + Math.random() * 1.4,
    a: 0.35 + Math.random() * 0.55,
    hue: 330 + Math.random() * 30
  };
}
const hearts = Array.from({ length: 40 }, spawnHeart);

function drawHeart(x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 30, size / 30);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-15, -15, -30, 5, 0, 25);
  ctx.bezierCurveTo(30, 5, 15, -15, 0, 0);
  ctx.fill();
  ctx.restore();
}

(function animateHearts() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  hearts.forEach((heart, index) => {
    heart.y -= heart.v;
    heart.x += Math.sin(heart.y * 0.01) * 0.6;
    if (heart.y < -30) hearts[index] = spawnHeart();
    drawHeart(
      heart.x, heart.y, heart.s,
      `hsla(${heart.hue}, 85%, 70%, ${heart.a})`
    );
  });
  requestAnimationFrame(animateHearts);
})();
