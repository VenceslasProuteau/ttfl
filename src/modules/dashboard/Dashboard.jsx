import React from 'react';
import { Line } from 'react-chartjs-2';
import classNames from 'classnames';
import './dashboard.scss';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.params = props.match.params
    this.state = {
      isLoading: false, 
    }
  }

  componentDidMount() {
    // getWeekDecks()
  }

  render() {
    const data = {
        labels: ['17-01', '18-01', '19-01', '20-01', '21-01', '22-01'],
        datasets: [{
            label: 'CzechVence',
            data: [12, 19, -1, 5, 2, 3],
            borderColor: ['#39827b'],
            borderWidth: 2,
            fill: false,
            lineTension: 0.1,
        }, {
          label: 'Ruric',
          data: [1, 55, 3, 25, 2, 13],
          borderColor: ['#00BCD4'],
          borderWidth: 2,
          fill: false,
          lineTension: 0.1,
      }, {
        label: 'fred49400',
        data: [89, 55, 62, 43, 38, 13],
        borderColor: "#2196F3",
        borderWidth: 2,
        fill: false,
        lineTension: 0.1,
      }, {
        label: 'FifiBrindacier',
        data: [77, 55, 66, 28, 98, 23],
        borderColor: "#9C27B0",
        borderWidth: 2,
        fill: false,
        lineTension: 0.1,
      }, {
        label: 'Milano',
        data: [43, 23, 28, 52, 78, 33],
        borderColor: "#f44336",
        borderWidth: 2,
        fill: false,
        lineTension: 0.1,
      }],
    };

    return (
      this.state.isLoading ?
      <div>loading ...</div> :
      <div className="dashboard">
        <div className="dashboard__row">
          <Line
            data={data}
            height={250}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    )
  }
}
