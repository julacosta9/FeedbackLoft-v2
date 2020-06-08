const db = require("../models/index.js");

function isUserEligible(userId) {
    return new Promise((resolve, reject) => {
        db.User.findById(userId)
            .then((user) => {
                if (user.feedbackGiven > user.feedbackReceived) {
                    console.log("ITS TRUE");
                    resolve(true);
                } else {
                    console.log("ITS FALSE");
                    resolve(false);
                }
            })
            .catch((err) => reject(err));
    });
}

module.exports = {
    findProjectForReview: async function (req, res) {
        db.Project.find({})
            .sort({ lastCommentDate: 1 })
            .then((dbResponse) => {
                console.log(dbResponse)
                let length = dbResponse.length;
                for (let i = 0; i < length; i++) {
                    let project = dbResponse[i];
                    let isProjectFound = false;
                    if (isProjectFound === false) {
                        db.User.findById(project.userId)
                        .then((user) => {
                            if (user.feedbackGiven > user.feedbackReceived) {
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
