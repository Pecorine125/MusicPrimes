const player = document.getElementById("player");

// Configuração manual das músicas
const musicFolders = {
    "anime-br": {
        path: "public/music-anime-br/",
        files: ["musica1.mp4", "musica2.mp4", "musica3.mp4"]
    },
    "anime-jp": {
        path: "public/music-anime-jp/",
        files: ["musica1.ogg", "musica2.ogg"]
    },
    "tempo-inovar": {
        path: "public/music-tempo-inovar/",
        files: ["musica1.mp4", "musica2.mp4"]
    }
};

// Criar lista de músicas
function createMusicList(id, folder) {
    const ul = document.getElementById(id);
    folder.files.forEach(file => {
        const li = document.createElement("li");
        li.textContent = file.replace(/\.(mp4|ogg)$/i, ""); // Remove extensão no nome exibido
        li.onclick = () => {
            player.src = folder.path + file;
            player.play();
        };
        ul.appendChild(li);
    });
}

// Monta todas as listas
for (const [id, folder] of Object.entries(musicFolders)) {
    createMusicList(id, folder);
}
