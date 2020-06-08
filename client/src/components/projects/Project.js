import React, { useState, useEffect, useContext } from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import API from "../../utils/API.js";
import UserContext from "../../utils/UserContext";

const Project = (props) => {
    const { _id, name, username, genres, url, description } = props.project;

    const [comments, setComments] = useState([
        {
            authorUsername: "",
            dateCreated: "",
            text: "",
            _id: "",
        },
    ]);

    const loadComments = () => {
        API.getAllCommentsByProject(_id)
            .then((res) => setComments(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadComments();
    }, [_id]);

    return (
        <div className="w-full flex flex-col bg-white space-y-4 rounded overflow-hidden border w-full lg:w-12/12 md:w-12/12 bg-white mx-3 md:mx-0 lg:mx-0 shadow-lg m-8 p-6">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <Link to="/project-page">
                        <p className="font-bold text-xl mb-2 hover:text-white">{name}</p>
                    </Link>
                    <span className="self-start inline-block bg-fl-yellow rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #House{genres}
                    </span>
                </div>
                <p className="font-bold text-xl mb-2">{username}</p>
            </div>
            {url[0] === "<" ? (
                <iframe srcDoc={url} />
            ) : (
                    <audio controls controlsList="nodownload">
                        <source src={url} type="audio/mpeg" />
                    </audio>
                )}
            <div className="px-2">{description}</div>

            <div className="bg-fl-gray px-2 rounded">
                <ul>
                    {comments.map((comment) => (
                        <Comment
                            key={comment._id}
                            authorUsername={comment.authorUsername}
                            timestamp={comment.dateCreated}
                            text={comment.text}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Project;
