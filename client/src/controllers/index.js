const db = require("../models/index.js");

// Defining methods for the controller
module.exports = {
    findAll: function (req, res) {
        db.User.find({})
            .sort({ date: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    }
    // findById: function (req, res) {
    //     db.Book.findById(req.params.id)
    //         .then((dbModel) => res.json(dbModel))
    //         .catch((err) => res.status(422).json(err));
    // },
    // create: function (req, res) {
    //     db.Book.create(req.body)
    //         .then((dbModel) => res.json(dbModel))
    //         .catch((err) => res.status(422).json(err));
    // },
    // update: function (req, res) {
    //     db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
    //         .then((dbModel) => res.json(dbModel))
    //         .catch((err) => res.status(422).json(err));
    // },
    // remove: function (req, res) {
    //     db.Book.findById({ _id: req.params.id })
    //         .then((dbModel) => dbModel.remove())
    //         .then((dbModel) => res.json(dbModel))
    //         .catch((err) => res.status(422).json(err));
    // },
};
