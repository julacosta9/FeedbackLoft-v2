import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContext from './components/UserContext'
import "./App.css";
import Navbar from "./components/Navbar"
import Loop from "./components/pages/Loop"
import ProjectPage from './components/pages/ProjectPage'
import Home from './components/pages/Home'
import { useAuth0 } from "./react-auth0-spa";
import API from "./utils/API";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleUp, faArrowAltCircleDown, faBell } from "@fortawesome/free-regular-svg-icons"

library.add(faArrowAltCircleUp, faArrowAltCircleDown, faBell)

const App = () => {

  // const { loading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
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
    API.getAllUsers()
    .then(user => 
      setActiveUser(user.data[1])
    )
    .catch(err => console.log(err)
    )
  };

  useEffect(() => {
    loadUser();
  },[])

  // if (isAuthenticated){
    return(
      <UserContext.Provider value={activeUser}>
        {/* <div> */}
          <Router>
            <Switch>
              <Route path="/loop">
                <Navbar />
                <Loop />
              </Route>
              <Route path="/project-page">
                <Navbar />
                <ProjectPage />
              </Route>
              <Route path="/">
                <Navbar />
                <Home />
              </Route>
            </Switch>
          </Router>
        {/* </div> */}
      </UserContext.Provider>
  )}
//   else {
//     loginWithRedirect({})
//   }
// }

export default App;
