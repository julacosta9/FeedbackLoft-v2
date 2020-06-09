import React, { useState, useEffect } from "react";
import CreateProjectForm from "../forms/CreateProjectForm";

const EmptyProject = () => {

    const [showForm, setFormState] = useState(false)

    useEffect(() => {

    }, [showForm]);

    return (
        <div>
        {showForm === false ?
        (<div onClick={() => setFormState(true) } className="flex flex-col items-center my-2 p-8 rounded bg-fl-yellow space-x-2 sm:w-1/4 md:w-2/4 mx-auto cursor-pointer hover:shadow-md transition ease-in-out duration-200">
            <p className="text-black text-center text-lg">Create A New Project</p>
            <i className="fas fa-plus-circle fa-2x text-black pt-4"></i>
        </div>)
        :
        <CreateProjectForm />
        // (<div className="flex flex-col items-center my-2 p-8 rounded bg-teal-400 space-x-2 w-1/4 mx-auto cursor-pointer hover:shadow-md ease-in-out">
            
        // </div>)
        }
        </div>
    );
};

export default EmptyProject;
