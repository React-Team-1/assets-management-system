import React from "react"
import Team from "./Frontend"
import Group from "./Group"
import Navbar from "./Navbar/Navbar"; 
import Card from "../Card/card.js";
import FooterDiv from "./Footer";
import {connect} from "react-redux"




const About = (props) => {
   
    return (
        
        
        <div className="About">
         <Navbar />



            <img id="background-imgStyle" src="Assets/backgrounddStyle.png" alt="backgroundStyle" />
            <img id="background-imgStyle2" src="Assets/backgrounddStyle.png" alt="backgroundStyle" />

            <Card title="Overview"
                textBody="Amalitech Asset Management System 
            is a dynamic system that is used 
            in the management and record keeping 
            of all items that exits in the organization"
             />
            
            <Group />

            {/* Front end display starts here */}
            <div className="Team-divs-style">
                <h2 id="front-end-title">FrontEnd Teams</h2>
                <div className="front-end-Wrapper">
                    {props.frontend.map(teams)}
                </div>
            </div>

            <div>
                <h2 id="front-end-title">BackEnd Teams</h2>
                <div className="front-end-Wrapper">
                    {props.backend.map(teams)}
                </div>
            </div>
            
              <div>
              <FooterDiv/>
              </div>
          
    
        </div>
    )
}


const teams = member => {
    return (
        <Team
            key={member.teamId}
            teamName={member.pName}
            personImage={member.pImage}
            track={member.track}>


        </Team>

    )

}


const mapStateToProps =(state)=>{
         return{
             frontend: state.frontend,
             backend: state.backend
         }
}

export default connect(mapStateToProps)(About)