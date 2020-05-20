import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {

  return(
    <div>
      <h1>Sign in</h1>
      <form>
        <textarea placeholder="User"></textarea>
        <textarea placeholder="Password"></textarea>
      </form>
      <h2>Not a member? Sign up <Link to="/">This goes to the dashboard</Link></h2>
    </div>
  )
}

export default Login;