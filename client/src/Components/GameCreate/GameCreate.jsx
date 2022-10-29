import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame, getGenres, getVideogames } from "../../Redux/Actions/Actions";
import { Link, useHistory } from 'react-router-dom';

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
            [e.target.value] : e.target.value
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
    };

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
};