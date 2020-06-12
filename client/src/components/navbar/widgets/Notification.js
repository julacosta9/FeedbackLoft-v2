import React from "react";
import { Link } from "react-router-dom";

const Notification = (props) => {

    function formatDate(date) {
        let newDate = new Date(date);
        let formatted_date = (newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear();
        return formatted_date;
    }

    return (
        <div className="flex justify-around">
        <div className= "flex flex-col justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-200">
            <span className="text-xs">sent {formatDate(props.date)}</span>
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
            </div>
            <button className="semibold text-red-800 text-xs pr-4" onClick={props.callback}>X</button>
        </div>
    );
};

export default Notification;
