musiqApp_loadGapi = function() {
  gapi.client.setApiKey('AIzaSyA6cMb-IhbalPFAzvrYTFsczkF-a156WEs');
  gapi.client.load('youtube', 'v3');
  console.log('gapi loaded.');
};

musiqApp_searchVideo = function(title, callback) {
  var request = gapi.client.youtube.search.list({
    q: title,
    part: 'snippet',
    maxResults: '20',
    type: 'video',
    videoEmbeddable: 'true'
  });

  request.execute(function(responseJSON) {
    callback(responseJSON);
  });
};

musiqApp_YT_player = '';  // declare global variable for player, initialize later

musiqApp_searchResults = [];
musiqApp_searchResults_dep = new Deps.Dependency();

musiqApp_DEFAULT_STANDBY_VIDEO = 'Q98_0Af8tG8'; 

musiqApp_getCurrentCuedVideoId = function() {
  var url = musiqApp_YT_player.getVideoUrl();
  // extract video id from url
  var match = url.match(/[?&]v=([^&]+)/);
  return match[1];
};

musiqApp_findNextReadySong = function() {
  // default sond id, to no song found
  var firstSongId = musiqApp_DEFAULT_STANDBY_VIDEO;

  //
  // TODO - refactor/clean up that nested if statement (clarify)
  //

  // first, look for a song that was currently playing
  var foundSong = Requests.findOne({status: 'now playing'});
  if (foundSong === undefined) {
    // there wasn't a song that was 'now playing', find the next 'waiting' song
    foundSong = Requests.findOne({status: 'waiting'});
    if (foundSong !== undefined) {
      // got first waiting song, update status to now playing
      foundSong.status = 'now playing';
      Requests.update(foundSong._id, foundSong);
      firstSongId = foundSong.videoId;
    }
  }
  else {
    // a 'now playing' song was found
    firstSongId = foundSong.videoId;
  }

  return firstSongId;
};

musiqApp_formatSearchResults = function(responseJSON) {
  // clear out any previous search results
  musiqApp_searchResults.length = 0;

  _.each(responseJSON.result.items, function(item) {
    var resultItem = {};
    resultItem.videoId = item.id.videoId;
    resultItem.title = item.snippet.title;
    musiqApp_searchResults.push(resultItem);
  });
  musiqApp_searchResults_dep.changed();
  console.log('formatting search results');
};

musiqApp_nextSong = function() {
  // get just played song and update status
  var playedSong = Requests.findOne({videoId: musiqApp_getCurrentCuedVideoId()});
  playedSong.status = 'played';
  Requests.update(playedSong._id, playedSong);

  // return next waiting song in queue
  return Requests.findOne({status: 'waiting'}).videoId;
};
