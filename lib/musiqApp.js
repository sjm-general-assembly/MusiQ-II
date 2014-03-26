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

musiqApp_searchResults = [];
musiqApp_searchResults_dep = new Deps.Dependency();

musiqApp_DEFAULT_STANDBY_VIDEO = 'Q98_0Af8tG8'; 

musiqApp_findFirstSong = function() {
  // first, look for a song that was currently playing
  var firstSong = Requests.findOne({status: 'now playing'});
  if (firstSong === undefined) {
    // if there wasn't a song that was playing, find the next waiting song
    firstSong = Requests.findOne({status: waiting});
    if (firstSong === undefined) {
      // if no songs in queue, play standby video
      firstSong = musiqApp_DEFAULT_STANDBY_VIDEO;
    }
    else {
      // got first waiting song, update status to now playing
      firstSong.status = 'now playing';
      Requests.update(firstSong._id, firstSong);
    }
  }
  return firstSong.videoId;
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

musiqApp_getNextSong = function() {
  return Requests.findOne({status: 'next'}).videoId;
};
