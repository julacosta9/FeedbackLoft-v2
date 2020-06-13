import React, { useState, useEffect } from "react";
import CreateProjectForm from "../forms/CreateProjectForm";

const EmptyProject = (props) => {

    const { loadProjects } = props

    const [showForm, setFormState] = useState(false)

    useEffect(() => {

    }, [showForm]);

    return (
        <div>
        {showForm === false ?
        (<div onClick={() => setFormState(true) } className="flex flex-col lg:w-4/12 max-w-sm items-center my-2 p-8 rounded bg-fl-black space-x-2 mx-auto cursor-pointer hover:shadow-md transition ease-in-out duration-150">
            <p className="text-fl-mint text-center font-bold text-lg">Create A New Project</p>
            <i className="fas fa-plus-circle fa-3x text-fl-mint pt-4"></i>
        </div>)
        :
        <CreateProjectForm
            callback = {() => {
                setFormState(false);
            }}
            loadProjects={loadProjects}
            stateChange = {() => setFormState(false)}
        />
        }
        </div>
    );
};

export default EmptyProject;
