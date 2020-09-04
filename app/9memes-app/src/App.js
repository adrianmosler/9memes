import React from "react";
import Navegador from "./components/layouts/nav_bar/BarraNavegacion";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Principal from "./components/pages/Principal";
import Home from "./components/pages/Home";
import ListaMeme from "./components/pages/ListaMeme";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navegador />
        <div id="contenedorDeLista">
          <Switch>
            <Route exact path="/Home" component={Home}></Route>
            <Route path="/Principal" component={Principal}></Route>
            <Route path="/Lista" component={ListaMeme}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
