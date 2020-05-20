import React from 'react';

const Comment = (props) => {

  return(
    <div>
      <h2>Commenting Username {props.username} <span>[timestamp] {props.timestamp}</span></h2>
      <p> {props.comment}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus expedita reiciendis accusantium ab repudiandae reprehenderit eius possimus voluptatibus architecto harum! Similique enim odit quisquam iure eos dicta dolore itaque laboriosam!</p>
    </div>
  )
}

export default Comment