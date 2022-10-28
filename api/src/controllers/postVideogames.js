const { Videogames, Genres } = require('../db.js');

const postVideogames = async (name, description, date, rating, platforms, genres, background_image, createInDB) => {
    const videogame = await Videogames.create({
        name, 
        description, 
        date, 
        rating, 
        platforms,
        genres,
        background_image,
        createInDB
    });
    const relation = await Genres.findAll({
        where: {
            name: genres
        }
    })
    await videogame.addGenres(relation)
    return videogame;
};

module.exports = postVideogames;