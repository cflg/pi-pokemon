import './PokeSearchCard.css'

const PokeSearchCard = ({poke}) => {

    return (
      <div id="poke-search-card">
        <p>{poke.name}</p>
        <div id='stats'>
          <p>Health: {poke.hp}</p>
          <p>Attack: {poke.attack}</p>
          <p>Defense: {poke.defense}</p>
          <p>Speed: {poke.speed}</p>
          <p>Height: {poke.height}</p>
          <p>Weight: {poke.weight}</p>
          {poke.types.map((type) => {
            return <p>{type.name}</p>;
          })}
        </div>
        <img src={poke.image} alt={poke.name} />
      </div>
    );

}

export default PokeSearchCard