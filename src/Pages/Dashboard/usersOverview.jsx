import React,{useState,useEffect} from 'react'
import {Layout} from '../../Components/Layout/layout';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import SearchImg from '../../Components/Assets/search.png';
import {httpGet, httpPatch, httpPostFormData,httpPost, httpDelete} from '../../Components/helpers/httpMethods'
import {hideLoader, showLoader} from '../../Components/helpers/loader'
import {NotificationManager} from 'react-notifications'
import MarchantsTable from '../../Components/Tables/MerchantsTable'

export default function ViewCupon(props) {
    const[activePage,setActivePage] = useState("Review_Category_All");
    const[startDate,setStartDate] = useState(new Date());
    const [Merchants, settMerchants] = useState([])

    useEffect(() => {
    
        getMerchant()
    }, [])

    const  getMerchant =async()=>{

        try {
          showLoader()
            const res = await httpGet(`admin/all_merchants`)
            if (res.status === 200) {
            console.log(res.data.data.data)
                settMerchants(res.data.data.data)
            }
            hideLoader()
        } catch (error) {
          hideLoader()
        }
    }

    return (
        <div>
            <Layout pageName="Overview" subPageName="Merchants">
            
            <div style={{marginTop:"30PX"}} className="tableAction76">
                    {/* <div style={{width:"243px"}} className="create-conpon-container">   
                        <div style={{margin:"0"}} className="cupon-input-box">
                            <div style={{width:"220px",height:"50px"}} className="inputbox-cupon">
                                <select style={{paddingLeft:"20px",height:"50px"}}>
                                <option value="">Sort</option>
                                <option value="">data</option>
                                <option value="">data</option>
                            </select>
                            </div>
                        </div>      
                    </div> */}
                    {/* <button className="btn btn-primary btn-primary-outline mr-3">Export <span className="fa fa-download"></span></button> */}
                    <Link to="/dashboard/add_merchants" className="btn btn-primary"><span className="fa fa-plus"></span> Add Merchant</Link>
                    <div style={{marginLeft:"auto"}} className="searchFiltert">
                    {/* <div>
                        <input placeholder="Search keyword" type="text"/>
                        <img src={SearchImg} alt=""/>
                    </div> */}
                    
                </div>
            </div>
                <div className="Table-sec">
                <MarchantsTable Merchants={Merchants}/>
                </div>
                        

            </Layout>
        </div>
    )
}


