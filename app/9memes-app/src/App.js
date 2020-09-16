import React from "react";
import Navegador from "./components/layouts/nav_bar/BarraNavegacion";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Principal from "./components/pages/Principal";
import ListaMeme from "./components/pages/ListaMeme";
import FreshNine from "./components/pages/FreshNine/FreshNine";
import ImpopularNine from "./components/pages/ImpopularNine/ImpopularNine";
import Login from "./components/Login/Login";
// import { useGifs } from ".././../hooks/useGifs";
import { useGifs } from "./hooks/useGifs";
import { UserContextProvider } from "./Context/UserContext";
import { GifsContextProvider } from "./Context/GifsContext";
/* 
class App extends React.Component { */
export default function App() {
  // const { gifs } = useGifs();
  const { user } = UserContextProvider;
  /*  constructor(props) {
    super(props);

    this.state = {
      user: {},
      token: {},
    };
  }
  render() { */
  return (
    <UserContextProvider>
      <div>
        <Navegador user={"Mi nombre usuario"} />
        <div id="contenedorDeLista">
          <GifsContextProvider>
            <Switch>
              <Route path="/All" component={Principal}></Route>
              <Route path="/FreshNine" exact>
                <FreshNine />
              </Route>
              <Route path="/UpcomingNine" component={(ListaMeme)} exact></Route>
              <Route path="/MostPopular" component={ListaMeme} exact></Route>
              <Route path="/login" component={Login} />
              <Route path="/ImpopularNine" exact>
                <ImpopularNine />
              </Route>
            </Switch>
          </GifsContextProvider>
        </div>
      </div>
    </UserContextProvider>
  );
}

// export default App;
