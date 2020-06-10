import React, {useState, useEffect, useContext} from 'react';
import FeedbackForm from '../forms/FeedbackForm';
import LoopProject from '../projects/LoopProject';
import API from '../../utils/API.js';
import UserContext from '../../utils/UserContext'

const Loop = () => {

  const [loop, setLoop] = useState({
    name:"",
    username:"",
    userId:"",
    url:"",
    genre:"",
    dateCreated:"",
    _id: ""
  });

  const { _id } = useContext(UserContext);

  const loadLoop = () => {
    API.getProjectForReview()
    .then(res => {
      setLoop(res.data)
      console.log(res.data);
      
    })
    .catch(err => console.log(err)
    );
  }

  useEffect(() => {
    loadLoop();
  },[_id])

  return(
    <div className="container mx-auto">

      <LoopProject
        name={loop.name}
        username={loop.username}
        userId={loop.userId}
        url={loop.url}
        genre={loop.genre}
        description={loop.description}
        dateCreated={loop.dateCreated}

      />
      <FeedbackForm 
        projectId={loop._id}
        projectName={loop.name}
        id={loop.userId}
      />
    </div>
  )
}

export default Loop;