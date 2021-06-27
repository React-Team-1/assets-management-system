import React from 'react'
import SearchComponent from './SearchComponent';
import {Link} from "react-router-dom"

const   SearchDiv = (props)=> {
    return (
        <div className="Search-Assets-Div">
        <SearchComponent />

          <div className="Upload-addDiv">
          {/* Add NewItem */}
          <Link to="/AddNewItem">{props.addItem}</Link>
          <Link to="/UploadItems" onClick={props.click}>{props.uploadItem}</Link>

              
          </div>    
    </div>
    )
}

export default SearchDiv
