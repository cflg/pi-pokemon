
import { ERROR, GET_ALL_POKEMONS, GET_CREATED_POKEMONS, GET_POKEMON_BY_ID, GET_API_POKEMONS, GET_FILTERED_CREATES, GET_FILTERED_ASC_DES, GET_FILTERED_TYPES, GET_POKEMON_BY_QUERY, DELETE_POKEMON, GET_ALL_TYPES } from "./constants";

const initialState = {
    allPokemons: [],
    pokemonsFilter: [],
    createdPokemons: [],
    apiPokemons: [],
    pokeSearch: [],
    pokeDetails: [],
    types: [],
    error: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemonsFilter: action.payload
            }
        case GET_CREATED_POKEMONS:
            return {
                ...state,
                createdPokemons: action.payload
            }
        case GET_API_POKEMONS:
            return {
                ...state,
                apiPokemons: action.payload
            }
        case GET_POKEMON_BY_QUERY:
            return {
                ...state,
                pokeSearch: action.payload
            }
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokeDetails: action.payload
            }
        case GET_FILTERED_TYPES:
            const poke = state.allPokemons
            let pl = action.payload
            const filtered = pl === 'all' ? poke : poke?.filter(p => p.types.map(t => t.name).includes(pl))
            return {
                ...state,
                pokemonsFilter: filtered.length ? filtered : [`Pokemons ${pl} not found`]
            }
        case GET_FILTERED_CREATES:
            let pokeCreated = state.allPokemons
            let pld = action.payload

            if (pld === 'api') {
                let pokeApi = []
                for (let i = 0; i < pokeCreated.length; i++) {
                    if (typeof pokeCreated[i].id === 'number') {
                        pokeApi.push(pokeCreated[i])
                    }
                }
                return {
                    ...state,
                    pokemonsFilter: pokeApi
                }
            } else if (pld === 'created') {
                let pokeApi = []
                for (let i = 0; i < pokeCreated.length; i++) {
                    if (pokeCreated[i].id.length > 4) {
                        pokeApi.push(pokeCreated[i])
                    }
                }
                return {
                    ...state,
                    pokemonsFilter: pokeApi
                }
            } else {
                return {
                    ...state,
                    pokemonsFilter: state.allPokemons
                }
            }
        case GET_FILTERED_ASC_DES:            
            let alls = state.allPokemons
            let pload = action.payload
            if (pload === 'az') {
               
                let az = alls.sort((p1, p2) => {

                    if (p1.name < p2.name) {
                        return -1;
                    }
                        return 1;
                    
                })
                return {
                    ...state,
                    pokemonsFilter: [...az]
                }
            } else if (pload === 'za') {
                let za = alls.sort((p1, p2) => {

                    if (p1.name < p2.name) {
                        return 1
                    }
                        return -1
                    
                })
                return {
                    ...state,
                    pokemonsFilter: [...za]
                }
            } else if (pload === 'ha') {
                let ha = alls.sort((p1, p2) => {
                    if (p1.attack < p2.attack) {
                        return 1
                    }
                     return -1
                    

                })
                return {
                    ...state,
                    pokemonsFilter: [...ha]
                }
            } else if (pload === 'la') {
                let la = alls.sort((p1, p2) => {

                    if (p1.attack < p2.attack) {
                        return -1
                    }
                        return 1                 

                })
                return {
                    ...state,
                    pokemonsFilter: [...la]
                }
            } else {
                return {
                    ...state,
                    pokemonsFilter: [...state.allPokemons]
                }
            }
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case DELETE_POKEMON:
            let pop = state.pokemonsFilter.pop(action.payload)
            return {
                ...state,
                pokemonsFilter: pop
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default rootReducer