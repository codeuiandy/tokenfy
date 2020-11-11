import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';



const DashboardOverview = () => {
    const [isEmpty,setEmpty] = useState(false);
    
    return (
        <div>
            <Layout pageName="Overview">
                <section className="page-section">
                    <div className="row">
                        <div className="col-md-2">
                            <DatePicker />
                            <div className="custom-input-group-prepend">
                                <i className="fa fa-calendar"></i>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <DatePicker />
                            <div className="custom-input-group-prepend">
                                <i className="fa fa-calendar"></i>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <button className="btn btn-primary pull-right">Export <i className="fa fa-download"></i></button>
                        </div>
                    </div>
                </section>

                <section className="page-section">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <h5 className="bold-550 d-inline">Top Merchants</h5>
                                <Link className=" text-primary pull-right"> 
                                    <span to="#" className="mr-1 d-inline">View</span> 
                                    <i className="fa fa-angle-right"></i>
                                    <i className="fa fa-angle-right"></i>
                                    <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
               

           
        </Layout>
    </div>
    )
}
export default DashboardOverview;


