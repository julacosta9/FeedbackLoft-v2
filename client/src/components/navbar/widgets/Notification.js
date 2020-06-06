import React from "react";

const Notification = (props) => {
    const removeComment = (e) => {
        // const messageId = e.target._id;
        // setMessage(message.filter(item => item.message !== messageId));
        console.log(`Click! ${e.target._id}`);
    };

    return (
        <div className= "flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" id={props.id}>
            {props.message}
            {/* {props.date} */}
            <button className="semibold text-red-800 text-xs" onClick={removeComment}>X</button>
        </div>
    );
};

export default Notification;
