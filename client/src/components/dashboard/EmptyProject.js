import React, { useState, useEffect } from "react";
import CreateProjectForm from "../forms/CreateProjectForm";

const EmptyProject = () => {

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
            callback = {() => setFormState(false)}
            stateChange = {() => setFormState(false)}
        />
        // (<div className="flex flex-col items-center my-2 p-8 rounded bg-teal-400 space-x-2 w-1/4 mx-auto cursor-pointer hover:shadow-md ease-in-out">
            
        // </div>)
        }
        </div>
    );
};

export default EmptyProject;
