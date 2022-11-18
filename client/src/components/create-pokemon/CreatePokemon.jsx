import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validations from "../../handlers/validate-form";
import "./CreatePokemon.css";
import { getAllTypes } from "../../redux/actions";
import ash from '../../images/ash.png'

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
    /* setPokeData({
      name: "",
      health: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      image: "",
      types: [],
    }); */

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
    <div id="form-container">
      <form action="post" onSubmit={handleSubmit} id="form">
        <p id="form-title">Create your pokemon</p>
        <div id="elements-container">
          {/* INICIO DIV LABELS */}
          <div id="form-labels">
            <label htmlFor="name">Name</label>
            <label htmlFor="health">Health</label>
            <label htmlFor="attack">Attack</label>
            <label htmlFor="defense">Defense</label>
            <label htmlFor="speed">Speed</label>
            <label htmlFor="height">Height</label>
            <label htmlFor="weight">Weight</label>
            <label htmlFor="image">Image</label>
            <label htmlFor="types">Types</label>
            {/* FIN DEL DIV LABELS */}
          </div>
          {/* COMIENZO DEL DIV INPUTS */}
          <div id="form-inputs">
            <input
              type="text"
              name="name"
              value={pokeData.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="health"
              value={pokeData.health}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="attack"
              value={pokeData.attack}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="defense"
              value={pokeData.defense}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="speed"
              value={pokeData.speed}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="height"
              value={pokeData.height}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              name="weight"
              value={pokeData.weight}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="image"
              value={pokeData.image}
              onChange={(e) => handleChange(e)}
            />
            <select name="types" id="select-types-form" onChange={handleSelect}>
              {types.map((t) => {
                return (
                  <option key={t.id} value={t.name}>
                    {t.name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* FIN DEL DIV INPUTS */}
          {/* COMIENZO DEL DIV ERRORS */}
          <div id="form-errors">
            {error.name ? (
              <p className="error">{error.name}</p>
            ) : (
              <p id="ok">OK</p>
            )}
            {error.health ? (
              <p className="error">{error.health}</p>
            ) : (
              <p id="ok">OK</p>
            )}
            {error.attack ? (
              <p className="error">{error.attack}</p>
            ) : (
              <p id="ok">OK</p>
            )}
            {error.defense ? (
              <p className="error">{error.defense}</p>
            ) : (
              <p id="ok">OK</p>
            )}
            {error.speed ? (
              <p className="error">{error.speed}</p>
            ) : (
              <p id="ok">OK</p>
            )}
            {error.height ? (
              <p className="error">{error.height}</p>
            ) : (
              <p id="ok">OK</p>
            )}
            {error.weight ? (
              <p className="error">{error.weight}</p>
            ) : (
              <p id="ok">OK</p>
            )}
            {error.image ? (
              <p className="error">{error.image}</p>
            ) : (
              <p id="ok">OK</p>
            )}
            {error.types ? (
              <p className="error">{error.types}</p>
            ) : (
              <p id="ok">OK</p>
            )}
          </div>
          {/* FIN DEL DIV ERRORS */}
        </div>
        <div id="selected-types">
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
              <p id="form-delete">X</p>
              {t}
            </p>
          ))}
        </div>
        {Object.entries(error).length ? (
          <p id="disable-button">disabled button</p>
        ) : (
          <button type="submit" id="create-button">
            Create
          </button>
        )}
        {create ? <p id="poke-created-form">Pokemon created</p> : <></>}
      </form>
      {!Object.entries(error).length && <img src={ash} alt="" id="img-ash" />}
    </div>
  );
};

export default CreatePokemon;
