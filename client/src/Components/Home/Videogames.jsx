import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterByCreated, getVideogames, orderByName, orderByRating } from '../../Redux/Actions/Actions';
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import elVideo from '../../Archives/BackGround.mp4'
import GenreSelection from '../Order/Order';
import './Videogames.css';

export default function Home (){
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.videogames);
    const allGenre = useSelector((state) => state.allGenres);
    const [order, setOrder] = useState("");
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
    };
    function handleByName(e){
        e.preventDefault()
        dispatch(orderByName(e.target.value));
        setOrder(`Order ${e.target.value}`);  
    }
    function handleByRating(e){
        e.preventDefault();
        dispatch(orderByRating(e.target.value));
        setOrder(`Order ${e.target.value}`);
    }
    function handleByCreated(e){
        e.preventDefault();
        dispatch(filterByCreated(e.target.value));
        setOrder(`Order ${e.target.value}`)
    }

    return(
        <div className='videogames'>
                <video src={elVideo} autoPlay={true} muted={true} loop={true}></video>
                <h1>BBG VideoGames App</h1>
                <Link to='/videogame'><button className='btnCreate'>Create Game!</button></Link>
            <div className='filters'>
            <div><SearchBar className='search' /></div>
            <div className='genre'><GenreSelection allGenres={allGenre} /></div>
            <div className='nameOrder'>
                    <select className ='selName' onChange={e => handleByName(e)}>
                                <option value="alpha">Name Order</option>
                                <option value="asc">Sort:  A - Z</option>
                                <option value="des">Sort:  Z - A</option>
                    </select>
            </div>
            <div className='rating'>
                    <select className='selRating' onChange={e => handleByRating(e)}>
                                <option value="Rating">Rating</option>
                                <option value="Hight">Hight Rating</option>
                                <option value="Low">Low Rating</option>
                    </select>
            </div>
            <div className='create'>
                    <select className='selCreate' onChange={e => handleByCreated(e)}>
                                <option value="Games">All Games</option>
                                <option value="api">Api Games</option>
                                <option value="Created">Created Games</option>
                    </select>
            </div>
            </div>
                    <button className='recBtn' onClick={e => {handleClick(e)}}>Reload Games.</button>
            <div className='pagination'>
                    <Pagination 
                        gamesPerPage={gamesPerPage}
                        allGames={allGames.length}
                        pagination={pagination}
                        currentPage={currentPage}
                    />
            </div>
                    <div className='cardConteiner' >
                            {currentGames?.map((game) => (
                        <Link to = {'/videogame/'+game.id}>
                        <Card 
                            name = { game.name }
                            genre = { game.genres?.map(gen => (gen.name ? gen.name : gen)).join(' | ') }
                            background_image = { game.background_image }
                            />
                        </Link>
                            ))} </div> 
                    <div className='pagination'>
                        <Pagination 
                            gamesPerPage={gamesPerPage}
                            allGames={allGames.length}
                            pagination={pagination}
                            currentPage={currentPage}
                        />           
                    </div>
                      
        </div>
    )
};