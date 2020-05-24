import React from 'react'
import Project from '../Project'
import EmptyProject from '../EmptyProject'
import FeedbackGiven from '../FeedbackGiven'
import { useAuth0 } from "../../react-auth0-spa";

const Home = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  return (
    <div>
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
   
      <Project />
      <EmptyProject />
      <FeedbackGiven />
    </div>
  );
}

export default Home;