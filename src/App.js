import React from "react";
import { Switch, Route } from "react-router-dom";
import StartupPage from "./pages/StartupPage";

function App() {
  return (
    <Switch>
      <Route exact path="/startup">
     <StartupPage/>
      </Route>
    </Switch>
  );
}
export default App;


