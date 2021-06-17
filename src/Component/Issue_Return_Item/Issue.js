import React from 'react'
import "./Issue.css"



const Issue = () => {
    return (
        

<div  className="issue_form">
            <h2>Issue Item</h2>
            {/*<p id="closeIcon" onClick={props.click}>{closeIcon}</p>*/}
            <div className="input-area">
                <label>Asset ID:</label><input type='text' id="input-area-txt" placeholder=""/><br/>
                <label>Reciepient ID:</label><input type='text' id="input-area-txt" placeholder=""/><br/>
                <label>Comments:</label><textarea type='text' id='comments'></textarea>
                
                <button>submit</button>
            </div>
           

        </div>
            
    
    )
}

export default Issue
