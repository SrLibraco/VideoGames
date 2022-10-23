const { Router } = require('express');
const videogames = require('./VideoGames/videogames.js');
const videogame = require('./VideogameDetail/videogameDetail.js');
const genres = require('./Genres/genres.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', genres);
router.use('/', videogame);
router.use('/', videogames);

module.exports = router;
