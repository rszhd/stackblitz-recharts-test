
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  { day: '2023-04-01', pageviews: 320 },
  { day: '2023-04-02', pageviews: 280 },
];

const RenderChart = () => (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="pageviews" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="day" />
    <YAxis />
  </LineChart>
);

export default RenderChart;
