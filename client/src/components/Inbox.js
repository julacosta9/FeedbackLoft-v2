import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Notification from './Notification';
import UserContext from './UserContext';

const Inbox = () => {

  const { notifications } = useContext(UserContext);

  console.log(notifications);

  const [message, setMessage] = useState([])

  useEffect(() => {
    setMessage(notifications)
  },[notifications])

  const removeComment = e => {
    // const messageId = e.target._id;
    // setMessage(message.filter(item => item.message !== messageId));
    console.log(`Click! ${e.target._id}`);
    
  };

  return (
    <div>
    <button className='block'>
      <FontAwesomeIcon 
        icon = 'bell' 
      />
    </button>
    <div>
      {message[0] ?
        message.map(notification => {
        return(
          <div>
          <Notification
          key={notification._id}
          id={notification._id}
          message={notification.message}
          date={notification.dateCreated}
          />
          <button onClick={removeComment}>X</button>
          </div>
        )
      })
      :
      <p>No current notifications</p>
      }
    </div>

    </div>
  )
}

export default Inbox;