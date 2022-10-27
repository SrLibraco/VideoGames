import { CREATE_GAME, FILTER_GENRE, GAME_BY_ID, GAME_BY_NAME, GET_GENRES, GET_VIDEOGAMES } from "../Actions/Actions.js";

const initialState = {
    allVideogames: [],
    videogames: [],
    gamesDetail: [],
    allGenres: [],
    filter: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
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
            };
            case GET_GENRES:
                return{
                    ...state,
                    allGenres: action.payload
                };
                case CREATE_GAME:
                    return{
                        ...state,
                    };
        case FILTER_GENRE:
            const fullVideogames = state.allVideogames;
            const genreFilter = action.payload === "Genres" ? fullVideogames : fullVideogames.filter(e => e.genres?.includes(action.payload));
            return{
                ...state,
                videogames: genreFilter
            }
            
        default:
            return {
                ...state
            };
    };
};

export default reducer;