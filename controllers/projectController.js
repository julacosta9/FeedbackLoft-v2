const db = require("../models/index.js");
const upload = require("../aws.js");

const singleUpload = upload.single("audio");

module.exports = {
    findAll: function (req, res) {
        db.Project.find({})
            .sort({ _id: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findAllByUserId: function (req, res) {
        db.Project.find({ userId: req.params.id })
            .sort({ dateCreated: -1 })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Project.findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Project.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    uploadtoAWS: function (req, res) {
        singleUpload(req, res, function (err, some) {
            if (err) {
                return res
                    .status(422)
                    .send({
                        errors: [{ title: "Audio Upload Error", detail: err }],
                    });
            }
            
            return res.json({ "s3-audio-url": req.file.location });
        });
    },
    update: function (req, res) {
        db.Project.findByIdAndUpdate(req.params.id, req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Project.findByIdAndDelete(req.params.id)
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
};
