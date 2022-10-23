const getGenres = require('./getGenres');
const { Genres } = require('../db.js');

const genresToDb = async () => {
    const genresDb = await Genres.findAll();
    if(!genresDb.length){
        const apiInfo = await getGenres();
        await Genres.bulkCreate(apiInfo);
    }
}

module.exports = genresToDb;