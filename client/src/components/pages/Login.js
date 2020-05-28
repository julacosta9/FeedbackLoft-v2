import React from 'react';
import { Link } from 'react-router-dom'
import { useAuth0 } from "../../react-auth0-spa";
import Home from './Home'

const Login = () => {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  if (!isAuthenticated){
    return (
      loginWithRedirect({})
    )
  }
  else{
    return(
      <Home />
    )
  }
}

export default Login;