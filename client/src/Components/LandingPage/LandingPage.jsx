import { Link } from "react-router-dom";
import elVideo from '../../Archives/BackGround.mp4'
import './LandingPage.css';

export default function LandingPage() {

    return(
       
        <div className="VideoBack">
            <video src={elVideo} autoPlay='true' muted='true' loop='true'></video>
            <h1>BBG VideoGames App</h1>
            <Link to= '/videogames'>
                <button className="btnGames">Go To Play...</button>
            </Link>
        </div>
        
    )
};