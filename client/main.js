Meteor.startup(function() {
  console.log('Client Starting up...');

  // look for newly added waiting songs
  requestsCursor = Requests.find({status: musiqApp_STATUS_WAITING});

  requestsCursor.observe({
    added: function(doc) {
      musiqApp_cueNewlyAddedWhenPlayerWaiting();
    }
  });
});