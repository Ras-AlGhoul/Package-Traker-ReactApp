import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./styles/styles.css";
import Header from "./components/header";
import Nav from "./components/nav";
import SearchBar from "./components/searchBar";
import Home from "./pages/home";
import Results from "./pages/results";
import Packages from "./pages/packages";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </div>
    </Router>
  );
}
