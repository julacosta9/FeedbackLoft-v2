import React, { useContext } from 'react';
import API from '../../utils/API.js';
import UserContext from '../UserContext';
import UseForm from '../../utils/UseForm'

const CreateProjectForm = () => {

  const {_id, username} = useContext(UserContext);
  
  const logThis = () => console.log(values);

  const { values, handleChange, handleSubmit } = UseForm(
    {
      name:'',
      userId: '',
      username: '',
      genre:'rock', 
      url:'', 
      description:''
    },logThis);

    values.userId = {_id}
    values.username = {username}

  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          name="name"
          type="text"
          placeholder="Project Name"
          onChange={handleChange}
          value={values.name}
          required
        />
        <label for="genre">Choose a Genre:</label>
        <select 
          onChange={handleChange} 
          name="genre" 
          id="genre"
        >
          <option value="rock">Rock</option>
          <option value="rap">Rap</option>
          <option value="electronic">Electronic</option>
          <option value="country">Country</option>
          <option value="jazz">Jazz</option>
          <option value="pop">Pop</option>
        </select>
        <input 
          name="url"
          type="text"
          placeholder="Soundcloud Embed"
          onChange={handleChange}
          value={values.url}
        />
        <input 
          name="description"
          type="text"
          placeholder="Description"
          onChange={handleChange}
          value={values.description}
          required
        />
        <button >
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateProjectForm