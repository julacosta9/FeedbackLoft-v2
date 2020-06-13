const db = require("../models/index.js");

module.exports = {  
    findProjectForReview: function (req, res) {
        let projectForReview;
        const activeUser = req.body.userId;
        db.Project.find({})
            .sort({ lastCommentDate: 1 })
            .then(dbResponse => {
                const elgibleProjects = dbResponse.filter(project => {
                    if (project.userId != activeUser) return project
                });
                db.User.find({})
            .then(dbResponse => {
                const elgibleUsers = dbResponse.filter(user => {
                    if(user._id != activeUser && user.feedbackGiven > user.feedbackReceived) return user
                });
                for (let i = 0; i < elgibleProjects.length; i++) {
                    for (let j = 0; j < elgibleUsers.length; j++) {
                        if (elgibleProjects[i].userId != elgibleUsers[j]._id) continue;
                        else {
                            projectForReview = elgibleProjects[i]
                            return res.json(projectForReview);
                        }
                    } 
                }
            })
            .catch((err) => res.status(422).json(err));
        })
    }
}