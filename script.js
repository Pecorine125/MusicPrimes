const player = document.getElementById("player");

// Criar lista de músicas
function createMusicList(id, folder) {
    const ul = document.getElementById(id);
    folder.files.forEach(music => {
        const li = document.createElement("li");
        li.textContent = music.title;
        li.onclick = () => {
            player.src = folder.path + music.file;
            player.play();
        };
        ul.appendChild(li);
    });
}

// Monta todas as listas usando o `musicFolders` do arquivo separado
for (const [id, folder] of Object.entries(musicFolders)) {
    createMusicList(id, folder);
}
