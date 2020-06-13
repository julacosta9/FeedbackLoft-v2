import React from "react";
import { Link } from "react-router-dom";

const MobileDropdown = (props) => {

    return (
        <div className= "fixed py-1 mt-2 rounded-md bg-fl-black text-white shadow-lg right-0 w-64 h-screen z-10 shadow-2xl">
            <div className="flex flex-col text-right text-2xl py-8 px-6">
                <div className="flex flex-col space-y-3">
                <Link to="/" onClick={props.callback} className="tracking-widest hover:text-fl-mint transition ease-in-out duration-150">
                    DASHBOARD
                </Link>
                <Link to="/loop" onClick={props.callback}className="tracking-widest hover:text-fl-mint transition ease-in-out duration-150">
                    LOOP
                </Link>
                </div>
                <div className="flex flex-col mt-20 text-xl space-y-3">
                    <div className="flex items-center justify-end">
                        <span className="mr-4">{props.username}</span>
                        
                        <span className="">{props.feedbackGiven}</span>
                        <i className="fas fa-arrow-alt-circle-up text-sm ml-1"></i>
                        
                        <span className="ml-2">{props.feedbackReceived}</span>
                        <i className="fas fa-arrow-alt-circle-down text-sm ml-1"></i>
                    </div>
                    {props.isAuthenticated && (
                        <div className="hover:text-fl-mint transition ease-in-out duration-150 cursor-pointer" onClick={() => props.logout}>Logout</div>
                    )}                    
                </div>
            </div>
        </div>
    );
};

export default MobileDropdown;