var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting")
	console.log(video.volume)
});
/* PLAY & VOLUME*/
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

/* PAUSE */
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

/* PLAYBACK SPEED SLOW */
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.90
	console.log("New speed is" + video.playbackRate)
});

/* PLAYBACK SPEED FAST */
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate *= (1/0.9)
	console.log("New speed is" + video.playbackRate)
});

/* SKIP */
document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 5;
	console.log("Current Location" + video.currentTime)
});

/* MUTE BUTTON */
document.querySelector("#mute").addEventListener("click", function () {
	video.muted = true;
	document.querySelector("#mute").innerHTML = "Unmute"
});

/* OLD SCHOOL */
document.querySelector("#old").addEventListener("click", function () {
	video.classList.add("oldTime");
});

/* ORIGIONAL */
document.querySelector("#original").addEventListener("click", function () {
	video.classList.remove("oldTime");
});

/* fix this - not all of the way done */
// document.querySelector("#volumeSlider").addEventListener(...)
// 	console.log(this)
// 	console.log(this.value)
