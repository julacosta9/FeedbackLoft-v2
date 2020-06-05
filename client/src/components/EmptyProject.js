import React from "react";
import CreateProjectForm from "./forms/CreateProjectForm";

function showForm (e) {
    // display createProjectform in pop modal
}

const EmptyProject = () => {
    return (
        <div onClick={(e) => showForm(e)} className="flex flex-col items-center my-2 p-8 rounded bg-teal-400 space-x-2 w-1/4 mx-auto cursor-pointer hover:shadow-md ease-in-out">
            <p className="text-white text-lg">Create A New Project</p>
            <i className="fas fa-plus-circle fa-2x text-white"></i>
            {/* <CreateProjectForm /> */}
        </div>
    );
};

export default EmptyProject;
