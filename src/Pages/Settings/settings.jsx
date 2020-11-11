import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout';
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom';
import EditPNG from '../../Components/Assets/icons/edit_square.png';
import PasswordPNG from '../../Components/Assets/icons/password.png';
import Avatar from '../../Components/Assets/user.png';

const AccountSettings = () => {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date());
    const [changePassword,setChangePwd] = useState(false)
    
    return (
        <div>
            <Layout pageName="Settings">
                <section className="pr-3 mt-5rem">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="mb-3">
                                <div className="icon-image-container">
                                    <img src={EditPNG} />
                                </div> 
                                <div className="icon-image-desc" onClick={()=>setChangePwd(false)}>
                                    <h6 className="bold-550">Edit Profile</h6>
                                </div>
                            </div>
                            <div className="mb-7">
                                <div className="icon-image-container">
                                    <img src={PasswordPNG} />
                                </div> 
                                <div className="icon-image-desc" onClick={()=>setChangePwd(true)}>
                                    <h6 className="bold-550 text-muted">Change Password</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 setting-content-container">
                            {
                                changePassword ? (
                                    <div className="change-password-container">
                                        <h3 className="bold-550">Change Password</h3>
                                        <div className="profile-image-container">
                                            <img 
                                                src={Avatar}
                                            />
                                        </div>
                                        <form>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="bold-550">Old Password <sup>*</sup></label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="bold-550">New Password <sup>*</sup></label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="bold-550">Confirm Password <sup>*</sup></label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                                <button className="btn btn-success mb-5">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                ) : (
                                    <div className="edit-profile-container">
                                        <h3 className="bold-550">Edit Profile</h3>
                                        <div className="profile-image-container">
                                            <img 
                                                src={Avatar}
                                            />
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="bold-550">First Name <sup>*</sup></label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="bold-550">Last Name <sup>*</sup></label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="bold-550">Email <sup>*</sup></label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="bold-550">Phone Number <sup>*</sup></label>
                                                    <input type="tel" className="form-control" />
                                                </div>
                                                <button className="btn btn-success mb-5">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                )
                            }



                            
                            
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
export default AccountSettings;


