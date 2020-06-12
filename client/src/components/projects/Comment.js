import React from "react";
import { Link } from "react-router-dom";

const Comment = (props) => {
    function formatDate(date) {
        let newDate = new Date(date);
        let formatted_date = (newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear();
        return formatted_date;
    }

    return (
        <div className="flex flex-col p-4 ">
            <div>
                <span className="font-bold">
                    {props.authorUsername}{" "}{props.projectName ?
                    <React.Fragment>
                        <span className="text-sm font-normal">on </span>
                        <Link to={`/project-page/${props.projectId}`} className="text-sm hover:text-fl-mint transition ease-in-out duration-150">
                            {props.projectName}
                        </Link>
                    </React.Fragment>
                    : null}
                </span>
                {" "}
                <span className="text-xs">posted {formatDate(props.timestamp)}</span>
            </div>
            <div>{props.text}</div>
        </div>
    );
};

export default Comment;
