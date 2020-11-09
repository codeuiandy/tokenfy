import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
import './admin-tasks.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';

const AdminTasks = () => {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    
    return (
        <div>
            <Layout>
                <h3 className="bold-550">Create new task</h3>
                <section className="pr-3 mt-5rem">
                    <div className="row">
                        <div class="col-md-4">
                            <div className="fom-group">
                                <label className="bold-550">Assign to</label>
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
                                <label className="bold-550">Task <i className="fa fa-exclamation-triangle text-warning"></i></label>
                                <select className="form-control">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                </select>
                                <span className="fa fa-angle-down select-arrow"></span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label className="bold-550">Due Date *</label>
                               <DatePicker />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label className="bold-550">Email *</label>
                               <input type="email" className="form-control" />
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
                        <div className="col-md-8">
                            <div class="form-group">
                                <label className="bold-550">Link</label>
                                <input type="text" className="form-control" placeholder="Paste a link"/>
                            </div>
                        </div>
                    </div>
                </section>
                <button className="btn btn-success">Create</button>
            </Layout>
        </div>
    )
}
export default AdminTasks;


