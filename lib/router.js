Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('requests'); }
});

Router.map(function() {
  this.route('mySongs', {path: '/'});

  this.route('player');
});