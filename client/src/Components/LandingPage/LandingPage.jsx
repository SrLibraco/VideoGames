import { Link } from "react-router-dom";

export default function LandingPage() {
    return(
       
        <div>
            <h1>Lo Jueguito</h1>
            <Link to= '/videogames'>
                <button>To los Juegos..</button>
            </Link>
        </div>
        
    )
};