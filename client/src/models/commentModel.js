const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    authorId: {
        type: String,
        trim: true
    },

    authorUsername: {
        type: String,
        trim: true
    },

    text: {
        type: String,
        trim: true
    },

    rating: {
        type: Number,
        trim: true
    },

    projectId: {
        type: String,
        trim: true
    },

    projectName: {
        type: String,
        trim: true
    },
    
    dateCreated: {
        type: Date,
        default: Date.now
    }

});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
