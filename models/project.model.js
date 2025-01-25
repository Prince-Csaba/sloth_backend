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
  },
  percentage: {
    type: Number,
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
  id: {
    type: Number,
    unique: true
  }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;