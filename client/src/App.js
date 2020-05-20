import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"
import EmptyProject from "./components/EmptyProject";
import Project from "./components/Project";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div>
      <Navbar />
      <Project />
      <EmptyProject />
      <Feedback />
    </div>
  );
}


export default App;
