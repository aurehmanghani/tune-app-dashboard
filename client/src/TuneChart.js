import React from 'react';
import {Line} from 'react-chartjs-2';

export default class TuneChart extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      datasets: [
        {
          label: 'Per Day',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: this.props.chartData
        }
      ]
    }
  }
  render() {
    
    return (
      <div>
        <Line
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Conversion Per Day',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
