const container = document.querySelector("container"),
coverImage = container.querySelector("cover-image"),
artistName = container.querySelector("artist"),
songName = container.querySelector("song_name"),
playerBtn = container.querySelector("_button"),
progressDetails = container.querySelector("progress-details"),
progressBar = container.querySelector("progress-bar");
//Audio = document.querySelector("song");//

var songEl = document.getElementById("song");

playerBtn.addEventListener("click", () => {
    //const isMusicPaused = container.classList.contains("paused");
    /*if(isMusicPaused){
        pauseSong();
    }
    else{
        playSong();
    }*/
   playSong();
});

function playSong(){
    //container.classList.add("paused");
    //playerBtn.innerHTML = "pause";
    songEl.play();
}

function pauseSong(){
    container.classList.add("paused");
    playerBtn.innerHTML = "pause";
    Audio.pause();
}


