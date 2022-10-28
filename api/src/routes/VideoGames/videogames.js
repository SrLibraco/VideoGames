const { Router } = require('express');
const router = Router();
const { getVideogamesDb, totalVideogames } = require('../../controllers/getVideogames.js');
const postVideogames = require('../../controllers/postVideogames.js');
const getByName = require('../../controllers/getByName.js');

router.get('/videogames', async (req, res) => {
    const { name } = req.query;
    if(!name){
    try {
        const apiVideogames = await totalVideogames()
        res.status(200).send(apiVideogames);
    }catch (error){ 
        res.status(404).send('Games not found.');
    };
} else {
    const allVideogames = await getByName(name);
    const allVideogamesDb = await getVideogamesDb(name);
    let gamesInDb = allVideogamesDb.filter(game => game.name.toLowerCase().includes(name.toLowerCase()));
    let allGames = gamesInDb.concat(allVideogames);
    allGames.length? res.status(200).send(allGames.slice(0,15)) : res.status(400).send('Not name found.');    
}
});

router.post('/videogames', async (req, res) => {
    try {
    const {name, description, date, rating, platforms, genres, background_image} = req.body;
    await postVideogames(name, description, date, rating, platforms, genres, background_image);
    res.status(201).send(`Game created successfully. "${name}"`);
    }catch (error){
        res.status(400).send('Game cannot created.')
    }
});

module.exports = router;