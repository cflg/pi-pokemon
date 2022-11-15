import './Navbar.css'
import Logo from '../../images/pokedex.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav>
        <img src={Logo} alt="logo" />
        <p id="title">Pokédex</p>
        <Link to="/home" id="home">
          Home
        </Link>
        <Link to="/create-pokemon" id="home">
          Create your pokemon
        </Link>
      </nav>
    );
}

export default Navbar