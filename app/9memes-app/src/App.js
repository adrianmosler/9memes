import React from "react";
import Navegador from "./components/layouts/nav_bar/BarraNavegacion";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Principal from "./components/pages/Principal";
import ListaMeme from "./components/pages/ListaMeme";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navegador />
        <div id="contenedorDeLista">
          <Switch>
            <Route path="/All" component={Principal}></Route>
            <Route path="/FreshNine" component={ListaMeme} exact></Route>
            <Route path="/UpcomingNine" component={ListaMeme} exact></Route>
            <Route path="/TopNineMonth" component={ListaMeme} exact></Route>
            <Route path="/ImpopularNine" component={ListaMeme} exact></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
