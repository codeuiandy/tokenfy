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
import UsersTable from '../../Components/Tables/UsersTable'

export default function Users(props) {
    useEffect(() => {
    
        GetUsers()
    }, [])

    const [users, setUsers] = useState([])

    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())

    const  GetUsers =async()=>{

        try {
          showLoader()
            const res = await httpGet(`admin/all_users`)
            if (res.status === 200) {
            
                setUsers(res.data.data.data)
                console.log(res.data.data)
            }
            console.log(res.data.data.data)
            hideLoader()
        } catch (error) {
          hideLoader()
        }
    }
    
    
    return (
        <div>
            <Layout pageName="Overview" subPageName="Users">

            {/* <div style={{marginTop:"30PX"}} className="tableAction76">
               
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
            </div> */}
                <div className="Table-sec">
                <UsersTable users={users}/>
                </div>
                           

            </Layout>
        </div>
    )
}


