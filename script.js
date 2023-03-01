const musicPlayer = document.querySelector(".music-player");
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const img = document.getElementById("cover");

const songs = ["As It Was", "Flowers", "Levitating"];
const artists = ["Harry Styles", "Miley Cyrus", "Dua Lipa"]

let songIndex = 1;
let artistIndex = 1 ;

loadSong(songs[songIndex], artists[artistIndex]); 

function loadSong(song, singer) {
    title.innerText = song;
    artist.innerText = singer;
    audio.src = `./media/${song}.mp3`
    img.src = `./media/${song}.jpeg`
}


audio.onloadedmetadata = function() {
    progress.max = audio.ondurationchange;
    progress.value = audio.currentTime;
}



playPauseBtn.addEventListener("click", function() {
    if (playPauseBtn.classList.contains("fa-pause")) {
        audio.pause();
        playPauseBtn.classList.remove("fa-pause");
        playPauseBtn.classList.add("fa-play")
    } else {
        audio.play();
        playPauseBtn.classList.add("fa-pause");
        playPauseBtn.classList.remove("fa-play");
    }
})


if(audio.play()) {
    setInterval(()=>{
        progress.value = audio.currentTime;
    }, 500);
}

progress.onchange = function() {
    audio.play();
    audio.currentTime = progress.value
    playPauseBtn.classList.add("fa-pause");
    playPauseBtn.classList.remove("fa-play");
}

