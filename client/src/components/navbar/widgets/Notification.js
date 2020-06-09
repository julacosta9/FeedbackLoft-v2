import React, { useRef } from "react";

const Notification = (props) => {



    const deleteComment = (e) => {
        console.log(e.target.id)
    }

    return (
        <div className= "flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            {props.message}
            
            {/* {props.date} */}
            <button className="semibold text-red-800 text-xs" id={props.id} onClick={props.callback}>X</button>
        </div>
    );
};

export default Notification;
