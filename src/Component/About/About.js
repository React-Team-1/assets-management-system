import React from "react"
import FrontEndTeam from "./Frontend"
import FrontEndTeamInfo from "./FrontendTeam"




const About = ()=>{
    return(
        <div className="About">
         
         <img  id="background-imgStyle" src="Assets/backgrounddStyle.png" alt="backgroundStyle"/>
         <img  id="background-imgStyle2" src="Assets/backgrounddStyle.png" alt="backgroundStyle"/>
          {/* Front end display starts here */}
          <div>
          <h2 id="front-end-title">FrontEnd Teams</h2>
            <div className="front-end-Wrapper">
            {FrontEndTeamInfo.Frontend.map(teams)}
            </div>
          </div>
             
           
        </div>
    )
}


function teams (member){

    return (
        <FrontEndTeam
        key= {member.teamId}
        teamName = {member.pName}
        personImage ={member.pImage}
        track={member.track}>
        

        </FrontEndTeam>

    )

}


export default About