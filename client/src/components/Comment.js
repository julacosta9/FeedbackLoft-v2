import React from 'react';

const Comment = (props) => {

  return(
    <div>
      <h2>{props.username} <span> {props.timestamp}</span></h2>
      <p> {props.comment}</p>
    </div>
  )
}

export default Comment 