import React from "react"
import { Field, Form, withFormik, } from "formik"
import * as Yup from "yup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./Landingpage.css"
import Axios from "axios"
import Auth from "../../Auth"
import {useHistory} from "react-router-dom"
import App from "../../App"
import { faWindows } from "@fortawesome/free-brands-svg-icons"

const Login = ({
    values,
    errors,
    touched,
    isSubmitting,
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
                        <Field className="input" type="text" name="username" placeholder="ID Number" />
                        {touched.username && errors.username && <p className="error-message">{errors.username}</p>}
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

    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        // email: Yup.string().email().required(),
        username:Yup.string().required(),
        password: Yup.string().min(4).required()
    }),
    
    handleSubmit(values, {props, resetForm }) {
     
        setTimeout(() => {
            
            Axios.post("https://rocky-falls-71050.herokuapp.com/login",values,{headers: {'content-Type':'application/json'}}).then((response)=>{
                console.log(response.data)
                 if(response.status === 200){
                    localStorage.setItem('token',response.data.token);
                    Auth.login(()=>{
                        props.history.push("/Dashboard")
                    })
                    
                 }
            }).catch((e)=>{
                console.log(e)
            })

            resetForm()
            // setSubmitting(false)
        }, 1000)

       
    }
})(Login)

export default LandingPage;