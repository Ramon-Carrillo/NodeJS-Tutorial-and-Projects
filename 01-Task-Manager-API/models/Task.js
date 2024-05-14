const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can't be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Task", TaskSchema);
