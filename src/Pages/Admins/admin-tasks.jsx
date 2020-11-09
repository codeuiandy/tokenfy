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
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="bold-550">Hello Moshood,</h4>
                        <p className="text-muted">Keep up the pace to accomplish your task on time</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <button className="btn-primary"><i className="fa fa-plus"></i> Create Task</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <h3 className="bold-550">Tasks <span className="small text-warning">4 pending tasks</span></h3> 
                            <div className="admin-task-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6 className="bold-550">Review Coupon</h6>
                                        <p className="text-primary">View Details <i className="fa fa-angle-down"></i></p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="text-muted text-right">Assigned by Adekunle Timilehin</p>
                                        <p className="text-warning text-right">Due by 20/11/2020</p>
                                    </div>
                                    <div className="col-md-2 pt-15">
                                        <Link className="btn-primary" to="#">Go</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h6 className="bold-550">Activity Feed</h6>
                       {
                           [...'123'].map(value=>(
                            <div className="mt-20">
                                <div class="row">
                                    <div class="col-md-2">
                                        <div className="avatar-container">
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h6 className="bold-550">You</h6>
                                        <p className="text-muted">Reviewed a customer submitted coupon</p>
                                    </div>
                                    <div class="col-md-2">
                                        <p>3 min</p>
                                    </div>
                                </div>
                            </div>
                           ))
                       }
                       <Link to="#" className="text-primary text-small">View all activity <i className="fa fa-arrow-right"></i></Link>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
export default AdminTasks;


