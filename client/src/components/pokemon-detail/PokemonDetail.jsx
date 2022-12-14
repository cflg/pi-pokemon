import { useDispatch, useSelector } from 'react-redux';
import { getPokemonById, deletePokemon } from '../../redux/actions';
import { useEffect } from 'react';
import './PokemonDetail.css'
import { useState } from 'react';

const PokemonDetail = (props) => {
    let id = props.match.params.id;
     
    const dispatch = useDispatch()

    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
      dispatch(getPokemonById(id));
    }, [dispatch, id]);

    let poke = useSelector((state) => state.pokeDetails);
    
    const handleDelete = (id) => {
      dispatch(deletePokemon(id))
      setDeleted(true)
    }
      
    return (
      <div id="pokemon-detail-container">
        <div id='pokemon-detail'>
        {poke.map(p => {
          return (
            <div id="poke-detail-card">
              <div id="poke-detail-info">
                <p id="poke-detail-name">{p.name}</p>
                {deleted && <p id="poke-detail-button">Pokemon deleted</p>}
                <p id="poke-detail-id">ID: {p.id}</p>
                <p id="poke-detail-title">Stats</p>
                <div id="poke-detail-stats">
                  {p.id.length > 4 ? (
                    <p>Health: {p.health}</p>
                  ) : (
                    <p>Health: {p.hp}</p>
                  )}

                  <p>Attack: {p.attack}</p>
                  <p>Defense: {p.defense}</p>
                  <p>Speed: {p.speed}</p>
                  <p>Height: {p.height}</p>
                  <p>Weight: {p.weight}</p>
                </div>
                {p.id.length > 4 && (
                  <p id="poke-detail-button" onClick={() => handleDelete(p.id)}>
                    Delete
                  </p>
                )}
                {p.id.length > 4 && (
                  <a href={`/update-pokemon/${id}`}>
                    <p className="poke-update-button">Update</p>
                  </a>
                )}
              </div>
              <div>
                <img src={p.image} alt={p.name} id="poke-detail-img" />
              </div>
            </div>
          );
        })}  
        </div>   
      </div>       
    );  
  }

export default PokemonDetail