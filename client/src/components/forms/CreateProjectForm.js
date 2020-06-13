import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import API from "../../utils/API.js";
import UserContext from "../../utils/UserContext";
import UseForm from "../../utils/UseForm";
import loadingIcon from "../../../src/images/loading-icon.gif";

const CreateProjectForm = (props) => {
    const { _id, username } = useContext(UserContext);
    const [ uploadType, setUploadType] = useState(false);
    const [ loading, setLoadingState ] = useState(false);

    const { loadProjects } = props

    useEffect(() => {}, [loading]);

    const s3Upload = async () => {
        if (document.getElementById("audio-file")) {
            setLoadingState(true)
            let formData = new FormData();
            let inputElement = document.getElementById("audio-file");
            // HTML file input, chosen by user
            formData.append("audio", inputElement.files[0]);
            await axios
                .post("/api/projects/audio-upload", formData)
                .then((response) => {
                    values.url = response.data.s3AudioUrl;
                    API.createProject(values)
                }).then(() => {
                    setLoadingState(false)
                    props.stateChange();
                    document.body.scrollTop = 0; // For Safari
                    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                    loadProjects()
                })
                .catch((error) => {
                    console.log(error);
                }
            );
        }
        else {
            API.createProject(values)
            props.stateChange();
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            // eslint-disable-next-line no-restricted-globals
            // location.reload(false)
            loadProjects()
        }
    };

    const { values, handleChange, handleSubmit } = UseForm(
        {
            name: "",
            userId: "",
            username: "",
            genre: "alternative-rock",
            url: "",
            description: "",
        },
        s3Upload
    );

    useEffect(() => {}, [uploadType])

    values.userId = _id;
    values.username = username;

    return (
        loading === true ?
        <div className="flex flex-col lg:w-4/12 max-w-sm items-center my-2 p-8 bg-white border-l-4 border-fl-mint text-fl-black space-y-6 mx-auto">
            <img src={loadingIcon} className="w-8" alt="Loading Icon" />
            <p className="font-bold">Uploading your project...</p>
        </div>
        :
        <form
            class="w-full max-w-xl flex flex-col bg-white rounded-lg px-6 py-6 mx-auto shadow-md border-gray-400"
            onSubmit={handleSubmit}
        >
            <label className="pt-3 pb-2 text-gray-800 text-lg">
                Upload Type
            </label>
            <form className="flex flex-row">
            {/* This ternary checks the state of uploadType and highlights the appropiate button and shows the appropraite from depending in the state; 
            False === s3 upload
            True === Soundcloud Embed */}
            {uploadType === false ?
                <button
                    className="bg-fl-mint w-6/12 text-fl-black font-medium py-1 px-4 border border-fl-mint rounded-md tracking-wide mr-1 hover:bg-fl-mint h-12 transition ease-in-out duration-150" 
                    onClick={(e) => {
                        e.preventDefault();
                        setUploadType(false)
                    }}
                >
                    Upload a file
                </button>
                :
                <button
                    className="bg-white w-6/12 text-gray-700 font-medium py-1 px-4 border border-fl-mint rounded-md tracking-wide mr-1 hover:bg-fl-mint h-12 transition ease-in-out duration-150" 
                    onClick={(e) => {
                        e.preventDefault();
                        setUploadType(false)
                    }}
                >
                    Upload a file
                </button>
            }
            {/* This ternary checks the state of uploadType and highlights the appropiate button and shows the appropraite from depending in the state; 
            False === s3 upload
            True === Soundcloud Embed */}
            {uploadType === true ?
                <button
                    className="bg-orange-sc w-6/12 text-white font-medium py-1 px-4 border border-orange-sc rounded-md tracking-wide mr-1 hover:bg-orange-sc hover:text-white h-12 transition ease-in-out duration-150"
                    onClick={(e) => {
                        e.preventDefault();
                        setUploadType(true)
                    }}
                >
                    Soundcloud
                </button>
                :
                <button
                    className="bg-white w-6/12 text-gray-700 font-medium py-1 px-4 border border-orange-sc rounded-md tracking-wide mr-1 hover:bg-orange-sc hover:text-white h-12 transition ease-in-out duration-150"
                    onClick={(e) => {
                        e.preventDefault()
                        setUploadType(true)
                    }}
                >
                    Soundcloud
                </button>
            }
            </form>
            {uploadType === false ?
                <input name="file" type="file" id="audio-file" className="pt-3 pb-2 mt-4" />
                :
                <input
                    name="url"
                    type="text"
                    placeholder="Paste your soundcloud embed link"
                    onChange={handleChange}
                    value={values.url}
                    className="pt-3 pb-2 mt-4 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"
                />
            }
            <label className="pt-3 pb-2 text-gray-800 text-lg" for="name">
                Project Title
            </label>
            <input
                name="name"
                type="text"
                placeholder="Project Title"
                onChange={handleChange}
                value={values.name}
                className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"
                required
            />

            <div class="w-full md:w-full mb-2 mt-2 relative">
                <label className="pt-3 pb-2 text-gray-800 text-lg" for="genre">
                    Genre
                </label>
                <select
                    onChange={handleChange}
                    name="genre"
                    id="genre"
                    className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"
                >
                    <option value="alternative-rock">Alternative Rock</option>
                    <option value="ambient">Ambient</option>
                    <option value="classical">Classical</option>
                    <option value="country">Country</option>
                    <option value="dance-&-edm">Dance & EDM</option>
                    <option value="dancehall">Dancehall</option>
                    <option value="deep-house">Deep House</option>
                    <option value="disco">Disco</option>
                    <option value="drum-&-bass">Drum & Bass</option>
                    <option value="dubstep">Dubstep</option>
                    <option value="electronic">Electronic</option>
                    <option value="folk-&-singer-songwriter">
                        Folk & Singer-Songwriter
                    </option>
                    <option value="hip-hop-&-rap">Hip-hop & Rap</option>
                    <option value="house">House</option>
                    <option value="indie">Indie</option>
                    <option value="jazz-&-blues">Jazz & Blues</option>
                    <option value="latin">Latin</option>
                    <option value="metal">Metal</option>
                    <option value="piano">Piano</option>
                    <option value="pop">Pop</option>
                    <option value="r&b-&-soul">R&B & Soul</option>
                    <option value="reggae">Reggae</option>
                    <option value="reggaeton">Reggaeton</option>
                    <option value="rock">Rock</option>
                    <option value="soundtrack">Soundtrack</option>
                    <option value="techno">Techno</option>
                    <option value="trance">Trance</option>
                    <option value="trap">Trap</option>
                    <option value="triphop">Triphop</option>
                    <option value="world">World</option>
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
            <label className="pt-3 pb-2 text-gray-800 text-lg" for="description">
                    Description
                </label>
            <textarea
                        name="description"
                        type="text"
                        placeholder="Express to listeners what you like about about your song and what you'd like feedback on."
                        onChange={handleChange}
                        value={values.description}
                        className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:border-blue-500"
                        required
                    ></textarea>
            <div className="flex flex-row mt-3">
                <button className="bg-white w-6/12 text-gray-700 font-medium py-1 px-4 border border-fl-mint rounded-md tracking-wide mr-1 hover:bg-fl-mint hover:text-black h-12 transition ease-in-out duration-150"
                    type="submit"
                >Submit</button>
                <button onClick={props.callback} id="cancel" className="bg-white w-6/12 text-gray-700 font-medium py-1 px-4 border border-fl-black rounded-md tracking-wide mr-1 hover:bg-fl-black hover:text-white h-12 transition ease-in-out duration-150">Cancel</button>
            </div>
        </form>
    );
};

export default CreateProjectForm;
