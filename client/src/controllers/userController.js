const db = require("../models/index.js");

module.exports = {
    findAll: function (req, res) {
        db.User.find({})
            .sort({ _id: 1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.json(err));
    },
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User.findByIdAndUpdate(req.params.id, req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User.findByIdAndDelete(req.params.id)
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    }
};