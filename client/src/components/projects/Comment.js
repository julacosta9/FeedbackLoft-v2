import React from "react";

const Comment = (props) => {
    function formatDate(date) {
        let newDate = new Date(date);
        let formatted_date = newDate.getDate() + "/" + (newDate.getMonth() + 1) + "/" + newDate.getFullYear();
        return formatted_date;
    }

    return (
        <div className="flex p-4">
            <div>
                <span className="font-bold">{props.authorUsername}{" "}</span>
                <span className="text-xs">posted {formatDate(props.timestamp)}</span>
            </div>
            <div>{props.text}</div>
        </div>
    );
};

export default Comment;
