import React from 'react';
import api from './services/api';
//import Header from './src/Header';
import Header2 from "./src/Header2.js";
import './src/App.css';
//import TinderCards from "./src/TinderCards";
//import SwipeButtons from "./src/SwipeButtons";
//import Nav from "./src/Nav";
import Upload from './src/Upload';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Buscando usuários do github
api.get("users/IuryAnadao")
      .then((response) => doSomething(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro " + err);
     });

// Enviando um Post na rota posts com os parâmetros image, title e content
// Utilizando o método HTTP POST
const response = await api.post("posts", {image, title, content });

// DELETE - Deletando um arquivo por ID
api.delete('files', { id });

// PUT - atualizando apenas o nome
const personUpdated = await api.put(`person/${person.id}`, { name: "Iury" });

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
