// React, Next packages
import React, { PureComponent } from "react";
// Mui packages
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Custom packages or Third Party packages
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { scaleLog } from "d3-scale";

const data = [
  {
    month: "Jan",
    pv: 7.8,

    ratings: 10,
  },
  {
    month: "Feb",

    pv: 5,

    ratings: 10,
  },
  {
    month: "Mar",

    pv: 2.4,

    ratings: 10,
  },
  {
    month: "Apr",

    pv: 0,

    ratings: 10,
  },
  {
    month: "May",

    pv: 0,

    ratings: 10,
  },
  {
    month: "June",

    pv: 0,

    ratings: 10,
  },
  {
    month: "July",

    pv: 0,

    ratings: 10,
  },
  {
    month: "Aug",

    pv: 0,

    ratings: 10,
  },
  {
    month: "Sept",

    pv: 0,

    ratings: 10,
  },
  {
    month: "Oct",

    pv: 0,

    ratings: 10,
  },
  {
    month: "Nov",

    pv: 0,

    ratings: 10,
  },
  {
    month: "Dec",

    pv: 0,

    ratings: 10,
  },
];
const scale = scaleLog().base(Math.E);

function BarCharts() {
  return (
    <BarChart
      width={700}
      height={320}
      data={data}
      barSize={15}
      margin={{ left: -32 }}
    >
      <Tooltip />
      <Legend />
      <XAxis
        dataKey="month"
        scale="point"
        padding={{ left: 10, right: 10 }}
        axisLine={false}
        tickLine={false}
      />
      <YAxis
        scale="linear"
        orientation="left"
        type="number"
        domain={[0, "dataMax"]}
        axisLine={false}
        padding={{ left: 1000 }}
        tickLine={false}
        dataKey="ratings"
      />

      <Bar dataKey="pv" fill="#787DF9" background={{ fill: "#F1F5FB" }} />
    </BarChart>
  );
}

export default BarCharts;
