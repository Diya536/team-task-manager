const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    title: String,

    dueDate: String,

    status: {

        type: String,

        default: "Todo"

    },

    assignedTo: String

});

module.exports = mongoose.model(
    "Task",
    taskSchema
);