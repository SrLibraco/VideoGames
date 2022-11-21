import { CLEAN, CREATE_GAME, FILTER_CREATED, FILTER_GENRE, GAME_BY_ID, GAME_BY_NAME, GET_GENRES, GET_VIDEOGAMES, ORDER_BY_NAME, ORDER_BY_RATING } from "../Actions/Actions.js";

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
            };
        case ORDER_BY_NAME:
            let orderGame = action.payload === "asc" || action.payload === "alpha" 
            ? state.videogames.sort((a,b) => {
                if(a.name.toUpperCase() > b.name.toUpperCase()){
                    return 1;
                }
                if(a.name.toUpperCase() < b.name.toUpperCase()){
                    return -1;
                }
                return 0
            }): state.videogames.sort((a,b) => {
                if(a.name.toUpperCase() > b.name.toUpperCase()){
                    return -1;
                }
                if(a.name.toUpperCase() < b.name.toUpperCase()){
                    return 1;
                }
                return 0;
            })
            return{
                ...state,
                videogames: orderGame
            };
        case ORDER_BY_RATING:
            let orderRating = action.payload === "Hight" ? state.videogames.sort((a,b) => {
                if(a.rating > b.rating){
                    return -1;
                }
                if(a.rating < b.rating){
                    return 1;
                }
                return 0;
            }) : state.videogames.sort((a,b) => {
                if(a.rating > b.rating){
                    return 1;
                }
                if(a.rating < b.rating){
                    return -1;
                }
                return 0;
            })
            return{
                ...state,
                videogames: orderRating
            };
        case FILTER_CREATED:
            const allCreated = state.allVideogames;
            const filterCreated = action.payload === "Created" ? allCreated.filter(game => game.createInDB) : allCreated.filter(game => !game.createInDB)
            return{
                ...state,
                videogames: action.payload === "Games" ? state.allVideogames : filterCreated
            };
        case CLEAN:
            return{
                ... state,
                gamesDetail: []
            };
        default:
            return {
                ...state
            };
    };
};

export default reducer;