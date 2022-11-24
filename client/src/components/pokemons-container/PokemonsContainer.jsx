import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getCreatedPokemons } from "../../redux/actions";
import PokeSearchCard from "../poke-search-card/PokeSearchCard";
import Pokemon from "../pokemon/Pokemon";
import"./PokemonsContainer.css";
import Paginado from "../paginado/Paginado";
import Loading from "../loading/Loading";

const PokemonsContainer = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const pokeSearch = useSelector((state) => state.pokeSearch);
  
  const pokesFiltered = useSelector((state) => state.pokemonsFilter);
  //paginado
  const [currentPage, setCurrentPage] = useState(1)
  const [pokePage, /* setPokePage */] = useState(12)
  const lastPoke = currentPage * pokePage
  const firstPoke = lastPoke - pokePage
  const currentPoke = pokesFiltered.slice(firstPoke, lastPoke);

  const paginado = (pageNum) => {
    setCurrentPage(pageNum)
  }
  
  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getCreatedPokemons());    
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1)
  }, [pokesFiltered.length, setCurrentPage])

  if (error) {
    return (
      <>
        <p id="error-text">{error}</p>
      </>
    );
  } else if (pokeSearch.length) {
    return (
      <div>
        {pokeSearch.map((e) => {
          return <PokeSearchCard poke={e} />;
        })}
      </div>
    );
  } else {
    if (pokesFiltered.length) {
      if (typeof pokesFiltered[0] !== "object") {
        return <p id="error-type">There are no pokemon with those parameters</p>;
      }
      return (
        <div id="pokes-container">
          <div id='paginado'>
          <Paginado
            pokePage={pokePage}
            pokesFiltered={pokesFiltered.length}
            paginado={paginado}
            page={currentPage}
          />
          </div>
          <div id='pokemon-cards'>
          {currentPoke.map((poke) => {
            return <Pokemon pokemon={poke} />;
          })}
          </div>
        </div>
      );
    }
    return (
      <>
      <Loading />
      </>
    );
  }
};

export default PokemonsContainer;
