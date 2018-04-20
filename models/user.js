const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// project schema
const userSchema = new Schema({
  userId: String,
  firstName: String,
  lastName: String,
  email: String,
  locations: [],
  items: []
});

// generate userId before saving
userSchema.pre('save', function(next) {
  this.userId = this.email;
  next();
});

// user model
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
