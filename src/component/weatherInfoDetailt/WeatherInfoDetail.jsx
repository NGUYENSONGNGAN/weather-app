import React from "react";
import { AddIcon } from "../../icons/add";


const WeatherInfoDetailt = () => {
  return (
      <div className="CH_Add">
        <div className="CH_Item">
          <div className="CHI_name">PSI</div>
          <div className="number numberColor">23</div>
          <div className="status">Good</div>
        </div>
        <div className="CH_Item">
          <div className="CHI_name">RAIN</div>
          <div className="number ">0</div>
          <div className="status">mm</div>
        </div>
        <div className="CH_Item">
          <div className="CHI_name">DENGUE</div>
          <div className="cirle"></div>
        </div>
        <div className="CH_Item">
          <div className="AddIcon">
            <AddIcon fill="#0f0f0f" />
          </div>
          <div className="CHI_name ADDname">Add</div>
        </div>
      </div>
  );
};
export default WeatherInfoDetailt;
