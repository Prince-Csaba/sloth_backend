const mongoose = require("mongoose");
const { finished } = require("nodemailer/lib/xoauth2");

const taskSchema = new mongoose.Schema({
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
  finished: {
    type: Boolean
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
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;