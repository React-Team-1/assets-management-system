import React from 'react'
import "./UploadItem.css"

export default function SelectFileComp(props) {
    return (
        <div className="file-input">
              <h4>{props.title}</h4> 
                <input type="file"/>
        </div>
    )
}
