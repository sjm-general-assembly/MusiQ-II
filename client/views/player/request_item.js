Template.requestItem.helpers({
  createdFormatted: function() {
    var dt = moment(this.created);
    return dt.format('MM-DD h:mma');
  }
});