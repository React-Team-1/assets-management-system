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
                    <Field type={props.type} name={props.name} value={props.value} />
                </Formik>
            </div>

        </div>
    )
}

export default InputField
