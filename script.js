function nextPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(`page${pageNumber}`).classList.add('active');
}

function prevPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(`page${pageNumber}`).classList.add('active');
}

const music = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");

music.volume = 0.5; // Ajusta o volume inicial

musicToggle.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicToggle.textContent = "🔊 Tocando";
    } else {
        music.pause();
        musicToggle.textContent = "🔇 Pausado";
    }
});

function getCurrentPage() {
  const pages = document.querySelectorAll('.page');
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].classList.contains('active')) return i + 1;
  }
  return 1;
}

function nextPageGlobal() {
  const current = getCurrentPage();
  const next = current + 1;

  if (document.getElementById(`page${next}`)) {
    nextPage(next);
  }
}

function prevPageGlobal() {
  const current = getCurrentPage();
  const prev = current - 1;

  if (document.getElementById(`page${prev}`)) {
    prevPage(prev);
  }
}
