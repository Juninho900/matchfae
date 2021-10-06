import React from 'react';
//import Header from './src/Header';
import Header2 from "./src/Header2.js";
import './src/App.css';
//import TinderCards from "./src/TinderCards";
//import SwipeButtons from "./src/SwipeButtons";
//import Nav from "./src/Nav";
import Upload from './src/Upload';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Upload />
      {/*<Router>*/}
        {/* <Header /> */}
        {/*<Switch>
           <Route path="/menu">
            <h1>Menu</h1>
          </Route>
          <Route path="/search">
            <h1>Busca</h1>
          </Route>
          <Route path="/info">
            <h1>Info</h1>
          </Route>
          <Route path="/event">
            <h1>Evento</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
        <Nav />
      </Router> */}
    </div>

  );
}

export default App;
