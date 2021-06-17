import React, { Component } from 'react'
// import { Form, Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import InputField from './InputField'
import './AddNewItem.css'


class AddNewItem extends Component {

    state = {
        assetInfo:[]
    };
  

    fileSelectedhandler = () => {
        let customFile = document.getElementById("customFile")
        let ItemImg = document.getElementById("ItemImg")
        let imgIcon = document.getElementById("imgIcon")
        

        const [file] = customFile.files
        console.log(file);
        if (file) {
            ItemImg.style.display = 'unset'
            imgIcon.style.display = 'none'
            ItemImg.src = URL.createObjectURL(file)
           this.url = URL.createObjectURL(file);
        }
    }

    fileUploaderHandler = () => {

        document.getElementById("customFile").click();
    }

    render() {

        let imgIcon = <FontAwesomeIcon icon={faImage} id="imgIcon" />;

        return (
            <div>

            
                    <form >
                        <div className="pic-container" id="fileContainer" >
                            <input
                                type="file"
                                id="customFile"
                                name="customFile"
                                onChange={this.fileSelectedhandler}
                                accept="image/*"
                            />
                            <label id="OpenImgUpload" onClick={this.fileUploaderHandler}>
                                <img src="#" alt="" id="ItemImg" />
                                {imgIcon}
                            </label>

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
                            <button type="submit" onClick={this.handleSubmit}>Add Item</button>
                        </div>

                    </form>


            </div>

        )
    }



    handleSubmit(e){
        e.preventDefault()
        alert("I have clicked");
        const val = document.querySelectorAll(".input-div input");
         let item = []
        val.forEach((input)=>{
            item.push(input.value)
            //  this.state.assetInfo.push(input.value);
            // this.setState({
            //     assetInfo: 
            // })
        })
        console.log(item);
        // this.setState({
        //     assetInfo: item
        // })
        console.log(this.state);

       
    }
}
export default AddNewItem;

