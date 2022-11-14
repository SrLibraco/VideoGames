import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetails } from "../../Redux/Actions/Actions";
import { Link } from "react-router-dom";
import elVideo from '../../Archives/BackGround.mp4'
import image from '../../Archives/joystick.png'
import './GameDetail.css'

export default function Detail() {
    const dispatch = useDispatch();
    let gameDetails = useSelector((state) => state.gamesDetail);
    const { id } = useParams();


    useEffect(() => {
        dispatch(getGameDetails(id))
    }, [dispatch]);
    

    var regex = /(<([^>]+)>)/gi;

    return(      
        <div className="titulin">
            <video src={elVideo} autoPlay={true} muted={true} loop={true}></video>
                <div>
                    {
                        gameDetails.length > 0 
                        ?<div>                    
                    <h1 className="name">{gameDetails[0].name}</h1>
                    <div className="detail">
                        <div >
                            <p>Rating: {gameDetails[0].rating}</p>
                            <p>{gameDetails[0].genres?.map(gen => (gen.name ? gen.name : gen)).join(' | ')}</p>
                            <div className="imagen">
                            <img className="imgD" src={gameDetails[0].background_image ? gameDetails[0].background_image : image} alt={gameDetails[0].name}/>
                            </div>
                            <p>{gameDetails[0].date}</p>
                            <div>{gameDetails[0].description?.replace(regex, '').replace('&#39', '')}</div>
                            <div className="plat">{gameDetails[0].platforms?.join(' | ')}</div>
                        
                            <Link  to='/videogames'><button className='btnBack'>Back</button></Link>
                        </div>
                        </div> 
                    </div>: 
                    <h1>Loading...</h1>
                    }
                    </div>
                    
                    
        </div> 
    )
}