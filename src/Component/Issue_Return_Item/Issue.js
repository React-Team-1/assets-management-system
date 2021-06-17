import React from 'react'
import "./Issue.css"
import Close from "./../ClosePopup/close"
import { props } from 'bluebird'



const Issue = (props) => {
    return (
        

<div  className="issue_form  hide">
            <h3>ISSUE ITEM</h3>
            <Close  click={props.click}/>
            <div className="input-area">
                 
                <label><h5>Asset ID:</h5></label><input type='text' id="as-id"  placeholder=""/>
                <label><h5>Reciepient ID:</h5></label><input type='text' id="re-id"  placeholder=""/>
                <label><h5>Comments:</h5></label><textarea type='text' id='comments' rows="5" cols="50" ></textarea>
                <br/>
                <button id="issue_btn">submit</button>
            </div>
           

        </div>
            
    
    )
}

export default Issue
