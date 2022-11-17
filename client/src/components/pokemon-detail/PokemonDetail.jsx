import { useDispatch, useSelector } from 'react-redux';
import { getPokemonById, deletePokemon } from '../../redux/actions';
import { useEffect } from 'react';
import './PokemonDetail.css'

const PokemonDetail = (props) => {
    let id = props.match.params.id;
     
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPokemonById(id));
    }, [dispatch, id]);

    let poke = useSelector((state) => state.pokeDetails);

    const handleDelete = (id) => {
      dispatch(deletePokemon(id))
    }
      
    return (
      <div id="pokemon-detail-container">
        <div id='pokemon-detail'>
        {poke.map(p => {
          return (
            <div id="poke-detail-card">
              <div id='poke-detail-info'>
              <p  id='poke-detail-name'>{p.name}</p>
              <p id='poke-detail-id'>ID: {p.id}</p>
              <p id='poke-detail-title'>Stats</p>
              <div id='poke-detail-stats'>
              <p>Health: {p.hp}</p>
              <p>Attack: {p.attack}</p>
              <p>Defense: {p.defense}</p>
              <p>Speed: {p.speed}</p>
              <p>Height: {p.height}</p>
              <p>Weight: {p.weight}</p>
              </div>
              {p.id.length > 4 && <p id='poke-detail-button' onClick={() => handleDelete(p.id)}>Delete</p>}              
              </div>
              <div id='poke-detail-img'>
              <img src={p.image} alt={p.name} />
              </div>
            </div>
          );
        })}  
        </div>   
      </div>       
    );  
  }

export default PokemonDetail