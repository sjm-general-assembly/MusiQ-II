Template.player.helpers({
  requests: function() {
    return Requests.find();
  },
  requestsCount: function() {
    return Requests.find({status: 'waiting'}).count();
  }
});
