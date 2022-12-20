import React, { Component } from "react";
import "./App.css";
// import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";
// import clear from "../src/img/weather-icons/clear.svg";
import Search from "./components/Search"

import Currentweather from "./components/currentweather";
import Weathernow from "./components/weathernow";
class App extends Component {

  render() {
    return (
      <div className="app">
<Search/>
<Weathernow/>
<Currentweather/>
       </div>
    );
  }
}

export default App;