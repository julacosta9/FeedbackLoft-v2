const mongoose = require("mongoose");
const db = require("./client/src/models/index.js");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/feedbackLoft",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

let projectArr = [];
let commentArr = [];
let allUsers = [];

function random(max) { 
    // This will output a random number between 0 and max
    return Math.floor(Math.random() * max);
}

const userSeed = [
    {
        username: "Kennybeats",
        password: "12345",
        email: "kenny@abc.biz",
        feedbackGiven: 5,
        feedbackReceived: 2,
        dateCreated: new Date(Date.now())
    },
    {
        username: "haywyre",
        password: "12345",
        email: "haywyre@abc.biz",
        feedbackGiven: 10,
        feedbackReceived: 7,
        dateCreated: new Date(Date.now())
    },
    {
        username: "kaytranada",
        password: "12345",
        email: "kaytranada@abc.biz",
        feedbackGiven: 12,
        feedbackReceived: 4,
        dateCreated: new Date(Date.now())
    },
    {
        username: "monte booker",
        password: "12345",
        email: "monte@abc.biz",
        feedbackGiven: 20,
        feedbackReceived: 21,
        dateCreated: new Date(Date.now())
    },
    {
        username: "Jsix",
        password: "12345",
        email: "jsix@abc.biz",
        feedbackGiven: 3,
        feedbackReceived: 4,
        dateCreated: new Date(Date.now())
    }
];

// Generate test users
db.User.deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed)) 
    .then(data => {
        console.log(data.result.n + " records inserted!");
        return db.User.find({})
    })
    .then(data => {
        // map through test users to create test projects by each user
        allUsers = data;
        projectArr = data.map((user, index) => {
            return {
                name: `Test Project ${index + 1}`,
                userId: user._id,
                username: user.username,
                genre: "Trap",
                url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/421372218&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
                description: "would love to get some feedback on the kick/bass levels and if you think the main riff gets to repetitive. Any ideas to keep it interesting?",
                dateCreated: new Date(Date.now()),
                lastCommentDate: new Date(Date.now())
            }
        })
        return db.Project.insertMany(projectArr)
    })
    .then(data => {
        return db.Project.find({})
    })
    .then(data => {
        // map through test users to create test comments by each user
        commentArr = data.map((project, index) => {
            const randomNum = random(allUsers.length);
            return {
                authorId: allUsers[randomNum]._id,
                authorUsername: allUsers[randomNum].username,
                text: "this song sounds great. I think you need to eq the bass to create more space for the kick. The levels on the percussion are a little all over the place. Use a reference track and try to match those levels, then throw a little compression on it to glue it together. overall, love the concept and think it just needs work on the technical aspects like the mixdown. great job.",
                rating: 2,
                projectId: project._id,
                projectName: project.name,
                dateCreated: new Date(Date.now()),
            }
        })

        return db.Comment.insertMany(commentArr)
    })
    .then(data => {
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });