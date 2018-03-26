const Location = require('../models/location');


function addLocation(req, res) {
  // validate data
  req.checkBody('location', 'Location is required.').notEmpty();

  // check for errors
  const errors = req.validationErrors();
  if (errors) {
    return res.redirect('/current_user');
  }

  // get entered data
  const location = new Location({
    location: req.body.location,
    userId: req.param.userId
  });

  // save new location
  location.save((err) => {
    if (err) { throw err; }

    res.redirect('/current_user');
  });
}

function editLocation(req, res) {
  // validate data
  req.checkBody('location', 'Location is required.').notEmpty();

  // check for errors
  const errors = req.validationErrors();
  if (errors) {
    return res.redirect('/current_user');
  }

  // retrieve selected location from DB
  Location.findOne({ location: req.param.location,
    userId: req.param.userId }, (err, location) => {
      location.name = req.body.location;

      // update location
      location.save((err) => {
        if (err) throw err;

        // redirect back to user dashboard
        res.redirect('/current_user');
      });
    });
}

function deleteLocation(req, res) {
  Location.remove({ location: req.param.location,
    userId: req.param.user }, (err, location) => {

      // redirect back to user dashboard
        res.redirect('/current_user');
      });
    });
}

module.exports = {
  addLocation: addLocation,
  editLocation: editLocation,
  deleteLocation: deleteLocation
};
