Template.userQueue.events({
  'submit form': function(e) {
    e.preventDefault();
    var searchTitle = $(e.target).find('[name=videoSearchTitle]').val();

    Meteor.call('searchYoutubeVideos', searchTitle, '12', function(error, responseItems) {
      if (error) {
        console.log(error.reason);
      }
      musiqApp_formatSearchResults(responseItems);
    });

    // clear out the search box
    $(e.target).find('[name=videoSearchTitle]').val('');
  }
});

Template.userQueue.players = function() {
  return Meteor.users.find({}, {fields: {'username': 1}});
};
