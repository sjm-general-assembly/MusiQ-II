Template.mySongs.events({
  'submit form': function(e) {
    e.preventDefault();
    musiqApp_searchVideo($(e.target).find('[name=videoSearchTitle]').val());
    $(e.target).find('[name=videoSearchTitle]').val('');
  }
});