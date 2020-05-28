const db = require("../models/index.js");

// create helper function that returns true/false if a user is eligible
function isUserEligible(userId) {
    db.User.findById(userId)
        .then((user) => {
            if (user.feedbackGiven < user.feedbackReceived) {
                return true;
            } else {
                return false;
            }
        })
        .catch((err) => res.status(422).json(err));
}

module.exports = {
    findProjectForReview: function (req, res) {
        db.Project.find({})
            // add .limit(1000) at a later point?
            .sort({ lastCommentDate: -1 })
            .then((dbResponse) => {
                let isEligibleProjectFound = false;
                if (!isEligibleProjectFound) {
                    dbResponse.forEach((project) => {
                        if (isUserEligible(project.userId)) {
                            isEligibleProjectFound = true;
                            res.json(project);
                        }
                    });
                }
            })
            .catch((err) => res.status(422).json(err));
    },
};
