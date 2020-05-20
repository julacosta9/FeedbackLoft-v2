const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./client/src/models/index.js");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static("client/public"));
}

// Connect to database
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/feedbackLoft",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

// API routes

// Other requests go to the React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
