import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../utils/UserContext";
import Comment from "../projects/Comment";
import API from "../../utils/API.js";

const FeedbackGiven = () => {
    
    const { _id } = useContext(UserContext);

    const [userComments, setUserComments] = useState([
        {
            authorUsername: "",
            dateCreated: "",
            text: "",
            _id: "",
            projectId: "",
            projectName: ""
        },
    ]);

    const loadUserComments = () => {
        API.getAllCommentsByAuthor(_id)
            .then((res) => {
                setUserComments(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadUserComments();
    }, [_id]);

    return (
        // <div className="w-full flex flex-col space-y-4 rounded overflow-hidden border w-full lg:w-12/12 md:w-12/12 bg-white mx-3 md:mx-0 lg:mx-0 m-8 p-6">
        <div className="w-100 flex flex-col bg-white space-y-4 rounded overflow-hidden border w-full bg-white md:mx-auto mb-8 p-6">
            <div className="bg-white border-l-4 md:ml-8 px-2">
                {userComments.map((comment) => (
                    <Comment
                        key={comment._id}
                        authorUsername={comment.authorUsername}
                        timestamp={comment.dateCreated}
                        text={comment.text}
                        projectId={comment.projectId}
                        projectName={comment.projectName}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeedbackGiven;
