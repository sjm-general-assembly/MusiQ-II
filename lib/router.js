Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('requests'); }
});

Router.map(function() {
  //this.route('userQueue', {path: '/'});
  this.route('site', {path: '/'});

  this.route('userQueue', {path: '/queue'});

  this.route('player', {path: '/player'});
});

var requireLogin = function() {
  if(!Meteor.user()) {
    this.render('accessDenied');
    this.stop();
  }
};

Router.before(requireLogin, {only: ['player', 'userQueue']});

