import React from "react";

const Notification = (props) => {

    return (
        <div className= "flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {props.message}
            {/* {props.date} */}
            <button className="semibold text-red-800 text-xs" onClick={props.callback}>X</button>
        </div>
    );
};

export default Notification;
