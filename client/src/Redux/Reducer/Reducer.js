import { GAME_BY_ID, GET_VIDEOGAMES } from "../Actions/Actions.js";

const initialState = {
    videogames: [],
    gamesDetail: [],
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
            }
            default:
                return {
                    ...state
                };
    };
};

export default reducer;