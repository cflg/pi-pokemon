import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validations from "../../handlers/validate-form";
import "./CreatePokemon.css";
import { getAllTypes, getAllPokemons } from "../../redux/actions";

const CreatePokemon = () => {
  const [pokeData, setPokeData] = useState({
    name: "",
    health: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    image: "",
    types: [],
  });
  const [create, setCreate] = useState(false)

  const [error, setError] = useState({});
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();
  //console.log(types);
  useEffect(() => {
    setError(validations(pokeData));
    dispatch(getAllTypes());
  }, [pokeData, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(validations(pokeData));
    await axios.post("http://localhost:3001/pokemon", pokeData);
    setCreate(true)
    setPokeData({
      name: "",
      health: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      image: "",
      types: [],
    });

  };
  const handleChange = (e) => {
    setPokeData({
      ...pokeData,
      [e.target.name]: e.target.value,
    });
    setError(validations(pokeData));
    console.log(error);
  };
  const handleSelect = (e) => {
    if (!pokeData.types.includes(e.target.value)) {
      setPokeData({
        ...pokeData,
        types: [...pokeData.types, e.target.value],
      });
    }
  };

  return (
    <form action="post" onSubmit={handleSubmit} id="form">
      {create ? <p>Pokemon creado correctamente</p> : <></>}
      <p>Create your pokemon</p>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={pokeData.name}
          onChange={(e) => handleChange(e)}
        />
        {error.name && <p className="error">{error.name}</p>}
      </label>
      <label htmlFor="health">
        Health
        <input
          type="number"
          name="health"
          value={pokeData.health}
          onChange={(e) => handleChange(e)}
        />
        {error.health && <p className="error">{error.health}</p>}
      </label>
      <label htmlFor="attack">
        Attack
        <input
          type="number"
          name="attack"
          value={pokeData.attack}
          onChange={(e) => handleChange(e)}
        />
        {error.attack && <p className="error">{error.attack}</p>}
      </label>
      <label htmlFor="defense">
        Defense
        <input
          type="number"
          name="defense"
          value={pokeData.defense}
          onChange={(e) => handleChange(e)}
        />
        {error.defense && <p className="error">{error.defense}</p>}
      </label>
      <label htmlFor="speed">
        Speed
        <input
          type="number"
          name="speed"
          value={pokeData.speed}
          onChange={(e) => handleChange(e)}
        />
        {error.speed && <p className="error">{error.speed}</p>}
      </label>
      <label htmlFor="height">
        Height
        <input
          type="number"
          name="height"
          value={pokeData.height}
          onChange={(e) => handleChange(e)}
        />
        {error.height && <p className="error">{error.height}</p>}
      </label>
      <label htmlFor="weight">
        Weight
        <input
          type="number"
          name="weight"
          value={pokeData.weight}
          onChange={(e) => handleChange(e)}
        />
        {error.weight && <p className="error">{error.weight}</p>}
      </label>
      <label htmlFor="image">
        Image
        <input
          type="text"
          name="image"
          value={pokeData.image}
          onChange={(e) => handleChange(e)}
        />
        {error.image && <p className="error">{error.image}</p>}
      </label>
      <label htmlFor="types">
        Types
        <select name="types" id="select-types" onChange={handleSelect}>
          {types.map((t) => {
            return (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            );
          })}
        </select>
        {error.types && <p className="error">{error.types}</p>}
        {pokeData.types.map((t) => (
          <p
            className="types-create-pokemon"
            onClick={() =>
              setPokeData({
                ...pokeData,
                types: pokeData.types.filter((p) => p !== t),
              })
            }
          >
            {t} <p>X</p>
          </p>
        ))}
      </label>
      {Object.entries(error).length ? (
        <p>Boton desabilitado</p>
      ) : (
        <button type="submit" id="create-button">
          Create
        </button>
      )}
    </form>
  );
};

export default CreatePokemon;
