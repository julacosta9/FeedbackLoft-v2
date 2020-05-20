import React from 'react'
import Project from '../Project'
import EmptyProject from '../EmptyProject'
import FeedbackGiven from '../FeedbackGiven'
import API from '../../utils/API.js'

const Home = () => {

  return (
    <div>
      <Project />
      <EmptyProject />
      <FeedbackGiven />
      {console.log(API.getAllUsers())}
    </div>
  );
}

export default Home;