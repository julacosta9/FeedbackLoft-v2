import React, {useState, useEffect, useContext} from 'react';
import Comment from "./Comment"
import { Link } from 'react-router-dom'
import API from '../utils/API.js'
import UserContext from './UserContext'

const Project = () => {

  const {username, email, feedbackGiven, feedbackReceived, _id} = useContext(UserContext);

  const [comments, setComments] = useState([
    {
      authorUsername: "",
      dateCreated: "",
      text: ""
    }
  ])

  const loadComments = () => {
    API.getAllCommentsByProject("5ec8458ac569f51828e9be5f")
    .then(res => {
      setComments(res.data)
    })
      .catch(err => console.log(err));
  }

  useEffect(() => {
   loadComments()
  },[]);
  
  return(
    <div>
      <h1>Project Name</h1>
      <img src="https://udemy-images.udemy.com/course/480x270/1424968_0f47_5.jpg" width="100px" height="70px" alt=""></img>
      <Link to="/project-page"><button>This goes to a project page</button></Link>
      <ul>
      {comments.map(comment => 
          <Comment 
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