Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    // in some cases (I think on hot reload), even when user logged in,
    // Meteor.user has been null. May need to better guard against this case.
    // Or maybe, set up waitOn, to wait for users list???
    return Meteor.subscribe('requests');
  }
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

