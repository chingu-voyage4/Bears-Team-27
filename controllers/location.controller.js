const Location = require('../models/location');


function addLocation(req, res) {
  const location = new Location({
    location: req.body.location,
    userId: req.body.userId,
  });

  // save new location
  location.save((err) => {
    if (err) { throw err; }

    res.redirect('/home');
  });
}

module.exports = { addLocation: addLocation };
