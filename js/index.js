// ==== ANIMASI INTRO ====

const introTitle = document.querySelector('.intro-title');
const text = `From Vina Faizatus Imuett`.split('');

// buat teks satu per satu
text.forEach((char) => {
  const span = document.createElement('span');
  span.textContent = char === ' ' ? '\u00A0' : char;
  const delay = Math.random() * 2;
  span.style.animationDelay = `${delay}s`;
  introTitle.appendChild(span);
});

// setelah 3.5 detik -> sembunyikan intro
setTimeout(() => {
  const intro = document.getElementById('intro');
  intro.style.opacity = '0';
  setTimeout(() => {
    intro.style.display = 'none';
  }, 1000);
}, 3500);


