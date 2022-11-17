import './Navbar.css'
import Logo from '../../images/pokemon-logo.svg.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav>
        <img src={Logo} alt="logo" id='nav-img' />
        <div className='menu'>
        <a href="/home" id="menu">
          Home
        </a>
        <Link to="/create-pokemon" id="menu">
          Create
        </Link>
        </div>
      </nav>
    );
}

export default Navbar