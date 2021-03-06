import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import API from "../../utils/API.js";
import UseForm from '../../utils/UseForm';

const Project = (props) => {

    const { _id, name, username, genre, url, description } = props.project;

    const { loadProjects } = props

    const removeProject = () => {
        API.deleteProject(_id)
        loadProjects()
    }

    const { handleSubmit } = UseForm({}, removeProject);

    const [comments, setComments] = useState([
        {
            authorUsername: "",
            dateCreated: "",
            text: "",
            _id: "",
        },
    ]);

    const loadComments = () => {
        console.log("Projects being loaded")
        API.getAllCommentsByProject(_id)
            .then((res) => {setComments(res.data); console.log("got the data")})
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadComments();
    }, []);

    return (
        <div className="w-full flex flex-col bg-white space-y-4 rounded overflow-hidden border bg-white md:mx-auto sm:mx-2 mb-8 p-6">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <Link to={`/project-page/${_id}`}>
                        <p className="font-bold text-3xl mb-2 hover:text-fl-mint transition ease-in-out duration-150">{name}</p>
                     </Link>
                    <span className="self-start inline-block bg-fl-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        #{genre}
                    </span>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="font-bold text-xl mb-2">{username}</p>
                    <form onSubmit={handleSubmit}>
                        <button type="submit" className=" text-xs text-fl-black py-1 px-2 text-center border border-fl-black rounded hover:text-fl-mint hover:bg-fl-black">
                            Delete
                        </button>
                    </form>
                </div>
            </div>
            {url[0] === "<" ? (
                <iframe title={_id} aria-hidden="true" className="h-iframe" srcdoc={url} />
            ) : (
                    <React.Fragment>
                    <div className="block object-center h-64 w-full">
                        <img className="h-full w-full object-cover"
                        src={`${process.env.PUBLIC_URL}/assets/genres/${genre}.jpg`} 
                        alt={genre}></img>
                    </div>
                    <audio controls controlsList="nodownload" className="w-full">
                        <source src={url} type="audio/mpeg" />
                    </audio>
                    </React.Fragment>
                )}
            <div className="px-2">{description}</div>
            <div className="bg-white border-l-4 md:ml-8 px-2 ">
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
    );
};

export default Project;