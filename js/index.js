// ==== ANIMASI INTRO ====
const intro = document.getElementById("intro");
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




// ==== ANIMASI BERGANTIAN UNTUK "FROM VINA FAIZATUS IMUETT" ====
const fromText = document.querySelector('.from-text');
const message = 'From Vina Faizatus Imuett'.split('');

fromText.innerHTML = ''; // kosongkan dulu
message.forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char;
  if (char === ' ') span.style.width = '1rem'; // jarak antar kata
  span.style.animationDelay = `${i * 0.15}s`; // delay antar huruf
  fromText.appendChild(span);
});
