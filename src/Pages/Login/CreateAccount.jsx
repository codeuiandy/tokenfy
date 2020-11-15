import React, { useState } from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import {httpGet, httpPatch, httpPostFormData,httpPost, httpDelete} from '../../Components/helpers/httpMethods'
import {hideLoader, showLoader} from '../../Components/helpers/loader'
import {NotificationManager} from 'react-notifications'
import {ValidateEmail} from '../../Components/helpers/emailAuth'
export default function CreateAccount(props) {
    console.log(props)
    const [createAccount, setCreateAccount] = useState({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        password: ""
    })

    const [AccountError, setAccountError] = useState({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        password: ""
    })

   const  handleError=()=>{
       if (createAccount.firstName === "" || 
       createAccount.firstName ===  
       null || createAccount.firstName === 
        undefined || createAccount.firstName.length < 2 ) {
            setAccountError({...AccountError,firstName:"filed can't be emepty"})
            return false
       }

       if (createAccount.lastName === "" || 
       createAccount.lastName ===  
       null || createAccount.lastName === 
        undefined ||createAccount.lastName.length < 2 ) {
            setAccountError({...AccountError,lastName:"filed can't be emepty"})
            return false
       }

       if (createAccount.phone === "" || 
       createAccount.phone ===  
       null || createAccount.phone === 
        undefined ||createAccount.phone.length < 2 ) {
            setAccountError({...AccountError,phone:"Invalid details"})
            return false
       }

       if (createAccount.password === "" || 
       createAccount.password ===  
       null || createAccount.password === 
        undefined ||createAccount.password.length <= 5 ) {
            setAccountError({...AccountError,password:"Opps, Password must be greater than 5 character"})
            return false
       }

      let checkemail= ValidateEmail(createAccount.email)
       if (checkemail === false ) {
        setAccountError({...AccountError,email:"Invalid email format"})
        return false
       }


   }
   

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let checkError = handleError()

        if (checkError === false) {
            return
        }

        else{
                
           e.preventDefault();
           try {
             showLoader()
              let res = await httpPost(`admin/register/`,createAccount)
              console.log("res status",res) 
              if (res.status === 201 || res.status === 200) {
                      hideLoader()
             
         
               NotificationManager.success(
                  "Account created successfully, please input your login details.",
                 "Yepp",
                 4000
             );

             props.history.push('/')
            
              }
              
             
           
               hideLoader()
         } catch (error) {
             console.log(error.response)
             NotificationManager.error(
                 error,
                "Opps",
                3000
            );
             hideLoader()
       
         }
        }
       
         }
  

    
    
    const  handleChange=(e)=>{
        setAccountError({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        password: ""})
            setCreateAccount({...createAccount, [e.target.name]: e.target.value })
            console.log(createAccount)
  
       }

    return (
        <React.Fragment>
            <div className="login-wrap">

                <div className="login-details-input-wrap create-account-details">

                    <div className="login-logo">
                        <div className="login-logo-icon"></div>
                        <div className="login-logo-icon-text"></div>
                    </div>

                    <form  className="login-form-base">

                        <div className="login-header">
                            <h1>Create Account</h1>
                            <h2>Input your details if you do not have an account here</h2>
                           
                        </div>

                        <div className="login-input-wrap-with-two-inpu">
                                <div className="two-inputs-login">
                                <label htmlFor="firstName">First Name</label>
                                    <input name="firstName" type="text" onChange={handleChange} />

                                   { <span className="create-account-error ">
                                    {AccountError.firstName}
                                    </span>}

                                </div>

                                <div className="two-inputs-login">
                                <label htmlFor="lastName">Last Name</label>
                                <input name="lastName" type="text"  onChange={handleChange} />
                                    { <span className="create-account-error ">
                                    {AccountError.lastName}
                                    </span>}
                                </div>
                        </div>

                        <div className="login-input-wrap-with-two-inpu">
                                <div className="two-inputs-login">
                                <label htmlFor="email">Email</label>
                                <input name="email" type="email"  onChange={handleChange} />
                                    { <span className="create-account-error ">
                                    {AccountError.email}
                                    </span>}
                                </div>

                                <div className="two-inputs-login">
                                <label htmlFor="phone">Phone Number</label>
                                <input name="phone" type="number"  onChange={handleChange} />
                                    { <span className="create-account-error ">
                                    {AccountError.phone}
                                    </span>}
                                </div>
                        </div>

                        <div className="login-input-wrap">
                            <label >Password</label>
                            <input onChange={handleChange}  name="password" type="password"/>
                            { <span className="create-account-error ">
                                    {AccountError.password}
                                    </span>}
                        </div>

                        <div className="submit-login-details">
                            <button onClick={handleSubmit}> Create Account</button>
                        </div>

                        <div className="dont_have_account-container">
                            <span>Already have an account? </span>
                            <span><Link to="/">Sign In.</Link></span>
                        </div>

                    </form>

                </div>

                
                <div className="login-left-image">

                </div>

            </div>
        </React.Fragment>
    )
}
