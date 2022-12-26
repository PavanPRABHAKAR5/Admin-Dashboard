import React from 'react'
import "./TrafficSource.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
    const options = {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 1,
        }
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Traffic Sources'
        }
      }
    }
  

const labels =["Direct", "Referral", "Social Media", "Twitter"]
const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [143382, 87974, 45211 , 21893],
        borderColor:"#5550bd",
        backgroundColor: "#5550bd",
      }
    ]
  };

const TrafficSource = () => {
  return (
    <div className='trafficSource'>
        <Bar options={options} data={data} />
    </div>
  )
}

export default TrafficSource