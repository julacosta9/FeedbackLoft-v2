import React from 'react';
import FeedbackForm from '../FeedbackForm';

const Loop = () => {

  return(
    <div>
      <h1>Project Name</h1>
      <h2>User Name <span><i className="fas fa-arrow-alt-circle-up"></i><i className="fas fa-arrow-alt-circle-down"></i></span></h2>
      <img src="https://udemy-images.udemy.com/course/480x270/1424968_0f47_5.jpg" width="500px" height="400px" alt=""></img>
      <h3>Project Description</h3>
      <FeedbackForm />
    </div>
  )
}

export default Loop;