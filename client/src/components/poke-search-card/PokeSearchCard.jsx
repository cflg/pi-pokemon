import './PokeSearchCard.css'

const PokeSearchCard = ({poke}) => {

    return (
      <div id="poke-search-card">
        <div id="stats">
          <p id="poke-search-name">{poke.name}</p>
          <p className="stats">Health: {poke.hp}</p>
          <p className="stats">Attack: {poke.attack}</p>
          <p className="stats">Defense: {poke.defense}</p>
          <p className="stats">Speed: {poke.speed}</p>
          <p className="stats">Height: {poke.height}</p>
          <p className="stats">Weight: {poke.weight}</p>
          {poke.types.map((type) => {
            return <p className='poke-search-types'>{type.name}</p>;
          })}
        </div>
        <div id="poke-search-img">
          <img src={poke.image} alt={poke.name} />
        </div>
      </div>
    );

}

export default PokeSearchCard