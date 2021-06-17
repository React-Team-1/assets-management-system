import React from 'react'
import "./AddCategory.css"
import Close from "./../../ClosePopup/close"


export default function AddCategory(props) {

    return (
        
        <div  className="catdiv hide">
            <h2>Add Category</h2>
            <Close  click={props.click}/>
            <div className="input-area">
                <input type='text' id="input-area-txt" placeholder="Category Name"/><br/>
                <button id="submit">submit</button>
            </div>
           

        </div>
          
      

    )
}
