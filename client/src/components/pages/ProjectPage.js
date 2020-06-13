import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import LoopProject from "./../projects/LoopProject";
import API from "../../utils/API.js";
import Comment from "../projects/Comment";

const projectPage = () => {
    let { id } = useParams();

    const [project, setProjectState] = useState({
        _id: "",
        name: "",
        userId: "",
        username: "",
        genre: "",
        url: "",
        description: "",
        dateCreated: "",
        lastCommentDate: "",
    });
    
    const [comments, setComments] = useState([
        {
            authorUsername: "",
            dateCreated: "",
            text: "",
            _id: "",
        },
    ]);

    const loadProject = () => {
        API.getProjectById(id)
            .then((res) => {
                setProjectState(res.data);
            })
            .catch((err) => console.log(err));
    };


    const loadComments = () => {
        API.getAllCommentsByProject(project._id)
            .then((res) => {
                console.log(res.data);
                setComments(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadProject();
        loadComments();
    }, [id, project._id]);

    return (
        <div className="mx-2">
            <div className="container mx-auto min-h-screen">
                <LoopProject
                    name={project.name}
                    username={project.username}
                    userId={project.userId}
                    url={project.url}
                    genre={project.genre}
                    description={project.description}
                    dateCreated={project.dateCreated}
                />
                <div className="w-100 flex flex-col bg-white space-y-4 rounded overflow-hidden border w-full lg:w-10/12 md:w-12/12 bg-white md:mx-auto mt-10 mb-8 p-6">
                    <div className="bg-white border-l-4 ml-2 md:ml-8 px-2">
                        {comments.map((comment) => (
                            <Comment
                                key={comment._id}
                                authorUsername={comment.authorUsername}
                                timestamp={comment.dateCreated}
                                text={comment.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default projectPage;
