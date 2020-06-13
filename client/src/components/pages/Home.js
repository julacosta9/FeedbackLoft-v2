import React, { useState, useEffect, useContext } from "react";
import Project from "../projects/Project";
import EmptyProject from "../dashboard/EmptyProject";
import FeedbackGiven from "../dashboard/FeedbackGiven";
import RatioAlert from "../dashboard/RatioAlert"
import UserContext from "../../utils/UserContext";
import API from "../../utils/API.js";

const Home = () => {
    const { _id, feedbackGiven, feedbackReceived } = useContext(UserContext);

    const [projects, setProjects] = useState([
        {
            name: "",
            userId: "",
            username: "",
            genre: "",
            url: "",
            description: "",
            dateCreated: "",
            lastCommentDate: "",
            _id: "",
        },
    ]);

    const loadProjects = () => {
        API.getProjectsByUserId(_id)
            .then((res) => setProjects(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadProjects();
    }, [_id]);

    return (
        <div className="mx-2">
            <div className="container mx-auto min-h-screen">
                <div className="w-full md:mx-auto sm:mx-2 mt-32 md:mt-48 mb-1">
                    {feedbackReceived > feedbackGiven ? <RatioAlert /> : null}
                    <p className="font-mono text-4xl sm:text-5xl p-6">
                        Projects
                    </p>
                </div>
                {projects.map((project) => (
                    <Project key={project._id} project={project} />
                ))}
                {projects.length <= 2 ? <EmptyProject loadProjects={loadProjects()}/> : <div></div>}
                <div className="font-mono text-2xl sm:text-5xl w-full md:mx-auto sm:mx-2 mt-16 mb-1 p-6">
                    Your Comment History
                </div>
                <FeedbackGiven />
            </div>
        </div>
    );
};

export default Home;