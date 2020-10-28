import React from "react";

//Packages - Dependencies
import {Route, Switch} from "react-router-dom";

//Components
import Nav from './components/nav/Nav.js';

//CSS
import './App.css';
import 'tachyons';

function App() {
  return (
    <>
      <Nav />

      <Switch>
          <Route path={'/'} exact />
      </Switch>

    </>
  );
}

export default App;
