import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import Project from "../projects/Project";
import EmptyProject from "../dashboard/EmptyProject";
import FeedbackGiven from "../dashboard/FeedbackGiven";
import { useAuth0 } from "../../react-auth0-spa";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API.js";

const Home = () => {
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const { _id } = useContext(UserContext);

    const [projects, setProjects] = useState([
        {
            name: "",
            userId: "",
            username: "",
            genre: "",
            url: "",
            description: "",
            dateCreated: "",
            lastCommentDate: "",
            _id: "",
        },
    ]);

    useEffect(() => {}, [projects])

    const [ showForm, setFormState ] = useState(false)

    const loadProjects = () => {
        API.getProjectsByUserId(_id)
            .then((res) => setProjects(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadProjects();
    }, [_id]);

    return (
        <div className="container mx-auto">
            <div className="font-mono font-bold text-5xl w-full lg:w-10/12 md:w-12/12 md:mx-auto sm:mx-2 mt-40 mb-1 p-6">
                Projects
            </div>
            {projects.map((project) => (
                <Project key={project._id} project={project} />
            ))}
            {projects.length <= 2 ?
                <EmptyProject />
                :
                <div></div>
            }
            <div className="font-mono font-bold text-5xl w-full lg:w-10/12 md:w-12/12 md:mx-auto sm:mx-2 mt-16 mb-1 p-6">
                Your Comment History
            </div>
            <FeedbackGiven 
            
            />
            {console.log(`Projects: ${projects._id}`)}
        </div>
    );
};

  // useEffect(() => {
  //   loadProjects();
  // },[_id]);


  // return (
  //   <div>


  //     {projects.map(project => 
  //       <Project 
  //       key = {project._id}
  //       project = {project}
        
  //       />
  //     )}
  //     <EmptyProject />
  //     <FeedbackGiven />
  //   </div>
  // );


export default Home;
