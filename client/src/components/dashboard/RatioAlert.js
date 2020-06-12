import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";

const RatioAlert = () => {

    const {
        feedbackGiven,
        feedbackReceived
    } = useContext(UserContext);

    return (
        <div
            class="bg-white border-t-4 border-fl-red rounded-b text-fl-black mx-2 px-4 py-3 shadow-md"
            role="alert"
        >
            <div class="flex">
                <div class="py-1">
                    <svg
                        class="fill-current h-6 w-6 text-fl-red mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                </div>
                <div>
                    <p class="font-bold">Your projects are not eligible for feedback</p>
                    <p class="text-sm">
                        You must leave feedback on <span className="font-bold">{(feedbackReceived - feedbackGiven) + 1}</span> more project(s) to be eligible again. Hit the <Link to="/loop"      className="text-fl-black hover:text-fl-mint underline font-semibold">
                            Loop
                    </Link> to get started.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RatioAlert;