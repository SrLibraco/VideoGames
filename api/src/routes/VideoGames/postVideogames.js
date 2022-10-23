/* const { Router } = require('express');
const router = Router();
const postVideogames = require('../../controllers/postVideogames.js');

router.post('/videogames', async (req, res) => {
    try {
    const {name, description, date, rating, platform, genre} = req.body;
    postVideogames(name, description, date, rating, platform, genre);
    const createdGame = await postVideogames(name, description, date, rating, platform, genre);
    res.status(201).send({ create: "ok", user: createdGame});
    }catch (error){
        res.status(400).send('Game cannot created.')
    }
});

module.exports = router; */