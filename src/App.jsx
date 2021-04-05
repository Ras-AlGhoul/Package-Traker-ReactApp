import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./styles/styles.css";
import Header from "./components/header";
import Nav from "./components/nav";

import Home from "./pages/home";
import Results from "./pages/results";
import Packages from "./pages/packages";
import Package from "./pages/package";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />

        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/package/:id" component={Package} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </div>
    </Router>
  );
}
