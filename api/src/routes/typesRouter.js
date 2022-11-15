const { Router } = require('express');
const { getAllTypes } = require('../controllers/getTypes')

const router = Router();
const typesRouter = router

typesRouter.get('/', async (req, res) => {
    
    try {
        let types = await getAllTypes()
    res.send(types)
    } catch (error) {
        res.status(404).json(`Error: ${error.message}`)
    }
})


module.exports = typesRouter