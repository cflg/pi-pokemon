import { useDispatch, useSelector } from 'react-redux';
import { getPokemonById } from '../../redux/actions';
import { useEffect } from 'react';
import './PokemonDetail.css'

const PokemonDetail = (props) => {
    let id = props.match.params.id;
     
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getPokemonById(id));
    }, [dispatch, id]);

    let poke = useSelector((state) => state.pokeDetails);
    console.log(poke)
      
    return (
      <div id="pokemon-detail">
        {poke.map(p => {
          return(
          <>
        <p>{p.name}</p>
        <p>ID: {p.id}</p>
        <p>Estadisticas</p>
        <p>Health: {p.hp}</p>
        <p>Attack: {p.attack}</p>
        <p>Defense: {p.defense}</p>
        <p>Speed: {p.speed}</p>
        <img src={p.image} alt={p.name} />
        </>
          )
        })}     
      </div> 
      
    );
  
  }

export default PokemonDetail