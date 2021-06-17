import React from 'react'
import "./AddCategory.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function AddCategory(props) {
    let closeIcon = <FontAwesomeIcon icon={faTimes} />
    return (
        
        <div  className="catdiv hide">
            <h2>Add Category</h2>
            <p id="closeIcon" onClick={props.click}>{closeIcon}</p>
            <div className="input-area">
                <input type='text' id="input-area-txt" placeholder="Category Name"/><br/>
                <button>submit</button>
            </div>
           

        </div>
          
      

    )
}
