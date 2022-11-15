const { Router } = require('express');
const pokemonsRouter = require('./pokemonsRouter')
const typesRouter = require('./typesRouter')
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemon', pokemonsRouter)
router.use('/types', typesRouter)


//router se exporta para que lo requiera app
module.exports = router;
