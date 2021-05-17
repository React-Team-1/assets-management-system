import React from "react"
import FrontEndTeam from "./Frontend"
import Group from "./Group"
import TeamInfo from "./TeamMembers"



const About = () => {
    return (
        <div className="About">

            <img id="background-imgStyle" src="Assets/backgrounddStyle.png" alt="backgroundStyle" />
            <img id="background-imgStyle2" src="Assets/backgrounddStyle.png" alt="backgroundStyle" />
            
            <Group />

            {/* Front end display starts here */}
            <div>
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