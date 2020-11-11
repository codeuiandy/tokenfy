import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import './dashboard.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowDown from '../Assets/arrowDown.png'
import calendar from '../Assets/calendar.png'
import SearchImg from '../Assets/search.png'
import {Link} from 'react-router-dom'
// import CuponsTable from '../Tables/customTable'
export default function Users(props) {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    
    return (
        <div>
            <Layout pageName="Overview" subPageName="Users">
              
            <div style={{marginTop:"30PX"}} className="tableAction76">
                    <div style={{width:"243px"}} className="create-conpon-container">   
                        <div style={{margin:"0"}} className="cupon-input-box">
                            <div style={{width:"220px",height:"50px"}} className="inputbox-cupon">
                                <select style={{paddingLeft:"20px",height:"50px"}}>
                                <option value="">Sort</option>
                                <option value="">data</option>
                                <option value="">data</option>
                            </select>
                            </div>
                        </div>      
                    </div>
                    <button className="btn btn-primary">Export <span className="fa fa-download"></span></button>
                    <div style={{marginLeft:"auto"}} className="searchFiltert">
                    <div>
                        <input placeholder="Search keyword" type="text"/>
                        <img src={SearchImg} alt=""/>
                    </div>
                    
                </div>
            </div>
                <div className="Table-sec">
                <table id="dtBasicExample" class="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead className="mb-20">
                        <tr>
                            <th className="th-sm">USER
                            </th>
                            <th className="th-sm">EMAIL
                            </th>
                            <th className="th-sm">
                                ID
                            </th>
                            <th className="th-sm">
                                PHONE NUMBER
                            </th>
                            <th className="th-sm text-center">
                                LOCATION
                            </th>
                            <th className="th-sm text-center">
                                CLAIMS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...'123456'].map(()=>(
                                <tr>
                                    <td>
                                        Abu Emmanuel
                                    </td>
                                    <td>
                                        emmanuel.abuka@gmail.com
                                    </td>
                                    <td>
                                        TK10001
                                    </td>
                                    <td className="text-center">
                                        08140812969
                                    </td>
                                    <td className="text-center">
                                        Lagos
                                    </td>
                                    <td className="text-center">
                                        78
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                </div>
                           

            </Layout>
        </div>
    )
}


