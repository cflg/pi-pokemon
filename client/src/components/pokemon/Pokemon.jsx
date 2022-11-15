import { Link } from 'react-router-dom';
import './Pokemon.css';

const Pokemon = ({pokemon}) => {

    return (
      <div id="card">
        <p id="name">{pokemon.name}</p>
        {pokemon.types.map((e) => {
          return <p>{e.name}</p>;
        })}
        <img src={pokemon.image} alt={pokemon.name} />
        <Link to={`/pokemon-detail/${pokemon.id}`}>More info</Link>
      </div>
    );
}

export default Pokemon