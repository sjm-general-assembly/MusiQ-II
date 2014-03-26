Template.requests.helpers({
  requests: function() {
    return Requests.find({$or: [{status: musiqApp_STATUS_WAITING},
                                {status: musiqApp_STATUS_NOW_PLAYING}]},
                          {sort: {created: 1}});
  },
  requestsCount: function() {
    return Requests.find({$or: [{status: musiqApp_STATUS_WAITING}, 
                                {status: musiqApp_STATUS_NOW_PLAYING}]}).count();
  }
});
