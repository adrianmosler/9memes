import React from "react";
import Navegador from "./components/layouts/nav_bar/BarraNavegacion";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Principal from "./components/pages/Principal";
import ListaMeme from "./components/pages/ListaMeme";
import FreshNine from "./components/pages/FreshNine/FreshNine";
import ImpopularNine from "./components/pages/ImpopularNine/ImpopularNine";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navegador />
        <div id="contenedorDeLista">
          <Switch>
            <Route path="/All" component={Principal}></Route>
            <Route path="/FreshNine" exact><FreshNine/></Route>
            <Route path="/UpcomingNine" component={ListaMeme} exact></Route>
            <Route path="/MostPopular" component={ListaMeme} exact></Route>
            <Route path="/ImpopularNine" exact><ImpopularNine/></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
