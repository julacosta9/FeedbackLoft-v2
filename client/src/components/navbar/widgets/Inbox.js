import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from "./Notification";
import UserContext from "../../../utils/UserContext";

const Inbox = () => {
    const { notifications } = useContext(UserContext);

    const [message, setMessage] = useState([""]);

    useEffect(() => {
        setMessage(notifications);
    }, [notifications, message]);

    const [showMessages, setMessagesState] = useState(false);

    useEffect(() => {}, [showMessages]);
    
    const removeComment = (obj, index, array) => {
        obj.isRead = true;
        // array.slice(index, 1);
        // setMessage(notifications)
    }
    
    useEffect(() => {}, [message])
    
    return (
        <React.Fragment>
            <button
                className="block"
                onClick={() => showMessages === true ?
                    setMessagesState(false)
                    :
                    setMessagesState(true)
                }
            >
                {message[0] && message[0].isRead === false ?
                    <FontAwesomeIcon icon={["fas", "bell"]} className="relative text-white hover:text-fl-mint" />
                    :
                    <FontAwesomeIcon icon={["far", "bell"]} className="relative text-white hover:text-fl-mint" />
                }
            </button>

            {showMessages === true ?
                <React.Fragment>
                <div className="py-1 mt-2 rounded-md bg-white shadow-xs absolute right-0 w-64" 
                    role="menu" 
                    aria-orientation="vertical" 
                    aria-labelledby="user-menu"
                >
                    {message[0] && message.length > 0 ? 
                        message.map((notification, i) => {
                            if (notification.isRead === false) return (
                                <Notification
                                    id={notification._id}
                                    key={notification._id}
                                    message={notification.message}
                                    date={notification.dateCreated}
                                />

                            )
                        })
                        :
                        (
                            <div className="text-center text-black">
                            No Current Notifications
                            </div>
                        )
                    }
                </div>
                </React.Fragment>
                :
                <div className="invisible"></div>
            }
        </React.Fragment>
    )
    // return (
    //     <div>
    //         <button
    //             className="block"
    //             onClick={() => showMessages === true ? 
    //                 setMessagesState(false)
    //                 : 
    //                 setMessagesState(true)
    //             }
    //         >
    //             {message[0] && message[0].isRead === false ? 
    //                 <FontAwesomeIcon icon={["fas", "bell"]} className="relative text-white" />
    //                 : 
    //                 <FontAwesomeIcon icon={["far", "bell"]} className="relative text-white" />
    //             }
    //         </button>
            
    //         {showMessages === true ? (
    //             <React.Fragment>
    //         <button className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-0 h-full w-full cursor-default" />
    //             {/* <div className="flex flex-col mt-2 bg-white text-black rounded-lg px-4 py-4 shadow-sm border-gray-400 absolute space-y-10 right-0"> */}
    //             <div className="py-1 mt-2 rounded-md bg-white shadow-xs absolute right-0 w-64" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
    //                 {message[0] ? (
    //                     message.map((notification, i) => {
    //                         if (notification.isRead === false)
    //                         return (
    //                             <Notification
    //                                 id={notification._id}
    //                                 key={notification._id}
    //                                 message={notification.message}
    //                                 date={notification.dateCreated}
    //                                 /*callback={removeComment(notification, i, notifications)}*/
    //                             />
    //                         );
    //                     })
    //                 ) : (
    //                     <p>No current notifications</p>
    //                 )}
    //             </div>
    //             </React.Fragment>
    //         ) : (
    //             <div></div>
    //         )}
    //     </div>
    // );
};

export default Inbox;
