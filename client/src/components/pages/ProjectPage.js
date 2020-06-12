import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import LoopProject from "./../projects/LoopProject";
import API from "../../utils/API.js";
import Comment from "../projects/Comment";
import UserContext from '../../utils/UserContext'
import FeedbackForm from '../forms/FeedbackForm'

const projectPage = () => {
    let { id } = useParams();

    const { _id } = useContext(UserContext)

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

    const [ commentState, setCommentState] = useState(false)

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
            {project.userId === _id ? (
                <div className="bg-white border-l-4 ml-8 px-2 ">
                    {comments.map((comment) => (
                        <Comment
                            key={comment._id}
                            authorUsername={comment.authorUsername}
                            timestamp={comment.dateCreated}
                            text={comment.text}
                        />
                    ))}
                </div>
                ) : 
                commentState === false ? (
                    <FeedbackForm
                        projectId={project._id}
                        projectName={project.name}
                        id={project.userId}
                        callback={() => {
                            setCommentState(true);
                            loadComments();
                        }}
                    />
                    ) : (
                    <React.Fragment>
                      <div className="flex w-2/3 mx-auto space-x-4 mb-6">
                        <div className="bg-white border-l-4 border-fl-mint text-fl-black p-4">
                          <p className="font-bold"> Your feedback has been submitted!</p>
                          <p className="text-sm">View comments left by other users below and click next project when you're ready.</p>
                        </div>
                        <button
                            onClick={() => {
                                loadComments();
                                setCommentState(false);
                            }}
                            className="flex flex-col w-1/4 justify-center space-y-3 bg-fl-mint text-fl-black font-bold rounded px-4 cursor-pointer hover:bg-fl-black hover:text-fl-mint hover:shadow-md transition ease-in-out duration-150"
                        >
                            Next Project 
                            <span className="text-xl font-bold">→</span>
                        </button>
                      </div>
                        <div className="bg-white border-l-4 ml-8 px-2 ">
                            {comments.map((comment) => (
                                <Comment
                                    key={comment._id}
                                    authorUsername={comment.authorUsername}
                                    timestamp={comment.dateCreated}
                                    text={comment.text}
                                />
                            ))}
                        </div>
                    </React.Fragment>
                )
            }
        </div>
    );
};

export default projectPage;
