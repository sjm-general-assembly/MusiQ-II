Meteor.publish('requests', function() {
  // publish only songs that have not been played yet
  return Requests.find({status: {$ne: musiqApp_STATUS_PLAYED}});
});

Meteor.publish('players', function() {
  // publish a list of players (keeps this separate from a user list)
  return Meteor.users.find({}, {fields: {'username': 1}});
});
