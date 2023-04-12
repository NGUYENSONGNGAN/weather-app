import React from "react";
import { AddIcon } from "../icons/add";
import { ArrowDown } from "../icons/arrow-down";
import { Bars } from "../icons/bars";
import { BellIcon } from "../icons/bellIcon";
import { Cloud } from "../icons/cloud";
import { Temperature } from "../icons/temperature";
import { Water } from "../icons/water";
import "../style/header.css";

const Header = () => {
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
              <span>Current Location</span>
              <div style={{ marginLeft: "5px" }}>
                <ArrowDown fill="#fff" />
              </div>
            </div>
          </div>

          <BellIcon fill="#fff" />
        </div>
      </div>
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
    </div>
  );
};
export default Header;
