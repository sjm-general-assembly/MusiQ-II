Meteor.publish('requests', function() {
  // publish only songs that have not been played yet
  return Requests.find({status: {$ne: musiqApp_STATUS_PLAYED}});
});

Meteor.publish('players', function() {
  return Meteor.users.find({}, {fields: {username: 1}});
});