musiqApp_loadGapi = function() {
  gapi.client.setApiKey('AIzaSyA6cMb-IhbalPFAzvrYTFsczkF-a156WEs');
  gapi.client.load('youtube', 'v3');
  console.log('gapi loaded.');
};

musiqApp_searchVideo = function(title) {
  var request = gapi.client.youtube.search.list({
    q: title,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    console.log(str);
  });
};