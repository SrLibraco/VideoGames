import axios from 'axios';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GAME_BY_ID = 'GAME_BY_ID';
export const GAME_BY_NAME = 'GAME_BY_NAME';
export const CREATE_GAME = 'CREATE_GAME';
export const SHOW_CREATED_GAMES = 'SHOW_CREATED_GAMES';
export const GET_GENRES = 'GET_GENRES';
export const ORDER_BY_LETTER = 'ORDER_BY_LETTER';
export const ORDER_BY_RATING = 'ORDER_BY_RATING';
export const FILTER_GENRE = 'FILTER_GENRE';

export function getVideogames() {
    return async function (dispatch) {
        const videogames = await axios.get('http://localhost:3001/videogames');
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: videogames.data
        });
    };
};

export function getGameDetails(id) {
    return async function (dispatch){
        const gameDetail = await axios.get(`http://localhost:3001/videogame/${id}`);
        return dispatch({
            type: GAME_BY_ID,
            payload: gameDetail.data
        });
    };
};

export function getGameName(name) {
    return async function (dispatch){
        const gameNames = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        return dispatch({
            type: GAME_BY_NAME,
            payload: gameNames.data
        });
    };
};

export function createGame(videogame) {
    return async function (dispatch){
        const gameCreated = await axios.get('http://localhost:3001/videogames', videogame);
        return dispatch({
            type: CREATE_GAME,
            payload: gameCreated.payload
        });
    };
};

export function getGenres() {
    return async function (dispatch) {
        const genres = await axios.get('http://localhost:3001/genres');
        return dispatch({
            type: GET_GENRES,
            payload: genres.data
        });
    };
};

export function filterByGenre(genre){
    return{
        type: FILTER_GENRE,
        payload: genre
    };
};