/* =====================================
   1. TYPING EFFECT
===================================== */
(function () {
  const text = `Happy birthday to my favorite person! aku tau words can't fully capture how much you mean to me, but at least, 
  setidaknya aku mau kamu tau that loving you is the easiest thing I've ever done. 
  Thank you for being you - beautifully imperfect and perfectly mine. Here's to forever with you, sayanggkuuuu.
Aku sayangg kamu cintakuuu....`;

  const element = document.getElementById("typingText");
  if (!element) return;

  let index = 0;

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 40);
    }
  }

  type();
})();


/* =====================================
   2. MUSIC CONTROL + FADE IN
===================================== */
(function () {
  const musicBtn = document.getElementById("musicBtn");
  const bgMusic = document.getElementById("bgMusic");
  if (!bgMusic) return;

  bgMusic.volume = 0;

  function fadeInMusic() {
    let volume = 0;
    const interval = setInterval(() => {
      volume += 0.05;
      if (volume >= 1) {
        volume = 1;
        clearInterval(interval);
      }
      bgMusic.volume = volume;
    }, 150);
  }

  function startMusic() {
    bgMusic.play().then(fadeInMusic).catch(() => {});
  }

  document.addEventListener("click", startMusic, { once: true });

  if (musicBtn) {
    musicBtn.addEventListener("click", () => {
      startMusic();
      musicBtn.innerText = "Musik Diputar 💙";
    });
  }
})();


/* =====================================
   3. COUNTDOWN
===================================== */
(function () {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  const startDate = new Date("2025-09-04");
  const today = new Date();
  const diffDays = Math.floor(
    Math.abs(today - startDate) / (1000 * 60 * 60 * 24)
  );

  countdown.innerText =
    "Kita sudah bersama selama " + diffDays + " hari 💙";
})();


/* =====================================
   4. CONFETTI
===================================== */
if (typeof confetti === "function") {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}


/* =====================================
   5. BACKGROUND PARTICLES
===================================== */
(function () {
  const canvas = document.getElementById("particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedY = Math.random() * 1 + 0.3;
    }

    update() {
      this.y -= this.speedY;
      if (this.y < 0) {
        this.y = canvas.height;
        this.x = Math.random() * canvas.width;
      }
    }

    draw() {
      ctx.fillStyle = "rgba(79,172,254,0.8)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
})();


/* =====================================
   6. STAR EFFECT
===================================== */
(function () {
  const container = document.querySelector(".star-container");
  if (!container) return;

  function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.innerHTML = "✨";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.fontSize = Math.random() * 10 + 10 + "px";

    container.appendChild(star);
    setTimeout(() => star.remove(), 4000);
  }

  setInterval(createStar, 600);
})();


/* =====================================
   7. FLOWER EFFECT
===================================== */
(function () {
  const container = document.querySelector(".flower-container");
  if (!container) return;

  function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerHTML = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = Math.random() * 15 + 15 + "px";
    flower.style.animationDuration =
      Math.random() * 5 + 5 + "s";

    container.appendChild(flower);
    setTimeout(() => flower.remove(), 10000);
  }

  setInterval(createFlower, 800);
})();


/* =====================================
   8. CINEMATIC SLIDER
===================================== */
(function () {
  const slidesContainer = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");

  if (!slidesContainer || images.length === 0) return;

  let current = 0;

  images[0].classList.add("active");

  setInterval(() => {
    images[current].classList.remove("active");

    current++;
    if (current >= images.length) current = 0;

    slidesContainer.style.transform =
      "translateX(-" + current * 100 + "%)";

    images[current].classList.add("active");
  }, 6000);
})();

