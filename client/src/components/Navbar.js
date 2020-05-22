
// src/components/NavBar.js

import React, {useState, useEffect, useContext} from 'react';
import { Link } from "react-router-dom";
import API from '../utils/API.js';
import UserContext from './UserContext';
import { useAuth0 } from "../react-auth0-spa";

const Navbar = () => {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [activeUser, setActiveUser] = useState(
    {
      feedbackGiven: 0,
      feedbackReceived: 0,
      username: ""
    }
  );
  
  // const [activeUser, setActiveUser] = useState(
  //   {
  //     feedbackGiven: 0,
  //     feedbackReceived: 0,
  //     username: ""
  //   }
  // );

  // const loadUser = () => {
  //   API.getAllUsers()
  //     .then(res => 
  //       setActiveUser(res.data[0])
  //     )
  //     .catch(err => console.log(err));
  // };

  // useEffect(() => {
  //   loadUser();
  // },[]);

  const {username, feedbackGiven, feedbackReceived} = useContext(UserContext);
  return (
    <div>
      {/*console.log(activeUser)*/}
      <span>
        feedback loft logo 
      </span>
      <Link to="/"><button>this goes to the dashboard</button></Link>
      <Link to="/loop"><button>This goes to The Loop</button></Link>
      <span><i className="far fa-bell"></i></span>
      <Link to="login">this goes to the login</Link>
      <a href="#">{username}</a>
      <span>{feedbackGiven}<i className="fas fa-arrow-alt-circle-up"></i></span>
      <span>{feedbackReceived}<i className="fas fa-arrow-alt-circle-down"></i></span>
      {!isAuthenticated && (
      <button onClick={() => loginWithRedirect({})}>Log in</button>
    )}
    {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  )
}

export default Navbar