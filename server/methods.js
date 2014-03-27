Meteor.methods({
  searchYoutubeVideos: function(searchTitle, maxResults) {
    this.unblock();
    var YT_API_KEY = 'AIzaSyA6cMb-IhbalPFAzvrYTFsczkF-a156WEs';

    //
    // TODO - research HTTP.call arguments, see of below string could be built a better way
    //
    var searchURL = "https://www.googleapis.com/youtube/v3/search";
    var params = "?part=snippet&maxResults=";
    params += maxResults;
    params += "&q=";
    params += encodeURIComponent(searchTitle);
    params += "&type=video&videoEmbeddable=true&key=";
    params += YT_API_KEY;

    var response = HTTP.call('GET', searchURL + params);

    if (response.statusCode !== 200 || response.data.items.length === 0) {
      console.log(' ');
      console.log('**** GAPI YOUTUBE SEARCH: bad response or no results');
      console.log('**** search string: ' + searchTitle);
      console.log('**** statusCode:    ' + response.statusCode);
      console.log('**** items count:   ' + response.data.items.length);
      console.log(' ');
    }

    return response.data.items;
  }
});