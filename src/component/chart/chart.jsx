import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./chart.css";
import {
  convertScrollToTime,
  dataBackGround,
  dataTide,
  DATE_MIN,
  formatTime,
  lableArray,
  pointArray,
} from "../../data/globalConstance";
import {
  CategoryScale,
  //Chart,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart as ChartJs } from "chart.js/auto";
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
  Legend
);

const ChartDetail = () => {
  useEffect(() => {
    positionSunHandler();
    document.querySelector(".chart__svg").addEventListener("scroll", (e) => {
      positionSunHandler();
    });
    return document
      .querySelector(".chart__svg")
      .removeEventListener("scroll", () => {});
  }, []);
  const positionSunHandler = () => {
    let chartSVGEl = document.querySelector(".chart__svg");
    let scrollPercentage =
      chartSVGEl.scrollLeft / (chartSVGEl.scrollWidth - 455 * 2);
    if (scrollPercentage > 1) {
      scrollPercentage = 1;
    }
    document.querySelector(".chart__time").innerText = formatTime(
      convertScrollToTime(scrollPercentage)
    );
  };
  return (
    <div className="Chart_container">
      <div className="chart__svg">
        <div className="box">
          <Line
            width={5000}
            height={280}
            data={{
              labels: lableArray,

              datasets: [
                {
                  label: "moon",
                  data: pointArray,
                  tension: 0.4,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "#f89005",
                  borderWidth: 1,
                  pointRadius: 0,
                  fill: false,
                },
                {
                  label: "tide",
                  data: dataTide,
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
              scales: {
                x: {
                  type: "time",
                  min: DATE_MIN,
                },
                y: {
                  beginAtZero: true,
                  ticks: {
                    display: false,
                  },
                },
              },
              plugins: {},
            }}
          />
        </div>

        {dataBackGround?.map((index) => {
          return (
            <div
              key={index.key}
              style={{
                position: "absolute",
                top: "5px",
                left: index.left,
                width: index.width,
                height: "250px",
                color: "black",
                background: "black",
                opacity: index.opacity,
              }}
            ></div>
          );
        })}
      </div>
      <div className="chart__time"></div>

      <div className="chart__line"></div>
    </div>
  );
};
export default ChartDetail;
