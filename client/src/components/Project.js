import React, {useState, useEffect, useContext} from 'react';
import Comment from "./Comment"
import { Link } from 'react-router-dom'
import API from '../utils/API.js'
import UserContext from './UserContext'

const Project = (props) => {

  const {_id, projectName, username, genres, url, description} = props.project;

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
    .then(res =>
      setComments(res.data)
    )
    .catch(err => console.log(err)
    );
  };

  useEffect(() => {
   loadComments();
  },[_id]);

  return(
    <div>
      <span>
      <h1>{projectName}</h1>
      <h2> by {username}</h2>
      </span>
      <h3>{genres}</h3>
      <iframe 
        srcDoc={url}
      />
      <h3>{description}</h3>
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