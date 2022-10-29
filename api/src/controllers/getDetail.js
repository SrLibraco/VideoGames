require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Videogames, Genres } = require('../db')

const getDetail = async (id) => {
    try{
    const apiInfo = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
    const idGame = await apiInfo.data
    const gameDetail = {
            name: idGame.name,
            description: idGame.description,
            date: idGame.released,
            rating: idGame.rating,
            genres: idGame.genres?.map((gen) => gen.name),
            platforms: idGame.platforms?.map((plat) => plat.platform.name),
            background_image: idGame.background_image
    };
    return gameDetail;
    }catch (error){
        return "Invalid ID"
    }   
};

const getDbDetail = async (id) => {
    try{
        return await Videogames.findByPk(id, {
            include: [{
                model: Genres,
                atributes: ['name'],
                throught: {
                    attributes: []
                }
            }]
        });
    } catch (error) {
        return "Invalid ID";
    };
};

const dbApiDetail = async (id) => {
    const idDb = id.includes('-');
    if(idDb) {
        const videogameDb = await getDbDetail(id);
        return videogameDb
    }else{
        const videogameApi = await getDetail(id);
        return videogameApi;
    }
}

module.exports = {
    getDetail,
    getDbDetail,
    dbApiDetail
};