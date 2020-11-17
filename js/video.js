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
	video.playbackRate *= 1.10
	console.log("New speed is" + video.playbackRate)
});

/* SKIP */
document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime < video.duration-5){
		video.currentTime += 5;
	}
	else{
		video.currentTime = 0;
		console.log("Start beginning of video")

	}
	console.log("Current Location" + video.currentTime);
	console.log(video.duration);
	video.play();
});

/* SKIP BY 5 RESTRART */
// document.querySelector("#skip").addEventListener("click", function () {
// 	video.currentTime += 5;
// 	if (video.ended){
// 		video.load();
// 		video.play();
// 	}
// 	console.log("Current Location" + video.currentTime)
// });

/* MUTE BUTTON */
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		video.muted = false;
		let sound = document.getElementById("mute").innerHTML = "Mute"
		console.log("Unmuted")
	}
	else{
		video.muted = true;
		let sound = document.getElementById("mute").innerHTML = "Unmute"
		console.log("Muted");
	}
});

document.querySelector("#volumeSlider").oninput = function() {
	sliderChange()
	setVolume()
};

function sliderChange(val){
	var val = document.querySelector("#volumeSlider").value;
	document.querySelector("#volume").innerHTML = val + "%"
}

function setVolume(){
	video.volume = document.querySelector("#volumeSlider").value / 100;
}


/* OLD SCHOOL */
document.querySelector("#old").addEventListener("click", function () {
	video.classList.add("oldTime");
	console.log("Grayscale")
});

/* ORIGIONAL */
document.querySelector("#original").addEventListener("click", function () {
	video.classList.remove("oldTime");
});



