let fillbar = document.querySelector(".fill");
let audios = ["./music/1 (1).mp3", 
               "./music/1 (2).mp3",
             "./music/1 (3).mp3",
             "./music/1 (4).mp3"];

let audio = new Audio();
let currentSong = 0;
let audPlayed = 0;
function playSong() {
  audio.src = audios[currentSong];
  audio.play();
}

let pausecss = document.getElementById("pausecss");
let playcss = document.getElementById("playcss");
function togglePause() {
    pausecss.src = './images/pause-active.png';
    playcss.src = './images/play.png';
    audio.pause();
    
    audPlayed = 0;
  }
function togglePlay() {
  pausecss.src = './images/pause.png';
  playcss.src = './images/play-active.png';
  audio.src = audios[currentSong];
  if (audio.paused) {
    audio.play();
    audPlayed = 1;
  }
}

function nextAudio() {
  currentSong++;
  if (currentSong > 3) {
    currentSong = 0;
  }
  playSong();
}

function prevAudio() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = 3;
  }
  playSong();
}

let pauseMobile =  document.getElementById("pause-mobile");
let playMobile = document.getElementById("play-mobile");
function togglePauseMobile() {
  pauseMobile.src = './mobile-images/pause-mob-active.png';
  playMobile.src = './mobile-images/play-mob.png';
  audio.pause();
  
  audPlayed = 0;
}
function togglePlayMobile() {
  pauseMobile.src = './mobile-images/pause-mob.png';
  playMobile.src = './mobile-images/play-mob-active.png';
  audio.src = audios[currentSong];
  if (audio.paused) {
    audio.play();
    audPlayed = 1;
  }
}