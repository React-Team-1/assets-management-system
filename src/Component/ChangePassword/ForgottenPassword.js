import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import './ForgottenPassword.css'

const ResetPassword = ({
    errors,
    touched,
    isSubmitting
}) =>  (
        <div className="container">
            <Form>
                <div>
                    <Field className="input" type="password" name="currentPassword" placeholder="Current password" />
                    {touched.password && errors.currentPassword && <p className="error-message">{errors.password}</p>}
                </div>
                <div>
                    <Field className="input" type="password" name="newPassword" placeholder="New password" />
                    {touched.password && errors.newPassword && <p className="error-message">{errors.password}</p>}
                </div>
                <div>
                    <Field className="input" type="password" name="confirmPassword" placeholder="Confirm password" />
                    {touched.password && errors.confirmPassword && <p className="error-message">{errors.password}</p>}
                </div>
                <button type="submit" disabled={isSubmitting}>Update password</button>
            </Form>
        </div>
    )


const ForgottenPassword = withFormik({
    mapPropsToValues(currentPassword, newPassword, confirmPassword) {
        return {
            currentPassword: currentPassword || '',
            newPassword: newPassword || '',
            confirmPassword: confirmPassword || ''
        }
    },

    validationSchema: Yup.object().shape({
        // email: Yup.string().email().required(),
        // username:Yup.string().required(),
        password: Yup.string().min(4).required()
    }),
    
    handleSubmit(values, {props, resetForm }) {
     
        setTimeout(() => {
            
            // Axios.post("https://rocky-falls-71050.herokuapp.com/login",values,{headers: {'content-Type':'application/json'}}).then((response)=>{
            //     console.log(response.data)
            //      if(response.status === 200){
            //         localStorage.setItem('token',response.data.token);
            //         Auth.login(()=>{
            //             props.history.push("/Dashboard")
            //         })
                    
            //      }
            // }).catch((e)=>{
            //     console.log(e)
            // })

            resetForm()
            // setSubmitting(false)
        }, 1000)

       
    }
}
)(ResetPassword)

export default ForgottenPassword;