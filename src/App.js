import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";
import clear from "../src/img/weather-icons/clear.svg";


class App extends Component {

  render() {
    return (
      <div className="app">
       <header className="head">
        <input type="text" name="weather" className="city" placeholder="Type in a city name"/>
          <button className="click">FIND WEATHER</button>
       </header>
       <main className="app__main">
        <div className="weather">
        <img src={mostlycloudy} alt="partlycloudy image" className="center" ></img>
        <p className="temp">overcast clouds</p>
            <p className="temper"><span className="temperature">Temprature</span>&nbsp;&nbsp; 10° to 11°C</p>
            <p className="tempers"><span className="humidity">Humidity</span>&nbsp;&nbsp;&nbsp; 78% &nbsp;&nbsp;&nbsp; <span className="pressure">&nbsp;&nbsp;&nbsp; Pressure</span>&nbsp;&nbsp;&nbsp;  1008.48</p>
        </div> 
        </main>
        <div className="section">
        <section className="todayweather">
        <section>
                    <p>03:00 </p>
                    <img src={mostlycloudy} />
                    <p>8°C</p>
              </section>
              <section>
                    <p>06:00 </p>
                    <img src={mostlycloudy}  />
                    <p>9°C</p>
              </section>
              <section>
                    <p>09:00 </p>
                    <img src={clear}  />
                    <p>14°C</p>
              </section>
              <section>
                    <p>12:00 </p>
                    <img src={clear}  />
                    <p>17°C</p>
              </section>
              <section>
                    <p>15:00 </p>
                    <img src={clear} />
                    <p>18°C</p>
              </section>
              <section>
                    <p>18:00 </p>
                    <img src={clear}  />
                    <p>16°C</p>
              </section>
              <section>
                    <p>21:00 </p>
                    <img src={mostlycloudy}  />
                    <p>13°C</p>
              </section>
        </section>
      
        </div>
      </div>
    );
  }
}

export default App;
