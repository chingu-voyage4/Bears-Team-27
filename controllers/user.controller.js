const User = require('../models/user');

module.exports = {
  newUser: newUser
};


// create a new user
function newUser(req, res) {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    id: req.body.id,
    locations: req.body.locations,
    items: req.body.items
  });

  // save new user
  user.save((err) => {
    if (err) {
      throw err;
    }

    res.redirect('/home');
  });
}
