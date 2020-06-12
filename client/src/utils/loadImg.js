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

const loadImg = (genreObject, img) => {
  if (genreObject === "alternative-rock" ||
      genreObject === "metal" ||
      genreObject === "rock") img = AltRock;
  else if (genreObject === "house" ||
      genreObject === "triphop" ||
      genreObject === "deephouse" ||
      genreObject === "electronic") img = LowElectronic;
  else if (genreObject === "drum-&-bass" ||
      genreObject === "trance" ||
      genreObject === "techno" ||
      genreObject === "dance-&-edm" ||
      genreObject === "dubstep") img = HiElectronic;
  else if (genreObject === "hip-hop") img = HipHop;
  else if (genreObject === "trap") img = Trap;
  else if (genreObject === "reggae" ||
      genreObject === "reggaeton") img = Reggae;
  else if (genreObject === "country" ||
      genreObject === "folk-&-singer-songwriter") img = Country;
  else if (genreObject === "piano") img = Piano;
  else if (genreObject === "classical") img = Classical;
  else if (genreObject === "soundtrack") img = Soundtrack;
  else if (genreObject === "indie") img = Indie;
  else if (genreObject === "world") img = World;
  else if (genreObject === "jazz-&-blues" ||
      genreObject === "dancehall") img = JazzBlues;
  else if (genreObject === "latin") img = Latin;
  else if (genreObject === "ambient") img = Ambient;
  else if (genreObject === "disco") img = Disco;
  else if (genreObject === "r&b-&-soul" ||
      genreObject === "pop") img = Vocals;
}

const images = {}

export default { loadImg, 
  AltRock, 
  LowElectronic, 
  HiElectronic, 
  HipHop, 
  Trap, 
  Reggae, 
  Country,
  Piano, 
  Classical, 
  Soundtrack, 
  Indie, 
  World, 
  JazzBlues, 
  Latin, 
  Ambient, 
  Disco, 
  Vocals}