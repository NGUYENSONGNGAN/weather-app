import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  //Chart,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import Chart from "chart.js/auto";
import moment from "moment/moment";
import "chartjs-adapter-date-fns";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  Legend
);
let DATE_START = new Date("August 19, 2023 05:00");
let DATE_MIN = new Date("August 19, 2023 00:00");
const timeMin = moment(DATE_MIN).format("LLL");
let dataNew = [];
for (var i = 0; i < 4320; i++) {
  let y = Math.sin((i * Math.PI) / 720);
  const newdate = DATE_START.setMinutes(DATE_START.getMinutes() + 1);
  const myDate = new Date(newdate);
  dataNew.push({
    time: myDate,
    valueSunMon: y,
  });
}
const sunimg = new Image(15, 15);
sunimg.src = "/image/sun.svg";

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
console.log(lableArray[4319]);
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
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "#f89005",
                  borderWidth: 1,
                  tension: 0.2,
                  pointRadius: 0,
                  fill: false,
                },
                //  {
                //   data: [{x:"August 19, 2023 12:00 AM",y:1500} ,{x:"August 20, 2023 12:00 AM",y:5000}],
                //   backgroundColor: "rgba(255, 99, 132, 0.2)",
                //   borderColor: "rgba(255, 99, 132, 1)",
                //   borderWidth: 1,
                //   tension: 0.2,
                //   pointRadius: 0,
                //   fill: true,
                // },
                {},
              ],
            }}
            options={{
              maintainAspectRatio: false,
              elements: {
                point: {
                  pointStyle: sunimg,
                },
              },
              interaction: {
                mode: "index",
                intersect: false,
              },
              scales: {
                x: {
                  // type: "time",
                  // min: timeMin,
                },
              },
              legend: {
                labels: {
                  fontSize: 50,
                },
              },
            }}
          />
        </div> */}
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
                  label: "wwikisale",
                  data: pointArray,
                  tension: 0.4,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "#f89005",
                  borderWidth: 1,
                  pointRadius: 0,
                  fill: false,
                },
                {
                  data: [
                    { x: DATE_MIN, y: 500 },
                    { x: lableArray[0], y: 500 },
                    { x: lableArray[100], y: 1000 },
                    { x: lableArray[200], y: 800 },
                    { x: lableArray[300], y: 900 },
                    { x: lableArray[400], y: 1200 },
                    { x: lableArray[500], y: 1300 },
                    { x: lableArray[600], y: 800 },
                    { x: lableArray[700], y: 700 },
                    { x: lableArray[900], y: 500 },
                    { x: lableArray[1200], y: 600 },
                    { x: lableArray[1800], y: 1000 },
                    { x: lableArray[2200], y: 1100 },
                    { x: lableArray[2500], y: 1700 },
                    { x: lableArray[2800], y: 500 },
                    { x: lableArray[2900], y: 600 },
                    { x: lableArray[3400], y: 1000 },
                    { x: lableArray[3500], y: 400 },
                    { x: lableArray[3700], y: 1000 },
                    { x: lableArray[3800], y: 500 },
                    { x: lableArray[3900], y: 900 },
                    { x: lableArray[4200], y: 700 },
                    { x: lableArray[4319], y: 4000 },
                  ],
                  backgroundColor: "#45c8ec",
                  borderColor: "#45c8ec",
                  borderWidth: 1,
                  tension: 0.4,
                  pointRadius: 0,
                  fill: true,
                },
              ],
            }}
            options={{
              /* elements: {
                point: {
                  pointStyle: sunimg,
                },
              }, */
              scales: {
                x: {
                  type: "time",
                  min: DATE_MIN,
                },
                y: {
                  beginAtZero: true,
                },
              },
              /* interaction: {
                mode: "index",
                intersect: false,
              }, */
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Charttest;
