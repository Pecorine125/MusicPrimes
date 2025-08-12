const player = document.getElementById("player");
const themesContainer = document.getElementById("themes");
const nowPlayingSection = document.getElementById("now-playing");
const coverNow = document.getElementById("cover-now");
const themeNameElem = document.getElementById("theme-name");
const musicTitleElem = document.getElementById("music-title");

let currentPlaylist = [];
let currentIndex = 0;
let currentTheme = null;

function createThemeCards() {
  for (const [key, theme] of Object.entries(musicFolders)) {
    const card = document.createElement("div");
    card.classList.add("theme-card");
    card.dataset.key = key;

    const img = document.createElement("img");
    img.src = theme.cover;
    img.alt = theme.displayName;

    const title = document.createElement("h3");
    title.textContent = theme.displayName;

    card.appendChild(img);
    card.appendChild(title);

    card.addEventListener("click", () => {
      startPlaylist(key);
    });

    themesContainer.appendChild(card);
  }
}

function startPlaylist(themeKey) {
  currentTheme = musicFolders[themeKey];
  currentPlaylist = currentTheme.files;
  currentIndex = 0;
  themeNameElem.textContent = currentTheme.displayName;
  nowPlayingSection.classList.remove("hidden");
  playCurrentMusic();
}

function playCurrentMusic() {
  if (!currentPlaylist.length) return;
  const music = currentPlaylist[currentIndex];
  player.src = currentTheme.path + music.file;
  player.play();
  coverNow.src = music.cover;
  musicTitleElem.textContent = music.title;
}

// Avança para a próxima música quando acabar
player.addEventListener("ended", () => {
  currentIndex++;
  if (currentIndex >= currentPlaylist.length) {
    currentIndex = 0; // Volta para a primeira música (loop)
  }
  playCurrentMusic();
});

// Inicializa as cartas de tema ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  createThemeCards();
});
