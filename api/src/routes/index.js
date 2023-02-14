const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Activity = require('./Activity');
const Countries = require('./Countries');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/activities",Activity);
router.use("/countries",Countries);


module.exports = router;
