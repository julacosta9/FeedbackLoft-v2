const db = require("../models/index.js");

// function isUserEligible(userId) {
//     return new Promise((resolve, reject) => {
//         db.User.findById(userId)
//             .then((user) => {
//                 if (user.feedbackGiven > user.feedbackReceived) {
//                     resolve(true);
//                 } else {
//                     resolve(false);
//                 }
//             })
//             .catch((err) => reject(err));
//     });
// }

// module.exports = {
//     findProjectForReview: async function (req, res) {
//         let activeUser = req.body.userId;

//         // Get all projects
//         db.Project.find({})
//             .sort({ lastCommentDate: 1 })
//             .then((dbResponse) => {
//                 let length = dbResponse.length;
//                 for (let i = 0; i < length; i++) {
//                     let project = dbResponse[i];
//                     let isProjectFound = false;
//                     if (isProjectFound === false) {
//                         // Get user of the project 
//                         db.User.findById(project.userId)
//                         .then((user) => {
//                             if (user.feedbackGiven > user.feedbackReceived && user._id != activeUser) {
//                                 res.json(project);
//                                 isProjectFound = true;
//                             } else {
//                                 console.log(`${user.username} is not eligible`);
//                             }
//                         })
//                         .catch((err) => console.log(err));
//                     } else {
//                         break;
//                     }
//                 }
//             })
//             .catch((err) => res.status(422).json(err));
//     },
// };
module.exports = {
    findProjectForReview: function (req, res) {
        let projectForReview;
        console.log(projectForReview)
        console.log("Start!")
        const activeUser = req.body.userId;
        console.log(`Active User is: ${activeUser}`)
        db.Project.find({})
            .sort({ lastCommentDate: 1 })
            .then(dbResponse => {
                console.log(`Found Projects`)
                const elgibleProjects = dbResponse.filter(project => {
                    if (project.userId != activeUser) return project
                });
                console.log(`Elgible Projects ${elgibleProjects}`)
                db.User.find({})
            .then(dbResponse => {
                console.log(`Found Users!`)
                const elgibleUsers = dbResponse.filter(user => {
                    if(user._id != activeUser && user.feedbackGiven > user.feedbackReceived) return user
                });
                console.log(`Elgible Users ${elgibleUsers}`)
                for (let i = 0; i < elgibleProjects.length; i++) {
                    console.log(`Checking Project ${i}`)
                    for (let j = 0; j < elgibleUsers.length; j++) {
                        console.log(`Checking User ${j}`)
                        if (elgibleProjects[i].userId != elgibleUsers[j]._id) continue;
                        else {
                            console.log(`Got the project: ${elgibleProjects[i]}`)
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