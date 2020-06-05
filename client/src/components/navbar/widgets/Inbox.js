import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Notification from './Notification';
import UserContext from '../../../utils/UserContext';

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

  const [showMessages, setMessagesState] = useState(false);

  useEffect(() => {

  },[showMessages])

  return (
    <div>
    <button 
      className='block'
      onClick={() => showMessages === true ?
      setMessagesState(false)
      :
      setMessagesState(true)
      }
      >
      {message[0] ?
        <FontAwesomeIcon icon = {['fas' ,'bell']} />
        :
        <FontAwesomeIcon icon = {['far' ,'bell']} />
      }
    </button>
    {showMessages === true ?
    
    (<div>
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
    </div>)
    :
    <div></div>
    }

    </div>
  )
}

export default Inbox;