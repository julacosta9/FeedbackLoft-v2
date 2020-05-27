import React, {useState, useEffect, useContext} from 'react';
import UserContext from './UserContext';
import Comment from "./Comment";
import API from '../utils/API.js'

const FeedbackGiven = () => {

  const {username, email, feedbackGiven, feedbackReceived, _id} = useContext(UserContext);

  const [userComments, setUserComments] = useState([
    {
      authorUsername: "",
      dateCreated: "",
      text: "",
      _id : ""
    }
  ]);

  const loadUserComments = () => {
    API.getAllCommentsByAuthor(_id)
    .then(res => {
      console.log(res.data);
      setUserComments(res.data)
    })
    .catch(err => console.log(err)
    );
  };

  useEffect(() => {
    loadUserComments();
  },[_id])

  return(
    <div>
      <h1>Feedback Given</h1>
      {userComments.map(comment => 
        <Comment 
        key = {comment._id}
        authorUsername = {comment.authorUsername}
        timestamp = {comment.dateCreated}
        text = {comment.text}
        />
      )}
    </div>
  )
}

export default FeedbackGiven