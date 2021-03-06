const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is Required",
    },

    // password: {
    //     type: String,
    //     trim: true,
    //     required: "Password is Required",
    //     validate: [({ length }) => length >= 6, "Password should be longer."],
    // },

    email: {
        type: String,
        unique: true,
        required: "Email is Required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },

    feedbackGiven: {
        type: Number,
        default: 1,
    },

    feedbackReceived: {
        type: Number,
        default: 0,
    },
    
    dateCreated: {
        type: Date,
        default: Date.now,
    },

    notifications: [{
        author: String,
        dateCreated: {
            type: Date,
            default: Date.now,
        },
        message: String,
        link: String,
        projectReviewed: String,
        isRead: Boolean
    }],

    genres: [{
        
    }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
