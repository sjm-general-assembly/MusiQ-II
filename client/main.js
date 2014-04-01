Meteor.startup(function() {
  // set an observer to look for newly added waiting songs
  requestsCursor = Requests.find({status: musiqApp_STATUS_WAITING});

  requestsCursor.observe({
    added: function(doc) {
      musiqApp_cueNewlyAddedWhenPlayerWaiting();
    }
  });
});

// Subscribe to the list of available players (currently user names)
Meteor.subscribe('players');
