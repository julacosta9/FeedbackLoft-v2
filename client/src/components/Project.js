import React, {useState} from 'react';
import Comment from "./Comment"
import { Link } from 'react-router-dom'

const Project = () => {

  const [comment, setComment] = useState({
    author: "Tyler",
    time: "6:45 P.M.",
    body: "This track slaps bro"
  });

  return(
    <div>
      <h1>Project Name</h1>
      <img src="https://udemy-images.udemy.com/course/480x270/1424968_0f47_5.jpg" width="100px" height="70px"></img>
      <Link to="/project-page"><button>This goes to a project page</button></Link>
      <Comment username={comment.author} timestamp={comment.time} comment={comment.body}/>
      <Comment />
      <Comment />
    </div>
  )
}

export default Project