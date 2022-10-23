const { Videogames, Genres } = require('../db.js');

const postVideogames = async (name, description, date, rating, platform, genre, image) => {
    const videogame = await Videogames.create({
        name, 
        description, 
        date, 
        rating, 
        platform,
        genre,
        image
    });
    const relation = await Genres.findAll({
        where: {
            name: genre
        }
    })
    await videogame.addGenres(relation)
    return videogame;
};

module.exports = postVideogames;