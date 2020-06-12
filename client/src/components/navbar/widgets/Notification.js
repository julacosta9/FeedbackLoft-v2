import React from "react";
import { Link } from "react-router-dom";

const Notification = (props) => {

    return (
        <div className= "flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-200">
            <span>
                {props.message}
                <Link 
                    to={props.link}
                    href="#responsive-header"
                    className="text-fl-mint hover:text-fl-darkGray"
                    onClick={props.closeInboxCallback}
                >
                    {props.projectReviewed}
                </Link>
            </span>
            {/* {props.date} */}
            <button className="semibold text-red-800 text-xs" onClick={props.callback}>X</button>
        </div>
    );
};

export default Notification;
