import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./chart.css";
import {
  convertScrollIconMoonSun,
  convertScrollToTime,
  dataBackGround,
  dataDefaultTime,
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
import moment from "moment";
ChartJs.register(CategoryScale, LinearScale, PointElement, TimeScale, Legend);

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
      chartSVGEl.scrollLeft / (chartSVGEl.scrollWidth - 457 * 2);
    if (scrollPercentage > 1) {
      scrollPercentage = 1;
    }
    let resultMoonSun = convertScrollIconMoonSun(scrollPercentage);

    document.querySelector(
      ".chart__Circle"
    ).style.transform = `translateY(${resultMoonSun.next}px)`;
    document.querySelector(".chart__Circle").style.backgroundColor =
      resultMoonSun.moonSun === "sun" ? "rgb(236, 166, 15)" : "black";
    document.querySelector(".chart__time").innerText = formatTime(
      convertScrollToTime(scrollPercentage)
    );
  };
  const backgroundChartArea = {};
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
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: "rgb(236, 166, 15)",
                    callback: (value, index, values) => {
                      const d = moment(value);
                      const hourTime = d.hour();
                      const minuteTime = d.minute();
                      return (hourTime === 7 || hourTime === 19) &&
                        minuteTime === 0
                        ? d.format("LT")
                        : null;
                    },
                  },
                },
                y: {
                  beginAtZero: true,
                  ticks: {
                    display: false,
                  },
                  grid: {
                    display: false,
                  },
                },
              },
              plugins: [
                {
                  id: "backgroundChartArea",
                  beforeDatasetsDraw: (chart, args, options) => {
                    console.log(chart);
                    /* const { ctx } = chart;
                    ctx.save();
                    ctx.globalCompositeOperation = "destination-over";
                    ctx.fillStyle = options.color;
                    ctx.fillRect(0, 0, chart.width, chart.height);
                    ctx.restore(); */
                  },
                },
              ],
            }}
          />
        </div>

        {/* {dataBackGround?.map((index) => {
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
        })} */}
        {/* {dataDefaultTime?.map((index) => {
          return (
            <div
              key={index.id}
              className="chart__timeDefault"
              style={{ left: index.left }}
            >
              {index.time}
            </div>
          );
        })}

        <div className="chart__footerChart"></div> */}
      </div>

      <div className="chart__time"></div>

      <div className="chart__line"></div>
      <div className="chart__Circle"></div>
      {/* <div className="char_title">
        <span>Tide</span>
        <span> • </span>
        <span>Sunrise & Sunset</span>
      </div> */}
    </div>
  );
};
export default ChartDetail;
