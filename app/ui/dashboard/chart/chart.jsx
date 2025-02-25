"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
  },
];
const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weakly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="click"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="visit"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
