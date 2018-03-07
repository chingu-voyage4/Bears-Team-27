const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// project schema
const locationSchema = new Schema({
    location: String,
    userId: String
});

// location model
const locationModel = mongoose.model('Location', locationSchema);


module.exports = locationModel;
