if (Requests.find().count() === 0) {
  
  // Create test users
  var currUserId = Accounts.createUser({
    username: 'smarsh',
    email: 'smarsh@test.com',
    password: 'asdfasdf'
  });
  // Note, wasn't able to set a custom property when using createUser
  Meteor.users.update(currUserId, {$set: {selectedPlayer: 'smarsh'}});

  currUserId = Accounts.createUser({
    username: 'joe',
    email: 'joe@test.com',
    password: 'asdfasdf'
  });
  Meteor.users.update(currUserId, {$set: {selectedPlayer: 'smarsh'}});

  currUserId = Accounts.createUser({
    username: 'nikki',
    email: 'nikki@test.com',
    password: 'asdfasdf'
  });
  Meteor.users.update(currUserId, {$set: {selectedPlayer: 'nikki'}});

  // Create test requests
  Requests.insert({
    player: 'smarsh',
    title: "Jeep's Blues",
    videoId: "uUcEGOLfUTE",
    status: musiqApp_STATUS_WAITING,
    submittedBy: 'smarsh',
    created: new Date()
  });

  Requests.insert({
    player: 'smarsh',
    title: "Mo' Horizons ~ Gonna Be [Ben Human Mix]",
    videoId: "qzeaHQbg4uc",
    status: musiqApp_STATUS_WAITING,
    submittedBy: 'smarsh',
    created: new Date()
  });

  Requests.insert({
    player: 'smarsh',
    title: "Taj Mahal - Shady Grove",
    videoId: "oShuuDsXHQE",
    status: musiqApp_STATUS_WAITING,
    submittedBy: 'smarsh',
    created: new Date()
  });

  Requests.insert({
    player: 'joe',
    title: "Dizzy Gillespie - Manteca (Funky Lowlives Extended Mix)",
    videoId: "IOuysxKp2Ns",
    status: musiqApp_STATUS_WAITING,
    submittedBy: 'smarsh',
    created: new Date()
  });
}
