import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import API from '../../utils/API';
import UseForm from '../../utils/UseForm';

const FeedbackForm = (props) => {

  const {_id, username} = useContext(UserContext);
  
  const createPost = () => {
    API.createComment(values);
  }

  const { values, handleChange, handleSubmit } = UseForm(
    {
      authorId: "",
      authorUsername: "",
      text: "",
      rating: 1,
      projectId: "",
      projectName: ""
    },
    createPost);

    values.authorId = _id;
    values.authorUsername = username;
    values.projectId = props.projectId;
    values.projectName = props.projectName;

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
        name="text"
        type="text"
        placeholder="Leave your feedback here"
        onChange={handleChange}
        value={values.text}
        required
        />
        <select 
          onChange={handleChange}
          name="rating"
          id="rating"
        >
          <option value={1}>Like it.</option>
          <option value={2}>Love it!</option>
          <option value={0}>Needs Work...</option>
        </select>
        <button>
          Submit Feedback
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm