import React from "react";
import Navegador from "./components/layouts/nav_bar/Nav_bar";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import ImpopularNine from "./components/pages/ImpopularNine/ImpopularNine";
import MostPopular from "./components/pages/MostPopular/MostPopular";
import Login from "./components/pages/Login/Login";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navegador />
        <div id="contenedorDeLista">
          <Switch>
            <Route path="/Home" exact>
              <Home />
            </Route>
            <Route path="/Categorys" exact></Route>
            <Route path="/MostPopular" exact>
              <MostPopular />
            </Route>
            <Route path="/Impopular" exact>
              <ImpopularNine />
            </Route>
            <Route path="/Login" exact>
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
