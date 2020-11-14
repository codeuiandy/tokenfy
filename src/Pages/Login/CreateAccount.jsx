import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
export default function Login() {
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
                                <label htmlFor="email">First Name</label>
                                    <input />
                                </div>

                                <div className="two-inputs-login">
                                <label htmlFor="email">Last Name</label>
                                    <input />
                                </div>
                        </div>

                        <div className="login-input-wrap-with-two-inpu">
                                <div className="two-inputs-login">
                                <label htmlFor="email">Email</label>
                                    <input />
                                </div>

                                <div className="two-inputs-login">
                                <label htmlFor="email">Phone Number</label>
                                    <input />
                                </div>
                        </div>

                        <div className="login-input-wrap">
                            <label htmlFor="email">Password</label>
                            <input id="password" type="password"/>
                        </div>

                        <div className="submit-login-details">
                            <button> Create Account</button>
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
