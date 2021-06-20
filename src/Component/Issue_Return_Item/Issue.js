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
                 
                <label><h5>Asset ID:</h5></label><input type='text' id="as-id" value={props.assetId} name="assetId" readOnly tabIndex="-1" placeholder=""/>
                <label><h5>Reciepient Email/RoomTag:</h5></label>
                <div className="autocomplete" style={{width:"100%"}}>
                        <input type='text' id="re-id"  onChange={props.people} autoComplete="off"   placeholder=""/>
                </div>
                <label><h5>Comments:</h5></label><textarea type='text' id='comments' rows="5" cols="50" ></textarea>
                <br/>
                <button id="issue_btn" onClick={props.submit}>submit</button>
            </div>
           

        </div>
            
    
    )
}

export default Issue
