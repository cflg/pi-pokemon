const { Pokemon } = require('../db')

const deletePokemon = async (id) => {

    let pokeDelete = await Pokemon.findByPk(id)
    console.log(pokeDelete)
    pokeDelete.destroy()
    return `Pokemon eliminado`
}

module.exports = {
    deletePokemon
}