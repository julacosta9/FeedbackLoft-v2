import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import "./App.css";
import API from './utils/API.js'
import Login from './components/pages/Login'
import Navbar from "./components/Navbar"
import Loop from "./components/pages/Loop"
import ProjectPage from './components/pages/ProjectPage'
import Home from './components/pages/Home'
import UserContext from "./components/UserContext.js";


const App = () => {
  
  const [userState, setUserState] = useState({
    feedbackGiven: 0,
    feedbackReceived: 0,
    username: ""

  });

  useEffect(() => {
    API.getAllUsers()
    .then(users => {
      setUserState(users.data[0])

    })
    .catch(err => console.log(err)
    )
  },[])
  

  return(
    <UserContext.Provider value={userState}>
      <div>
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

        {/* "/" path must be the last switch case */}
        <Route path="/">
          <Navbar />
          <Home />
        </Route>
        
        </Switch>
      </div>
    
    </UserContext.Provider>
  )
}

export default App;
