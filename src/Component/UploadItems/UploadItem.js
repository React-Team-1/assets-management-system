import React from "react"
import "./UploadItem.css"
import Dropdown from "./Dropdown"
import SelectFileComp from "./SelectFileComp"



const UploadItems =()=>{
    
    return(
        <div className="UploadWrapper"> 
           <div className="titleDiv">
                <h3>Upload Items</h3>                                 
           </div>

          <div className="Dropdown-group">
           <Dropdown title="Item Type"/>
           <Dropdown title="Brand"/>
           <Dropdown title="Area"/>
           <Dropdown title="Ownership"/>
           <Dropdown title="Status"/>
           <Dropdown title="Category"/>
          </div>

c
          <div className="Location-Incharge">
          <Dropdown title="Location"/>
          <Dropdown title="In Charge"/>
          </div>
          
          <div className="file-div">
        
              <SelectFileComp title="Select Excel File"/>
              <SelectFileComp title="Select Picture(s)"/>      
          </div>


          <div className="download-btn-div">
            <p>Download Upload format</p>
            <div>
                <button id="btn-upload">Upload</button>
                <button>Close</button>

            </div>
          </div>
        
        </div>
    )
}

export default UploadItems