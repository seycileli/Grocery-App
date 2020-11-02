import React from "react";

//Packages - Dependencies
import {Route, Switch} from "react-router-dom";

//Components
import Nav from './components/nav/Nav.js';
import Home from "./components/pages/home/Home";

//CSS
import './App.css';
import 'tachyons';

function App() {
  return (
    <>
      <Nav/>

      <Switch>
          <Home />
          <Route path={'/'} exact components={Home}/>
      </Switch>

    </>
  );
}

export default App;
