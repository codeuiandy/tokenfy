import React,{useState,useEffect} from 'react'
import {Layout} from '../../Components/Layout/layout';
import './dashboard.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchImg from '../../Components/Assets/search.png'
import {Link} from 'react-router-dom'
import {httpGet, httpPatch, httpPostFormData,httpPost, httpDelete} from '../../Components/helpers/httpMethods'
import {hideLoader, showLoader} from '../../Components/helpers/loader'
import {NotificationManager} from 'react-notifications'

export default function Users(props) {
    useEffect(() => {
    
        getCategories()
    }, [])

    const [users, setUsers] = useState([])

    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())

    const  getCategories =async()=>{

        try {
          showLoader()
            const res = await httpGet(`admin/user/all/`)
            if (res.status === 200) {
            
                setUsers(res.data.data.categories)
                console.log(res.data.data.categories)
            }
            console.log(res)
            hideLoader()
        } catch (error) {
          hideLoader()
        }
    }
    
    
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
                                        <Link to="/user-details/" className="table-link">Abu Emmanuel</Link>
                                    </td>
                                    <td>
                                        <Link to="/user-details/" className="table-link"> emmanuel.abuka@gmail.com</Link>
                                    </td>
                                    <td>
                                        <Link to="/user-details/" className="table-link">TK10001</Link>
                                    </td>
                                    <td className="text-center">
                                        <Link to="/user-details/" className="table-link">08140812969</Link>
                                    </td>
                                    <td className="text-center">
                                        <Link to="/user-details/" className="table-link">Lagos</Link>
                                    </td>
                                    <td className="text-center">
                                        <Link to="/user-details/" className="table-link">78</Link>
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


