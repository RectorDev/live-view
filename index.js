// Load the IFrame Player API code.
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and

// YouTube player after the API code downloads.

let player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("ytplayer", {
    height: "180",
    width: "180",
    events: {
    onStateChange: playerStateHandle,
      onReady: startPanel, //Firing Timer Function
    },
    playerVars: {
      listType: "playlist",
      list: "PL6NdkXsPL07Il2hEQGcLI4dg_LTg7xA2L",
      disablekb: 1,
      controls: 0, // No player controls
      modestbranding: 1, // Hide YouTube logo
      rel: 0, // No related videos at the end
      iv_load_policy: 3, // No annotations
      fs: 0, // No fullscreen button
      autoplay: 1
    }
  });
}

// starts panel functionality when video is Ready
function startPanel() {
  startTimer();
}
// Fire when player state changes
function playerStateHandle(e){
    setTitle()
    console.log(e);
    

}

// title
const videoTitle = document.querySelector("#video-title");

function setTitle() {
  videoTitle.innerHTML = player.getIframe().attributes.title.value;
}

//timer
const minDuration = document.querySelector("#min-duration");
const secDuration = document.querySelector("#sec-duration");

function startTimer() {
  let sec = 0;
  let min = 0;
  setInterval(() => {
    sec++;
    // resets sec and increases min by 1
    if (sec === 60) {
      sec = 0;
      min++;
    }
    secDuration.innerHTML = sec <= 9 ? "0" + sec : sec;
    minDuration.innerHTML = min <= 9 ? "0" + min : min;
  }, 1000);
}

// audio control

const speaker = document.querySelector("#speaker"); // Mute button
const volumeRange = document.querySelector("#volume");
const volumeNum = document.querySelector("#volume-num"); //volume amount

// sets volume on slider swipe
volumeRange.addEventListener("input", () => {
  player.setVolume(volumeRange.value);
  volumeNum.innerHTML = volumeRange.value;
});

// Mute button Functionality
speaker.addEventListener("click", () => {
  if (player.isMuted() !== true) {
    player.mute();
    speaker.innerHTML = "X"; // Speaker muted
  } else {
    player.unMute();
    speaker.innerHTML = "O"; // Speaker unmuted
  }
});

// Video Control
const nextVideo = document.querySelector("#next");
const previousVideo = document.querySelector("#previous");
nextVideo.addEventListener("click", ()=>{
    player.nextVideo();
    
});
previousVideo.addEventListener("click",()=>{
    player.previousVideo();
} );

// Radio List

const radioList = [
  { title: "", Channel: "", Key: "" },
  { title: "", Channel: "", Key: "" },
  { title: "", Channel: "", Key: "" },
  { title: "", Channel: "", Key: "" },
  { title: "", Channel: "", Key: "" },
  { title: "", Channel: "", Key: "" },
  { title: "", Channel: "", Key: "" },
];
