// Lista de músicas com título e capa (pode repetir capa)
const musicFolders = {
    "anime-br": {
        path: "public/music-anime-br/",
        files: [
            { file: "musica1.mp4", title: "Abertura One Piece", cover: "public/covers/anime.jpg" },
            { file: "musica2.mp4", title: "Abertura Naruto", cover: "public/covers/anime.jpg" }, // mesma capa
            { file: "musica3.mp4", title: "Abertura Dragon Ball", cover: "public/covers/dragonball.jpg" }
        ]
    },
    "anime-jp": {
        path: "public/music-anime-jp/",
        files: [
            { file: "musica1.ogg", title: "Tema de Attack on Titan", cover: "public/covers/aot.jpg" },
            { file: "musica2.ogg", title: "Tema de Demon Slayer", cover: "public/covers/aot.jpg" } // mesma capa
        ]
    },
    "tempo-inovar": {
        path: "public/music-tempo-inovar/",
        files: [
            { file: "musica1.mp4", title: "Inovar Mix 1", cover: "public/covers/mix.jpg" },
            { file: "musica2.mp4", title: "Inovar Mix 2", cover: "public/covers/mix.jpg" } // mesma capa
        ]
    }
};
