Template.videoPlayer.rendered = function() {
  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  var player;
  player = new YT.Player('ytPlayer', {
    //height: '312',   // dimensions set in iframe, when adding the element yourself
    //width: '512',     // OR, when using response-video.css, not needed
    videoId: 'qzeaHQbg4uc',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
};

// The API will call this function when the video player is ready.
onPlayerReady = function(event) {
  // if default / please stand by video, don't start it, let it stay paused (so it's quiet)
  event.target.playVideo();
};

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// or the player ended (state=0).
onPlayerStateChange = function(event) {
  if (event.data == YT.PlayerState.ENDED) {
    alert('your video ended!');
    //window.location.replace("/play_next");  // plays next track in queue
  }
};

