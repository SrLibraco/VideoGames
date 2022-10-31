import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetails } from "../../Redux/Actions/Actions";
import { Link } from "react-router-dom";
import elVideo from '../../Archives/BackGround.mp4'
import './GameDetail.css'

export default function Detail() {
    const dispatch = useDispatch();
    let gameDetails = useSelector((state) => state.gamesDetail);
    const { id } = useParams();


    useEffect(() => {
        dispatch(getGameDetails(id))
    }, [dispatch, id]);
    

    var regex = /(<([^>]+)>)/gi;

    return(      
        <div className="titulin">
            <video src={elVideo} autoPlay={true} muted={true} loop={true}></video>
                       <h1 className="name">{gameDetails.name}</h1>
                   <div className="detail">
                        <div >
                            <p>Rating: {gameDetails.rating}</p>
                            <p>{gameDetails.genres?.map(gen => (gen.name ? gen.name : gen)).join(' | ')}</p>
                <div className="imagen"><img className="imgD" src={gameDetails.background_image ? gameDetails.background_image : "No image"} alt={gameDetails.name}/></div>
                            <p>{gameDetails.date}</p>
                            <div>{gameDetails.description?.replace(regex, '').replace('&#39', '')}</div>
                            <div className="plat">{gameDetails.platforms?.join(', ')}</div>
                        
                        <Link  to='/videogames'><button className='btnBack'>Back</button></Link>
                        </div>
                        
                    </div>
        </div> 
    )
}