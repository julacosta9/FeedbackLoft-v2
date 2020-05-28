import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from './components/UserContext'
import "./App.css";
import Login from './components/pages/Login'
import Navbar from "./components/Navbar"
import Loop from "./components/pages/Loop"
import ProjectPage from './components/pages/ProjectPage'
import Home from './components/pages/Home'
import { useAuth0 } from "./react-auth0-spa";
import API from "./utils/API";

const App = () => {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  const [activeUser, setActiveUser] =useState(
    {
    username: "",
    email: "",
    feedbackGiven: "",
    feedbackReceived: "",
    _id: ""
  }
  );

  const loadUser = () => {
    API.getAllUsers()
    .then(user => 
      setActiveUser(user.data[3])
    )
    .catch(err => console.log(err)
    )
  };

  useEffect(() => {
    loadUser();
  },[])

  return(
    <UserContext.Provider value={activeUser}>
      <div>
        <Router>
        <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/loop">
          <Navbar />
          <Loop />
        </Route>
        <Route path="/project-page">
          <Navbar />
          <ProjectPage />
        </Route>

        {/* / path must be the last switch case */}
        <Route path="/">
          <Navbar />
          <Home />
        </Route>
        
        </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  )
}

export default App;
