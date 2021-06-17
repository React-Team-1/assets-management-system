import React from 'react'
import "./close.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function close(props) {
    let closeIcon = <FontAwesomeIcon icon={faTimes} />
    return (
        <div>
               <p id="closeIcon" onClick={props.click}>{closeIcon}</p>
        </div>
    )
}
