import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetails } from "../../Redux/Actions/Actions";
import { Link } from "react-router-dom";

export default function Detail() {
    const dispatch = useDispatch();
    let gameDetails = useSelector((state) => state.gamesDetail);
    const { id } = useParams();


    useEffect(() => {
        dispatch(getGameDetails(id))
    }, [dispatch, id]);
    

    var regex = /(<([^>]+)>)/gi;

    return(
        <div> 
            <div>
                <div>
                    <div>
                        <h1>{gameDetails.name}</h1>
                        <div>
                            <p>{gameDetails.rating}</p>
                            <p>{gameDetails.genres?.map(gen => (gen.name ? gen.name : gen)).join(' | ')}</p>
                <div><img src={gameDetails.background_image ? gameDetails.background_image : "No image"} alt={gameDetails.name} width='100%' height='auto'/></div>
                            <p>{gameDetails.released}</p>
                            <div>{gameDetails.platforms?.join(', ')}</div>
                            <div>{gameDetails.description?.replace(regex, '').replace('&#39', '')}</div>
                        </div>
                        <Link to='/videogames'>
                            <button>Back</button>
                         </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}