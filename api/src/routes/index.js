const { Router } = require('express');
const mainCountry = require('./Country')
const mainActivity = require('./Activity')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/countries',mainCountry)
router.use('/activities',mainActivity)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
