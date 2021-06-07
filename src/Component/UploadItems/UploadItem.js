import React from "react"
import "./UploadItem.css"
import Dropdown from "./Dropdown"
import SelectFileComp from "./SelectFileComp"
import AddCategory from "./AddCategory/AddCategory"
import Backdrop from "../Backdrop/backDrop.js"



const UploadItems = () => {

    return (
        <div className="parentContainer">
          <Backdrop/>
            <AddCategory  click={closePopup} />
            
            <div id="blur" className="UploadWrapper">
                {/*<Backdrop/>*/}
                <div className="titleDiv">
                    <h3>Upload Items</h3>
                </div>




                <div className="Dropdown-group">
                    <Dropdown click={addCatgory} title="Item Type" />
                    <Dropdown click={addCatgory} title="Brand" />
                    <Dropdown click={addCatgory} title="Area" />
                    <Dropdown click={addCatgory} title="Ownership" />
                    <Dropdown click={addCatgory} title="Status" />
                    <Dropdown click={addCatgory} title="Category" />
                </div>


                <div className="Location-Incharge">
                    <Dropdown click={addCatgory} title="Location" />
                    <Dropdown click={addCatgory} title="In Charge" />
                </div>

                <div className="file-div">

                    <SelectFileComp title="Select Excel File" />
                    <SelectFileComp title="Select Picture(s)" />
                </div>


                <div className="download-btn-div">
                    <p>Download Upload format</p>
                    <div>
                        <button id="btn-upload">Upload</button>
                        <button>Close</button>

                    </div>
                </div>

            </div>
        </div>


    )
}

const addCatgory = () => {

    // // let blur = document.querySelector("#blur");
    // let catdiv = document.querySelector(".catdiv");
    // if (catdiv.classList.contains("hide")) {
    //     catdiv.classList.remove("hide")
    // }
    // else {
    //     catdiv.classList.add("hide");
    // }

    // blur.classList.toggle("blurBD")

     // let blur = document.querySelector("#blur");
     let backDrop = document.querySelector(".backDrop");
     let catdiv = document.querySelector(".catdiv");
     if (backDrop.classList.contains("hide")) {
         backDrop.classList.remove("hide")
         catdiv.classList.remove("hide")
     }
     else {
         catdiv.classList.add("hide");
     }
 
    //  blur.classList.toggle("blurBD")

}

const closePopup = ()=>{
    let backDrop = document.querySelector(".backDrop");
    let catdiv = document.querySelector(".catdiv");
    if(!catdiv.classList.contains("hide")){
        catdiv.classList.add("hide");
        backDrop.classList.add("hide")
    }
}



export default UploadItems