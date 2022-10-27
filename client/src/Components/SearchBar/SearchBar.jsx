import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGameName } from "../../Redux/Actions/Actions";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [game, setGame] = useState('');

    function handleChange(e) {
        e.preventDefault();
        setGame(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        if(game.length > 1) {
            dispatch(getGameName(game))
            setGame('');
        } else {
            alert('No search conditions.');
        };
    };

    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div>                    
                    <input
                        type='text'
                        id='name'
                        value={game}
                        placeholder='Search Videogame...'
                        onChange={e => handleChange(e)}
                    />
                    <button type='submit'>Search</button>
                </div>
            </form>
        </div>
    )
};