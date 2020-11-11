import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
import './admin-tasks.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';

const AdminList = () => {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    
    return (
        <div>
            <Layout>
                <section>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Admins Information</h3>
                        </div>
                    </div>
                </section>
                <button className="btn btn-success">Create</button>
            </Layout>
        </div>
    )
}
export default AdminList;


