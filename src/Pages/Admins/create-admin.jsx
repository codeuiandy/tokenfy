import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
import './admin-tasks.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';

const CreateAdmin = () => {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    
    return (
        <div>
            <Layout>
                <h3 className="bold-550">Add new admin</h3>
                <section className="pr-3 mt-5rem">
                    <div className="row">
                        <div class="col-md-4">
                            <div className="fom-group">
                                <label className="bold-550">Name</label>
                                <select className="form-control">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                </select>
                                <span className="fa fa-angle-down select-arrow"></span>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <label className="bold-550">Phone number <sup className="text-danger">*</sup></label>
                               <input type="tel" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label className="bold-550">Email <sup className="text-danger">*</sup></label>
                               <input type="email" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label className="bold-550">Default Password <sup className="text-danger">*</sup></label>
                               <input type="password" className="form-control" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pr-3">
                    <div className="row">
                        <div class="col-md-4">
                            <label className="bold-550">Attachment</label>
                            <div className="card">
                                <div className="upload-file-container">
                                    <p className="bold-550 text-center">Drag and drop a file here</p>
                                    <p>OR</p>
                                    <button className="btn btn-primary">Upload</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="fom-group">
                                <label className="bold-550">Roles <i className="fa fa-exclamation-triangle text-warning"></i></label>
                                <select className="form-control">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                </select>
                                <span className="fa fa-angle-down select-arrow"></span>
                            </div>
                            <div className="roles-list mt-20">
                                {
                                    [...'123'].map(()=>(
                                        <p className="mb-2">
                                            <i className="fa fa-times text-danger"></i>  
                                            <span className="text-primary ml-2">Review a user submitted coupon</span>
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <button className="btn btn-success">Create</button>
            </Layout>
        </div>
    )
}
export default CreateAdmin;


