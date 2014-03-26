Template.requests.helpers({
  requests: function() {
    return Requests.find({$or: [{status: 'waiting'}, {status: 'now playing'}]},
                          {sort: {created: 1}});
  },
  requestsCount: function() {
    return Requests.find({$or: [{status: 'waiting'}, {status: 'now playing'}]}).count();
  }
});
