// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var DEFAULT_STANDBY_VIDEO = 'Q98_0Af8tG8'; 
var YT_Player;

// The API will call this function when the video player is ready.
var onPlayerReady = function(event) {
  // if default / please stand by video, don't start it, let it stay paused (so it's quiet)
  event.target.playVideo();
};

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// or the player ended (state=0).
var onPlayerStateChange = function(event) {
  if (event.data == YT.PlayerState.ENDED) {
    var nextVideo = Requests.findOne({status: 'next'}).videoId;
    YT_player.loadVideoById(nextVideo);
    //window.location.replace("/play_next");  // plays next track in queue
  }
};

Template.videoPlayer.rendered = function() {

  var currentVideo = Requests.findOne({status: 'waiting'}).videoId;

  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  YT_player = new YT.Player('ytPlayer', {
    //height: '312',   // dimensions set in iframe, when adding the element yourself
    //width: '512',     // OR, when using response-video.css, not needed
    //videoId: 'qzeaHQbg4uc',
    videoId: currentVideo,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
};
