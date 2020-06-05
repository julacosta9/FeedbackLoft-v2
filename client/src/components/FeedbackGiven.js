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
      setUserComments(res.data)
    })
    .catch(err => console.log(err)
    );
  };

  useEffect(() => {
    loadUserComments();
  },[_id])

  return(
    <div className="w-full flex flex-col bg-gray-200 space-y-4 rounded overflow-hidden border w-full lg:w-12/12 md:w-12/12 bg-white mx-3 md:mx-0 lg:mx-0 shadow-lg m-8 p-6">
      <h2 className="font-bold text-xl mb-2">Your Comment History</h2>
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