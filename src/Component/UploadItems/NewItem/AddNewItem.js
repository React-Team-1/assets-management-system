import React, { Component } from 'react'
// import { Field } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import InputField from './InputField'
import './AddNewItem.css'


 class AddNewItem extends Component {
    

    constructor(props){
          super(props)
          this.state = {
         
            selectedFile: <FontAwesomeIcon icon={faImage} id="imgIcon" />,
            
        }
    }

    fileSelectedhandler = event => {
        const customFile = document.getElementById('customFile')
        this.state = customFile.files;
    }

    fileUploaderHandler = () => {

        document.getElementById("customFile").click();
    }


  submitData=(e)=>{
        let  inputValues = document.querySelectorAll("input");
        let textareaValues = document.querySelectorAll("textarea");

        this.setState({
            ...this.state,
            AssetDetails:{
                 assetTag: inputValues[1].value,
                 itemType:  inputValues[0].value,
                 location: inputValues[3].value,
                 area: inputValues[4].valueAsDate,
                 serialNumber:inputValues[2].value,
                 brand: inputValues[5].value,
                 status: inputValues[6].value,
                 ownerShip: inputValues[7].value,
                 category: inputValues[8].value,
                 purchaseDate: inputValues[9].value,
                 incharge: inputValues[10].value,
                 price: inputValues[11].value
                }
        },()=>{
            console.log(this.state.AssetDetails);
        })
        inputValues.forEach(element => {
             console.log(element.value)
        });
       

        e.preventDefault();
  }


    render() {

        let imgIcon = this.state.selectedFile;

        return (
            <form>

          
            <div>
                <div className="pic-container" id="fileContainer" >
                    <input
                        type="file"
                        id="customFile"
                        onChange={this.fileSelectedhandler}
                        accept="image/*"

                    />
                    <button id="OpenImgUpload" onClick={this.fileUploaderHandler} >{imgIcon}<span>Upload Picture</span></button>
                </div>
                <div className="input-container">
                    <InputField title="Asset Tag" type="text" />
                    <InputField title="Item type"  type="text" />
                    <InputField title="Location"  type="text" />
                    <InputField title="Area"  type="text" />
                    <InputField title="Serial Number"  type="text" />
                    <InputField title="Brand"  type="text" />
                    <InputField title="Status"  type="text" />
                    <InputField title="Ownership"  type="text" />
                    <InputField title="Category"  type="text" />
                    <InputField title="Date Purchased"  type="text"  />
                    <InputField title="In-Charge"  type="text" />
                    <InputField title="Price"  type="text" />
                </div>
                <div className="textarea-container">
                    <div>
                        <label>Description</label>
                        <textarea rows="5" cols="33" spellCheck="true" />
                    </div>
                    <div>
                        <label>Remarks</label>
                        <textarea rows="5" cols="33" spellCheck="true" />
                    </div>

                </div>
                <div className="buttons">
                    <button>Close</button>
                    <button type="submit"   onClick={(e)=>{this.submitData(e)}}>Add Item</button>
                </div>


            </div>

            </form>

        )
    }
}


export default AddNewItem