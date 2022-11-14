import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Videogames.jsx'
import GameDetail from './Components/GameDetail/GameDetail.jsx';
import VideogamesCreation from './Components/GameCreate/GameCreate';


function App() {
  return (
    <BrowserRouter>
    <div>
     
         <Switch>
           <Route exact path='/' component={LandingPage} />
           <Route exact path='/videogames' component={Home} />
           <Route exact path='/videogame' component={VideogamesCreation} />
           <Route exact path='/videogame/:id' component={GameDetail} />
         </Switch>   
     
    </div>
    </BrowserRouter>
  );
};

export default App;
