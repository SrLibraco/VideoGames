import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../../Redux/Actions/Actions';
import { Link } from 'react-router-dom';

export default function Home (){
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videogames);

    useEffect(() => {
        dispatch(getVideogames())
    },[])

    return(
        <div>
            <h1>Juegos Para Todos</h1>
            <div>
                <ul>
                    {videogames.length ? (videogames.map(videogame => {
                        return <Link to={`/videogames/${videogame.id}`}><li key={videogame.id}>{videogame.name}</li></Link>
                    })) : (
                        <h1>No hay</h1>
                    )}
                </ul>
            </div>
        </div>
    )
};