/* =========================
   TYPING EFFECT
========================= */
const text = "Terima kasih sudah hadir dalam hidupku. Kamu adalah alasan aku tersenyum setiap hari. Semoga kita selalu bersama dan saling menjaga. Aku sayang kamu 💙";
const typingElement = document.getElementById("typingText");

let i = 0;
function typeWriter(){
  if(i < text.length){
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
typeWriter();


/* =========================
   MUSIC AUTO PLAY + FADE IN
========================= */
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0;

function fadeInMusic(){
  let volume = 0;
  const fade = setInterval(function(){
    if(volume < 1){
      volume += 0.05;
      bgMusic.volume = volume;
    } else {
      clearInterval(fade);
    }
  }, 150);
}

function startMusic(){
  bgMusic.play().then(()=>{
    fadeInMusic();
  }).catch(()=>{});
}

/* Auto play saat klik pertama */
document.addEventListener("click", function(){
  startMusic();
}, { once: true });

/* Tombol manual */
musicBtn.addEventListener("click", function(){
  startMusic();
  musicBtn.innerText = "Musik Diputar 💙";
});


/* =========================
   COUNTDOWN HARI JADIAN
========================= */
const startDate = new Date("2025-09-04");  // UBAH TANGGAL INI
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("countdown").innerText =
  "Kita sudah bersama selama " + diffDays + " hari 💙";


/* =========================
   CONFETTI SAAT MASUK
========================= */
confetti({
  particleCount: 150,
  spread: 100,
  origin: { y: 0.6 }
});


/* =========================
   PARTICLE BIRU BACKGROUND
========================= */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let particlesArray = [];

class Particle{
  constructor(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.size = Math.random()*3+1;
    this.speedY = Math.random()*1+0.3;
  }
  update(){
    this.y -= this.speedY;
    if(this.y < 0){
      this.y = canvas.height;
      this.x = Math.random()*canvas.width;
    }
  }
  draw(){
    ctx.fillStyle="rgba(79,172,254,0.8)";
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}

function init(){
  for(let i=0;i<80;i++){
    particlesArray.push(new Particle());
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p=>{
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();


/* =========================
   BINTANG BERKELIP
========================= */
function createStar(){
  const star = document.createElement("div");
  star.classList.add("star");
  star.innerHTML = "✨";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.fontSize = (Math.random() * 10 + 10) + "px";
  document.querySelector(".star-container").appendChild(star);

  setTimeout(()=>{
    star.remove();
  },4000);
}
setInterval(createStar, 500);


/* =========================
   BUNGA JATUH
========================= */
function createFlower(){
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerHTML = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.fontSize = (Math.random() * 15 + 15) + "px";
  flower.style.animationDuration = (Math.random() * 5 + 5) + "s";
  document.querySelector(".flower-container").appendChild(flower);

  setTimeout(()=>{
    flower.remove();
  },10000);
}
setInterval(createFlower, 700);

