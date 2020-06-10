import React, { useState, useEffect } from 'react';
import UseForm from '../../../utils/UseForm';

const UserOptions = () => {

  const { values, handleChange, handleSubmit } = UseForm(
    []
    ,updateUserGenres)

  const updateUserGenres = () => {
    console.log(values);
  }

  const [showForm, setFormState] = useState(false)

  useEffect(() => {

  }, [showForm])

  return (
    <div>
      <span className="text-white">Dark Mode</span>
      <span className="text-white"
        onClick={() => showForm === true ?
        setFormState(false)
        :
        setFormState(true)}
      >
        Genres
      </span>
      {showForm === true ?
      (<form>
        <input 
          name="alternative-rock"
          type="button"
          value="alternative-rock"
          placeholder="Alternative Rock"
        />
        <input 
          name="ambient"
          type="button"
          value="ambient"
          placholder="Ambient" 
        />
        <input
          name="classical"
          type="button" 
          value="classical"
          placeholder="Classical" 
        />
        <input
          name="country"
          type="button" 
          value="country"
          placeholder="Country" 
        />
        <input
          name="dance-&-edm"
          type="button"
          value="dance-&-edm"
          placeholder="Dance & EDM" 
        />
        <input
          name="dancehall"
          type="button" 
          value="dancehall"
          palceholder="Dancehall" 
        />
        <input
          name="deep-house"
          type="button" 
          value="deep-house"
          palceholder="Deep House" 
        />
        <input
          name="disco"
          type="button" 
          value="disco"
          palceholder="Disco" 
        />
        <input
          name="drum-&-bass"
          type="button" 
          value="drum-&-bass"
          palceholder="Drum & Bass" 
        />
        <input
          name="dubstep"
          type="button" 
          value="dubstep"
          palceholder="Dubstep" 
        />
        <input
          name="electronic"
          type="button" 
          value="electronic"
          palceholder="Electronic" 
        />
        <input
          name="folk-&-singer-songwriter"
          type="button" 
          value="folk-&-singer-songwriter"
          palceholder="Folk & Singer-Songwriter" 
        />
        <input
          name="hip-hop-&-rap"
          type="button" 
          value="hip-hop-&-rap"
          palceholder="Hip-Hop & Rap" 
        />
        <input
          name="house"
          type="button" 
          value="house"
          palceholder="House" 
        />
        <input
          name="indie"
          type="button" 
          value="indie"
          palceholder="Indie" 
        />
        <input
          name="jazz-&-blues"
          type="button" 
          value="jazz-&-blues"
          palceholder="Jazz & Blues" 
        />
        <input
          name="latin"
          type="button" 
          value="latin"
          palceholder="Latin" 
        />
        <input
          name="metal"
          type="button" 
          value="metal"
          palceholder="Metal" 
        />
        <input
          name="piano"
          type="button" 
          value="piano"
          palceholder="Piano" 
        />
        <input
          name="pop"
          type="button" 
          value="pop"
          palceholder="Pop" 
        />
        <input
          name="r&b-&-soul"
          type="button" 
          value="r&b-&-soul"
          palceholder="R&B & Soul" 
        />
        <input
          name="reggae"
          type="button" 
          value="reggae"
          palceholder="Reggae" 
        />
        <input
          name="reggaeton"
          type="button" 
          value="reggaeton"
          palceholder="Reggaeton" 
        />
        <input
          name="rock"
          type="button" 
          value="rock"
          palceholder="Rock" 
        />
        <input
          name="soundtrack"
          type="button" 
          value="soundtrack"
          palceholder="Soundtrack" 
        />
        <input
          name="techno"
          type="button" 
          value="techno"
          palceholder="Techno" 
        />
        <input
          name="trance"
          type="button" 
          value="trance"
          palceholder="Trance" 
        />
        <input
          name="trap"
          type="button" 
          value="trap"
          palceholder="Trap" 
        />
        <input
          name="triphop"
          type="button" 
          value="triphop"
          palceholder="Triphop" 
        />
        <input
          name="world"
          type="button" 
          value="world"
          palceholder="World" 
        />
        <button>Update Preferred Genres</button>
      </form>)
      :
       <div></div> 
      }
      <button>log out button</button>
    </div>
  )
}

export default UserOptions;