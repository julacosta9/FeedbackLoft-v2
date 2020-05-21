import React from 'react'
import Project from '../Project'
import EmptyProject from '../EmptyProject'
import FeedbackGiven from '../FeedbackGiven'

const Home = () => {

  return (
    <div>
      <Project />
      <EmptyProject />
      <FeedbackGiven />
    </div>
  );
}

export default Home;