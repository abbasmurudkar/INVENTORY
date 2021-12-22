import React from "react";
import { Switch, Route } from "react-router-dom";
import StartupPage from "./pages/StartupPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
     <StartupPage/>
      </Route>
    </Switch>
  );
}
export default App;


