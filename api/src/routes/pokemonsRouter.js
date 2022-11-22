const { Router } = require('express');
const { getAllPokemons, getPokemonById, getPokemonByQuery } = require('../controllers/getPokemons')
const { postPokemon } = require('../controllers/postPokemons')
const { deletePokemon } = require('../controllers/deletePokemon')
const { updatePokemon } = require('../controllers/updatePokemon')
const router = Router();
const pokemonsRouter = router
const { Type } = require('../db')

pokemonsRouter.get('/', async (req, res) => {
    try {
        const { name } = req.query
        if (name){
            let pokeQuery = await getPokemonByQuery(name)
            
            res.status(200).json(pokeQuery)
        }else{
            let poke = await getAllPokemons()
        
            res.json(poke)
        }
         
        
    } catch (error) {
        res.status(404).send(`El pokemon no existe`)
    }
})

pokemonsRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        let pokemon = await getPokemonById(id)

        res.status(200).json(pokemon)
    } catch (error) {
        res.status(404).send(`El error de ID: ${error.message}`)
    }
})

pokemonsRouter.post('/', async (req, res) => {
    
    try {
        const { name, health, attack, defense, speed, height, weight, image, types } = req.body
        if(!name) throw new Error(`El campo nombre no puede estar vacio`)
        let newPokemon = await postPokemon(name, health, attack, defense, speed, height, weight, image)
        let typesSearch = await Type.findAll({ where: {name: types}})
        await newPokemon.addTypes(typesSearch)
        res.status(200).send(`El pokemon ${name} fue creado correctamente`)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

pokemonsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        await deletePokemon(id)
        res.status(200).send(`Pokemon has deleted`)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

pokemonsRouter.put('/:id', async (req, res) => {
    const { id } = req.params
    const { name, health, attack, defense, speed, height, weight, image, types } = req.body
    try {        
        let updatedPoke = await updatePokemon(id, name, health, attack, defense, speed, height, weight, image)

        let oldTypes = updatedPoke.types.map(e => e.dataValues.id)
        await updatedPoke.removeTypes(oldTypes)

        let typesSearch = await Type.findAll({ where: { id: types } })
        await updatedPoke.addTypes(typesSearch)
        console.log(typesSearch)

        res.status(200).send(`Pokemon updated`)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = pokemonsRouter