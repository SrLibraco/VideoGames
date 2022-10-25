import axios from 'axios';
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GAME_BY_ID = 'GAME_BY_ID';
export const GAME_BY_NAME = 'GAME_BY_NAME';
export const CREATE_GAME = 'CREATE_GAME';

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