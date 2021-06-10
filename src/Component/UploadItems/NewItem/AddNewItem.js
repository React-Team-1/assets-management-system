import React, { Component } from 'react'
// import { Field } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import InputField from './InputField'
import './AddNewItem.css'


export default class AddNewItem extends Component {
    state = {

        selectedFile: <FontAwesomeIcon icon={faImage} id="imgIcon" />
    }

    fileSelectedhandler = event => {
        const customFile = document.getElementById('customFile')
        this.state = customFile.files;
    }

    fileUploaderHandler = () => {

        document.getElementById("customFile").click();
    }





    render() {

        let imgIcon = this.state.selectedFile;

        return (
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
                    <InputField title="Asset Tag" />
                    <InputField title="Item type" />
                    <InputField title="Location" />
                    <InputField title="Area" />
                    <InputField title="Serial Number" />
                    <InputField title="Brand" />
                    <InputField title="Status" />
                    <InputField title="Ownership" />
                    <InputField title="Category" />
                    <InputField title="Date Purchased" />
                    <InputField title="In-Charge" />
                    <InputField title="Price" />
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
                    <button>Add Item</button>
                </div>


            </div>

        )
    }
}

