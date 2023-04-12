import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import moment from "moment/moment";

Chart.register(CategoryScale);
let DATE_START = new Date("August 19, 2023 05:00");
let DATE_MIN = new Date("August 19, 2023 00:00");
var list = [2,3,5]
console.log();
const timeMin = moment(DATE_MIN).format("LLL");
console.log(timeMin);
let dataNew = [];
for (var i = 0; i < 4320; i++) {
  let y = Math.sin((i * Math.PI) / 720.);
  const newdate = DATE_START.setMinutes(DATE_START.getMinutes() + 1);
  const myDate = new Date(newdate);
  dataNew.push({
    time: moment(myDate).format("LLL"),
    valueSunMon: y,
  });
}

const pointArray = dataNew.reduce((newArray, current) => {
  if (current.valueSunMon > 0) {
    newArray.push(current.valueSunMon * 3000);
  }
  if (current.valueSunMon < 0) {
    newArray.push(current.valueSunMon * 0);
  }
  return newArray;
}, []);

const lableArray = dataNew.reduce((newArray, current) => {
  newArray.push(current.time);
  return newArray;
}, []);
//console.log(dataNew);
const Charttest = () => {
  return (
    <>
      <div
        className="box"
        style={{
          width: "1000px",
          margin: "0 auto",
          overflowX: "scroll",
        }}
      >
      
      </div>
    </>
  );
};
export default Charttest;
