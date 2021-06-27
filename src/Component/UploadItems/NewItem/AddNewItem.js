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

<<<<<<< HEAD
    const [file] = customFile.files

    if (file) {
        ItemImg.style.display = 'unset'
        imgIcon.style.display = 'none'
        ItemImg.src = URL.createObjectURL(file)
        this.url = URL.createObjectURL(file);
=======
 class AddNewItem extends Component {
    

    constructor(props){
          super(props)
          this.state = {
         
            selectedFile: <FontAwesomeIcon icon={faImage} id="imgIcon" />,
            
        }
>>>>>>> localdev
    }
}

<<<<<<< HEAD
const fileUploaderHandler = () => {
=======
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

>>>>>>> localdev

    document.getElementById("customFile").click();
}


<<<<<<< HEAD
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
=======
        return (
            <form>

          
            <div>
>>>>>>> localdev
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
<<<<<<< HEAD
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
=======
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
>>>>>>> localdev
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
<<<<<<< HEAD
                    <button type="submit">Add Item</button>
=======
                    <button type="submit"   onClick={(e)=>{this.submitData(e)}}>Add Item</button>
>>>>>>> localdev
                </div>

            </Form>
        </div>

    )

<<<<<<< HEAD


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
=======
            </form>

        )
    }
>>>>>>> localdev
}
export default AddNewItem;


export default AddNewItem