import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
import './admin-tasks.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import Avatar from '../../Components/Assets/user.png';

const AdminList = () => {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    
    return (
        <div>
            <Layout>
                <section className="page-section">
                    <div className="row">
                        <div className="col-md-8">
                            <h4 className="bold-550">Admin Information</h4>
                        </div>
                        <div className="col-md-4">
                            <Link to="/create-admin" className="btn-primary pull-right"><i className="fa fa-plus"></i> New Admin</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="input-group mt-20">
                                <div class="input-group-prepend">
                                    <span class="input-group-text fa fa-search search-icon" ></span>
                                </div>
                                <input type="text" className="search-engine form-control" placeholder="Search Admin"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page-section">
                <table id="dtBasicExample" class="table table-striped table-bordered" cellspacing="0" width="100%">
  <thead className="mb-20">
    <tr>
      <th className="th-sm">Name
      </th>
      <th className="th-sm">Email
      </th>
      <th className="th-sm">Role
      </th>
      <th className="th-sm text-center">
      </th>
      <th className="th-sm text-center">
      </th>
      <th className="th-sm text-center">
      </th>
    </tr>
  </thead>
  <tbody>
    {
        [...'123456'].map(()=>(
            <tr>
                <td>
                    <div className="avatar">
                        <img src={Avatar}/>
                    </div>
                    <div className="admin-info">
                        <p class="bold-550">Emmanuel Abu</p>
                        <p className="text-primary">Head Admin</p>
                    </div>
                </td>
                <td>
                    <p className="bold-550">emmanuel@gmail.com</p>
                </td>
                <td>
                    <p className="bold-550">Can perform all duties</p>
                </td>
                <td className="text-center">
                    <button className="disable-action-button">Disable</button>
                </td>
                <td className="text-center">
                    <button className="disable-action-button">Delete</button>
                </td>
                <td className="text-center">
                    <Link><i className="fa fa-arrow-right text-primary"></i></Link>
                </td>
            </tr>
        ))
    }
  </tbody>
</table>
                </section>
            </Layout>
        </div>
    )
}
export default AdminList;


