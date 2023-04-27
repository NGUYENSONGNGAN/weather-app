import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./chart.css";
import {
  convertScrollIconMoonSun,
  convertScrollToTime,
  dataTide,
  DATE_MAX,
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
  Legend,
} from "chart.js";
import { Chart as ChartJs } from "chart.js/auto";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import autocolors from "chartjs-plugin-autocolors";
import annotationPlugin from "chartjs-plugin-annotation";
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Legend,
  //autocolors,
  annotationPlugin
);
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
const plugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart, args, options) => {
    const {
      ctx,
      scales: { x, y },
    } = chart;
    console.log(y);
    /* ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore(); */
  },
};
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
      chartSVGEl.scrollLeft / (chartSVGEl.scrollWidth - 500 * 2);
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
            height={305}
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
                  max: DATE_MAX,
                  backgroundColor: "#d5cece",
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: (context, index) => {
                      const tickcolor = [];
                      if (
                        context.tick.label === "7AM" ||
                        context.tick.label === "7PM"
                      ) {
                        tickcolor.push("rgb(236, 166, 15)");
                      } else {
                        tickcolor.push("#d5cece");
                      }
                      return tickcolor;
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

              plugins: {
                autocolors: false,
                annotation: {
                  annotations: {
                    box1: {
                      type: "box",
                      xMin: DATE_MIN,
                      xMax: new Date("August 19, 2023 06:00"),
                      yMin: 0,
                      yMax: 4500,
                      backgroundColor: "rgba(90, 89, 89, 0.25)",
                      borderColor: "rgba(90, 89, 89, 0.25)",
                    },
                    box2: {
                      type: "box",
                      xMin: new Date("August 19, 2023 20:00"),
                      xMax: new Date("August 20, 2023 06:00"),
                      yMin: 0,
                      yMax: 4500,
                      backgroundColor: "rgba(90, 89, 89, 0.25)",
                      borderColor: "rgba(90, 89, 89, 0.25)",
                    },
                    box3: {
                      type: "box",
                      xMin: new Date("August 20, 2023 20:00"),
                      xMax: new Date("August 21, 2023 06:00"),
                      yMin: 0,
                      yMax: 4500,
                      backgroundColor: "rgba(90, 89, 89, 0.25)",
                      borderColor: "rgba(90, 89, 89, 0.25)",
                    },
                    box4: {
                      type: "box",
                      xMin: new Date("August 21, 2023 20:00"),
                      xMax: new Date("August 22, 2023 06:00"),
                      yMin: 0,
                      yMax: 4500,
                      backgroundColor: "rgba(90, 89, 89, 0.25)",
                      borderColor: "rgba(90, 89, 89, 0.25)",
                    },
                  },
                },
              },
            }}
            plugins={[plugin]}
          />
        </div>
      </div>

      <div className="chart__time"></div>

      <div className="chart__line"></div>
      <div className="char_title">
        <span>Tide</span>
        <span> • </span>
        <span>Sunrise & Sunset</span>
      </div>
    </div>
  );
};
export default ChartDetail;
