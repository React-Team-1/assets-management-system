import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


const Team =(props)=>{
  let element = <FontAwesomeIcon icon={faEnvelope} />
  let element2 = <FontAwesomeIcon icon={faLinkedinIn} />
  return(
          <div  className="front-end-Teams-div">
          <img src={props.personImage}  alt="Front end pictures"/> 
              <div className="details">
              <h3>{props.teamName}</h3>
              <h4 >{props.track}</h4>
              <div className="connections-div">
                <p className="fontIcons">{element2}</p>
                <p className="fontIcons" id="font-second">{element}</p>
              </div>
              </div>
          </div>
  )
}


export default Team;