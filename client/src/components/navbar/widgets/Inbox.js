import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from "./Notification";
import UserContext from "../../../utils/UserContext";

const Inbox = () => {
    const { notifications } = useContext(UserContext);

    console.log(notifications);

    const [message, setMessage] = useState([]);

    useEffect(() => {
        setMessage(notifications);
    }, [notifications]);

    const [showMessages, setMessagesState] = useState(false);

    useEffect(() => {}, [showMessages]);

    return (
        <div>
            <button
                className="block"
                onClick={() =>
                    showMessages === true
                        ? setMessagesState(false)
                        : setMessagesState(true)
                }
            >
                {message[0] ? (
                    <FontAwesomeIcon icon={["fas", "bell"]} className="relative" />
                ) : (
                    <FontAwesomeIcon icon={["far", "bell"]} className="relative" />
                )}
            </button>
            
            {showMessages === true ? (
                <React.Fragment>
                <button onClick={() => setMessagesState(false)} className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-0 h-full w-full cursor-default" />
                {/* <div className="flex flex-col mt-2 bg-white text-black rounded-lg px-4 py-4 shadow-sm border-gray-400 absolute space-y-10 right-0"> */}
                <div className="py-1 mt-2 rounded-md bg-white shadow-xs absolute right-0 w-64" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    {message[0] ? (
                        message.map((notification) => {
                            return (
                                
                                        <Notification
                                            key={notification._id}
                                            id={notification._id}
                                            message={notification.message}
                                            date={notification.dateCreated}
                                        />
                            );
                        })
                    ) : (
                        <p>No current notifications</p>
                    )}
                </div>
                </React.Fragment>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Inbox;
