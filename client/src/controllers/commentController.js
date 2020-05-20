const db = require("../models/index.js");

module.exports = {
    findAllByAuthorId: function (req, res) {
        db.User.find({ authorId: req.params.id })
            .sort({ dateCreated: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findAllByProjectId: function (req, res) {
        db.User.find({ projectId: req.params.id })
            .sort({ dateCreated: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Comment.findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Comment.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Comment.findByIdAndUpdate(req.params.id, req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Comment.findByIdAndDelete(req.params.id)
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    }
};