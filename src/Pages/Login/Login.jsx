import React,{useState} from 'react'
import {LoginhttpPost} from '../../Components/helpers/httpMethods'
import {ValidateEmail} from '../../Components/helpers/emailAuth'
import {ValidateEmptyString} from '../../Components/helpers/emptyString'
import { hideLoader, showLoader } from '../../Components/helpers/loader'
import {setToken} from '../../Components/helpers/authService'
import { NotificationManager } from "react-notifications";
import {useRecoilState} from 'recoil'
import {UserCurrentState,UserToken,BrowserController} from '../../globalState/asyncCalls'
import {Link} from 'react-router-dom'
import './login.css'
export default function Login(props) {

	let [loginDetails, setLoginDetails] = useState({email:"",adminPassword:""})
	const [UserDetails, SetUserDetailsGlobal] = useRecoilState(UserCurrentState)
    const [UserGlobalToken, setUserToken] = useRecoilState(UserToken)
    
    const [AccountError, setAccountError] = useState({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        password: ""
    })

console.log(loginDetails.email)

	const LoginHandler=async(e)=>{
	e.preventDefault()
	let check = ValidateEmail(loginDetails.email);

	if(!check){
        setAccountError({...AccountError,email:"Invalid email format"})
		return false;
	}

	let validResult = ValidateEmptyString(loginDetails.password)
	if(!validResult){
        setAccountError({...AccountError,password:"Input password"})
        return false;
        
	}

		const data = loginDetails;
		showLoader()
    try {
		const res =	await LoginhttpPost("admin/login",data)
		if (res.status === 200 || res.status==201) {
				setToken(res.data.data.token)
				console.log(res.data.data)
				SetUserDetailsGlobal(res.data.data.user)
				setUserToken(res.data.data.token)
			hideLoader()
			console.log(">>>>Login user details",UserDetails)
		
			props.history.push("/dashboard-overview")
		}

		else{
			NotificationManager.error(
				"Invalid Details",
				"Opps!",
				3000
			);
		}
		
			
		} catch (error) {
			NotificationManager.error(
				"Invalid Details",
				"Opps!",
				3000
			);
			hideLoader()
		}
    }
    
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
                            <input onChange={e => setLoginDetails({...loginDetails,email:e.target.value}) } id="email" type="email"/>
                            {<span  className="create-account-error">
                            {AccountError.email}
                                    </span>}
                        </div>

                        <div className="login-input-wrap">
                            <label htmlFor="email">Password</label>
                            <input  onChange={e => setLoginDetails({...loginDetails,adminPassword:e.target.value})} id="password" type="password"/>
                            {<span className="create-account-error">
                            {AccountError.password}
                                    </span>}
                        </div>

                        <div className="forgot_password_link">
                            <span>Forgot Password?</span>
                        </div>

                        <div className="submit-login-details">
                            <button onClick={LoginHandler}>Sign In</button>
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
