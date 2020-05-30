import React from 'react';

const LoopProject = (props) => {

  return (
    <div>
      <span><h1>{props.name}</h1> by <h1>{props.username}</h1></span>
      {props.url[0] === "<" 
      ?
      <iframe 
        srcDoc={props.url}
      />
      :
      <audio controls controlsList="nodownload">
        <source
        src={props.url}
        type="audio/mpeg"
        />
      </audio>}
      <h2>{props.genre}</h2>
      <h2>Description</h2>
      <h3>{props.description}</h3>
      <h6>{props.dateCreated}</h6>
    </div>
  )
}

export default LoopProject;