import React, { useState, useEffect } from 'react';
import API from '../utils/API.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';


const LoopProject = (props) => {

  const [feedbackRatio, setFeedbackRatio] = useState(
    {
      feedbackGiven: 0,
      feedbackReceived: 0
    }
  );

  const loadRatio = () => {
    API.getUserById(props.userId)
    .then(res => {
      setFeedbackRatio(res.data);
      console.log(res.data)
    }
    )
    .catch(err => console.log(err)
    );
  };

  useEffect(() => {
    loadRatio();
  }, [props.userId])

  

  return (
    <div>
    {console.log(feedbackRatio)}
      <span>
        <h1>{props.name}</h1> by <h1>{props.username}</h1>
        <FontAwesomeIcon icon="arrow-alt-circle-up" />{feedbackRatio.feedbackGiven}
        <FontAwesomeIcon icon="arrow-alt-circle-down" />{feedbackRatio.feedbackReceived}
      </span>
      {props.url}
      <h2>{props.genre}</h2>
      <h2>Description</h2>
      <h3>{props.description}</h3>
      <h6>{props.dateCreated}</h6>
    </div>
  )
}

export default LoopProject;