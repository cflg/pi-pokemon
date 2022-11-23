const { Pokemon, Type } = require('../db')

const updatePokemon = async (id, name, health, attack, defense, speed, height, weight, image, types) => {
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

    let oldTypes = updatePoke.types.map(e => e.dataValues.id)
    await updatePoke.removeTypes(oldTypes)
    
    let typesSearch = await Type.findAll({ where: { name: types } })
    await updatePoke.addTypes(typesSearch)
    
    return updatePoke
}

module.exports = {
    updatePokemon
}