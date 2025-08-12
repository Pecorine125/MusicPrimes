const player = document.getElementById("player");

function createMusicGrid(id, folder) {
    const container = document.getElementById(id);
    folder.files.forEach(music => {
        const card = document.createElement("div");
        card.classList.add("music-card");

        const img = document.createElement("img");
        img.src = music.cover;
        img.alt = music.title;

        const title = document.createElement("h3");
        title.textContent = music.title;

        const btn = document.createElement("button");
        btn.textContent = "▶ Play";
        btn.classList.add("play-btn");
        btn.onclick = () => {
            player.src = folder.path + music.file;
            player.play();
        };

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(btn);
        container.appendChild(card);
    });
}

for (const [id, folder] of Object.entries(musicFolders)) {
    createMusicGrid(id, folder);
}
