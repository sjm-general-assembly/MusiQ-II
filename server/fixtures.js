if (Requests.find().count() === 0) {
  Requests.insert({
    title: "Jeep's Blues",
    videoId: "uUcEGOLfUTE",
    status: "now playing",
    created: new Date()
  });

  Requests.insert({
    title: "Mo' Horizons ~ Gonna Be [Ben Human Mix]",
    videoId: "qzeaHQbg4uc",
    status: "waiting",
    created: new Date()
  });

  Requests.insert({
    title: "Taj Mahal - Shady Grove",
    videoId: "oShuuDsXHQE",
    status: "waiting",
    created: new Date()
  });

  Requests.insert({
    title: "Dizzy Gillespie - Manteca (Funky Lowlives Extended Mix)",
    videoId: "IOuysxKp2Ns",
    status: "waiting",
    created: new Date()
  });
}
