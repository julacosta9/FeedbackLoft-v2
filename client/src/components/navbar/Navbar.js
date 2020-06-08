// src/components/NavBar.js

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useAuth0 } from "../../react-auth0-spa";
import Inbox from "./widgets/Inbox";
import UserOptions from "./widgets/UserOptions";
import logo from "../../images/feedbackloft-logo-white-transparent.png";

const Navbar = () => {
    // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const [showOptions, setOptionsState] = useState(false);

    useEffect(() => {}, [showOptions]);

    const {
        username,
        email,
        feedbackGiven,
        feedbackReceived,
        _id,
    } = useContext(UserContext);
    return (
        <nav className="flex items-center justify-between flex-wrap bg-fl-red p-6 shadow-lg">
                <img src={logo} className="w-56" />
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto pl-16 pb-3">
                    <div className="text-sm lg:flex-grow">
                        <a
                            href="#responsive-header"
                            className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:underline mr-4"
                        >
                            <Link to="/">Dashboard</Link>
                        </a>
                        <a
                            href="#responsive-header"
                            className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:underline mr-4 pl-2"
                        >
                            <Link to="/loop">Loop</Link>
                        </a>
                    </div>
                    <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 relative">
                        <Inbox />
                    </span>
                    <a
                        className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-white mr-4"
                        onClick={() =>
                            showOptions === true
                                ? setOptionsState(false)
                                : setOptionsState(true)
                        }
                    >
                        {username}
                    </a>
                    {showOptions === true ? <UserOptions /> : <div></div>}
                    <span className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                        <span className="mx-1">{feedbackGiven}</span>
                        <i className="fas fa-arrow-alt-circle-up mx-1"></i>
                    </span>
                    <span className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                        <span className="mx-1">{feedbackReceived}</span>
                        <i className="fas fa-arrow-alt-circle-down mx-1"></i>
                    </span>
                    {/* <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    {isAuthenticated && (
                        <button onClick={() => logout()}>Logout</button>
                    )}
                </a> */}
                </div>
        </nav>
    );
};

export default Navbar;
