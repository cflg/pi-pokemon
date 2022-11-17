
import './Pokemon.css';

const Pokemon = ({pokemon}) => {

    return (
      <div id="card">
        <p id="name">{pokemon.name}</p>
        {pokemon.types.map((e) => {
          return <p className='types-card'>{e.name}</p>;
        })}
        <img className='card-img' src={pokemon.image} alt={pokemon.name} />
        <a href={`/pokemon-detail/${pokemon.id}`} className='full-stats'>Full stats</a>
      </div>
    );
}

export default Pokemon