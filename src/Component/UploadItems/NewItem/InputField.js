import React from 'react'
import { Field, Formik } from 'formik'
import './InputField.css'

const InputField = props => {
    return (
        <div className="wrapper-div">
            <div className="title-div">
                <label>{props.title}</label>
            </div>
            <div className="input-div">
        
                    <input type={props.type} placeholder={props.placeholder} />
                
            </div>

        </div>
    )
}

export default InputField
