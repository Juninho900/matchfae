import React from 'react';
import './src/css/App.css';
import Header from './src/Header';
import Header2 from './src/Header2.js';
import TinderCards from './src/TinderCards';
import SwipeButtons from './src/SwipeButtons';
import Nav from './src/Nav';
import Upload from './src/Upload';
import Login from './src/Login';
import Loading from './src/Loading';
import Register from './src/Register';
import Menu from './src/Menu';
import Search from './src/Search';
import Exit from './src/Exit';
import Infomation from './src/Infomation';
import NewEvent from './src/NewEvent';
import EventList from './src/EventList';
import EventDesc from './src/EventDesc';

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
            <Menu />
          </Route>
          <Route path="/search">
            <Header />
            <Search />
          </Route>
          <Route path="/info">
            <Header />
              <Infomation />
          </Route>
          <Route path="/event">
            <Header />
            <EventList />
            <Nav />
          </Route>
          <Route path="/exit">
            <Exit />
          </Route>
          <Route path="/newEvent">
            <Header />
            <NewEvent />
          </Route>
          <Route path="/eventDesc">
            <Header />
            <EventDesc />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
