import { Route } from 'react-router-dom';
import './App.css';
import CreatePokemon from './components/create-pokemon/CreatePokemon';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import LandingPage from './components/landing-page/LandingPage';
import Navbar from './components/navbar/Navbar';
import PokemonDetail from './components/pokemon-detail/PokemonDetail';
import UpdatePokemon from './components/update-pokemon/updatePokemon';

function App() {
  return (
    <>
    <Route exact path='/' component={LandingPage} />
    <Route path='/' component={Navbar} />
    <Route path='/home' component={Home}/>
    <Route path='/pokemon-detail/:id' component={PokemonDetail} />
    <Route path='/update-pokemon/:id' component={UpdatePokemon} />
    <Route path='/create-pokemon' component={CreatePokemon} />
    <Route path='/' component={Footer} />
    </>
  );
}

export default App;