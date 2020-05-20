import React from 'react'
import Project from '../Project'
import EmptyProject from '../EmptyProject'
import FeedbackGiven from '../FeedbackGiven'
import API from '../../utils/API.js'

const Home = () => {

  API.getAllUsers()

  return (
    <div>
      <Project />
      <EmptyProject />
      <FeedbackGiven />
    </div>
  );
}

export default Home;