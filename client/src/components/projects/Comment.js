import React from "react";

const Comment = (props) => {
    function formatDate(date) {
        let newDate = new Date(date);
        let formatted_date = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
        return formatted_date;
    }

    return (
        <div className="flex p-4">
            <div>
                {props.authorUsername}{" "}
                <span className="italicc">{formatDate(props.timestamp)}</span>
            </div>
            <div>{props.text}</div>
        </div>
    );
};

export default Comment;
