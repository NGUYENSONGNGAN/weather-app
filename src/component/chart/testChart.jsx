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
              labels: [
                new Date("August 19, 2023"),
                new Date("August 20, 2023"),
                new Date("August 21, 2023"),

                new Date("August 22, 2023"),
                new Date("August 23, 2023"),
              ],
              /* labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ], */
              datasets: [
                {
                  label: "wwikisale",
                  data: [65, 59, 80, 81, 56, 55, 40],
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
                      // Indicates the type of annotation
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
          />
        </div>
      </div>
    </>
  );
};
export default Charttest;
