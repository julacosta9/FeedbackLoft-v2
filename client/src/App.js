import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import "./App.css";
import Login from './components/pages/Login'
import Navbar from "./components/Navbar"
import Loop from "./components/pages/Loop"
import ProjectPage from './components/pages/ProjectPage'
import Home from './components/pages/Home'

const App = () => {
  return(
    
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

      {/* / path must be the last switch case */}
      <Route path="/">
        <Navbar />
        <Home />
      </Route>
      
      </Switch>
    </div>
  )
}

export default App;
