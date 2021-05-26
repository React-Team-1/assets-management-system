import React from 'react'
import { Pie } from 'react-chartjs-2'
import "./Charts.css";




const Charts = () => {
    return (
        <div>
        <Pie

        data={{
            labels: ['Tables', 'Laptops', 'Chairs', 'Speaker', 'Dispenser', 'Projector'],
            datasets: [{
                label: '# of Asset Issued this week',
                data: [12, 19, 3, 5, 2, 3],

                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 56, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],

                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],

                borderWidth: 3

            }]

        }}

       
        
        options={{maintainAspectRation:false,

            scales: {
                yAxes: [
                    {
                    ticks: {
                        beginAtZero:true,
                        }
                    }
                ]
            }

        }}
        
        />
        </div>
    )
}

export default Charts
