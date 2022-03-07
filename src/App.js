import React from "react";
import { Switch, Route } from "react-router-dom";
import StartupPage from "./pages/StartupPage";
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss'
import './App.css'
import Signpage from "./components/SIGNPAGE/Signpage";
import Home from "./pages/Home";
import PrivateRouter from "./components/PrivateRouter";
import PublicRouter from "./components/PublicRouter";
import Register from "./components/SIGNPAGE/Register";
function App() {
  return (
    <Switch>

       <Route exact path="/">
      <StartupPage/>
      </Route>

      <PublicRouter exact path="/signin">
      <Signpage/>
      </PublicRouter>

      <PrivateRouter path="/home">
      <Home/>
      </PrivateRouter>

      <Route path="/Register">
        <Register/>
      </Route> 
    </Switch>
  )
}

export default App;


