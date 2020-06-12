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
        <div className="w-full flex flex-col bg-white space-y-4 rounded overflow-hidden border w-full lg:w-10/12 md:w-12/12 bg-white md:mx-auto sm:mx-2 mb-8 p-6">
            <div className="bg-white border-l-4 ml-8 px-2 ">
                {userComments.map((comment) => (
                    <Comment
                        key={comment._id}
                        authorUsername={comment.authorUsername}
                        timestamp={comment.dateCreated}
                        text={comment.text}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeedbackGiven;
