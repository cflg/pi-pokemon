import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonByQuery } from '../../redux/actions';
import './PokeSearch.css';

const PokeSearch = () => {

    const [pokemon, setPokemon] = useState('');
    const dispatch = useDispatch()

    const handleChange = (e) => {
      setPokemon(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(getPokemonByQuery(pokemon.toLocaleLowerCase()))
      
    }
    return (
      <div id="poke-search">
        <form action="" method="get" onSubmit={handleSubmit}>
          <input
            type="text"
            id="poke-input"
            name="name"
            placeholder="Find a pokemon"
            value={pokemon}
            onChange={handleChange}
          />
          <button id='poke-button' type="submit">
            <p id='search'>Search</p>
          </button>
        </form>
      </div>
    );
}

export default PokeSearch