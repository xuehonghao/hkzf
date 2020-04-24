import React from "react";
// import logo from './logo.svg';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";

import Home from "./pages/home";
import CityList from "./pages/cityList";
import Fn404 from "./pages/fn404";
import Map from "./pages/map";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect from="/" exact to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/map" component={Map} />
          <Route path="/cityList" component={CityList} />
          <Route component={Fn404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
