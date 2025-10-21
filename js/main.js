
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('HAPPY BIRTHDAY CINDYY SAYANGG:v').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

const page = document.getElementById("picturePage");
const openBtn = document.getElementById("openBtn");
const pageBtn = document.getElementById("pageBtn");
const closeBtn = document.getElementById("closeBtn");

if (pageBtn) {
  pageBtn.addEventListener("click", () => {
    page.style.display = "flex";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    page.style.display = "none";
  });
}

if (openBtn) {
  openBtn.addEventListener("click", () => {
    alert("✨ Opening main surprise ✨");
  });
}
