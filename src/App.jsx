import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import Results from "./pages/results";
import Packages from "./pages/packages";
import Package from "./pages/package";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://my.api.mockaroo.com/orders.json?key=e49e6840"
    );

    const items = await data.json();
    setData(items);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />

        <Switch>
          <Route
            exact
            path="/packages"
            component={() => (
              <Packages username={data[0]?.user_name} data={data} />
            )}
          />
          <Route
            exact
            path="/package/:id"
            render={(props) => <Package match={props.match} data={data} />}
          />
          <Route
            exact
            path="/results/:id"
            render={(props) => <Results match={props.match} data={data} />}
          />
          <Route
            path="/"
            component={() => <Home username={data[0]?.user_name} />}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
