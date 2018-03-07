const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// project schema
const itemSchema = new Schema({
    userId: String,
    locationId: String,
    room: String,
    name: String,
    description: String,
    serialNumber: String,
    value: Number,
    warranty: Date,
    acquisition: Date,
    images: [{ data: Buffer, contentType: String }]
});

// item model
const itemModel = mongoose.model('Item', itemSchema);


module.exports = itemModel;
