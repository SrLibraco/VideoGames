require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');

const getDetail = async (id) => {
    try{
    const apiInfo = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
    const idGame = await apiInfo.data
    const gameDetail = {
            name: idGame.name,
            description: idGame.description,
            date: idGame.release,
            rating: idGame.rating,
            genre: idGame.genres?.map((gen) => gen.name),
            platforms: idGame.platforms?.map((plat) => plat.platform.name),
            image: idGame.background_image
    };
    return gameDetail;
    }catch (error){
        return "Invalid ID"
    }
    
};

module.exports = getDetail;