const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// project schema
const userSchema = new Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  email: String,
  locations: [],
  items: []
});

// user model
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
