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
    description:"",
    dateCreated:"",
    name:"",
    _id: ""
  });

  const { _id } = useContext(UserContext);

  const loadLoop = () => {
    API.getProjectForReview({id: _id})
    .then(res => {
      setLoop(res.data)
      console.log(res.data);
      
    })
    .catch(err => console.log(err)
    );
  }


  useEffect(() => {
    loadLoop();
  },[])

  return(
    <div className="container mx-auto">
    {console.log("user id " + _id)}
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