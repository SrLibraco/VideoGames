require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Genres } = require('../db.js');

const getGenres = async () => {
    const apiInfo = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const allGenres = await apiInfo.data.results.map((genre) => {
        return {
            id: genre.id,
            name: genre.name,
            image: genre.image_background
        };
    });
    return allGenres;
};

module.exports = getGenres;