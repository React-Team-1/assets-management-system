import React from "react"
import { Field, Form, withFormik, } from "formik"
import * as Yup from "yup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./Landingpage.css"
import Axios from "axios"

const Login = ({
    values,
    errors,
    touched,
    isSubmitting
}) => {
    let userIcon = <FontAwesomeIcon icon={faUser} />
    return (
        <div className="main-container">
            <div className="left-container">
                <p>Assets Management System</p>
            </div>
            <div className="right-container">
                <Form>
                    <div>
                        <p className="userIcon">{userIcon}</p>
                        <label>Admin Login</label>
                        <Field className="input" type="text" name="email" placeholder="ID Number" />
                        {touched.email && errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div>
                        <Field className="input" type="password" name="password" placeholder="Password" />
                        {touched.password && errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
                    <button type="submit" disabled={isSubmitting}>Login</button>
                </Form>
            </div>
        </div>

    )
} 

const LandingPage = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        // email: Yup.string().email().required(),
        email:Yup.string().required(),
        password: Yup.string().min(4).required()
    }),
    handleSubmit(values, { resetForm }) {
        setTimeout(() => {
      

            // Axios({
            //     Headers:{'content-Type':'application/json'},
            //     URL:'https://rocky-falls-71050.herokuapp.com/login',
            //     FormData:values
            // }).then((response)=>{
            //     console.log(response.FormData)
            // })
            Axios({
                method:'post',
                headers: {'content-Type':'application/json'},
                url:'https://rocky-falls-71050.herokuapp.com/login',
                data:values
            }).then(response=>{
                console.log(response.data)
            })

            resetForm()
            // setSubmitting(false)
        }, 1000)
    }
})(Login)

export default LandingPage;