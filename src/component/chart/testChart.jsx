import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import MoonSVG from "./moonSVG";
import SunSVG from "./sunSVG";
import { HEIGHT_CHART, WIDTH_CANVAS } from "../../data/globalConstance";

Chart.register(CategoryScale);
const Charttest = () => {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
  const dataNew = [];
  var endAngle = 4320;
  for (var i = 0; i < endAngle; i++) {
    let y = Math.sin((i * Math.PI) / 720);
    dataNew.push({ time: i, valueSunMon: y });
  }

  const lableArray = dataNew.reduce((newArray, current) => {
    if (current.valueSunMon > 0) {
      newArray.push(current.valueSunMon * 3000);
    }
    if (current.valueSunMon < 0) {
      newArray.push(current.valueSunMon * 0);
    }
    return newArray;
  }, []);
  const pointArray = dataNew.reduce((newArray, current) => {
    newArray.push(current.time);
    return newArray;
  }, []);
  return (
    <>
      <div
        className="cw-WrapCanvas"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          //overflow: "auto",
          overflowX: "scroll",
          position: "relative",
        }}
      >
        <Line
          width={1500}
          height={280}
          data={{
            labels: pointArray,
            datasets: [
              {
                label: "# of votes",
                data: lableArray,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
                tension: 0.2,
                pointRadius: 0,
                options: {
                  responsive: false,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      stacked: true,
                    },
                  },
                  plugins: {
                    tooltip: {
                      displayColors: false,
                    },
                  },
                },
              },
            ],
          }}
        />
      </div>
    </>
  );
};
export default Charttest;
