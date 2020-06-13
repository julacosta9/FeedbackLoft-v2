import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoopProject = (props) => {

    const [feedbackRatio, setFeedbackRatio] = useState({
        feedbackGiven: 0,
        feedbackReceived: 0,
    });

    const loadRatio = () => {
        API.getUserById(props.userId)
            .then((res) => {
                setFeedbackRatio(res.data);
                // console.log("user ratio" + res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadRatio();
    }, [props.userId]);

    return (
        <div className="w-100 flex flex-col bg-white space-y-4 rounded overflow-hidden border  bg-white mt-48 p-6">
           {console.log(feedbackRatio)}
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <p className="font-bold text-3xl mb-2">{props.name}</p>
                    <span className="self-start inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #{props.genre}
                    </span>
                </div>
                <div className="flex flex-row items-baseline">
                    <p className="font-bold text-xl mb-2 mr-2">{props.username}</p>
                    <FontAwesomeIcon
                        icon="arrow-alt-circle-up"
                        className="mx-1"
                    />
                    {feedbackRatio.feedbackGiven}
                    <FontAwesomeIcon
                        icon="arrow-alt-circle-down"
                        className="mx-1"
                    />
                    {feedbackRatio.feedbackReceived}
                </div>
            </div>
            {props.url[0] === "<" ? 
                // renderHTML(url)
            
                <iframe className="h-iframe" title={props._id} aria-hidden="true" srcDoc={props.url} />
             : 
                <React.Fragment>
                    <div className="block object-center h-64 w-full">
                        <img className="h-full w-full object-cover"
                            src={`${process.env.PUBLIC_URL}/assets/genres/${props.genre}.jpg`} 
                            alt={props.genre}>
                        </img>
                    </div>
                    <audio controls controlsList="nodownload" className="w-full" src={props.url} >
                        <source type="audio/mpeg" />
                    </audio>
                </React.Fragment>
            }
            <div className="px-2">{props.description}</div>
        </div>
    );
};

export default LoopProject;
