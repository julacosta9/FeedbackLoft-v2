import React, { useState, useEffect, useContext } from "react";
import FeedbackForm from "../forms/FeedbackForm";
import LoopProject from "../projects/LoopProject";
import API from "../../utils/API.js";
import UserContext from "../../utils/UserContext";
import Comment from '../projects/Comment';

const Loop = () => {

  const [commentState, setCommentState] = useState(false);

  const [loop, setLoop] = useState({
    name:"",
    username:"",
    userId:"",
    url:"",
    genre:"",
    dateCreated:"",
    _id: ""
  });

  const [projectComments, setProjectCommentsState] = useState([
    {
      authorUsername: "",
      dateCreated: "",
      text: "",
      _id: ""
    }
  ])

  const { _id } = useContext(UserContext);

  const loadLoop = () => {
    API.getProjectForReview()
    .then(res => {
      setLoop(res.data)
      console.log(res.data);
    })
    .then(() => 
    getLoopComments()
    )
    .catch(err => console.log(err)
    );
  }

  const getLoopComments = () => {
    API.getAllCommentsByProject(loop._id)
    .then(res => {
      setProjectCommentsState(res.data)
    })
    .catch(err => console.log(err)
    );
  }

  useEffect(() => {
    loadLoop();
  },[loop._id])



  return(
    <div className="container mx-auto">
    {console.log(projectComments)}
      <LoopProject
        name={loop.name}
        username={loop.username}
        userId={loop.userId}
        url={loop.url}
        genre={loop.genre}
        description={loop.description}
        dateCreated={loop.dateCreated}

      />
    {commentState === false ?

      <FeedbackForm 
        projectId={loop._id}
        projectName={loop.name}
        id={loop.userId}
        callback={() => {setCommentState(true); getLoopComments()}}
      />
      :
      <React.Fragment>
      <div className="bg-white border-l-4 ml-8 px-2 ">
        {projectComments.map((comment) => (
          <Comment
            key={comment._id}
            authorUsername={comment.authorUsername}
            timestamp={comment.dateCreated}
            text={comment.text}
          />
        ))}
      </div>
      <button onClick={()=> {loadLoop(); setCommentState(false)}}>Next Project</button>
      </React.Fragment>
    }
    </div>
  )
}

export default Loop;
