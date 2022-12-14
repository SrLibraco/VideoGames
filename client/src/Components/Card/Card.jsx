import React from "react";
import image from '../../Archives/joystick.png'
import './Card.css';

export default function Card ({ name, background_image, genre, id }) {
    return (
        <div className="Cards">
            <div className="nameCard">
                <h3>{name}</h3>
            </div>
           
            <img src={background_image ? background_image : image} alt= 'img not found' />
           
            <div className="genreCard">
                <p><h5>{genre}</h5></p>
            
            </div>
            
        </div>
    )
}