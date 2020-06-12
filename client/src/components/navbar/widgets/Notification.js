import React from "react";
import { Link } from "react-router-dom";

const Notification = (props) => {

    function formatDate(date) {
        let newDate = new Date(date);
        let formatted_date = (newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear();
        return formatted_date;
    }

    return (
        <div className= "flex flex-col justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-200">
            <span className="text-xs">sent {formatDate(props.date)}</span>
            <span className="flex justify-between">
                {props.message}
                <Link 
                    to={props.link}
                    href="#responsive-header"
                    className="text-fl-mint hover:text-fl-darkGray"
                    onClick={props.closeInboxCallback}
                >
                    {props.projectReviewed}
                </Link>
                <button className="semibold text-red-800 text-xs" onClick={props.callback}>X</button>
            </span>
        </div>
    );
};

export default Notification;
