import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";
import UseForm from "../../utils/UseForm";
import { Link } from 'react-router-dom';

const FeedbackForm = (props) => {
    const { _id, username } = useContext(UserContext);
  
  const createPost = () => {
    API.createComment(values);
    API.incrementFeedback(_id, props.id);
    API.updateProject(props.projectId, {lastCommentDate: Date.now()})
    API.addNotifcation(
      {
        recipientId: props.id,
        senderName: username,
        message: username + " has left a review on your project ",
        link: `/project-page/${props.projectId}`,
        projectReviewed: props.projectName,
      }
    );
    props.callback();
  }

    const { values, handleChange, handleSubmit } = UseForm(
        {
            authorId: "",
            authorUsername: "",
            text: "",
            rating: 1,
            projectId: "",
            projectName: "",
        },
        createPost
    );



    values.authorId = _id;
    values.authorUsername = username;
    values.projectId = props.projectId;
    values.projectName = props.projectName;

    return (
        <form
            className="w-full max-w-xl bg-white rounded-lg px-4 py-4 mt-10 mx-auto shadow-md border-gray-400"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-wrap -mx-3 mb-6">
                <label
                    className="px-4 pt-3 pb-2 text-gray-800 text-lg"
                    htmlFor="body"
                >
                    Add a new comment
                </label>
                <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea
                        className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"
                        name="text"
                        placeholder="Type Your Comment"
                        onChange={handleChange}
                        // minLength="50"
                        required
                    ></textarea>
                </div>
                <div className="w-full md:w-full px-3 mb-2 mt-2 relative">
                    <label
                        className="px-4 pt-3 pb-3 text-gray-800 text-lg"
                        htmlFor="rating"
                    >
                        Rating
                    </label>
                    <select
                        onChange={handleChange}
                        name="rating"
                        id="rating"
                        className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"
                    >
                        <option value={3}>❤️Love it!</option>
                        <option value={2}>👍 Like it.</option>
                        <option value={1}>🛠️ Needs Work...</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8 pt-6 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
                <div className="w-full md:w-full flex items-start md:w-full px-3 mt-4">
                    <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                        <svg
                            fill="none"
                            className="w-5 h-5 text-gray-600 mr-1"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-xs md:text-sm pt-px">
                            Please be detailed and contructive. Help keep our
                            community friendly :D
                        </p>
                    </div>
                    <div className="-mr-1">
                        <input
                            type="submit"
                            className="bg-white text-gray-700 font-medium py-1 px-4 border border-fl-mint rounded-md tracking-wide mr-1 hover:bg-fl-mint cursor-pointer h-12 transition ease-in-out duration-150"
                            value="Post Comment"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FeedbackForm;
