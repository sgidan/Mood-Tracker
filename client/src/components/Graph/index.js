import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";
  constructor(props) {
    super(props);
    console.log("THIS ACTUALLY WORKED", this.props);
    // -> { icon: 'home', … }
  }
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={this.props.moods}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="q1"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="q2" stroke="#82ca9d" />
        <Line type="monotone" dataKey="q3" stroke="#ff7300" />
      </LineChart>
    );
  }
}
