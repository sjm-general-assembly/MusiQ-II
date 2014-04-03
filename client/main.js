Deps.autorun(function() {

  // when a user logs in,
  // set an observer to look for newly added waiting songs for the current player
  // TODO - get waitOn working properly, so we know user collection will be ready
  // and user().username will be defined
  if (Meteor.userId()) {    
    requestsCursor = Requests.find({player: Meteor.user().username,
                                    status: musiqApp_STATUS_WAITING});

    requestsCursor.observe({
      added: function(doc) {
        //
        // NOTE: this observe added event fires when changes are made to current user doc
        //       (such as when we save the selected player to the user).
        //        Doesn't seem to be harmful (player behaves correctly), but be aware.
        //

        // TODO - DEBUG INFO - capture potential error condition
        if (doc.player !== Meteor.user().username) {
          console.log('intended player: ' + doc.player +
                      ', current user: ' + Meteor.user().username +
                      ', title: ' + doc.title);
        }
        musiqApp_cueNewlyAddedWhenPlayerWaiting();
      }
    });
  }
  else {
    Router.go('site');
  }
});
