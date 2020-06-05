import React, {useState, useEffect, useContext} from 'react';
import FeedbackForm from '../forms/FeedbackForm';
import LoopProject from '../LoopProject';
import API from '../../utils/API.js';
import UserContext from '../UserContext';

const Loop = () => {

  const [loop, setLoop] = useState({
    name:"",
    username:"",
    userId:"",
    url:"",
    genre:"",
    description:"",
    dateCreated:"",
    name:"",
    _id: ""
  });

  const loadLoop = () => {
    API.getProjectForReview()
    .then(res => {
      setLoop(res.data)
    })
    .catch(err => console.log(err)
    );
  }


  useEffect(() => {
    loadLoop();
  },[])

  return(
    <div className="container mx-auto">
      <LoopProject
        name={loop.name}
        username={loop.username}
        userId={loop.userId}
        url={
          loop.url[0] === "<" 
          ?
          <iframe 
            srcDoc={loop.url}
          />
          :
          <audio controls controlsList="nodownload">
            <source
            src={loop.url}
            type="audio/mpeg"
            />
        </audio>
        }
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