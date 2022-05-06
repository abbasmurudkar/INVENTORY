import React, { useState } from "react";
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
import { ProfileProvider } from "./context/Profile.context";
import Error from "./components/ERROR/Error";
import Dashboard from "./components/DasboardList/Dashboard";
import ShowSymbol from "./components/DasboardList/SubFiles/ShowSymbol";
function App() {
  const [Users, setUsers] = useState("")

  const OnusernameChange = (value) => {
    setUsers(value)
    console.log(value)
  }
  return (
    <ProfileProvider>
      <Switch>

        <Route exact path="/">
          <StartupPage />
        </Route>

        <PublicRouter exact path="/signin">
          <Signpage Users={Users} />
        </PublicRouter>

        <PrivateRouter path="/Dashboard">
          <Home />
        </PrivateRouter>

        <Route path="/Register">
          <Register Users={Users} OnusernameChange={OnusernameChange} />
        </Route>

        <Route path="***">
          <Error />
        </Route>
     
      </Switch>
    </ProfileProvider>

  )
}

export default App;


