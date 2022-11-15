const url = 'https://pokeapi.co/api/v2/type'
const axios = require('axios')
const { Type } = require('../db')

const getAllTypes = async () => {
    let prueba = await Type.findAll()
    
    if(!prueba.length){
        let tp = await axios.get(url)
    let res = await tp.data.results.map(e =>{
        return{
        name: e.name,
        id: e.id}}
    )
    await Type.bulkCreate(res)
        let typesDB = Type.findAll()
        return typesDB
    }else{
    
    return prueba
    }  
}

module.exports = {
    getAllTypes
}