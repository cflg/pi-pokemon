import axios from "axios";
import { ERROR, GET_ALL_POKEMONS, GET_CREATED_POKEMONS, GET_POKEMON_BY_ID, GET_API_POKEMONS, GET_FILTERED_CREATES, GET_FILTERED_ASC_DES, GET_FILTERED_TYPES, GET_POKEMON_BY_QUERY, GET_ALL_TYPES } from "./constants";

/* ACTIONS CREATOR: GET */

export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            let res = await axios.get('http://localhost:3001/pokemon')
            let pokes = res.data
            dispatch({
                type: GET_ALL_POKEMONS,
                payload: pokes
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }

    }
}

export const getFilteredTypes = value => {
    return dispatch => {
        try {
            dispatch({
                type: GET_FILTERED_TYPES,
                payload: value
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const getFilteredByCreated = value => {
    return dispatch => {
        try {
            dispatch({
                type: GET_FILTERED_CREATES,
                payload: value
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}
export const getFilteredByAscOrDesc = value => {
    return dispatch => {
        try {
            dispatch({
                type: GET_FILTERED_ASC_DES,
                payload: value
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const getPokemonById = id => {
    return async dispatch => {
        try {
            let res = await axios.get(`http://localhost:3001/pokemon/${id}`)
            let poke = res.data
            dispatch({
                type: GET_POKEMON_BY_ID,
                payload: poke
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const getCreatedPokemons = () => {
    return async dispatch => {
        try {
            let res = await axios.get('http://localhost:3001/pokemon')
            let pokes = res.data
            let createdPokes = []
            for (let i = 0; i < pokes.length; i++) {
                if (pokes[i].id.length > 4) {
                    createdPokes.push(pokes[i])
                }
            }
            dispatch({
                type: GET_CREATED_POKEMONS,
                payload: createdPokes
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const getPokemonByQuery = value => {
    return async dispatch => {
        try {
            let res = await axios.get(`http://localhost:3001/pokemon?name=${value}`)
            let pokeSearch = res.data
            dispatch({
                type: GET_POKEMON_BY_QUERY,
                payload: pokeSearch
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const getApiPokemons = () => {
    return async dispatch => {
        try {
            let res = await axios.get('http://localhost:3001/pokemon')
            let pokes = res.data
            let createdPokes = []
            for (let i = 0; i < pokes.length; i++) {
                if (pokes[i].id.length < 4) {
                    createdPokes.push(pokes[i])
                }
            }
            dispatch({
                type: GET_API_POKEMONS,
                payload: createdPokes
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}

export const getAllTypes = () => {
    return async dispatch => {
        try {
            let res = await axios.get('http://localhost:3001/types')
            let types = res.data
            dispatch({
                type: GET_ALL_TYPES,
                payload: types
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        }
    }
}























