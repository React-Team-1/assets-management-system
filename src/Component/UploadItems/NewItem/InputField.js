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
                <Formik>
                    <Field type={props.type} placeholder={props.placeholder} />
                </Formik>
            </div>

        </div>
    )
}

export default InputField
