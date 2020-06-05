import React, { useContext } from "react";
import axios from "axios";
import API from "../../utils/API.js";
import UserContext from "../UserContext";
import UseForm from "../../utils/UseForm";

const CreateProjectForm = () => {
    const { _id, username } = useContext(UserContext);

    const s3Upload = () => {
        let formData = new FormData();
        let inputElement = document.getElementById("audio-file");
        // HTML file input, chosen by user
        formData.append("audio", inputElement.files[0]);
        axios
            .post("/api/projects/audio-upload", formData)
            .then((response) => {
                values.url = response.data.s3AudioUrl;
                API.createProject(values);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const { values, handleChange, handleSubmit } = UseForm(
        {
            name: "",
            userId: "",
            username: "",
            genre: "rock",
            url: "",
            description: "",
        },
        s3Upload
    );

    values.userId = _id;
    values.username = username;

    return (
        <form
        class="w-full max-w-xl bg-white rounded-lg px-4 py-4 mx-auto shadow-lg border-gray-400"
        onSubmit={handleSubmit}>
                <label
                    className="px-4 pt-3 pb-2 text-gray-800 text-lg"
                    for="name"
                >
                    Project Name
                </label>
                <input
                    name="name"
                    type="text"
                    placeholder="Project Name"
                    onChange={handleChange}
                    value={values.name}
                    required
                />
                <label
                    className="px-4 pt-3 pb-2 text-gray-800 text-lg"
                    for="genre"
                >
                    Genre
                </label>
                <select onChange={handleChange} name="genre" id="genre">
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
                    <option value="lastin">Latin</option>
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
                <label
                    className="px-4 pt-3 pb-2 text-gray-800 text-lg"
                    for="url"
                >
                    Soundcloud Link
                </label>
                <input
                    name="url"
                    type="text"
                    placeholder="Soundcloud Embed"
                    onChange={handleChange}
                    value={values.url}
                />
                <label
                    className="px-4 pt-3 pb-2 text-gray-800 text-lg"
                    for="url"
                >
                    Upload Your File
                </label>
                <input name="file" type="file" id="audio-file" />
                <input
                    name="description"
                    type="text"
                    placeholder="Description"
                    onChange={handleChange}
                    value={values.description}
                    required
                />
                <button>Submit</button>
            </form>
    );
};

export default CreateProjectForm;
