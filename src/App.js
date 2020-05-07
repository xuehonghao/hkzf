import React, { Suspense } from "react";
// import logo from './logo.svg';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.scss";

const Home = React.lazy(() => import("./pages/home"));
const CityList = React.lazy(() => import("./pages/cityList"));
const Fn404 = React.lazy(() => import("./pages/fn404"));
const Map = React.lazy(() => import("./pages/map"));
const HouseDetail = React.lazy(() => import("./components/HouseDetail"));
const Login = React.lazy(() => import("./pages/Login"));
const Rent = React.lazy(() => import("./pages/Rent"));
const RentAdd = React.lazy(() => import("./pages/Rent/Add"));
const RentSearch = React.lazy(() => import("./pages/Rent/Search"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <Switch>
            <Redirect from="/" exact to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/map" component={Map} />
            <Route path="/cityList" component={CityList} />
            <Route path="/detail/:id" component={HouseDetail} />
            <Route path="/login" component={Login} />
            <Route path="/rent" exact component={Rent} />
            <Route path="/rent/add" component={RentAdd} />
            <Route path="/rent/search" component={RentSearch} />
            <Route component={Fn404} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
