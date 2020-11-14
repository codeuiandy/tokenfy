import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <React.Fragment>
            <div className="login-wrap">

                <div className="login-left-image">

                </div>

                <div className="login-details-input-wrap">

                    <div className="login-logo">
                        <div className="login-logo-icon"></div>
                        <div className="login-logo-icon-text"></div>
                    </div>

                    <form  className="login-form-base">

                        <div className="login-header">
                            <h1>Sign In</h1>
                            <h2>Input your details if you have an account here</h2>
                        </div>

                        <div className="login-input-wrap">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email"/>
                        </div>

                        <div className="login-input-wrap">
                            <label htmlFor="email">Password</label>
                            <input id="password" type="password"/>
                        </div>

                        <div className="forgot_password_link">
                            <span>Forgot Password?</span>
                        </div>

                        <div className="submit-login-details">
                            <button><Link to="/coupons"> Sign In</Link></button>
                        </div>

                        <div className="dont_have_account-container">
                            <span>Don’t have an account? </span>
                            <span><Link to="/create_account">Create Account</Link></span>
                        </div>

                    </form>

                </div>

            </div>
        </React.Fragment>
    )
}
