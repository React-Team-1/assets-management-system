import React from "react"
import FrontEndTeam from "./Frontend"
import Group from "./Group"
import TeamInfo from "./TeamMembers"
import Navbar from "./Navbar/Navbar"; 
import { BrowserRouter as Router} from 'react-router-dom';
import Card from "../Card/card.js";





const About = () => {
    return (
        
        
        <div className="About">
        <Router>
      <Navbar/>
      </Router>



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
                    {TeamInfo.Frontend.map(teams)}
                </div>
            </div>

            <div>
                <h2 id="front-end-title">BackEnd Teams</h2>
                <div className="front-end-Wrapper">
                    {TeamInfo.Backend.map(teams)}
                </div>
            </div>
            
            <div className="footer">
                <p>Copyright 2021</p>
            </div>
        </div>
    )
}


function teams(member) {

    return (
        <FrontEndTeam
            key={member.teamId}
            teamName={member.pName}
            personImage={member.pImage}
            track={member.track}>


        </FrontEndTeam>

    )

}


export default About