var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
							   height: '100',
							   width: '150',
							   videoId: 'ZDHzzVXXl70',
							   playerVars: {
							   		controls: 0,
							   		loop: 1,
							   		playlist: 'PLT8TXiPIBAQqb8SyD5Rcwr8cc9neJavNf'
							   },
							   	events: {
									'onReady': onPlayerReady,
										}
							});
			}

function onPlayerReady(event) {
			event.target.playVideo();
}
