import React, { useContext } from "react";
import { AddIcon } from "../../icons/add";
import { ArrowDown } from "../../icons/arrow-down";
import { Bars } from "../../icons/bars";
import { BellIcon } from "../../icons/bellIcon";

import "../style/header.css";
import WeatherInfo from "../weatherInfo/WeatherInfo";
import WeatherInfoDetailt from "../weatherInfoDetailt/WeatherInfoDetail";
import { cityData } from "../../data/cityData";
import { AdressContext } from "../../context/adressContext";

const Header = () => {
  
  const { setCity } = useContext(AdressContext);
  const handleChageCity = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="container_header">
      <div className="CH_content">
        <div className="CH_nav">

          <div>
            <Bars fill="#fff" />
          </div>
          <div className="CH_title">
            <p>MyENV</p>
            <div>
            <select
          id="city-name"
          name="city-name"
          onChange={handleChageCity}
          data-testid="city-name"
        >
          {cityData.map((city) => (
            <option
              data-testid="select-option"
              value={city.value}
              key={city.name}
            >
              {city.name}
            </option>
          ))}
        </select>
            </div>
          </div>

          <BellIcon fill="#fff" />
        </div>
      </div>
      <WeatherInfo/>
      <WeatherInfoDetailt/>
    </div>
  );
};
export default Header;
