import React from "react";
import './Card.css';

export default function Card ({ name, image, genre, id }) {
    return (
        <div>
            <div>
                <h3>{name}</h3>
            </div>
            <img src={image} alt= 'img not found' />
            <div>
                <p><h5>{genre}</h5></p>
            </div>
        </div>
    )
}