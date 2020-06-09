import React, { useState, useEffect } from "react";
import API from "../../utils/API.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

const LoopProject = (props) => {
    const [feedbackRatio, setFeedbackRatio] = useState({
        feedbackGiven: 0,
        feedbackReceived: 0,
    });

    const loadRatio = () => {
        API.getUserById(props.userId)
            .then((res) => {
                setFeedbackRatio(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadRatio();
    }, [props.userId]);

    return (
        <div className="w-full flex flex-col bg-white space-y-4 rounded overflow-hidden border w-full lg:w-12/12 md:w-12/12 bg-white mx-3 md:mx-0 lg:mx-0 m-8 p-6">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <p className="font-bold text-3xl mb-2 hover:text-fl-red">{props.name}</p>
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
            {props.url}
            <div className="px-2">{props.description}</div>
        </div>
    );
};

export default LoopProject;
