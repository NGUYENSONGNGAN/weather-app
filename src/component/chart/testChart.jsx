import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale  } from "chart.js";
import Chart from "chart.js/auto";
import moment from "moment/moment";

Chart.register(CategoryScale);
let DATE_START = new Date("August 19, 2023 05:00");
let DATE_MIN = new Date("August 19, 2023 00:00");
const timeMin = moment(DATE_MIN).format("LLL");
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
const sunimg= new Image(15,15)
sunimg.src = "/image/sun.svg"
Chart.register(
  {
    id: 'uniqueid5', //typescript crashes without id
    afterDraw: function (chart, easing) {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        const activePoint = chart.tooltip._active[0];
        const ctx = chart.ctx;
        const x = activePoint.element.x;
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#d4d4d4';
        ctx.stroke();
        ctx.restore();
      }
    }
  }
);
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
                  borderColor: "#f89005",
                  borderWidth: 1,
                  tension: 0.2,
                  pointRadius: 0,
                  fill: false,
                },
                /* {
                  data: [{x:"August 19, 2023 12:00 AM",y:1500} ,{x:"August 20, 2023 12:00 AM",y:5000}],
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                  tension: 0.2,
                  pointRadius: 0,
                  fill: true,
                }, */
                {}
              ],
            }}
            options={{
              maintainAspectRatio: false,
              elements:{
                point:{
                  pointStyle:sunimg,
                }},
                interaction: {
                  mode: 'index',
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
              labels:[new Date("August 19, 2023"),new Date("August 20, 2023 "),new Date("August 21, 2023")],
              
              datasets: [
                  {
                    label:'wwikisale',
                 data: [{
                    x: 'August 25, 2023',
                    y: 50
                }, {
                    x: 'August 15, 2023 ',
                    y: 60
                }, {
                    x: 'August 18, 2023 ',
                    y: 20
                }],
                  tension:0.4,
                },
              ],
            }}
            options={{
             scales: {
                x: {
                  xAxes: [{
                    type: 'time',
                    distribution: 'linear'
                  }]
                  //min: DATE_START,
                },
                y:{
                  beginAtZero:true,
                }
              },
            }}
          />
        </div> */}
      </div>
    </>
  );
};
export default Charttest;
