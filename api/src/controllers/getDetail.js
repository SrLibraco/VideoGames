require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Videogames, Genres } = require('../db');
const { getVideogamesDb, totalVideogames } = require('./getVideogames');

const getDetail = async (id) => {
    let videogameInfo = []
    try{
    const apiInfo = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
    const idGame = await apiInfo.data
    const gameDetail = videogameInfo.push({
            name: idGame.name,
            description: idGame.description,
            date: idGame.released,
            rating: idGame.rating,
            genres: idGame.genres?.map((gen) => gen.name),
            platforms: idGame.platforms?.map((plat) => plat.platform.name),
            background_image: idGame.background_image
    });
    return videogameInfo;
    }catch (error){
        return "Invalid ID"
    }   
};

const getDbDetail = async (id) => {
    try{
        const vgamesdb = await getVideogamesDb();
        let gamesId = await vgamesdb.filter((gam) => gam.id === id)
       
        return gamesId
        
    }catch(error){
        console.log(error);
    }
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


/*
try{
        return await Videogames.findByPk(id, {
            include: {
                model: Genres,
                attributes: ['name'],
                throught: {
                    attributes: []
                }
            }
        });
    } catch (error) {
        return "Invalid ID";
    };
*/