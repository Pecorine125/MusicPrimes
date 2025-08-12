const gallery = document.getElementById("gallery");
const playerSection = document.getElementById("player-section");
const largeCover = document.getElementById("large-cover");
const nowPlayingTitle = document.getElementById("now-playing-title");

const backMenuBtn = document.getElementById("back-menu-btn");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const closeAppBtn = document.getElementById("close-app-btn");

const audioPlayer = document.getElementById("audio-player");

let currentMusic = null;
let isPaused = false;

function loadGallery() {
  gallery.innerHTML = "";
  musicList.forEach((music, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = music.cover;
    img.alt = music.title;

    const title = document.createElement("h3");
    title.textContent = music.title;

    card.appendChild(img);
    card.appendChild(title);

    card.addEventListener("click", () => {
      openPlayer(index);
    });

    gallery.appendChild(card);
  });

  gallery.parentElement.classList.remove("hidden");
  playerSection.classList.add("hidden");
}

function openPlayer(index) {
  currentMusic = musicList[index];
  largeCover.src = currentMusic.cover;
  nowPlayingTitle.textContent = currentMusic.title;
  audioPlayer.src = currentMusic.file;
  audioPlayer.pause();
  isPaused = true;

  gallery.parentElement.classList.add("hidden");
  playerSection.classList.remove("hidden");
}

backMenuBtn.addEventListener("click", () => {
  audioPlayer.pause();
  loadGallery();
});

playBtn.addEventListener("click", () => {
  if (!currentMusic) return;
  if (isPaused) {
    audioPlayer.play();
    isPaused = false;
  }
});

pauseBtn.addEventListener("click", () => {
  if (!currentMusic) return;
  if (!isPaused) {
    audioPlayer.pause();
    isPaused = true;
  }
});

closeAppBtn.addEventListener("click", () => {
  window.close(); // Fecha a aba/janela do navegador (funciona se a aba foi aberta via script)
});

// Inicializa galeria
window.addEventListener("DOMContentLoaded", () => {
  loadGallery();
});
