import { GAME_BY_ID, GAME_BY_NAME, GET_VIDEOGAMES } from "../Actions/Actions.js";

const initialState = {
    allVideogames: [],
    videogames: [],
    gamesDetail: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
            };
        case GAME_BY_ID:
            return{
                ...state,
                gamesDetail: action.payload
            };
        case GAME_BY_NAME:
            return{
                ...state,
                videogames: action.payload
            }

            default:
                return {
                    ...state
                };
    };
};

export default reducer;