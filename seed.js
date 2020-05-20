const mongoose = require("mongoose");
const db = require("./client/src/models/index.js");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/feedbackLoft",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

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

const projectSeed = [
    {
        name: "Test Project 1",
        userId: "1235678910",
        username: "Kennybeats",
        genre: "Trap",
        url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/421372218&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        description: "would love to get some feedback on the kick/bass levels and if you think the main riff gets to repetitive. Any ideas to keep it interesting?",
        dateCreated: new Date(Date.now()),
        lastCommentDate: new Date(Date.now())
    },
    {
        name: "Test Project 2",
        userId: "1235678910",
        username: "haywyre",
        genre: "Hip-Hop",
        url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/445735794&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        description: "would love to get some feedback on the kick/bass levels and if you think the main riff gets to repetitive. Any ideas to keep it interesting?",
        dateCreated: new Date(Date.now()),
        lastCommentDate: new Date(Date.now())
    },
    {
        name: "Test Project 3",
        userId: "1235678910",
        username: "kaytranada",
        genre: "R&B",
        url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/421372218&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        description: "would love to get some feedback on the kick/bass levels and if you think the main riff gets to repetitive. Any ideas to keep it interesting?",
        dateCreated: new Date(Date.now()),
        lastCommentDate: new Date(Date.now())
    },
    {
        name: "Test Project 4",
        userId: "1235678910",
        username: "monte booker",
        genre: "Alternative",
        url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/445735794&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        description: "would love to get some feedback on the kick/bass levels and if you think the main riff gets to repetitive. Any ideas to keep it interesting?",
        dateCreated: new Date(Date.now()),
        lastCommentDate: new Date(Date.now())
    },
    {
        name: "Test Project 5",
        userId: "1235678910",
        username: "Jsix",
        genre: "Dubstep",
        url: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/421372218&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        description: "would love to get some feedback on the kick/bass levels and if you think the main riff gets to repetitive. Any ideas to keep it interesting?",
        dateCreated: new Date(Date.now()),
        lastCommentDate: new Date(Date.now())
    }
];

const commentSeed = [
    {
        authorId: "1235678910",
        authorUsername: "Jsix",
        text: "this song sounds great. I think you need to eq the bass to create more space for the kick. The levels on the percussion are a little all over the place. Use a reference track and try to match those levels, then throw a little compression on it to glue it together. overall, love the concept and think it just needs work on the technical aspects like the mixdown. great job.",
        rating: 2,
        projectId: "12345678910",
        projectName: "Test Project 5",
        dateCreated: new Date(Date.now()),
    },
    {
        authorId: "1235678910",
        authorUsername: "monte booker",
        text: "this song sounds great. I think you need to eq the bass to create more space for the kick. The levels on the percussion are a little all over the place. Use a reference track and try to match those levels, then throw a little compression on it to glue it together. overall, love the concept and think it just needs work on the technical aspects like the mixdown. great job.",
        rating: 3,
        projectId: "12345678910",
        projectName: "Test Project 4",
        dateCreated: new Date(Date.now()),
    },
    {
        authorId: "1235678910",
        authorUsername: "kaytranada",
        text: "this song sounds great. I think you need to eq the bass to create more space for the kick. The levels on the percussion are a little all over the place. Use a reference track and try to match those levels, then throw a little compression on it to glue it together. overall, love the concept and think it just needs work on the technical aspects like the mixdown. great job.",
        rating: 1,
        projectId: "12345678910",
        projectName: "Test Project 3",
        dateCreated: new Date(Date.now()),
    },
    {
        authorId: "1235678910",
        authorUsername: "haywyre",
        text: "this song sounds great. I think you need to eq the bass to create more space for the kick. The levels on the percussion are a little all over the place. Use a reference track and try to match those levels, then throw a little compression on it to glue it together. overall, love the concept and think it just needs work on the technical aspects like the mixdown. great job.",
        rating: 2,
        projectId: "12345678910",
        projectName: "Test Project 2",
        dateCreated: new Date(Date.now()),
    },
    {
        authorId: "1235678910",
        authorUsername: "kennybeats",
        text: "this song sounds great. I think you need to eq the bass to create more space for the kick. The levels on the percussion are a little all over the place. Use a reference track and try to match those levels, then throw a little compression on it to glue it together. overall, love the concept and think it just needs work on the technical aspects like the mixdown. great job.",
        rating: 3,
        projectId: "12345678910",
        projectName: "Test Project 1",
        dateCreated: new Date(Date.now()),
    }
];

db.Project.deleteMany({})
    .then(() => db.Project.collection.insertMany(projectSeed))
    .then((data) => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

db.User.deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then((data) => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

db.Comment.deleteMany({})
    .then(() => db.Comment.collection.insertMany(commentSeed))
    .then((data) => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
