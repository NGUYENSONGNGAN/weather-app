import React, { useContext, useEffect } from "react";
import { Cloud } from "../../icons/cloud";
import { Temperature } from "../../icons/temperature";
import { Water } from "../../icons/water";
import "WeatherInfo.css";
import { AdressContext } from "../../context/adressContext";
import {axios} from "axios"
const WeatherInfo = () => {
    const { city } = useContext(AdressContext);
  //const { setWeatherData, weatherData } = useContext(WeatherContext);
  useEffect(() => {
    axios.get()
    .then((res) => {
     // setWeatherData(res.data);
    });
  }, [city]);
  return (
    
      
      <div className="CH_Detail">
        <Cloud fill="#fff" />

        <div className="CH_detailContent">
          <p>Cloudy</p>
          <div className="CH_heatAndHumidity">
            <div className="CHD_heatHumidity">
              <Temperature fill="#fff" />

              <p>29°C</p>
            </div>
            <div className="CHD_heatHumidity">
              <Water fill="#fff" />

              <p>27%</p>
            </div>
          </div>
        </div>
      </div>
      

  );
};
export default WeatherInfo;
