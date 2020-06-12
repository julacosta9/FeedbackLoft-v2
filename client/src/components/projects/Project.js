import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import API from "../../utils/API.js";
import UseForm from '../../utils/UseForm';
import AltRock from '../../images/genres/rock-alt-rock.jpg';
import LowElectronic from '../../images/genres/house-triphop-deephouse-electronic.jpg';
import HiElectronic from '../../images/genres/drum&bass-deephouse-techno-trance.jpg';
import HipHop from '../../images/genres/hip-hop-1.jpg';
import Trap from '../../images/genres/hip-hop-3.jpg';
import Reggae from '../../images/genres/reggae.jpg';
import Country from '../../images/genres/folk-country.jpg';
import Piano from '../../images/genres/piano.jpg';
import Classical from '../../images/genres/classical.jpg';
import Soundtrack from '../../images/genres/soundtrack.jpg';
import Indie from '../../images/genres/indie.jpg';
import World from '../../images/genres/world.jpg';
import JazzBlues from '../../images/genres/jazz-blues.jpg';
import Latin from '../../images/genres/latin.jpg';
import Ambient from '../../images/genres/ambient.jpg';
import Disco from '../../images/genres/disco.jpg';
import Vocals from '../../images/genres/vocals.jpg';

const Project = (props) => {

    const { _id, name, username, genre, url, description } = props.project;

    const musicGenre = genre;
    
    const loadImg = (genreObject) => {
      if (genreObject === "alternative-rock" ||
          genreObject === "metal" ||
          genreObject === "rock") setGenreImg(AltRock);
      else if (genreObject === "house" ||
          genreObject === "triphop" ||
          genreObject === "deephouse" ||
          genreObject === "electronic") setGenreImg(LowElectronic);
      else if (genreObject === "drum-&-bass" ||
          genreObject === "trance" ||
          genreObject === "techno" ||
          genreObject === "dance-&-edm" ||
          genreObject === "dubstep") setGenreImg(HiElectronic);
      else if (genreObject === "hip-hop") setGenreImg(HipHop);
      else if (genreObject === "trap") setGenreImg(Trap);
      else if (genreObject === "reggae" ||
          genreObject === "reggaeton") setGenreImg(Reggae);
      else if (genreObject === "country" ||
          genreObject === "folk-&-singer-songwriter") setGenreImg(Country);
      else if (genreObject === "piano") setGenreImg(Piano);
      else if (genreObject === "classical") setGenreImg(Classical);
      else if (genreObject === "soundtrack") setGenreImg(Soundtrack);
      else if (genreObject === "indie") setGenreImg(Indie);
      else if (genreObject === "world") setGenreImg(World);
      else if (genreObject === "jazz-&-blues" ||
          genreObject === "dancehall") setGenreImg(JazzBlues);
      else if (genreObject === "latin") setGenreImg(Latin);
      else if (genreObject === "ambient") setGenreImg(Ambient);
      else if (genreObject === "disco") setGenreImg(Disco);
      else if (genreObject === "r&b-&-soul" ||
          genreObject === "pop") setGenreImg(Vocals);
    }

    const removeProject = () => {
        API.deleteProject(_id)
    }

    const { handleSubmit } = UseForm({}, removeProject);

    const [comments, setComments] = useState([
        {
            authorUsername: "",
            dateCreated: "",
            text: "",
            _id: "",
        },
    ]);

    const loadComments = () => {
        API.getAllCommentsByProject(_id)
            .then((res) => setComments(res.data))
            .catch((err) => console.log(err));
    };

    const [ genreImg, setGenreImg ] = useState("")

    useEffect(() => {
        loadImg(musicGenre)
        loadComments();
    }, []);

    return (
        <div className="mx-2">
        {console.log(url)}

        <div className="w-full flex flex-col bg-white space-y-4 rounded overflow-hidden border w-full lg:w-10/12 md:w-12/12 bg-white md:mx-auto sm:mx-2 mb-8 p-6">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    {/* <Link to="/project-page"> */}
                        <p className="font-bold text-3xl mb-2 hover:text-fl-mint transition ease-in-out duration-150">{name}</p>
                    {/* </Link> */}
                    <span className="self-start inline-block bg-fl-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        #{genre}
                    </span>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="font-bold text-xl mb-2">{username}</p>
                    <form onSubmit={handleSubmit}>
                        <button type="submit" className=" text-xs text-fl-black py-1 px-2 text-center border border-fl-black rounded hover:text-fl-mint hover:bg-fl-black">
                            Delete
                        </button>
            </form>
                </div>
            </div>
            {url[0] === "<" ? (
                <iframe title={_id} aria-hidden="true" className="h-iframe" srcdoc={url} />
            ) : (
                    <React.Fragment>
                    <img src={genreImg} alt="rock"></img>
                    <audio controls controlsList="nodownload" className="w-full">
                        <source src={url} type="audio/mpeg" />
                    </audio>
                    </React.Fragment>
                )}
            <div className="px-2">{description}</div>
            <div className="bg-white border-l-4 ml-8 px-2 ">
                    {comments.map((comment) => (
                        <Comment
                            key={comment._id}
                            authorUsername={comment.authorUsername}
                            timestamp={comment.dateCreated}
                            text={comment.text}
                        />
                    ))}
            </div>
        </div>
        </div>
    );
};

export default Project;