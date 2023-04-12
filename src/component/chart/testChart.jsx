import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import moment from "moment/moment";

Chart.register(CategoryScale);
let DATE_START = new Date("August 19, 2023 05:00");
const time = moment(DATE_START).format("LT");
console.log(time);
let dataNew = [];
for (var i = 0; i < 4320; i++) {
  let y = Math.sin((i * Math.PI) / 720);
  const newdate = DATE_START.setMinutes(DATE_START.getMinutes() + 1);
  const myDate = new Date(newdate);
  dataNew.push({
    time: moment(myDate).format("LT"),
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
        <div
          className="box"
          style={{
            width: "5000px",
          }}
        >
          <Line
            width={5000}
            height={280}
            data={{
              labels: lableArray,
              datasets: [
                {
                  data: pointArray,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                  tension: 0.2,
                  pointRadius: 0,
                  fill: true,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                x: {
                  // type: "time",
                  //min: "August 18, 2023 00:00",
                },
              },
              legend: {
                labels: {
                  fontSize: 50,
                },
              },
            }}
          />
        </div>
        {/* <div
          className="box"
          style={{
            width: "5000px",
          }}
        >
          <Line
            width={5000}
            height={280}
            data={{
              labels: lableArray,
              datasets: [
                {
                  data: pointArray,
                },
              ],
            }}
            options={{
              scales: {
                x: {
                  min: DATE_START,
                },
              },
            }}
          />
        </div> */}
      </div>
    </>
  );
};
export default Charttest;
