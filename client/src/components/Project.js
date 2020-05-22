import React, {useState, useEffect} from 'react';
import Comment from "./Comment"
import { Link } from 'react-router-dom'
import API from '../utils/API.js'

const Project = () => {

  const [comments, setComments] = useState([])

  const loadComments = () => {
    API.getAllComments()
    .then(res =>
      setComments(res.data)
      )
      .catch(err => console.log(err));
  }

  // useEffect(() => {
  //   loadComments()
  // },[]);
  

  return(
    <div>
      <h1>Project Name</h1>
      <img src="https://udemy-images.udemy.com/course/480x270/1424968_0f47_5.jpg" width="100px" height="70px" alt=""></img>
      <Link to="/project-page"><button>This goes to a project page</button></Link>
      <ul>
      <Comment />
      </ul>
    </div>
  )
}

export default Project