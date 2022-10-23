require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');

const getByName = async (name) => {
    const searchName = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
    try {
        const theGames = await searchName.data.results.map((game) => {
            return{
                id: game.id,
                name: game.name,
                date: game.released,
                genres: game.genres?.map((gen) => gen.name),
                rating: game.rating,
                platform: game.platforms?.map((plat) => plat.platform.name),
                image: game.background_image
            };
        });
        return theGames;
    }catch (error){
        return "No names found.";
    };
};

module.exports = getByName;