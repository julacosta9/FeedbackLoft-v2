import React, {useState} from 'react';
import Comment from "./Comment"
import { Link } from 'react-router-dom'

const Project = () => {

  const [userName, setUserName] = useState([]);

  return(
    <div>
      <h1>Project Name</h1>
      <img src="https://udemy-images.udemy.com/course/480x270/1424968_0f47_5.jpg" width="100px" height="70px"></img>
      <Link to="/project-page"><button>This goes to a project page</button></Link>
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default Project