import React from 'react';

const Notification = (props) => {

  return (
    <div id={props.id}>
      {props.message}
      {props.date}
    </div>
  )
}

export default Notification;