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

  request.execute(function(response) {
    callback(response);
  });
};

musiqApp_searchResults = [];

musiqApp_formatSearchResults = function(response) {
  // clear out any previous search results
  musiqApp_searchResults.length = 0;

  _.each(response.result.items, function(item) {
    var resultItem = {};
    resultItem.videoId = item.id.videoId;
    resultItem.title = item.snippet.title;
    musiqApp_searchResults.push(resultItem);
  });
  console.log('formatting search results');

  // response.result.items[0].id.videoId;
  // response.result.items[0].snippet.title;
};

