import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame, getGenres, getVideogames } from "../../Redux/Actions/Actions";
import { Link, useHistory } from 'react-router-dom';
import elVideo from '../../Archives/BackGround.mp4'
import './GameCreate.css';

export default function VideogamesCreation() {
    const dispatch = useDispatch();
    const history = useHistory();
    const fullGenres = useSelector(state => state.allGenres);
    const games = useSelector(state => state.videogames);
    const [input, setInput] = useState({
        name: '',
        description: '',
        date: '',
        rating: '',
        genres:[],
        platforms:[],
        background_image:''
    });

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);
    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch]);

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };
    function handleSelectGenres(e){
        setInput({
            ...input,
            genres: [...new Set([...input.genres, e.target.value])]
        });
    };
    function handleDeleteGenre(e){
        setInput({
            ...input,
            genres: input.genres.filter(gen => gen !== e)
        });
    };
    function handleSelectPlatform(e){
        setInput({
            ...input,
            platforms: [...new Set([...input.platforms, e.target.value])]
        });
    };
    function handleDeletePlatform(e){
        setInput({
            ...input,
            platforms: input.platforms.filter(plat => plat !== e)
        });
    };

    let regexRating = /[+-]?([0-9]*[.])?\b[0-5]{1,1}\b/;
    let expReg = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9]+$/;
    function handleSubmit(e){
        e.preventDefault();
        if(!input.name){
            return alert('Enter game name.');
        }else if(!expReg.test(input.name)){
            return alert('Invalid characters for Name.');
        }else if(!input.description){
            return alert('Enter description.');
        }else if(!input.date){
            return alert('Enter released date.');
        }else if(!regexRating.test(input.rating)){
            return alert('Enter a valid rating(0 to 5)');
        }else if(!input.genres.length){
            return alert('Select at least 1 genre.');
        }else if(!input.platforms.length){
            return alert('Select at least 1 platform.');
        }

    dispatch(createGame(input));
    alert('VideoGame has been Created!');
    setInput({
        name:'',
        description:'',
        date:'',
        rating:'',
        genres:[],
        platforms:[],
        background_image:''
    });
    history.push('/videogames');
}


const setArray = [];
games.map(e => e.platforms?.map(e => setArray.push(e)));
let newSet = [...new Set(setArray)];

return(
    <div>
    <div>
    <div>
    <video src={elVideo} autoPlay={true} muted={true} loop={true}></video>
        <div>
            <div>
                <h1>Create your GAME.</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className='formu'>
                        <div>
                            <label htmlFor='name'>Name: </label>
                            <input
                                className='inputName'
                                type='text'
                                value={input.name}
                                name='name'
                                required=''
                                autoComplete='off'
                                placeholder='Name'
                                onChange={e => handleChange(e)}
                            />
                            {/* {!input.name || !expReg.test(input.name) ? <h3>{'Enter a VALID name.'}</h3> : false} */}
                        </div>

                        <div>
                            <label htmlFor='date'>Released: </label>
                            <input
                                className='inputDate'
                                type='date'
                                value={input.date}
                                name='date'
                                required=''
                                autoComplete='off'
                                onChange={e => handleChange(e)}
                            />
                        </div>

                        <div>
                            <label htmlFor='rating'>Rating: </label>
                            <input
                                className='inputRate'
                                type='text'
                                value={input.rating}
                                name='rating'
                                required=''
                                autoComplete='off'
                                placeholder='Rating'
                                onChange={e => handleChange(e)}
                            />
                        </div>

                        <div>
                            <label htmlFor='background_image'>Image: </label>
                            <input
                                className='inputImage'  
                                type='text'
                                value={input.background_image}
                                name='background_image'
                                required=''
                                autoComplete='off'
                                placeholder='http://image_path.jpg'
                                onChange={e => handleChange(e)}
                            />
                        </div>

                        <div>
                            <label htmlFor='description'>Description: </label>
                            <textarea
                                className='textDesc'
                                type='text'
                                value={input.description}
                                name='description'
                                required=''
                                autoComplete='off'
                                placeholder='Description'
                                onChange={e => handleChange(e)}
                            />
                        </div>

                        <div>
                            <div>
                                <select className='selectGenre' onChange={e => handleSelectGenres(e)}>
                                    <option value='gen'>Genres</option>
                                    { fullGenres.map(e => (<option key={e.id} value={e.name}>{e.name}</option>))}
                                </select>
                            </div>

                            <div>
                                <select className='selectPlat' onChange={e => handleSelectPlatform(e)}>
                                    <option value='plat'>Platforms</option>
                                    { newSet.map(e => ( <option key={e} value={e}>{e}</option>))}
                                </select>
                            </div>
                        </div>
                        
                        <button className='btnCreation' type='submit' disabled={false}>Create</button>
                        <Link to='/videogames'><button className='btnBack'>Back</button></Link>
                        
                    </div>
                </form>
            </div>
        </div>

        <div>
            {input.genres.map(e => 
                <div key ={e}>
                    <p onClick={() => handleDeleteGenre(e)}>{e}</p>
                </div>
            )}
        </div>

        <div>
            {input.platforms.map(e =>
                <div key={e}>
                    <p onClick={() => handleDeletePlatform(e)}>{e}</p>
                </div>
                )}
        </div>
    </div>
    </div>
    </div>
);
};