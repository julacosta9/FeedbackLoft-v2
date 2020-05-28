import React, {useState, useEffect, useContext, useLayoutEffect} from 'react';
import Project from '../Project';
import EmptyProject from '../EmptyProject';
import FeedbackGiven from '../FeedbackGiven';
import { useAuth0 } from "../../react-auth0-spa";
import UserContext from '../UserContext';
import API from '../../utils/API.js';
import ProjectContext from '../ProjectContext'

const Home = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const {_id} = useContext(UserContext) 

  const [projects, setProjects] = useState([
    {
      name: "",
      userId: "",
      username: "",
      genre: "",
      url: "",
      description: "",
      dateCreated: "",
      lastCommentDate: "",
      _id: ""
    }
  ]);

  const loadProjects = () => {
    API.getProjectsByUserId(_id)
    .then(res => {
      setProjects(res.data);
      console.log(`Project Data: ${res.data}`);
    })
    .catch(err => console.log(err)
    );
  };

  useEffect(() => {
    loadProjects();
  },[_id]);

  return (
    <ProjectContext.Provider value={projects}>
      <div>
      {console.log(`Projects: ${projects._id}`)}
        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        {projects.map(project => 
          <Project 
          key = {project._id}
          projectName = {project.name}
          username = {project.username}
          genres = {project.genres}
          url = {project.url}
          description = {project.description}
          />
        )}
        <EmptyProject />
        <FeedbackGiven />
      </div>
    </ProjectContext.Provider>
  );
}

export default Home;