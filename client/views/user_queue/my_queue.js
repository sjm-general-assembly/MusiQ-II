Template.myQueue.helpers({
  playerQueueItems: function() {
     return Requests.find({$or: [{status: musiqApp_STATUS_WAITING},
                                {status: musiqApp_STATUS_NOW_PLAYING}]},
                          {sort: {created: 1}});
  }
});