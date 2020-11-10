import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import './cupon.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowDown from '../Assets/arrowDown.png'
import calendar from '../Assets/calendar.png'
import {Link} from 'react-router-dom'
// import CuponsTable from '../Tables/customTable'
export default function CreateCupon(props) {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    
    return (
        <div>
            <Layout NavRouter={props.location.pathname}>
                <div className="page-router-display">
                {/* <CuponsTable/> */}
                    <div className="page-roter-list">
                        <div>
                            <div className="hsd">
                                <span
                                onClick={(e)=>setActivePage("Coupon_Properties")}
                                 className={`page-router-name 
                                ${activePage==="Coupon_Properties"?"page-router-name-active":""}`}>
                                    Coupon Properties</span>
                            </div>

                            <div className="hsd">
                                <span
                                onClick={(e)=>{setActivePage("Images_and_videos")}}
                                 className={`page-router-name 
                                ${activePage==="Images_and_videos"?"page-router-name-active":""}`}>
                                    Images and videos</span>
                            </div>
                        </div>
                        <div className="create_cupon-btn"> <Link to="/create_cupons"><button>Create Cupons</button></Link> </div>
                    </div>

                    <div className="pg-dimacation"></div>

                </div>
                           

            </Layout>
        </div>
    )
}


