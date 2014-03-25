Template.userQueue.events({
  'submit form': function(e) {
    e.preventDefault();
    var searchTitle = $(e.target).find('[name=videoSearchTitle]').val();
    musiqApp_searchVideo(searchTitle, musiqApp_showResults);

    // clear out the search box
    $(e.target).find('[name=videoSearchTitle]').val('');
  }
});