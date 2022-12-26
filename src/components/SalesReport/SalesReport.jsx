import React from 'react'
import "./SalesReport.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  //  const options= {
  //     responsive: true,
  //     plugins: {
  //       title: {
  //         display: true,
  //         text: (ctx) => 'Sales Report: ' + ctx.chart.data.datasets[0].pointStyle,
  //       }
  //     }
  //   }


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Dataset',
        data: [3382, 7974, 5211 , 1893, 3036, 6000, 4321, 1900, 1242, 6076, 4500, 2000],
        borderColor: "#5550bd",
        backgroundColor: "#5550bd",
        pointStyle: '',
        pointRadius: 10,
        pointHoverRadius: 15
      }
    ]
  };

const SalesReport = () => {
  return (
    <div className='salesreport'>
         <Line options={options} data={data} />
    </div>
  )
}

export default SalesReport