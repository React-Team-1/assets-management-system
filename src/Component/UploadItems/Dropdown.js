import React from 'react'
import "./UploadItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Dropdown(props) {
    let plusIcon = <FontAwesomeIcon icon={faPlus} />
    return (
        <div className="dropDown-div">
            <div className="div-title">
            
                <h4>{props.title}</h4> <p onClick={props.click}>{plusIcon}</p>
            </div>
            <div className="select-div">
                <select>
                    <option>Choose one </option>
                </select>
            </div>
     </div>
    )
}
