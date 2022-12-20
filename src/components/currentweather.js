import React from "react";
import "../App.css";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
class currentweather extends React.Component {
    render() {
        return(
            <div className="app">
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

export default currentweather;