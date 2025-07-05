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
  order: {
    type: Number,
  },
  someid: {
    type: Number,
  },
  user: {
    type: String,
  },
  status: {
    type: String,
    default: "active",
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;