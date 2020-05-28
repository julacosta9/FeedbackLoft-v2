import React, {useState, useEffect, useContext} from 'react';
import Comment from "./Comment"
import { Link } from 'react-router-dom'
import API from '../utils/API.js'
import ProjectContext from './ProjectContext'
import UserContext from './UserContext'

const Project = (props) => {

  const {_id} = useContext(ProjectContext);

  const [comments, setComments] = useState([
    {
      authorUsername: "",
      dateCreated: "",
      text: "",
      _id : ""
    }
  ]);

  const loadComments = () => {
    API.getAllCommentsByProject(_id)
    .then(res => {
      setComments(res.data);
      console.log(`Project Comments: ${res.data}`);
      
    })
    .catch(err => console.log(err)
    );
  };

  useEffect(() => {
   loadComments();
  },[_id]);

  return(
    <div>
    {console.log(`ProjectID: ${_id}`)}
      <span>
      <h1>{props.projectName}</h1>
      <h2> by {props.username}</h2>
      </span>
      <h3>{props.genres}</h3>
      <iframe 
        srcDoc={props.url}
      />
      <h3>{props.description}</h3>
      <Link to="/project-page"><button>This goes to a project page</button></Link>
      <ul>
      {comments.map(comment => 
          <Comment 
          key = {comment._id}
          authorUsername = {comment.authorUsername}
          timestamp = {comment.dateCreated}
          text = {comment.text}
          />
      )}
      </ul>
    </div>
  )
}

export default Project