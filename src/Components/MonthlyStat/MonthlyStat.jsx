import React from 'react'
import './MonthlyStat.css'
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
  export const options = {
    responsive: true,
    scales: {
        x: {
          grid: {
            drawBorder: false,
            display: false
          },
          border:{
            display:false
          }
        },
        y: {
            ticks: {
                display: false,
                beginAtZero: true,
              },
          grid: {
            
            display: false
          },
          border:{
            display:false
          }
        }
      },
 
    plugins: {
        
      legend: {
        position: 'top' ,
        display:false
      },
      title: {
        display: false,
       
      },
    
    },
  };
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
  const data = {
    labels: labels,
    datasets: [{
   
      data: [65, 59, 80, 81, 56, 55, 40,40,65, 59, 80, 81],
      backgroundColor: [
        'rgb(243,238,255)',
        'rgb(243,238,255)',
        'rgb(91,51,234)',
        'rgb(243,238,255)',
        'rgb(243,238,255)',
        'rgb(243,238,255)',
        'rgb(243,238,255)'
      ],
      

      borderRadius:[10,10 ,10,10],
      borderWidth: 1,
      
    }]
  };
  

const MonthlyStat = () => {
  return (
    <div className="monthlystat_wrapper">
        <div className="monthlystat">
            <h1>Overview</h1>
            <p>Monthly Earning</p>
            <div className="bargraph">
            <Bar options={options} data={data} />;
            </div>
       
        </div>
    </div>
  )
}

export default MonthlyStat