const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  icon: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  progress: {
    type: Number,
    default: 0,
  },
  percentage: {
    type: Number,
    default: 0,
  },
  priority: {
    type: String,
  },
  active: {
    type: Boolean,
  },
  order: {
    type: Number,
  },
  someid: {
    type: Number,
  },
  user: {
    type: String,
  }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;