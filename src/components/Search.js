import React from "react";
import "../App.css";
import clear from "../img/weather-icons/clear.svg";



class Search extends React.Component {
  

  
  render() {
    return (
      <header className="head">
      <input type="text" name="weather" className="city" placeholder="Type in a city name"/>
        <button className="click">FIND WEATHER</button>
     </header>
    );
  }
}
export default Search;
