const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String,
        trim: true
    },

    userId: {
        type: String,
        trim: true
    },

    username: {
        type: String,
        trim: true
    },

    genre: {
        type: String,
        trim: true
    },

    url: {
        type: String,
        trim: true
    },

    description: {
        type: String
    },

    dateCreated: {
        type: Date,
        default: Date.now
    },

    lastCommentDate: {
        type: Date,
        default: Date.now
    }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
