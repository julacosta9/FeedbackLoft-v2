import React, { useState, useEffect } from 'react';
import UseForm from '../../../utils/UseForm';

const UserOptions = () => {

  const { values, handleChange, handleSubmit } = UseForm(
    []
    ,)

  const updateUserGenres = () => {
    console.log(values);
  }

  const [showForm, setFormState] = useState(false)

  useEffect(() => {

  }, [showForm])

  return (
    <div>
      <span 
        onClick={() => showForm === true ?
        setFormState(false)
        :
        setFormState(true)}
      >
        Genres
      </span>
      {showForm === false ?
      (<form>
        <input
          name="alternative-rock"
          type="checkbox"
          value="alternative-rock"
          placeholder="Alternative Rock"
        />
        <input 
          name="ambient"
          type="checkbox"
          value="ambient"
          placholder="Ambient" 
        />
        <input
          name="classical"
          type="checkbox" 
          value="classical"
          placeholder="Classical" 
        />
        <input
          name="country"
          type="checkbox" 
          value="country"
          placeholder="Country" 
        />
        <input
          name="dance-&-edm"
          type="checkbox"
          value="dance-&-edm"
          placeholder="Dance & EDM" 
        />
        <input
          name="dancehall"
          type="checkbox" 
          value="dancehall"
          palceholder="Dancehall" 
        />
        <input
          name="deep-house"
          type="checkbox" 
          value="deep-house"
          palceholder="Deep House" 
        />
        <input
          name="disco"
          type="checkbox" 
          value="disco"
          palceholder="Disco" 
        />
        <input
          name="drum-&-bass"
          type="checkbox" 
          value="drum-&-bass"
          palceholder="Drum & Bass" 
        />
        <input
          name="dubstep"
          type="checkbox" 
          value="dubstep"
          palceholder="Dubstep" 
        />
        <input
          name="electronic"
          type="checkbox" 
          value="electronic"
          palceholder="Electronic" 
        />
        <input
          name="folk-&-singer-songwriter"
          type="checkbox" 
          value="folk-&-singer-songwriter"
          palceholder="Folk & Singer-Songwriter" 
        />
        <input
          name="hip-hop-&-rap"
          type="checkbox" 
          value="hip-hop-&-rap"
          palceholder="Hip-Hop & Rap" 
        />
        <input
          name="house"
          type="checkbox" 
          value="house"
          palceholder="House" 
        />
        <input
          name="indie"
          type="checkbox" 
          value="indie"
          palceholder="Indie" 
        />
        <input
          name="jazz-&-blues"
          type="checkbox" 
          value="jazz-&-blues"
          palceholder="Jazz & Blues" 
        />
        <input
          name="latin"
          type="checkbox" 
          value="latin"
          palceholder="Latin" 
        />
        <input
          name="metal"
          type="checkbox" 
          value="metal"
          palceholder="Metal" 
        />
        <input
          name="piano"
          type="checkbox" 
          value="piano"
          palceholder="Piano" 
        />
        <input
          name="pop"
          type="checkbox" 
          value="pop"
          palceholder="Pop" 
        />
        <input
          name="r&b-&-soul"
          type="checkbox" 
          value="r&b-&-soul"
          palceholder="R&B & Soul" 
        />
        <input
          name="reggae"
          type="checkbox" 
          value="reggae"
          palceholder="Reggae" 
        />
        <input
          name="reggaeton"
          type="checkbox" 
          value="reggaeton"
          palceholder="Reggaeton" 
        />
        <input
          name="rock"
          type="checkbox" 
          value="rock"
          palceholder="Rock" 
        />
        <input
          name="soundtrack"
          type="checkbox" 
          value="soundtrack"
          palceholder="Soundtrack" 
        />
        <input
          name="techno"
          type="checkbox" 
          value="techno"
          palceholder="Techno" 
        />
        <input
          name="trance"
          type="checkbox" 
          value="trance"
          palceholder="Trance" 
        />
        <input
          name="trap"
          type="checkbox" 
          value="trap"
          palceholder="Trap" 
        />
        <input
          name="triphop"
          type="checkbox" 
          value="triphop"
          palceholder="Triphop" 
        />
        <input
          name="world"
          type="checkbox" 
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