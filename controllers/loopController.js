const db = require("../models/index.js");

function isUserEligible(userId) {
    return new Promise((resolve, reject) => {
        db.User.findById(userId)
            .then((user) => {
                if (user.feedbackGiven > user.feedbackReceived) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch((err) => reject(err));
    });
}

module.exports = {
    findProjectForReview: async function (req, res) {
        let activeUser = req.body.userId;

        // Get all projects
        db.Project.find({})
            .sort({ lastCommentDate: 1 })
            .then((dbResponse) => {
                let length = dbResponse.length;
                for (let i = 0; i < length; i++) {
                    let project = dbResponse[i];
                    let isProjectFound = false;
                    if (isProjectFound === false) {
                        // Get user of the project 
                        db.User.findById(project.userId)
                        .then((user) => {
                            if (user.feedbackGiven > user.feedbackReceived && user._id != activeUser) {
                                res.json(project);
                                isProjectFound = true;
                            } else {
                                console.log(`${user.username} is not eligible`);
                            }
                        })
                        .catch((err) => console.log(err));
                    } else {
                        break;
                    }
                }
            })
            .catch((err) => res.status(422).json(err));
    },
};
