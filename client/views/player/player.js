Template.player.helpers({
  requests: function() {
    return Requests.find();
  },
  requestsCount: function() {
    return Requests.find({$or: [{status: 'waiting'}, {status: 'now playing'}]}).count();
  }
});
