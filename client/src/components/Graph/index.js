import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

// const data = [
//     {
//      score[0].q1 = 5   
//      score: [{q1: 5}], _id: "5d5ed4819aa75dda12486db2", date: "2019-08-22T17:44:33.735Z", __v: 0
//     }
// ]


// const data = [
//   {
//     name: 'date', `q2: 4, q1: 2`, amt: 2400,
//   },
//   {
//     name: 'Page B', q2: 3, q1: 1, amt: 2210,
//   },
//   {
//     name: 'Page C', q2: 2, q1: 5, amt: 2290,
//   },
//   {
//     name: 'Page D', q2: 2, q1: 4, amt: 2000,
//   },
//   {
//     name: 'Page E', q2: 1, q1: 2, amt: 2181,
//   },
//   {
//     name: 'Page F', q2: 2, q1: 1, amt: 2500,
//   },
//   {
//     name: 'Page G', q2: 5, q1: 2, amt: 2100,
//   },
// ];



export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
    constructor(props) {
        super(props)
        console.log('THIS ACTUALLY WORKED', this.props)
        // -> { icon: 'home', … }
    }
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={this.props.moods}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="q1" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="q2" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
