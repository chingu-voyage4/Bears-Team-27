const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// project schema
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    id: { type: String, unique: true },
    locations: [],
    items: []
});

// user model
const userModel = mongoose.model('User', userSchema);


module.exports = userModel;
