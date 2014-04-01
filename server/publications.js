Meteor.publish('requests', function(currentPlayer) {
  // publish only songs that have not been played yet
  return Requests.find({player: currentPlayer, status: {$ne: musiqApp_STATUS_PLAYED}});
});

Meteor.publish('players', function() {
  // publish a list of players (keeps this separate from a user list)
  return Meteor.users.find({}, {fields: {'username': 1}});
});
