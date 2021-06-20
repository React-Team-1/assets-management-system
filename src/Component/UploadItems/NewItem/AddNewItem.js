import React, { Component } from 'react'
import { useFormik, Form } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import InputField from './InputField'
import './AddNewItem.css'

const fileSelectedhandler = () => {
    let customFile = document.getElementById("customFile")
    let ItemImg = document.getElementById("ItemImg")
    let imgIcon = document.getElementById("imgIcon")

    const [file] = customFile.files

    if (file) {
        ItemImg.style.display = 'unset'
        imgIcon.style.display = 'none'
        ItemImg.src = URL.createObjectURL(file)
        this.url = URL.createObjectURL(file);
    }
}

const fileUploaderHandler = () => {

    document.getElementById("customFile").click();
}


const AddNewItem = () => {

    const formik = useFormik({
        initialValues: {
            ItemImg: "",
            assetTag: "",
            itemTag: "",
            location: "",
            area: "",
            serialNumber: "",
            brand: "",
            status: "",
            ownership: "",
            category: "",
            datePurchased: "",
            inCharge: "",
            price: ""
        },

        onSubmit: values => {
            console.log(values)
        }
    })


    let imgIcon = <FontAwesomeIcon icon={faImage} id="imgIcon" />;

    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <div className="pic-container" id="fileContainer" >
                    <input
                        type="file"
                        id="customFile"
                        name="customFile"
                        onChange={fileSelectedhandler}
                        accept="image/*"
                        // value={formik.values}
                    />
                    <label id="OpenImgUpload" onClick={fileUploaderHandler}>
                        <img src="#" alt="" id="ItemImg" />
                        {imgIcon}
                    </label>

                </div>
                <div className="input-container">
                    <InputField name="assetTag" title="Asset Tag" onChange={formik.handleChange} value={formik.values.assetTag} />
                    <InputField name="itemType" title="Item type" onChange={formik.handleChange} value={formik.values.itemTag} />
                    <InputField name="location" title="Location" onChange={formik.handleChange} value={formik.values.location} />
                    <InputField name="area" title="Area" onChange={formik.handleChange} value={formik.values.area} />
                    <InputField name="serialNumber" title="Serial Number" onChange={formik.handleChange} value={formik.values.serialNumber} />
                    <InputField name="brand" title="Brand" onChange={formik.handleChange} value={formik.values.brand} />
                    <InputField name="status" title="Status" onChange={formik.handleChange} value={formik.values.status} />
                    <InputField name="ownership" title="Ownership" onChange={formik.handleChange} value={formik.values.ownership} />
                    <InputField name="category" title="Category" onChange={formik.handleChange} value={formik.values.category} />
                    <InputField name="datePurchased" title="Date Purchased" onChange={formik.handleChange} value={formik.values.datePurchased} />
                    <InputField name="inCharge" title="In-Charge" onChange={formik.handleChange} value={formik.values.inCharge} />
                    <InputField name="price" title="Price" onChange={formik.handleChange} value={formik.values.price} />
                </div>
                <div className="textarea-container">
                    <div>
                        <label>Description</label>
                        <textarea rows="5" cols="33" spellCheck="true" />
                    </div>
                    <div>
                        <label>Remarks</label><br/>
                        <textarea rows="5" cols="33" spellCheck="true" />
                    </div>

                </div>
                <div className="buttons">
                    <button>Close</button>
                    <button type="submit">Add Item</button>
                </div>

            </Form>
        </div>

    )



    // handleSubmit(e) {
    //     e.preventDefault()
    //     alert("I have clicked");
    //     const val = document.querySelectorAll(".input-div input");
    //     let item = []
    //     val.forEach((input) => {
    //         item.push(input.value)
    //         //  this.state.assetInfo.push(input.value);
    //         // this.setState({
    //         //     assetInfo: 
    //         // })
    //     })
    //     console.log(item);
    //     // this.setState({
    //     //     assetInfo: item
    //     // })
    //     console.log(this.state);


    // }
}
export default AddNewItem;

