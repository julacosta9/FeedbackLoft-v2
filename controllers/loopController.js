const db = require("../models/index.js");

// create helper function that returns true/false if a user is eligible
function isUserEligible(req, res, userId) {
    db.User.findById(userId)
        .then((user) => {
            console.log(user.feedbackGiven, user.feedbackReceived)
            if (user.feedbackGiven > user.feedbackReceived) {
                res.end();
                return true
            } else {
                res.end();
                return false
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
                // console.log(`isEligibleProjectFound: ${!isEligibleProjectFound}`)
                if (!isEligibleProjectFound) {
                    dbResponse.forEach((project) => {
                        let eligible = await isUserEligible(req, res, project.userId);
                        console.log(eligible)
                        if (eligible === undefined) {
                            isEligibleProjectFound = true;
                            res.json(project);
                        }
                    });
                }
            })
            .catch((err) => res.status(422).json(err));
    },
};
