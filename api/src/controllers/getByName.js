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

/* const getByName = async (name) => {
    try {
    losKinse = await axios.get(`https://api.rawg.io/api/games?search=${name}?key=${API_KEY}$page_size=15`);
    const theNames = losKinse.data.map((games) => {
            return {
                id: games.id,
                name: games.name,
                date: games.released,
                genres: games.genres?.map((gen) => gen.name),
                rating: games.rating,
                platforms: games.platforms?.map((plat) => plat.platform.name),
                image: games.background_image
            };
            
        });  const filteredName = theNames.filter(fil => fil.name.toLowerCase().includes(name.toLowerCase()));  
    return filteredName;
    }catch (error){
        return "Invalid name."
    }
}; */

module.exports = getByName;