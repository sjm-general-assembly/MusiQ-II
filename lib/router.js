Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('requests'); }
});

Router.map(function() {
  this.route('requestsQueue', {path: '/'});

  this.route('player');
});