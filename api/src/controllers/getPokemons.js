const url = 'https://pokeapi.co/api/v2/pokemon/'
const axios  = require('axios')
const { Pokemon, Type } = require('../db')

const getAllPokemons = async() => {
    
    let pokes = []
    for (let i = 1; i <= 40; i++) {
        const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        let axiosData = await pokemons.data
        
        let poke = {
            id: axiosData.id,
            name: axiosData.name,
            hp: axiosData.stats[0].base_stat,
            attack: axiosData.stats[1].base_stat,
            defense: axiosData.stats[2].base_stat,
            speed: axiosData.stats[5].base_stat,
            height: axiosData.height,
            weight: axiosData.weight,
            image: axiosData.sprites.other.dream_world.front_default,
            types: axiosData.types.map(e => {
                return {
                    id: e.id,
                    name: e.type.name
                }
            })
        }     
            
        pokes.push(poke)    
    }    
    let pokemonDB = await Pokemon.findAll({
        attributes: ['id', 'name', 'image'],
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    return [...pokes, ...pokemonDB]    
}

const getPokemonByQuery = async (name) => {
    let pokeSearch = await Pokemon.findAll({ where: { name },
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    if(!pokeSearch.length){
        const pokeData = await axios.get(`${url}${name}`)
        const pokemon = await pokeData.data
        let poke = [{
            id: pokemon.id,
            name: pokemon.name,
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
            image: pokemon.sprites.other.dream_world.front_default,
            types: pokemon.types.map(e => {
                return {
                    id: e.id,
                    name: e.type.name
                }
            })
        }]
        return poke
    }else{
        return pokeSearch
    }   
}

const getPokemonById = async(id) => {
    if(id.length < 4){
        const req = await axios.get(`${url}${id}`)
        const pokemon = await req.data        
        let poke = [{
            id: pokemon.id,
            name: pokemon.name,
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
            image: pokemon.sprites.other.dream_world.front_default,
            types: pokemon.types.map(e => {
                return {
                    id: e.id,
                    name: e.type.name
                }
            })
        }]
        return poke
    }
    let pokemonDB = await Pokemon.findAll({ 
        where: { id },
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    
    })   
    return pokemonDB
}

module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonByQuery
}