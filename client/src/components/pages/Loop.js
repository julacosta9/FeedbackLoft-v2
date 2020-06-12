import React, { useState, useEffect, useContext } from "react";
import FeedbackForm from "../forms/FeedbackForm";
import LoopProject from "../projects/LoopProject";
import API from "../../utils/API.js";
import UserContext from "../../utils/UserContext";
import Comment from "../projects/Comment";

const Loop = () => {
    const [commentState, setCommentState] = useState(false);

    const [loop, setLoop] = useState({
        name: "",
        username: "",
        userId: "",
        url: "",
        genre: "",
        dateCreated: "",
        _id: "",
    });

    const [projectComments, setProjectCommentsState] = useState([
        {
            authorUsername: "",
            dateCreated: "",
            text: "",
            _id: "",
        },
    ]);

    const { _id } = useContext(UserContext);

    const loadLoop = () => {
        API.getProjectForReview(_id)
            .then((res) => {
                setLoop(res.data);
                console.log(res.data);
            })
            .then(() => getLoopComments())
            .catch((err) => console.log(err));
    };

    const getLoopComments = () => {
        API.getAllCommentsByProject(loop._id)
            .then((res) => {
                setProjectCommentsState(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadLoop();
    }, [loop._id]);

    return (
        <div className="container mx-auto">
            {console.log(projectComments)}
            <LoopProject
                name={loop.name}
                username={loop.username}
                userId={loop.userId}
                url={loop.url}
                genre={loop.genre}
                description={loop.description}
                dateCreated={loop.dateCreated}
            />
            {commentState === false ? (
                <FeedbackForm
                    projectId={loop._id}
                    projectName={loop.name}
                    id={loop.userId}
                    callback={() => {
                        setCommentState(true);
                        getLoopComments();
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
                            loadLoop();
                            setCommentState(false);
                        }}
                        className="flex flex-col w-1/4 justify-center space-y-3 bg-fl-mint text-fl-black font-bold rounded px-4 cursor-pointer hover:bg-fl-black hover:text-fl-mint hover:shadow-md transition ease-in-out duration-150"
                    >
                        Next Project 
                        <span className="text-xl font-bold">→</span>
                    </button>
                  </div>
                    <div className="bg-white border-l-4 ml-8 px-2 ">
                        {projectComments.map((comment) => (
                            <Comment
                                key={comment._id}
                                authorUsername={comment.authorUsername}
                                timestamp={comment.dateCreated}
                                text={comment.text}
                            />
                        ))}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};

export default Loop;
