import React,{useState,useEffect} from 'react'
import {Layout} from '../../Components/Layout/layout'
import './cupon.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom'
import SearchImg from '../../Components/Assets/search.png'
import {httpGet, httpPatch, httpPostFormData,httpPost, httpDelete} from '../../Components/helpers/httpMethods'
import {hideLoader, showLoader} from '../../Components/helpers/loader'
import {NotificationManager} from 'react-notifications'
import CouponsTable from '../../Components/Tables/Coupons'
export default function CreateCupon(props) {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    useEffect(() => {
    
        GetUsers()
    }, [])

    const [users, setUsers] = useState([])

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
            <Layout pageName="Coupons">
                <div className="page-router-display">
                {/* <CuponsTable/> */}
                <div className="create_cupon-btn"> <Link to="/create_coupons"><button><span className="fa fa-plus"></span> Create Coupons</button></Link> </div>
                    <div  style={{marginBottom:"20px"}} className="page-roter-list">
                        
                        <div>
                            <div className="hsd">
                                <span
                                style={{width:"25px"}}
                                onClick={(e)=>setActivePage("Coupon_Properties")}
                                 className={`page-router-name 
                                ${activePage==="Coupon_Properties"?"page-router-name-active ":""}`}>
                                    All</span><div className="c-count-copon">200</div>
                            </div>

                            <div className="hsd">
                                <span
                                onClick={(e)=>{setActivePage("cash-back")}}
                                 className={`page-router-name 
                                ${activePage==="cash-back"?"page-router-name-active ":""}`}>
                                   Cash back</span> <div className="c-count-copon">200</div>
                            </div>

                            <div className="hsd">
                                <span
                                onClick={(e)=>{setActivePage("onle-deal")}}
                                 className={`page-router-name 
                                ${activePage==="onle-deal"?"page-router-name-active ":""}`}>
                                  Online deals</span><div className="c-count-copon">200</div>
                            </div>

                            <div className="hsd">
                                <span
                                onClick={(e)=>{setActivePage("in-store")}}
                                 className={`page-router-name 
                                ${activePage==="in-store"?"page-router-name-active ":""}`}>
                                   In store</span><div className="c-count-copon">200</div>
                            </div>


                        </div>
                     
                    </div>

                  

                    <div className="pg-dimacation"></div>

                </div>

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
                <div style={{marginLeft:"auto"}} className="searchFiltert">
                    <div>
                        <input placeholder="Search keyword" type="text"/>
                        <img src={SearchImg} alt=""/>
                    </div>
                    
                </div>
            </div> */}
                <div className="Table-sec">

                    <CouponsTable/>

                {/* <table id="dtBasicExample" class="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead className="mb-20">
                        <tr>
                            <th className="th-sm">MERCHANTS
                            </th>
                            <th className="th-sm">APPROVED BY
                            </th>
                            <th className="th-sm">
                                TYPE
                            </th>
                            <th className="th-sm text-center">
                                LIMITS
                            </th>
                            <th className="th-sm text-center">
                                CATEGORY
                            </th>
                            <th className="th-sm text-center">
                                EXPIRING
                            </th>
                            <th className="th-sm text-center">
                                STATUS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...'123456'].map(()=>(
                                <tr>
                                    <td>
                                        <p>RX Pharmacy</p>
                                    </td>
                                    <td>
                                        <p>Adekunle Akintade</p>
                                    </td>
                                    <td>
                                        <p>Cashback</p>
                                    </td>
                                    <td className="text-center">
                                        168
                                    </td>
                                    <td className="text-center">
                                        Health & Finance
                                    </td>
                                    <td className="text-center">
                                        20/10/2020
                                    </td>
                                    <td>
                                        <button className="restore-action-button mr-3">Active</button> 
                                        <Link to="/view_coupon"><span className="text-primary bold-550">...</span> </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table> */}
                </div>
                           
            </Layout>
        </div>
    )
}


