import React from 'react'
import { Pie } from 'react-chartjs-2'
import "./Charts.css";
import {connect} from "react-redux"




const Charts = (props) => {

    return (
        <div>
        <Pie

        data={{
            labels: props.data.labels,
            datasets: [{
               
                data:props.data.datasets[0].data,
                
                backgroundColor:props.data.datasets[0].backgroundColor,

                borderColor:props.data.datasets[0].borderColor,

                borderWidth: props.data.datasets[0].borderWidth
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


const mapStateToProps =(state)=>{
   return{
        data: state.dashboardData
   }
}

export default  connect(mapStateToProps)(Charts)
