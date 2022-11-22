const { Pokemon, Type } = require('../db')

const updatePokemon = async (id, name, health, attack, defense, speed, height, weight, image) => {
    let upPoke = await Pokemon.findByPk(id, {
        attributes: ['id', 'name', 'image'],
        include: {
            model: Type,
            attributes: ['name', 'id'],
            through: {
                attributes: []
            }
        }
    })
    let updatePoke = await upPoke.update({
        name,
        health,
        attack,
        defense,
        speed,
        height,
        weight,
        image
    })
    return updatePoke
}

module.exports = {
    updatePokemon
}