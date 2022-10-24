import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../../Redux/Actions/Actions';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';

export default function Home (){
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.videogames);
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 15;
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);
    const pagination = (pageNumber)=> {
        setCurrentPage(pageNumber);
    };
    
    useEffect(() => {
        dispatch(getVideogames());
    }, [dispatch]);

    function handleClick(e){
        e.preventDefault();
        dispatch(getVideogames());
    }


    return(
        <div>
            <h1>Juegos Para Todos</h1>
            <button onClick={e => {handleClick(e)}}>Recargar.</button>
            <Pagination
                        gamesPerPage={gamesPerPage}
                        allGames={allGames.length}
                        pagination={pagination}
                        currentPage={currentPage}
                />
                {currentGames?.map((game) => (
                    <div key={game.id} >
                        <Link to = {'/videogame/'+game.id}>
                        <Card 
                            name = { game.name }
                            image = { game.image }
                            genre = { game.genres }
                            />
                        </Link>
                    </div>
                ))}
        </div>
    )
};