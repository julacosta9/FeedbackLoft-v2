const db = require("../models/index.js");

// create helper function that returns true/false if a user is eligible
function isUserEligible(userId) {
    return new Promise(() => {
        db.User.findById(userId)
        .then((user) => {
            console.log(typeof user.feedbackGiven)
            if (user.feedbackGiven > user.feedbackReceived) {
                return true
            } else {
                return false
            }
        })
        .catch((err) => res.status(422).json(err));
    })

    // db.User.findById(userId)
    //     .then((user) => {
    //         console.log(typeof user.feedbackGiven)
    //         if (user.feedbackGiven > user.feedbackReceived) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     })
    //     .catch((err) => res.status(422).json(err));
}

async function findProjectForReview (req, res) {
    db.Project.find({})
        // add .limit(1000) at a later point?
        .sort({ lastCommentDate: -1 })
        .then((dbResponse) => {
            let isEligibleProjectFound = false;
            // console.log(`isEligibleProjectFound: ${!isEligibleProjectFound}`)
            if (!isEligibleProjectFound) {
                dbResponse.forEach((project) => {
                    let eligible = await isUserEligible(project.userId);
                    console.log(eligible)
                    if (eligible === true) {
                        isEligibleProjectFound = true;
                        res.json(project);
                    }
                });
            }
        })
        .catch((err) => res.status(422).json(err));
}

module.exports = {
    findProjectForReview: findProjectForReview
};
