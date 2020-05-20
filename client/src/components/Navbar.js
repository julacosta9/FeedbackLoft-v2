import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <span>
        feedback loft logo 
      </span>
      <Link to="/"><button>this goes to the dashboard</button></Link>
      <Link to="/loop"><button>This goes to The Loop</button></Link>
      <span><i className="far fa-bell"></i></span>
      <Link to="login">this goes to the login</Link>
      <span><i className="fas fa-arrow-alt-circle-up"></i></span>
      <span><i className="fas fa-arrow-alt-circle-down"></i></span>
    </div>
  )
}

export default Navbar