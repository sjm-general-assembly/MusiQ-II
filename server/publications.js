Meteor.publish('requests', function() {
  // publish only songs that have not been played yet
  return Requests.find({status: {$ne: musiqApp_STATUS_PLAYED}});
});