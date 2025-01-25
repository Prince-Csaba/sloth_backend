const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  time: {
    d: String,
    a: String,
  },
  route: {
    from: String,
    to: String
  },
  toAirport: {
    type: Boolean,
  },
  seats: {
    type: Array
  },
  phones: {
    type: Array
  },
  names: {
    type: Array
  },
  positions: {
    type: [{
      latitude: Number,
      longitude: Number
    }]
  },
  driver: {
    type: String
  },
  isFull: {
    type: Boolean
  },
  adminOrder: {
    type: Array
  },
  finalRoute: {
    type: Array
  },
  reminders: {
    type: Array
  },
  sentReminders: {
    type: Boolean
  }
});

const Trip = mongoose.model("trip", tripSchema, "trips");

module.exports = Trip;