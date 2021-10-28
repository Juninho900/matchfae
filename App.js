import React from 'react';
import Header from './src/Header';
import Header2 from './src/Header2.js';
import './src/css/App.css';
import TinderCards from './src/TinderCards';
import SwipeButtons from './src/SwipeButtons';
import Nav from './src/Nav';
import Upload from './src/Upload';
import Login from './src/Login';
import Loading from './src/Loading';
import Register from './src/Register';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/loading">
            <Loading />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/tinderCards">
            <Header />
            <TinderCards />
            <Nav />
          </Route>
          <Route path="/menu">
            <Header />
            <h1>Menu</h1>
            <Nav />
          </Route>
          <Route path="/search">
            <Header />
            <h1>Busca</h1>
            <Nav />
          </Route>
          <Route path="/info">
            <Header />
            <h1>Info</h1>
            <Nav />
          </Route>
        </Switch>
        <Route path="/event">
            <Header />
            <h1>Evento</h1>
            <Nav />
          </Route>
      </Router>
    </div>

  );
}

export default App;
