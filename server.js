const express = require("express");
const mongoose = require("mongoose");

const app = express();
const routes = require("./routes/index.js");
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static("client/public"));
}

// API and view routes
app.use(routes);

// Connect to database
mongoose.connect(
    process.env.MONGODB_URI || process.env.MLAB_URI || "mongodb://localhost/feedbackLoft",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
