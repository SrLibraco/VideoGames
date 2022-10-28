require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Videogames, Genres } = require('../db.js');

const getVideogames = async () => {
    let gamesInfo = [];
    let apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}`
    try{
        for(let i = 0; i < 5; i++){
            const apiInfo = await axios.get(apiUrl);
                apiInfo.data.results.map(game => {
                gamesInfo.push({
                    id: game.id,
                    name: game.name,
                    date: game.released,
                    genres: game.genres?.map((gen) => gen.name),
                    rating: game.rating,
                    platforms: game.platforms?.map((plat) => plat.platform.name),
                    background_image: game.background_image
                    });
                });
            apiUrl = apiInfo.data.next;
        };
        return gamesInfo;
    }catch (error){
        return "Games not found";
    };
};

const getVideogamesDb = async () => {
    try{
        return await Videogames.findAll({
            include: [{
                model: Genres,
                atributes: ['name'],
                throught: {
                    atributes: []
                }
            }]
        });
    }catch (error){
        return "No games in DB."
    };
};

const totalVideogames = async () => {
    const apiGames = await getVideogames();
    const dbGames = await getVideogamesDb();
    const dbGamesApi = dbGames.concat(apiGames);
    return dbGamesApi;
};

module.exports = {
    getVideogames,
    getVideogamesDb,
    totalVideogames
};