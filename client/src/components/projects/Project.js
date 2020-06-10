import React, { useState, useEffect, useContext } from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import API from "../../utils/API.js";
import UserContext from "../../utils/UserContext";
import UseForm from '../../utils/UseForm';
// import HtmlToReactParser from "react-html-parser";
// import renderHTML from 'react-render-html';

const Project = (props) => {

    const { _id, name, username, genres, url, description } = props.project;
    
    const removeProject = () => {
        API.deleteProject(_id)
        // eslint-disable-next-line no-restricted-globals
        // location.reload()
        
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
        API.getAllCommentsByProject(_id)
            .then((res) => setComments(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadComments();
    }, [_id]);

    // let htmlToReactParser = new HtmlToReactParser();
    // let soundcloud_iframe = htmlToReactParser(url);

    return (
        <div className="mx-2">
        <div className="w-full flex flex-col bg-white space-y-4 rounded overflow-hidden border w-full lg:w-10/12 md:w-12/12 bg-white md:mx-auto sm:mx-2 mb-8 p-6">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    {/* <Link to="/project-page"> */}
                        <p className="font-bold text-3xl mb-2 hover:text-fl-mint">{name}</p>
                    {/* </Link> */}
                    <span className="self-start inline-block bg-fl-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        #House{genres}
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
                // renderHTML(url)
            
                <iframe className="h-iframe" srcdoc={url} />
            ) : (
                    <audio controls controlsList="nodownload">
                        <source src={url} type="audio/mpeg" />
                    </audio>
                )}
            <div className="px-2">{description}</div>
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
        </div>
        </div>
    );
};

export default Project;
