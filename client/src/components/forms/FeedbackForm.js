import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";
import UseForm from "../../utils/UseForm";

const FeedbackForm = (props) => {
    const { _id, username } = useContext(UserContext);
  
  const createPost = (event) => {
    API.createComment(values);
    API.incrementFeedback(_id, props.id);
    API.addNotifcation(
      {
        recipientId: props.id,
        senderName: username,
        message: username + " has left a review on your project " + props.projectName
      }
    )
    window.location.reload(false);
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
            class="w-full max-w-xl bg-white rounded-lg px-4 py-4 mx-auto shadow-lg border-gray-400"
            onSubmit={handleSubmit}
        >
            <div class="flex flex-wrap -mx-3 mb-6">
                <label
                    className="px-4 pt-3 pb-2 text-gray-800 text-lg"
                    for="body"
                >
                    Add a new comment
                </label>
                <div class="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea
                        class="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"
                        name="body"
                        placeholder="Type Your Comment"
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div class="w-full md:w-full px-3 mb-2 mt-2 relative">
                    <label
                        className="px-4 pt-3 pb-3 text-gray-800 text-lg"
                        for="rating"
                    >
                        Rating
                    </label>
                    <select
                        onChange={handleChange}
                        name="rating"
                        id="rating"
                        className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"
                    >
                        <option value={3}>❤️ Love it!</option>
                        <option value={2}>👍 Like it.</option>
                        <option value={1}>🛠️ Needs Work...</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8 pt-6 text-gray-700">
                        <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
                <div class="w-full md:w-full flex items-start md:w-full px-3 mt-4">
                    <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                        <svg
                            fill="none"
                            class="w-5 h-5 text-gray-600 mr-1"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p class="text-xs md:text-sm pt-px">
                            Please be detailed and contructive. Help keep our
                            community friendly :D
                        </p>
                    </div>
                    <div class="-mr-1">
                        <input
                            type="submit"
                            className="bg-white text-gray-700 font-medium py-1 px-4 border border-teal-400 rounded-md tracking-wide mr-1 hover:bg-teal-400 hover:text-white h-12"
                            value="Post Comment"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FeedbackForm;
