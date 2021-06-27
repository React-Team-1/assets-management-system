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
<<<<<<< HEAD
                <Formik>
                    <Field type={props.type} name={props.name} value={props.value} />
                </Formik>
=======
        
                    <input type={props.type} placeholder={props.placeholder} />
                
>>>>>>> localdev
            </div>

        </div>
    )
}

export default InputField
