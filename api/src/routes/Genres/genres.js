const { Router } = require('express');
const router = Router();
const { Genres } = require('../../db.js')
const genresToDb = require('../../controllers/genresToDb.js');

router.get('/genres', async (req, res) => {
    
    try{
        await genresToDb()
        const allGenres = await Genres.findAll();
        res.status(200).send(allGenres);
    }catch (error) {
        res.status(404).send('Genres not found.');
    };
});

module.exports = router;