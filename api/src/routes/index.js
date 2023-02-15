const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeActivity = require('./Activity');
const routeCountries = require('./Countries');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/activities",routeActivity);
router.use("/countries",routeCountries);


module.exports = router;
