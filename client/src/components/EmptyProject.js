import React from 'react';
import CreateProjectForm from './forms/CreateProjectForm'

const EmptyProject = () => {

  return(
    <div>
      <p>Create a new project</p>
      <span><i className="fas fa-plus-circle"></i></span>
    <CreateProjectForm />
    </div>
  )
}

export default EmptyProject