
import React, { Component } from "react";
import { render } from "react-dom";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import FakeWeather from "../data/Fakeweather.json"
 class WeatherItem extends React.Component {


render(){
  return(
     <div className="todayweather">
            <div>
              <p>{this.props.hoursArray[0]}</p>
              <img src={mostlycloudy} />
              <p>{this.props.tempArray[0]-273}&deg;C</p>
            </div>
            <div>
              <p>{this.props.hoursArray[1]}</p>
              <img src={mostlycloudy} />
              <p>{this.props.temArray[1]-273}&deg;C</p>
            </div>
            <div>
              <p>{this.props.hoursArray[2]} </p>
              <img src={clear} />
              <p>{this.props.temArray[2]-273}&deg;C</p>
            </div>
            <div>
              <p>{this.props.hoursArray[3]} </p>
              <img src={clear} />
              <p>{this.props.temArray[3]-273}&deg;C</p>
            </div>
            <div>
              <p>{this.props.hoursArray[4]} </p>
              <img src={clear} />
              <p>{this.props.temArray[4]-273}&deg;C</p>
            </div>
            <div>
              <p>{this.props.hoursArray[5]} </p>
              <img src={clear} />
              <p>{this.props.temArray[5]-273}&deg;C</p>
            </div>
            <div>
              <p>{this.props.hoursArray[6]}</p>
              <img src={mostlycloudy} />
              <p>{this.props.temArray[6]}&deg;C</p>
            </div>
          </div>
  )
}
}
export default WeatherItem;