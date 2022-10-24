import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Videogames from './Components/Videogames/Videogames.jsx'
/* import Nav from './Components/Nav/Nav.jsx';
import Home from './Components/Home/Home.jsx';
import GameCreate from './Components/GameCreate/GameCreate.jsx';
import GameDetail from './Components/GameDetail/GameDetail.jsx'; */



function App() {
  return (
    <BrowserRouter>
    <div className= 'App'>
     
         <Switch>
           <Route exact path='/asd' component={LandingPage} />
           <Route exact path='/videogames' component={Videogames} />
         </Switch>   
     
    </div>
    </BrowserRouter>
  );
};

export default App;
