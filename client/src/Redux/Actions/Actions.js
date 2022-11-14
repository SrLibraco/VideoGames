import axios from 'axios';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GAME_BY_ID = 'GAME_BY_ID';
export const GAME_BY_NAME = 'GAME_BY_NAME';
export const CREATE_GAME = 'CREATE_GAME';
export const GET_GENRES = 'GET_GENRES';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_RATING = 'ORDER_BY_RATING';
export const FILTER_GENRE = 'FILTER_GENRE';
export const FILTER_CREATED = 'FILTER_CREATED';

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
        try{
        const gameNames = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        return dispatch({
            type: GAME_BY_NAME,
            payload: gameNames.data
        });
    }catch(error){
        alert('No games found')
    }
    };
};

export function createGame(videogame) {
    return async function (dispatch){
        try{
        const gameCreated = await axios.post('http://localhost:3001/videogames', videogame);
        return dispatch({
            type: CREATE_GAME,
            payload: gameCreated.payload,
            alert: alert('Game has been created')
        });
    } catch (error){
        alert('Name already exist');
    }
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

export function orderByName(orderName){
    return{
        type: ORDER_BY_NAME,
        payload: orderName
    };
};

export function orderByRating(rating){
    return{
        type: ORDER_BY_RATING,
        payload: rating
    };
};

export function filterByCreated(created){
    return{
        type: FILTER_CREATED,
        payload: created
    };
};