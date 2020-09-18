import React from "react";
import Navegador from "./components/layouts/nav_bar/Nav_bar";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import FreshNine from "./components/pages/FreshNine/FreshNine";
import ImpopularNine from "./components/pages/ImpopularNine/ImpopularNine";
import MostPopular from "./components/pages/MostPopular/MostPopular";
import Login from './components/pages/Login/Login'



class App extends React.Component {
  render() {
    return (
      <div>
        <Navegador />
        <div id="contenedorDeLista">
          <Switch>
            <Route path="/Home" exact><FreshNine/></Route>
            <Route path="/Categorys" exact></Route>
            <Route path="/MostPopular"exact><MostPopular/></Route>
            <Route path="/Impopular" exact><ImpopularNine/></Route>
            <Route path="/Login" exact><Login/></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
