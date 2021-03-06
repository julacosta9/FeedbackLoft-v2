import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from './utils/UserContext'
import "./App.css";
import './assets/main.css'
import Navbar from "./components/navbar/Navbar"
import Loop from "./components/pages/Loop"
import ProjectPage from './components/pages/ProjectPage';
import Home from './components/pages/Home'
import Footer from "./components/Footer";
import { useAuth0 } from "./react-auth0-spa";
import API from "./utils/API";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleUp, faArrowAltCircleDown, faBell } from "@fortawesome/free-regular-svg-icons";

library.add(faArrowAltCircleUp, faArrowAltCircleDown, faBell)

const App = () => {

  const { loading, user, isAuthenticated, loginWithRedirect } = useAuth0();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  const [activeUser, setActiveUser] = useState(
    {
    username: "",
    email: "",
    feedbackGiven: "",
    feedbackReceived: "",
    _id: "",
    notifications: []
  }
  );

  const loadUser = () => {
    API.getUserByEmail(user.email)
    .then(user => {
      console.log(user.data)
      setActiveUser(user.data[0])
    }
    )
    .catch(err => console.log(err)
    )
  };

  useEffect(() => {
    loadUser();
    document.body.style.background = '#EEE';
  },[user])

  if (isAuthenticated){
    API.getUserByEmail(user.email).then(dbUser => {
      if (dbUser.data.length === 0)
        API.createUser({
          email: user.email,
          username: user.nickname
        })
    })
    
    return(
      <UserContext.Provider value={activeUser}>
        {/* <div> */}
          <Router>
            <Switch>
              <Route path="/loop">
                <Navbar />
                <Loop />
                <Footer />
              </Route>
              <Route path="/project-page/:id">
                <Navbar />
                <ProjectPage />
                <Footer />
              </Route>
              <Route path="/">
                <Navbar />
                <Home />
                <Footer />
              </Route>
            </Switch>
          </Router>
        {/* </div> */}
      </UserContext.Provider>
  )}
  else {
    loginWithRedirect({})
  }
}

export default App;
