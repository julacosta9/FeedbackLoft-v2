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
            {projects.map((project) => (
                <Project key={project._id} project={project} />
            ))}
            {projects.length <= 2 ?
                <EmptyProject />
                :
                <div></div>
            }
            <FeedbackGiven 
            
            />
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
