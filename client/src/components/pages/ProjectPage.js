import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import API from '../../utils/API.js';
import Comment from '../projects/Comment';

const projectPage = () => {

  let { id } = useParams();

  const [ project, setProjectState] = useState(
    {
      _id: "",
      name: "",
      userId: "",
      username: "",
      genre: "",
      url: "",
      description: "",
      dateCreated: "",
      lastCommentDate: ""
    }
  )

  const loadProject = () => {
    API.getProjectById(id)
    .then(res => {
      setProjectState(res.data)
    })
    .catch(err => console.log(err))
  }

  // useEffect(() => {
  //   loadProject()
  // },[])

  const [comments, setComments] = useState([
    {
        authorUsername: "",
        dateCreated: "",
        text: "",
        _id: "",
    },
  ]);

  const loadComments = () => {
    API.getAllCommentsByProject(project._id)
    .then((res) => {
      console.log(res.data)
      setComments(res.data)
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadProject();
    loadComments();
  }, [id, project._id]);

  return(
    <div className="mx-2">
    <div className="w-full flex flex-col bg-white space-y-4 rounded overflow-hidden border w-full lg:w-10/12 md:w-12/12 bg-white md:mx-auto sm:mx-2 mb-8 p-6">
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                {/* <Link to="/project-page"> */}
                    <p className="font-bold text-3xl mb-2 hover:text-fl-mint">{project.name}</p>
                {/* </Link> */}
                <span className="self-start inline-block bg-fl-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    #{project.genre}
                </span>
            </div>
            <div className="flex flex-row justify-between">
                <p className="font-bold text-xl mb-2">{project.username}</p>
                {/*<form onSubmit={handleSubmit}>
                    <button type="submit" className=" text-xs text-fl-black py-1 px-2 text-center border border-fl-black rounded hover:text-fl-mint hover:bg-fl-black">
                        Delete
                    </button>
  </form>*/}
            </div>
        </div>
        {project.url[0] === "<" ? (
            // renderHTML(url)
        
            <iframe className="h-iframe" title={project._id} aria-hidden="true" srcdoc={project.url} />
        ) : (
              <React.Fragment>
                <img src={`${process.env.PUBLIC_URL}/assets/genres/${project.genre}.jpg`} alt={project.genre}></img>
                <audio controls controlsList="nodownload" src={project.url} className="w-full">
                    <source src={project.url} type="audio/mpeg" />
                </audio>
              </React.Fragment>
            )}
        <div className="px-2">{project.description}</div>
        <div className="bg-white border-l-4 ml-8 px-2 ">
                {comments.map((comment) => (
                    <Comment
                        key={comment._id}
                        authorUsername={comment.authorUsername}
                        timestamp={comment.dateCreated}
                        text={comment.text}
                    />
                ))}
        </div>
    </div>
    </div>
  )
}

export default projectPage;