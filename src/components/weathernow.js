import React from "react";
import "../App.css";
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";

class weathernow extends React.Component {
    render() {
        return(
            <div className="app">
      <main className="app__main">
            <div className="weather">
            <img src={mostlycloudy} alt="partlycloudy image" className="center" ></img>
            <p className="temp">overcast clouds</p>
                <p className="temper"><span className="temperature">Temprature</span>&nbsp;&nbsp; 10° to 11°C</p>
                <p className="tempers"><span className="humidity">Humidity</span>&nbsp;&nbsp;&nbsp; 78% &nbsp;&nbsp;&nbsp; <span className="pressure">&nbsp;&nbsp;&nbsp; Pressure</span>&nbsp;&nbsp;&nbsp;  1008.48</p>
            </div> 
            </main>
            </div>
        );
            }
        
        }

export default weathernow;