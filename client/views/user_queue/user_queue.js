Template.userQueue.events({
  'submit form': function(e) {
    e.preventDefault();
    var searchTitle = $(e.target).find('[name=videoSearchTitle]').val();
    musiqApp_getYoutubeSearchResults(searchTitle, musiqApp_formatSearchResults);

    // clear out the search box
    $(e.target).find('[name=videoSearchTitle]').val('');
  }
});