import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login.js";
import Map from "./components/Map";
import NavBar from "./components/Navbar";
import { Switch, Route, Link } from "react-router-dom";
import StatePage from "./components/StatePage";

function App() {
  return (
    <div className="App">
      {/* <LineGraph />
      <BarGraph /> */}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/NationalMap">
          <Map />
        </Route>
        <Route path="/StatePage/:abbrv">
          <StatePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
