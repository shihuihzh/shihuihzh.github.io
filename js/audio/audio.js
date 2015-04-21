var AudioPlayer = function() {
	
}

AudioPlayer.prototype = {
	audioContext:undefined,
	init: function() {
		window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
		 //这里顺便也将requestAnimationFrame也打个补丁，后面用来写动画要用
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;

		try {
		    audioContext = new window.AudioContext();
		} catch (e) {
		    Console.log('!Your browser does not support AudioContext');
		}
	},
	loadSound: function(url) {
		/*var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';

		request.onload = function() {
			var arraybuffer = request.response;
			var audioBufferSouceNode = audioContext.createBufferSource();
			audioBufferSouceNode.buffer = arraybuffer;
			audioBufferSouceNode.connect(audioContext.destination);
			audioBufferSouceNode.start(0);

		}
		request.send();*/
		var audio = document.getElementById("audio");
		var source = audioContext.createMediaElementSource(audio);
		source.connect(audioContext.destination);
		source.start(0);

	}
}