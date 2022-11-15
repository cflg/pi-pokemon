const { Pokemon } = require('../db')


const postPokemon = async (name, health, attack, defense, speed, height, weight, image) => {
    
        let createPokemon = await Pokemon.create({
            name, 
            health, 
            attack, 
            defense, 
            speed, 
            height, 
            weight,
            image
        })
        return createPokemon
    
}

module.exports = {
    postPokemon
}













