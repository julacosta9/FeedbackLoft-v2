const db = require("../models/index.js");

module.exports = {
    findAll: function (req, res) {
        db.User.find({})
            .sort({ _id: 1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findByEmail: function (req, res) {
        db.User.find({"email": req.params.email})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
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
    },
    incrementFeedback: function (req, res) {
        Promise.all([
            // increment the giver's feedbackGiven amount by 1
            db.User.findOneAndUpdate(
                { _id: req.body.giverId },
                { $inc: { feedbackGiven: 1 } },
                { new: true }
            ),

            // increment the receiver's feedbackReceived amount by 1
            db.User.findOneAndUpdate(
                { _id: req.body.receiverId },
                { $inc: { feedbackReceived: 1 } },
                { new: true }
            ),
        ])
            .then((values) => {
                res.json(values);
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    },
    addNotification: function (req, res) {
        db.User.findOneAndUpdate(
            { _id: req.body.recipientId },
            {
                $push: {
                    notifications: [
                        {
                            senderName: req.body.senderName,
                            message: req.body.message,
                            link: req.body.link,
                            projectReviewed: req.body.projectReviewed,
                            isRead: false,
                        },
                    ],
                },
            },
            { new: true }
        )
            .then((values) => {
                res.json(values);
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    },
    toggleIsRead: function (req, res) {
        db.User.findOneAndUpdate(
            { _id: req.body.id, "notifications._id": req.body.notificationId },
            {
                $set: {
                    "notifications.$.isRead": true,
                },
            }
        )
            .then((values) => {
                res.json(values);
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    },
};
