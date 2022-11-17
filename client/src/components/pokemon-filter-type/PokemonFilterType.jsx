import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTypes, getFilteredByAscOrDesc, getFilteredByCreated, getFilteredTypes
} from "../../redux/actions";
import "./PokemonFilterType.css";

const PokemonFilterType = () => {
  
  const dispatch = useDispatch();
  let types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getAllTypes());
  },[dispatch]);

  const handleType = (e) => {
    dispatch(getFilteredTypes(e.target.value));
  };
  
  const handleCreates = (e) => {
    dispatch(getFilteredByCreated(e.target.value));
  };

  const handleAscDes = (e) => {
    dispatch(getFilteredByAscOrDesc(e.target.value));
  };

  return (
    <div id="filter-type-aside">
      <p>Filter by:</p>
      <p>Type</p>
      <select
        name="select-types"
        id="select-types"
        onChange={(e) => handleType(e)}
      >
        <option value="all">All types</option>
        {types.map((t) => {
          return <option value={t.name}>{t.name}</option>;
        })}
      </select>
      <p>Created or API</p>
      <select
        name="select-types"
        id="select-types"
        onChange={(e) => handleCreates(e)}
      >
        <option value="all">All</option>
        <option value="api">API</option>
        <option value="created">Created</option>
      </select>
      <p>Ascending or descendig</p>
      <select
        name="select-types"
        id="select-types"
        onChange={(e) => handleAscDes(e)}
      >
        <option value="id">ID</option>
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
        <option value="ha">Highest attack</option>
        <option value="la">Lowest attack</option>
      </select>
    </div>
  );
};

export default PokemonFilterType;