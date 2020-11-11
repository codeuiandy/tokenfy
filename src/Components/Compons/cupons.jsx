import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import './cupon.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowDown from '../Assets/arrowDown.png'
import calendar from '../Assets/calendar.png'
import {Link} from 'react-router-dom'
import SearchImg from '../Assets/search.png'
import download from '../Assets/download.png'
// import CuponsTable from '../Tables/customTable'
export default function CreateCupon(props) {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    
    return (
        <div>
            <Layout NavRouter={props.location.pathname}>
                <div className="page-router-display">
                {/* <CuponsTable/> */}
                <div className="create_cupon-btn"> <Link to="/create_cupons"><button>Create Cupons</button></Link> </div>
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


    <div style={{marginLeft:"auto"}} className="searchFiltert">
        <div>
            <input placeholder="Search keyword" type="text"/>
        <img src={SearchImg} alt=""/>
        </div>
        
    </div>
            </div>

                <div className="Table-sec"></div>
                           

            </Layout>
        </div>
    )
}


