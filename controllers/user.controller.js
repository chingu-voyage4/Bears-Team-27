const User = require('../models/user');

module.exports = {
  newUser: newUser,
  getUser: getUser
};


// create a new user
function newUser(req, res) {

  // validate info
  req.checkBody('firstName', 'First Name is required.').notEmpty();
  req.checkBody('lastName', 'Last Name is required.').notEmpty();
  req.checkBody('email', 'Email is required.').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    return res.redirect('/signup');
  }

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });

  // save new user
  user.save((err) => {
    if (err) {
      throw err;
    }

    res.redirect('/current_user');
  });
}

// get a user
function getUser(req, res) {
  User.findOne({ userId: req.params.email }, (err, user) => {
    if (err) {
      res.status(404);
      res.send('User not found!');
    }

    res.render('/current_user', { user: user });
  });
}
