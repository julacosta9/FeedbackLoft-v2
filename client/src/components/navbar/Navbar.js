// src/components/NavBar.js

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useAuth0 } from "../../react-auth0-spa";
import Inbox from "./widgets/Inbox";
import UserOptions from "./widgets/UserOptions";
import logo from "../../images/feedbackloft-logo-white-transparent.png";

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth0();

    const [showOptions, setOptionsState] = useState(false);
    const [showMenu, setMenuState] = useState(false);

    function toggleMenu () {
        setMenuState(!showMenu);
    }

    useEffect(() => {}, [showOptions]);

    const {
        username,
        email,
        feedbackGiven,
        feedbackReceived,
        _id,
    } = useContext(UserContext);

    useEffect(() => {},[feedbackGiven, feedbackReceived])

    return (
        <nav className="flex items-center justify-between flex-wrap bg-fl-black fixed top-0 left-0 right-0 px-6 py-3 mb-6 shadow-lg">
            <img src={logo} className="w-56" />
            <div className="sm:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={toggleMenu}>
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        {showMenu ? 
                            <path fillRule="evenodd" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /> :
                            <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        }
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto pl-16 pb-3">
                <div className="text-sm lg:flex-grow">
                    <Link to="/"
                        href="#responsive-header"
                        className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-fl-mint mr-4">
                            Dashboard
                    </Link>
                    <Link to="/loop"
                        href="#responsive-header"
                        className="block mt-4 text-lg lg:inline-block lg:mt-0 text-white hover:text-fl-mint mr-4 pl-2"
                    >Loop
                    </Link>
                </div>
                <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-fl-mint mr-4 relative">
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
                <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-fl-mint mr-4">
                    {isAuthenticated && (
                        <button onClick={() => logout()}>Logout</button>
                    )}
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
