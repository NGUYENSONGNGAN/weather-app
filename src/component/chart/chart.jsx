import React from "react";
import {
  ComposedChart,
  ResponsiveContainer,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { dataSun } from "../../data/globalConstance";
import MoonSVG from "./moonSVG";
import SunSVG from "./sunSVG";

const Chart = () => {
  const CustomizedDot = (props) => {
    const { cx, cy, value } = props;
    if (value > 1350 || value === 0) {
      return <SunSVG cx={cx} cy={cy} />;
    }
    return <MoonSVG cx={cx} cy={cy} />;
  };
  return (
    <div
      className="cw-WrapCanvas"
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        overflow: "auto",
        overflowY: "hidden",
       
      }}
    >
      <div className="chart-title">
        <span className="blue-title">Tide</span>
        <span className="orange-title">Sunrise &amp; Sunset</span>
      </div>
      <ResponsiveContainer data-test="chart" minWidth={1800} height={350}>
        <ComposedChart data={dataSun} margin={{}}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="tide" stroke="#8884d8" />
          <Line
            type="monotone"
            dataKey="sun"
            stroke="#ff7300"
            dot={<CustomizedDot />}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
