const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, require: true },
  userId: { type: String, require: true },
  price: { type: Number, require: true },
});

module.exports = mongoose.model('Things', thingSchema);
