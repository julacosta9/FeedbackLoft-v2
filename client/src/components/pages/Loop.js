import React, {useState, useEffect} from 'react';
import FeedbackForm from '../forms/FeedbackForm';
import LoopProject from '../LoopProject';
import API from '../../utils/API.js';

const Loop = () => {

  const [loop, setLoop] = useState({
    name:"",
    username:"",
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
      console.log(res)
      setLoop(res.data)
    })
    .catch(err => console.log(err)
    );
  }


  useEffect(() => {
    loadLoop();
  },[])

  return(
    <div>
      {console.log(loop)}
      <LoopProject
        name={loop.name}
        username={loop.username}
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
      />
    </div>
  )
}

export default Loop;