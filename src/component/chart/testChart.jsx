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
import annotationPlugin from "chartjs-plugin-annotation";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  Legend,
  annotationPlugin
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
const Charttest = () => {
  //var ctx = document.getElementById("myChart").getContext("2d");
  /* var chart = new Chart(ctx, {
    type: "line",
    data: {
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
      ],
    },
    options: {
      scales: {
        x: {
          type: "time",
          min: DATE_MIN,
        },
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        annotation: {
          annotations: {
            box1: {
              type: "box",
              xMin: DATE_MIN,
              xMax: new Date("August 19, 2023 06:00"),
              yMin: 50,
              yMax: 70,
              backgroundColor: "rgba(255, 99, 132, 0.25)",
            },
          },
        },
      },
    },
  }); */
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
          {/* <Line
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
              ],
            }}
            options={{
              scales: {
                x: {
                  type: "time",
                  min: DATE_MIN,
                },
                y: {
                  beginAtZero: true,
                },
              },
              plugins: {
                annotation: {
                  annotations: {
                    box1: {
                      type: "box",
                      xMin: DATE_MIN,
                      xMax: new Date("August 19, 2023 06:00"),
                      yMin: 50,
                      yMax: 70,
                      backgroundColor: "rgba(255, 99, 132, 0.25)",
                    },
                  },
                },
              },
            }}
          /> */}
          <svg height={"auto"} width={5000}>
            <g>
              <circle
                id="sun"
                fill="#fcdb33"
                r={15}
                style={{
                  display: "block",
                  transform: "translate(300,500})",
                }}
              />
            </g>
            <g>
              <circle
                id="sun"
                fill="#fcdb33"
                r={15}
                style={{
                  display: "block",
                  transform: "translate(300,500})",
                }}
              />
            </g>
          </svg>
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
};
export default Charttest;
