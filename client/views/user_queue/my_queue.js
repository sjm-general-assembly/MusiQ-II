Template.myQueue.helpers({
  playerQueueItems: function() {
    // Get all requests for currently selected player
    var selectedPlayer = $('#playerName').val();
    return Requests.find({player: selectedPlayer,
                          $or: [{status: musiqApp_STATUS_WAITING},
                                {status: musiqApp_STATUS_NOW_PLAYING}]},
                        {sort: {created: 1}});
  }
});