import React from 'react'
import './Customer.css'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';


const data = {

  datasets: [
    {
       
        data: [25,75,100],
        backgroundColor: [
          'rgb(243,62,157)',
          'rgb(96,56,233)',
          'rgb(240,239,253)',
          
        ],
     
        borderWidth: [
            5,2
        ],
        width:[
            4
        ]
    },
  ],
};
const Customer = () => {
  return (
    <div className="customer_wrapper">
        <div className="customer_stat">
             <div className="upper_text">
                <h1>Customers</h1>
                <p>That Buy Products</p>
            </div>
            <div className='donut_container'>
                <div className="circle"></div>
            <Doughnut
            responsize={true}
             data={data}
             />
            </div>
            
        </div>
    </div>
  )
}

export default Customer