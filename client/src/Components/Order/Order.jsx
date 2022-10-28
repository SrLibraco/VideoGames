import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres, filterByGenre } from "../../Redux/Actions/Actions";

function GenreSelection({allGenres}) {
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getGenres());
}, [dispatch]);



function handleGenreFilter(e){
    e.preventDefault();
    dispatch(filterByGenre(e.target.value));

};

    return(
        <div>
            <select onChange={e => handleGenreFilter(e)}>
                <option value="Genres">All Genres</option>
                {
                allGenres?.map(e => {
                    return(
                        <option key={e.id} value={e.name} >
                        {e.name}
                </option>
            );              
            })};
            </select>
        </div>
    );
};



export default GenreSelection;
