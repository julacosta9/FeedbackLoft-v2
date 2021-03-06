import API from "../../utils/API";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useAuth0 } from "../../react-auth0-spa";
import Inbox from "./widgets/Inbox";
import MobileDropdown from "./widgets/MobileDropdown";
import Logo from "./widgets/Logo";

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth0();
    const [showOptions, setOptionsState] = useState(false);
    const [showMenu, setMenuState] = useState(false);
    const { username, _id } = useContext(UserContext);

    function toggleMenu() {
        setMenuState(!showMenu);
    }

    useEffect(() => {}, [showOptions]);

    const [feedbackRatio, setFeedbackRatio] = useState({
        feedbackGiven: 0,
        feedbackReceived: 0,
    });

    const loadRatio = () => {
        API.getUserById(_id)
            .then((res) => {
                setFeedbackRatio(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {}, [showOptions]);

    useEffect(() => {
        if (feedbackRatio.feedbackGiven === 0) loadRatio();
        setInterval(() => {
            loadRatio();
        }, 30000);
    }, [username]);

    return (
        <nav className="bg-fl-black flex fixed justify-center top-0 left-0 right-0 px-6 py-6 mb-6 shadow-lg z-10">
            <div className="container flex justify-center">
            <div className="flex w-full items-center justify-between">
                <Logo />
                <div className="flex w-full block justify-between lg:items-center ml-16 lg:pb-6">
                    <div className="hidden lg:flex text-sm">
                        <Link
                            to="/"
                            href="#responsive-header"
                            className="block tracking-widest mt-4 text-lg lg:inline-block text-white hover:text-fl-mint mr-4 transition ease-in-out duration-150"
                        >
                            DASHBOARD
                        </Link>
                        <Link
                            to="/loop"
                            href="#responsive-header"
                            className="block mt-4 tracking-widest text-lg lg:inline-block text-white hover:text-fl-mint mr-4 pl-2 transition ease-in-out duration-150"
                        >
                            LOOP
                        </Link>
                    </div>
                    <div className="flex">
                        <span className="hidden block mt-4 lg:inline-block text-white hover:text-fl-mint mr-4 relative transition ease-in-out duration-150">
                            <Inbox />
                        </span>
                        <div
                            className="hidden lg:block mt-4 lg:inline-block font-semibold text-white mr-4"
                            onClick={() =>
                                showOptions === true
                                    ? setOptionsState(false)
                                    : setOptionsState(true)
                            }
                        >
                            {username}
                        </div>
                        <span className="hidden lg:block mt-4 lg:inline-block text-white mr-4">
                            <span className="mx-1">
                                {feedbackRatio.feedbackGiven}
                            </span>
                            <i className="fas fa-arrow-alt-circle-up mx-1"></i>
                        </span>
                        <span className="hidden lg:block mt-4 lg:inline-block text-white mr-4">
                            <span className="mx-1">
                                {feedbackRatio.feedbackReceived}
                            </span>
                            <i className="fas fa-arrow-alt-circle-down mx-1"></i>
                        </span>

                        <span className="hidden lg:block mt-4 lg:inline-block text-white hover:text-fl-mint mr-4 transition ease-in-out duration-150">
                            {isAuthenticated && (
                                <button onClick={() => logout()}>Logout</button>
                            )}
                        </span>
                    </div>
                    <div className="lg:hidden relative">
                        <button
                            className="flex items-center px-3 py-2 mb-2 border rounded text-white border-white hover:text-fl-mint hover:border-fl-mint"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                {showMenu ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                                    />
                                )}
                            </svg>
                        </button>
                        {showMenu ? (
                            <MobileDropdown
                                username={username}
                                feedbackGiven={feedbackRatio.feedbackGiven}
                                feedbackReceived={
                                    feedbackRatio.feedbackReceived
                                }
                                isAuthenticated={isAuthenticated}
                                logout={logout}
                                callback={toggleMenu}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;
