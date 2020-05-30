const db = require("../models/index.js");

function isUserEligible(userId) {
    return new Promise((resolve, reject) => {
        db.User.findById(userId)
        .then((user) => {
            if (user.feedbackGiven > user.feedbackReceived) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
        .catch((err) => reject(err));
    })
}

module.exports = {
    findProjectForReview: async function (req, res) {
        db.Project.find({})
            // add .limit() at a later point?
            .sort({ lastCommentDate: -1 })
            .then((dbResponse) => {
                const project = dbResponse.find(async (element) => isUserEligible(element.userId))
                res.json(project);
            })
            .catch((err) => res.status(422).json(err));
    }
};
